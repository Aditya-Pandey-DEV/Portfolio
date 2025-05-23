import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(`Middleware processing path: ${path}`);

  // Skip processing for static files and public APIs
  if (
    path.includes('manifest') || 
    path.includes('api/manifest') ||
    path.endsWith('.ico') || 
    path.endsWith('.png') || 
    path.endsWith('.jpg') || 
    path.endsWith('.svg') || 
    path.endsWith('.css') || 
    path.endsWith('.js') || 
    path.includes('_next/static') ||
    path.includes('_next/data') ||
    path.includes('api/resume') || 
    path.includes('api/theme') ||
    path.includes('api/auth')
  ) {
    console.log('Skipping middleware for static file or public API:', path);
    return NextResponse.next();
  }

  // Special handling for OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Check for any form of authentication first
  const hasAnyAuth = request.cookies.has('next-auth.session-token') || 
                    request.cookies.has('god_access') || 
                    request.cookies.has('admin_token');

  // If user has any form of authentication, allow access to all paths
  if (hasAnyAuth) {
    console.log('User has existing auth, allowing access to:', path);
    const response = NextResponse.next();
    addCorsHeaders(response);
    return response;
  }
  
  // Force exclude god path from auth checks completely
  if (path === '/god') {
    console.log('Explicitly skipping auth check for god path');
    const response = NextResponse.next();
    addCorsHeaders(response);
    return response;
  }
  
  // Skip auth check for non-admin paths and already authenticated admin login
  if (!path.startsWith('/admin') || 
      path.startsWith('/admin/login') || 
      path === '/admin-direct') {
    console.log('Skipping auth check for non-protected path:', path);
    const response = NextResponse.next();
    addCorsHeaders(response);
    return response;
  }
  
  console.log('Running auth check for protected path');
  
  // Check for god_access cookie first - special bypass for admin access
  const godAccess = request.cookies.get('god_access')?.value;
  
  if (godAccess === 'true') {
    console.log('God access detected, bypassing auth check');
    const response = NextResponse.next();
    addCorsHeaders(response);
    return response;
  }
  
  // Check for special admin_token cookie (direct access method)
  const adminToken = request.cookies.get('admin_token')?.value;
  if (adminToken) {
    // Simple check for token existence
    if (adminToken.length > 30) {
      console.log('Admin token bypass active');
      const response = NextResponse.next();
      addCorsHeaders(response);
      return response;
    }
  }
  
  try {
    // Fall back to token check
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Debug token info
    console.log('Auth token found:', token ? 'Yes' : 'No', token ? `(User: ${token.email})` : '');
    
    // If the user is not authenticated, redirect to the admin-direct page
    if (!token) {
      console.log('No authentication token found, redirecting to admin-direct');
      return NextResponse.redirect(new URL('/admin-direct', request.url));
    }
    
    // User is authenticated, proceed
    const response = NextResponse.next();
    addCorsHeaders(response);
    return response;
  } catch (error) {
    console.error('Auth middleware error:', error);
    // If we have any form of authentication, allow access
    if (hasAnyAuth) {
      console.log('Auth error but has existing auth, allowing access');
      const response = NextResponse.next();
      addCorsHeaders(response);
      return response;
    }
    
    // If no auth at all, redirect to admin-direct
    return NextResponse.redirect(new URL('/admin-direct', request.url));
  }
}

// Helper function to add CORS headers
function addCorsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

// Configure the middleware to run on admin and API paths only, but not on static files
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/:path*', 
    '/god',
    // Exclude static files and manifest from middleware
    '/((?!_next/static|_next/image|_next/data|favicon.ico|manifest.json|icons/).*)',
  ]
}; 