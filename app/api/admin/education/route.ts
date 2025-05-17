import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch all education entries for the resume
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json([]);
    }
    
    const education = await prisma.education.findMany({
      where: { resumeId: resume.id },
      orderBy: { startDate: 'desc' }
    });
    
    return NextResponse.json(education);
  } catch (error) {
    console.error('GET education error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch education' },
      { status: 500 }
    );
  }
}

// POST: Update or create education entries
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const prisma = getPrismaClient();
    const { education } = await request.json();
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Delete all existing education entries for this resume
    await prisma.education.deleteMany({
      where: { resumeId: resume.id }
    });
    
    // Create all education entries from the request
    if (education && education.length > 0) {
      await prisma.education.createMany({
        data: education.map((edu: any) => ({
          institution: edu.institution,
          degree: edu.degree,
          field: edu.field,
          startDate: new Date(edu.startDate),
          endDate: edu.endDate ? new Date(edu.endDate) : null,
          gpa: edu.gpa || null,
          resumeId: resume.id
        }))
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST education error:', error);
    return NextResponse.json(
      { error: 'Failed to update education' },
      { status: 500 }
    );
  }
} 