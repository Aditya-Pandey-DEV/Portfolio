import { NextRequest, NextResponse } from "next/server";
import { prisma, fetchWithCache } from "@/app/lib/db";

// Set appropriate cache headers for public data
const cacheConfig = {
  headers: {
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120', // 1 minute cache, 2 minutes stale
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  }
};

// GET - Get resume data with efficient querying and caching
export async function GET(request: NextRequest) {
  try {
    // Parse the URL to extract query parameters
    const url = new URL(request.url);
    const fields = url.searchParams.get('fields');
    
    // Use efficient field selection if specified
    const fieldSelection = fields ? fields.split(',') : null;
    
    // Generate a cache key based on the requested fields
    const cacheKey = `resume:${fieldSelection ? fieldSelection.join(',') : 'full'}`;
    
    // Use fetchWithCache to retrieve data with caching
    const resume = await fetchWithCache(
      cacheKey,
      async () => {
        // Initialize the query with selected fields or a minimal default set
        let query: any = {};
        
        // Conditionally include relations based on requested fields
        if (!fieldSelection || fieldSelection.includes('skills')) {
          query.skills = true;
        }
        if (!fieldSelection || fieldSelection.includes('experiences')) {
          query.experiences = true;
        }
        if (!fieldSelection || fieldSelection.includes('education')) {
          query.education = true;
        }
        if (!fieldSelection || fieldSelection.includes('projects')) {
          query.projects = true;
        }
        if (!fieldSelection || fieldSelection.includes('certifications')) {
          query.certifications = true;
        }
        if (!fieldSelection || fieldSelection.includes('socialLinks')) {
          query.socialLinks = true;
        }
        if (!fieldSelection || fieldSelection.includes('seo')) {
          query.seo = true;
        }
        if (!fieldSelection || fieldSelection.includes('focusAreas')) {
          query.focusAreas = true;
        }
        
        try {
          // Execute the optimized query
          return await prisma.resume.findFirst({
            include: query,
          });
        } catch (error) {
          console.error("Database error fetching resume:", error);
          // Return minimal resume data on error
          return prisma.resume.findFirst({
            select: {
              id: true,
              name: true,
              title: true,
              summary: true,
              email: true,
              phone: true,
              location: true,
            }
          });
        }
      },
      // Use a longer cache duration for this frequently accessed data
      5 * 60 * 1000 // 5 minutes
    );
    
    if (!resume) {
      console.log("No resume found, returning empty data");
      // Return empty but valid response structure rather than 404
      return NextResponse.json({
        id: "default",
        name: "Portfolio Owner",
        title: "Developer",
        summary: "Resume data is being set up",
        email: "",
        phone: "",
        location: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, cacheConfig);
    }
    
    return NextResponse.json(resume, cacheConfig);
  } catch (error) {
    console.error("Error fetching resume:", error);
    // Return minimal valid data on error
    return NextResponse.json({
      id: "error",
      name: "Portfolio Owner",
      title: "Developer",
      summary: "Resume data is temporarily unavailable",
      email: "",
      phone: "",
      location: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      ...cacheConfig,
      headers: {
        ...cacheConfig.headers,
        'X-Error': 'Failed to fetch resume data'
      }
    });
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 