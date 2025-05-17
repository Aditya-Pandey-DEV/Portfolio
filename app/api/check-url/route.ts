import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get current request information
  const host = request.headers.get('host') || 'unknown';
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  const currentUrl = `${protocol}://${host}`;
  
  // Get environment variables
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  const nextAuthUrl = process.env.NEXTAUTH_URL || null;
  
  // Calculate if there are mismatches
  const vercelMismatch = vercelUrl && currentUrl !== vercelUrl;
  const nextAuthMismatch = nextAuthUrl && currentUrl !== nextAuthUrl;
  
  // Determine the correct URL for this deployment
  const detectedUrl = currentUrl;
  const recommendedNextAuthUrl = detectedUrl;
  
  return NextResponse.json({
    current: {
      host,
      protocol,
      url: currentUrl
    },
    environment: {
      vercelUrl,
      nextAuthUrl,
      nodeEnv: process.env.NODE_ENV
    },
    mismatches: {
      vercelMismatch,
      nextAuthMismatch
    },
    recommendation: {
      detectedUrl,
      recommendedNextAuthUrl,
      updateRequired: nextAuthMismatch
    }
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Cache-Control': 'no-store'
    }
  });
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 