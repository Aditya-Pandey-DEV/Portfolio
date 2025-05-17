import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Get environment variables
    const nextAuthSecret = process.env.NEXTAUTH_SECRET || '(not set)';
    const secretLength = nextAuthSecret !== '(not set)' ? nextAuthSecret.length : 0;
    const nextAuthUrl = process.env.NEXTAUTH_URL || '(not set)';
    const vercelUrl = process.env.VERCEL_URL || '(not set)';
    const nodeEnv = process.env.NODE_ENV || '(not set)';
    
    // Check cookies
    const cookieStore = cookies();
    const allCookies = await cookieStore.getAll();
    const cookieNames = allCookies.map(cookie => cookie.name);
    
    // Check for specific auth-related cookies
    const hasNextAuthSessionToken = cookieNames.includes('next-auth.session-token');
    const godAccessCookie = await cookieStore.get('god_access');
    const adminTokenCookie = cookieNames.includes('admin_token');
    
    // Suggest possible fixes
    const possibleFixes = [];
    
    if (!nextAuthSecret || nextAuthSecret === '(not set)' || nextAuthSecret.length < 32) {
      possibleFixes.push("Set a proper NEXTAUTH_SECRET environment variable (at least 32 characters)");
    }
    
    if (!nextAuthUrl || nextAuthUrl === '(not set)') {
      possibleFixes.push("Set NEXTAUTH_URL environment variable to match your deployment URL");
    }
    
    if (!hasNextAuthSessionToken && !godAccessCookie && !adminTokenCookie) {
      possibleFixes.push("No authentication cookies found. Try clearing cookies and logging in again.");
    }
    
    // Return diagnostic information
    return NextResponse.json({
      status: "success",
      environment: {
        NEXTAUTH_SECRET: secretLength > 0 ? `${secretLength} characters (first 3: ${nextAuthSecret.substring(0, 3)}...)` : '(not set)',
        NEXTAUTH_URL: nextAuthUrl,
        VERCEL_URL: vercelUrl,
        NODE_ENV: nodeEnv
      },
      cookies: {
        names: cookieNames,
        authCookies: {
          hasNextAuthSessionToken,
          hasGodAccess: !!godAccessCookie,
          hasAdminToken: adminTokenCookie
        }
      },
      requestInfo: {
        host: request.headers.get('host') || '(not set)',
        protocol: request.headers.get('x-forwarded-proto') || 'http',
        userAgent: request.headers.get('user-agent') || '(not set)'
      },
      possibleFixes,
      nextSteps: [
        "1. Visit /api/admin-access?code=282499 to gain direct admin access",
        "2. Check if environment variables are properly set in Vercel dashboard",
        "3. Try using the admin-direct page instead of the normal admin route"
      ]
    }, {
      headers: {
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Auth diagnostic error:', error);
    return NextResponse.json({
      status: "error",
      message: error instanceof Error ? error.message : String(error)
    }, {
      status: 500,
      headers: {
        'Cache-Control': 'no-store'
      }
    });
  }
} 