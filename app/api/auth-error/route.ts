import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const error = searchParams.get('error');
  
  console.error('Auth error:', error);
  
  // Return a JSON error instead of HTML
  return NextResponse.json(
    { 
      error: error || 'unknown_error',
      message: getErrorMessage(error || ''),
      timestamp: new Date().toISOString()
    },
    {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    }
  );
}

// Helper to get human-readable error messages
function getErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'configuration':
      return 'There is a problem with the server configuration.';
    case 'accessdenied':
      return 'Access denied.';
    case 'verification':
      return 'The verification token has expired or has already been used.';
    case 'OAuthSignin':
      return 'Error in the OAuth signin process.';
    case 'OAuthCallback':
      return 'Error in the OAuth callback process.';
    case 'OAuthCreateAccount':
      return 'Could not create OAuth provider user in the database.';
    case 'EmailCreateAccount':
      return 'Could not create email provider user in the database.';
    case 'Callback':
      return 'Error in the OAuth callback handler.';
    case 'OAuthAccountNotLinked':
      return 'This email is already associated with another account.';
    case 'EmailSignin':
      return 'Error sending the email for sign in.';
    case 'CredentialsSignin':
      return 'Sign in failed. Check the details you provided are correct.';
    case 'SessionRequired':
      return 'This page requires authentication.';
    default:
      return 'An unknown authentication error occurred.';
  }
} 