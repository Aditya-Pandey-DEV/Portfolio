import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

// GET: Fetch all skills for the resume
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
    
    const skills = await prisma.skill.findMany({
      where: { resumeId: resume.id },
      orderBy: { name: 'asc' }
    });
    
    return NextResponse.json(skills);
  } catch (error) {
    console.error('GET skills error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}

// POST: Update or create skills
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { skills } = await request.json();
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Delete all existing skills for this resume
    await prisma.skill.deleteMany({
      where: { resumeId: resume.id }
    });
    
    // Create all skills from the request
    if (skills && skills.length > 0) {
      await prisma.skill.createMany({
        data: skills.map((skill: any) => ({
          name: skill.name,
          category: skill.category,
          resumeId: resume.id
        }))
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST skills error:', error);
    return NextResponse.json(
      { error: 'Failed to update skills' },
      { status: 500 }
    );
  }
} 