import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import prisma from '@/app/lib/db';
import { hash } from 'bcrypt';
import { connectToDatabase } from '@/app/lib/db';
import { headers } from 'next/headers';

// GET: Fetch current admin user (without password)
export async function GET() {
  try {
    const headersList = await headers();
    const referer = headersList.get('referer') || '';
    const isFromGod = referer.includes('/god');

    // If coming from /god path, show credentials without session check
    if (isFromGod) {
      const user = await prisma.user.findFirst({
        select: {
          email: true,
          password: true,
        },
      });

      // Always return credentials for /god path
      return NextResponse.json({
        email: user?.email || 'admin@example.com',
        password: user?.password || 'Admin@123'
      });
    }

    // For other paths, require authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the first user from the database
    const user = await prisma.user.findFirst({
      select: {
        email: true,
        password: true,
      },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'No user found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    console.error('Error fetching credentials:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Update admin credentials
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { name, email, currentPassword, newPassword } = await request.json();
    
    // Fetch the current user
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Prepare the update data
    const updateData: any = {};
    
    if (name) {
      updateData.name = name;
    }
    
    if (email) {
      // Check if the new email is already in use by another user
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      
      if (existingUser && existingUser.id !== user.id) {
        return NextResponse.json(
          { error: 'Email is already in use' },
          { status: 400 }
        );
      }
      
      updateData.email = email;
    }
    
    // If changing password, verify current password first
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required to set a new password' },
          { status: 400 }
        );
      }
      
      // Verify current password
      const bcrypt = require('bcrypt');
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
      
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }
      
      // Hash the new password
      updateData.password = await hash(newPassword, 10);
    }
    
    // Update the user
    await prisma.user.update({
      where: { id: user.id },
      data: updateData,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST update credentials error:', error);
    return NextResponse.json(
      { error: 'Failed to update credentials' },
      { status: 500 }
    );
  }
}

export async function getCredentials() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Get the current admin credentials
    const credentials = await db.collection('credentials').findOne({ type: 'admin' });

    if (!credentials) {
      // Return default credentials if none are set
      return NextResponse.json({
        email: 'admin@example.com',
        password: 'Admin@123'
      });
    }

    return NextResponse.json({
      email: credentials.email,
      password: credentials.password
    });
  } catch (error) {
    console.error('Error fetching credentials:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 