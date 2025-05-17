import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { connectToDatabase } from '@/app/lib/db';
import { checkStorageAccess } from '@/app/lib/storage';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check database connection
    let databaseStatus = { status: 'unknown', message: '' };
    try {
      const db = await connectToDatabase();
      if (db) {
        databaseStatus = { status: 'connected', message: 'Database connection successful' };
      }
    } catch (error) {
      databaseStatus = { 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Failed to connect to database' 
      };
    }

    // Check authentication status
    const authStatus = {
      status: session ? 'authenticated' : 'unauthenticated',
      message: session ? 'User is authenticated' : 'No active session'
    };

    // Check storage access
    let storageStatus = { status: 'unknown', message: '' };
    try {
      const storageAccess = await checkStorageAccess();
      storageStatus = {
        status: storageAccess ? 'accessible' : 'inaccessible',
        message: storageAccess ? 'Storage is accessible' : 'Storage access failed'
      };
    } catch (error) {
      storageStatus = {
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to check storage access'
      };
    }

    // Define setup steps
    const steps = [
      {
        name: 'Database Connection',
        status: databaseStatus.status === 'connected' ? 'completed' : 'failed',
        message: databaseStatus.message
      },
      {
        name: 'Authentication',
        status: authStatus.status === 'authenticated' ? 'completed' : 'failed',
        message: authStatus.message
      },
      {
        name: 'Storage Access',
        status: storageStatus.status === 'accessible' ? 'completed' : 'failed',
        message: storageStatus.message
      }
    ];

    return NextResponse.json({
      database: databaseStatus,
      auth: authStatus,
      storage: storageStatus,
      steps
    });
  } catch (error) {
    console.error('Error checking system status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 