import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import prisma from '@/app/lib/db';
import { hash } from 'bcrypt';

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if we already have a user
    const existingUser = await prisma.user.findFirst();
    if (existingUser) {
      return NextResponse.json(
        { error: 'System already initialized' },
        { status: 400 }
      );
    }

    // Create initial admin user
    const hashedPassword = await hash('Admin@123', 10);
    const user = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
        name: 'Admin',
      },
    });

    return NextResponse.json({
      message: 'System initialized successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Error initializing system:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 