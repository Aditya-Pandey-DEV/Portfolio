import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      name: "Aditya Pandey Portfolio",
      short_name: "AP Portfolio",
      description: "Portfolio website of Aditya Pandey, Full Stack Developer & B.Tech CSE Student",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#1e40af",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "64x64",
          type: "image/x-icon"
        },
        {
          src: "/profile.jpg",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/profile.jpg",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/manifest+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  );
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/manifest+json'
    }
  });
} 