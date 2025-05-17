import { NextRequest, NextResponse } from "next/server";

// This endpoint provides a static response to verify API routes are working
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    vercel: {
      url: process.env.VERCEL_URL || "not set",
      region: process.env.VERCEL_REGION || "not set"
    },
    nextauth: {
      url_configured: !!process.env.NEXTAUTH_URL,
      secret_configured: !!process.env.NEXTAUTH_SECRET
    },
    database: {
      url_configured: !!process.env.DATABASE_URL
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