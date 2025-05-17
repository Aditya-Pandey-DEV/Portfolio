import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

// GET: Fetch SEO settings
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    }
    
    // Get SEO data
    const seoData = await prisma.sEO.findUnique({
      where: { resumeId: resume.id }
    });
    
    if (!seoData) {
      // Return default values if no SEO data exists
      return NextResponse.json({
        title: '',
        description: '',
        keywords: '',
        ogTitle: '',
        ogDescription: '',
        ogImage: '',
        twitterTitle: '',
        twitterDescription: '',
        twitterImage: '',
        canonicalUrl: '',
      });
    }
    
    return NextResponse.json(seoData);
  } catch (error) {
    console.error('GET SEO error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SEO settings' },
      { status: 500 }
    );
  }
}

// POST: Update SEO settings
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const seoData = await request.json();
    
    // Get the first resume (assuming there's only one in this simple portfolio)
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Check if SEO data already exists
    const existingSeo = await prisma.sEO.findUnique({
      where: { resumeId: resume.id }
    });
    
    if (existingSeo) {
      // Update existing SEO data
      await prisma.sEO.update({
        where: { id: existingSeo.id },
        data: {
          title: seoData.title,
          description: seoData.description,
          keywords: seoData.keywords,
          ogTitle: seoData.ogTitle,
          ogDescription: seoData.ogDescription,
          ogImage: seoData.ogImage,
          twitterTitle: seoData.twitterTitle,
          twitterDescription: seoData.twitterDescription,
          twitterImage: seoData.twitterImage,
          canonicalUrl: seoData.canonicalUrl,
        }
      });
    } else {
      // Create new SEO data
      await prisma.sEO.create({
        data: {
          title: seoData.title,
          description: seoData.description,
          keywords: seoData.keywords,
          ogTitle: seoData.ogTitle || null,
          ogDescription: seoData.ogDescription || null,
          ogImage: seoData.ogImage || null,
          twitterTitle: seoData.twitterTitle || null,
          twitterDescription: seoData.twitterDescription || null,
          twitterImage: seoData.twitterImage || null,
          canonicalUrl: seoData.canonicalUrl || null,
          resumeId: resume.id
        }
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST SEO error:', error);
    return NextResponse.json(
      { error: 'Failed to update SEO settings' },
      { status: 500 }
    );
  }
} 