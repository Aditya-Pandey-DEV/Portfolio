import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  try {
    // Get the manifest file from the public directory
    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    const manifestJson = JSON.parse(manifestContent);
    
    // Return the manifest with proper headers
    return NextResponse.json(manifestJson, {
      headers: {
        'Content-Type': 'application/manifest+json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  } catch (error) {
    console.error('Error serving manifest:', error);
    return NextResponse.json(
      { error: 'Failed to load manifest' },
      { status: 500 }
    );
  }
} 