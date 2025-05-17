import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { connectToDatabase } from '@/app/lib/db';
import { checkStorageAccess } from '@/app/lib/storage';
import { revalidatePath } from 'next/cache';

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Initialize database collections
    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json(
        { error: 'Failed to connect to database' },
        { status: 500 }
      );
    }

    // Create required collections if they don't exist
    const collections = [
      'resumes',
      'seo',
      'projects',
      'skills',
      'experiences',
      'education',
      'certifications',
      'socials'
    ];

    for (const collection of collections) {
      try {
        await db.createCollection(collection);
        console.log(`Created collection: ${collection}`);
      } catch (error) {
        // Collection might already exist, which is fine
        console.log(`Collection ${collection} might already exist`);
      }
    }

    // Create indexes for better query performance
    try {
      await db.collection('resumes').createIndex({ userId: 1 });
      await db.collection('projects').createIndex({ userId: 1 });
      await db.collection('skills').createIndex({ userId: 1 });
      await db.collection('experiences').createIndex({ userId: 1 });
      await db.collection('education').createIndex({ userId: 1 });
      await db.collection('certifications').createIndex({ userId: 1 });
      await db.collection('socials').createIndex({ userId: 1 });
    } catch (error) {
      console.error('Error creating indexes:', error);
    }

    // Check storage access
    const storageAccess = await checkStorageAccess();
    if (!storageAccess) {
      return NextResponse.json(
        { error: 'Storage access failed' },
        { status: 500 }
      );
    }

    // Revalidate paths to ensure fresh data
    revalidatePath('/');
    revalidatePath('/admin/dashboard');
    revalidatePath('/setup');

    return NextResponse.json({
      message: 'System initialized successfully',
      details: {
        collections: collections,
        indexes: 'Created',
        storage: 'Accessible'
      }
    });
  } catch (error) {
    console.error('Error initializing system:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 