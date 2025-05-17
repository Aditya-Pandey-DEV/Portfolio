import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { getPrismaClient } from '@/app/lib/prisma';

// GET: Fetch all social links
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
    
    const socialLinks = await prisma.socialLink.findMany({
      where: { resumeId: resume.id }
    });
    
    return NextResponse.json(socialLinks);
  } catch (error) {
    console.error('GET social links error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social links' },
      { status: 500 }
    );
  }
}

// POST: Update or create social links
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const prisma = getPrismaClient();
    const { socialLinks } = await request.json();
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Delete all existing social links for this resume
    await prisma.socialLink.deleteMany({
      where: { resumeId: resume.id }
    });
    
    // Create all social links from the request
    if (socialLinks && socialLinks.length > 0) {
      await prisma.socialLink.createMany({
        data: socialLinks.map((link: any) => ({
          platform: link.platform,
          url: link.url,
          icon: link.icon,
          resumeId: resume.id
        }))
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST social links error:', error);
    return NextResponse.json(
      { error: 'Failed to update social links' },
      { status: 500 }
    );
  }
} 