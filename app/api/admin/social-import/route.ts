import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

// Define the expected input format
interface SocialImportRequest {
  platform: string;
  username: string;
}

// POST: Import data from social platforms
export async function POST(request: Request) {
  try {
    // Verify user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { platform, username } = await request.json() as SocialImportRequest;
    
    // Get the resume
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return NextResponse.json(
        { error: 'No resume found' },
        { status: 404 }
      );
    }
    
    // Validate inputs
    if (!platform || !username) {
      return NextResponse.json(
        { error: 'Platform and username are required' },
        { status: 400 }
      );
    }
    
    let socialData;
    
    // Process different platforms
    switch (platform) {
      case 'github':
        socialData = await importFromGitHub(username);
        break;
      case 'linkedin':
        socialData = await importFromLinkedIn(username);
        break;
      case 'twitter':
        socialData = await importFromTwitter(username);
        break;
      case 'leetcode':
        socialData = await importFromLeetCode(username);
        break;
      default:
        return NextResponse.json(
          { error: 'Unsupported platform' },
          { status: 400 }
        );
    }
    
    if (!socialData) {
      return NextResponse.json(
        { error: `Failed to import data from ${platform}` },
        { status: 404 }
      );
    }
    
    // Return the fetched profile data
    return NextResponse.json(socialData);
  } catch (error) {
    console.error('Social import error:', error);
    return NextResponse.json(
      { error: 'Failed to import social data' },
      { status: 500 }
    );
  }
}

// GitHub API implementation
async function importFromGitHub(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    return {
      platform: 'github',
      url: data.html_url,
      name: data.name,
      bio: data.bio,
      location: data.location,
      avatar: data.avatar_url,
      followers: data.followers,
      publicRepos: data.public_repos
    };
  } catch (error) {
    console.error('GitHub import error:', error);
    return null;
  }
}

// LinkedIn API implementation (placeholder - requires OAuth)
async function importFromLinkedIn(username: string) {
  // LinkedIn API requires OAuth - we'd use a simplified approach for demo
  return {
    platform: 'linkedin',
    url: `https://www.linkedin.com/in/${username}`,
    // Other fields would come from actual API
  };
}

// Twitter/X API implementation
async function importFromTwitter(username: string) {
  // Twitter API requires authentication, this is simplified
  return {
    platform: 'twitter',
    url: `https://twitter.com/${username}`,
    // Other fields would come from actual API
  };
}

// LeetCode API implementation
async function importFromLeetCode(username: string) {
  try {
    // LeetCode doesn't have an official API, but we can create a URL
    return {
      platform: 'leetcode',
      url: `https://leetcode.com/${username}`,
      // Other data would need web scraping or unofficial APIs
    };
  } catch (error) {
    console.error('LeetCode import error:', error);
    return null;
  }
} 