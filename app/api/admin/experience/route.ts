import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch all experiences for the resume
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
    
    const experiences = await prisma.experience.findMany({
      where: { resumeId: resume.id },
      orderBy: { startDate: 'desc' }
    });
    
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('GET experiences error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experiences' },
      { status: 500 }
    );
  }
}

// POST: Update or create experiences
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const prisma = getPrismaClient();
    const { experiences } = await request.json();
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Delete all existing experiences for this resume
    await prisma.experience.deleteMany({
      where: { resumeId: resume.id }
    });
    
    // Create all experiences from the request
    if (experiences && experiences.length > 0) {
      await prisma.experience.createMany({
        data: experiences.map((exp: any) => ({
          company: exp.company,
          position: exp.position,
          startDate: new Date(exp.startDate),
          endDate: exp.endDate ? new Date(exp.endDate) : null,
          description: exp.description,
          resumeId: resume.id
        }))
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST experiences error:', error);
    return NextResponse.json(
      { error: 'Failed to update experiences' },
      { status: 500 }
    );
  }
} 