import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

// Validate SEO data
function validateSEOData(data: any) {
  const errors: string[] = [];
  
  if (!data.title || data.title.length > 60) {
    errors.push('Title is required and must be 60 characters or less');
  }
  
  if (!data.description || data.description.length > 160) {
    errors.push('Description is required and must be 160 characters or less');
  }
  
  if (!data.keywords) {
    errors.push('Keywords are required');
  }
  
  if (data.canonicalUrl && !data.canonicalUrl.startsWith('http')) {
    errors.push('Canonical URL must be a valid URL starting with http');
  }
  
  return errors;
}

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
    
    // Validate SEO data
    const validationErrors = validateSEOData(seoData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
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
    
    let result;
    if (existingSeo) {
      // Update existing SEO data
      result = await prisma.sEO.update({
        where: { id: existingSeo.id },
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
        }
      });
    } else {
      // Create new SEO data
      result = await prisma.sEO.create({
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
    
    // Revalidate the page to update metadata
    try {
      await fetch('/api/revalidate?path=/');
    } catch (error) {
      console.error('Revalidation error:', error);
    }
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('POST SEO error:', error);
    return NextResponse.json(
      { error: 'Failed to update SEO settings' },
      { status: 500 }
    );
  }
} 