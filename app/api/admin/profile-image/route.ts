import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch profile image
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the first resume
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json({ profileImage: null });
    }
    
    return NextResponse.json({ profileImage: resume.profileImage });
  } catch (error) {
    console.error('GET profile image error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profile image' },
      { status: 500 }
    );
  }
}

// POST: Update profile image
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const prisma = getPrismaClient();
    const { profileImage } = await request.json();
    
    // Get the first resume
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Update the resume with the new profile image
    await prisma.resume.update({
      where: { id: resume.id },
      data: { profileImage }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST profile image error:', error);
    return NextResponse.json(
      { error: 'Failed to update profile image' },
      { status: 500 }
    );
  }
} 