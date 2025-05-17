import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch personal information from the resume
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json({
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        about: '',
      });
    }
    
    return NextResponse.json({
      name: resume.name,
      title: resume.title,
      email: resume.email,
      phone: resume.phone,
      location: resume.location,
      about: resume.about,
    });
  } catch (error) {
    console.error('GET personal info error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch personal information' },
      { status: 500 }
    );
  }
}

// POST: Update personal information
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const prisma = getPrismaClient();
    const { name, title, email, phone, location, about } = await request.json();
    
    // Get the first resume
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Update the resume with new personal information
    await prisma.resume.update({
      where: { id: resume.id },
      data: {
        name,
        title,
        email,
        phone,
        location,
        about,
      },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST personal info error:', error);
    return NextResponse.json(
      { error: 'Failed to update personal information' },
      { status: 500 }
    );
  }
} 