import { NextResponse } from 'next/server';

const REQUIRED_ENV_VARS = [
  'MONGODB_URI',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
  'GITHUB_TOKEN',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET'
];

export async function GET() {
  try {
    const missingVars = REQUIRED_ENV_VARS.filter(
      (variable) => !process.env[variable]
    );

    return NextResponse.json({
      configured: missingVars.length === 0,
      missingVars
    });
  } catch (error) {
    console.error('Error checking environment variables:', error);
    return NextResponse.json(
      { error: 'Failed to check environment variables' },
      { status: 500 }
    );
  }
} 