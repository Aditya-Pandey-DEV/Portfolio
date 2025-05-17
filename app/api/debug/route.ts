import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// This is a diagnostic endpoint to check environment variables and database connection
export async function GET() {
  try {
    // Check environment variables (masking sensitive info)
    const dbUrl = process.env.DATABASE_URL || '';
    const maskedDbUrl = dbUrl.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    
    const nextAuthUrl = process.env.NEXTAUTH_URL || '';
    const nextAuthSecret = process.env.NEXTAUTH_SECRET ? '[SET]' : '[MISSING]';
    
    // Get hostname from request
    const hostname = process.env.VERCEL_URL || 'localhost';
    
    // Try to connect to database
    let dbStatus = 'Failed';
    let dbError = null;
    let users = [];
    let themes = [];
    
    try {
      // Check for users
      users = await db.user.findMany({
        select: { 
          id: true,
          email: true,
          name: true,
          createdAt: true
        }
      });
      
      // Check for themes
      themes = await db.theme.findMany();
      
      dbStatus = 'Connected';
    } catch (error) {
      dbError = error instanceof Error ? error.message : String(error);
    }
    
    // Return diagnostic information
    return NextResponse.json({
      environment: {
        node_env: process.env.NODE_ENV,
        vercel_env: process.env.VERCEL_ENV || 'Not on Vercel',
        hostname: hostname,
        database_url: maskedDbUrl,
        nextauth_url: nextAuthUrl,
        nextauth_secret: nextAuthSecret
      },
      database: {
        status: dbStatus,
        error: dbError,
        users_count: users.length,
        themes_count: themes.length
      },
      userCheck: users.length > 0 ? 'Admin user exists' : 'No admin users found',
      themeCheck: themes.length > 0 ? 'Theme exists' : 'No theme found',
      diagnostics: {
        timestamp: new Date().toISOString(),
        region: process.env.VERCEL_REGION || 'unknown'
      },
      nextSteps: {
        initialize: '/api/init',
        access_god_page: '/god'
      }
    });
  } catch (error) {
    console.error('Debug route error:', error);
    return NextResponse.json({
      error: 'Error in debug route',
      message: error instanceof Error ? error.message : String(error)
    }, { 
      status: 500 
    });
  }
} 