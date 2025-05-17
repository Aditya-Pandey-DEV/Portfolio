import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch all certifications for the resume
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    try {
      const prisma = getPrismaClient();
      
      // Get the first resume (assuming there's only one in this simple portfolio)
      const resume = await prisma.resume.findFirst();
      
      if (!resume) {
        console.log('No resume found, returning empty certifications array');
        return NextResponse.json([]);
      }
      
      const certifications = await prisma.certification.findMany({
        where: { resumeId: resume.id },
        orderBy: { date: 'desc' }
      });
      
      return NextResponse.json(certifications);
    } catch (dbError) {
      console.error('Database error in GET certifications:', dbError);
      // Return empty array instead of error for better UX
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error('GET certifications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch certifications' },
      { status: 500 }
    );
  }
}

// POST: Update or create certifications
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    try {
      const prisma = getPrismaClient();
      const { certifications } = await request.json();
      
      // Get the first resume (assuming there's only one in this simple portfolio)
      const resume = await prisma.resume.findFirst();
      
      if (!resume) {
        return NextResponse.json(
          { error: 'No resume found' },
          { status: 404 }
        );
      }
      
      // Delete all existing certifications for this resume
      await prisma.certification.deleteMany({
        where: { resumeId: resume.id }
      });
      
      // Create all certifications from the request
      if (certifications && certifications.length > 0) {
        await prisma.certification.createMany({
          data: certifications.map((cert: any) => ({
            name: cert.name,
            issuer: cert.issuer,
            date: new Date(cert.date),
            image: cert.image || null,
            resumeId: resume.id
          }))
        });
      }
      
      return NextResponse.json({ success: true });
    } catch (dbError) {
      console.error('Database error in POST certifications:', dbError);
      return NextResponse.json(
        { error: 'Database operation failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('POST certifications error:', error);
    return NextResponse.json(
      { error: 'Failed to update certifications' },
      { status: 500 }
    );
  }
} 