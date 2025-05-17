import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Octokit } from '@octokit/rest';
import puppeteer from 'puppeteer';

// Initialize Octokit with GitHub token
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

// Define the expected input format
interface SocialImportRequest {
  platform: string;
  username: string;
}

// POST: Import data from social platforms
export async function POST(request: Request) {
  try {
    // Check if request is from admin panel
    const headersList = await headers();
    const referer = headersList.get('referer');
    if (!referer?.includes('/admin/dashboard')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { platform, username } = await request.json();

    if (!platform || !username) {
      return NextResponse.json({ error: 'Platform and username are required' }, { status: 400 });
    }

    switch (platform.toLowerCase()) {
      case 'github': {
        try {
          // Get user profile
          const { data: user } = await octokit.users.getByUsername({ username });
          
          // Get user's repositories
          const { data: repos } = await octokit.repos.listForUser({
            username,
            sort: 'updated',
            per_page: 5
          });

          // Format repository data
          const repositories = await Promise.all(repos.map(async (repo) => {
            const { data: topics } = await octokit.repos.getAllTopics({
              owner: username,
              repo: repo.name
            });

            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              language: repo.language,
              topics: topics.names
            };
          }));

          return NextResponse.json({
            platform: 'github',
            url: user.html_url,
            name: user.name,
            bio: user.bio,
            location: user.location,
            avatar: user.avatar_url,
            followers: user.followers,
            publicRepos: user.public_repos,
            repositories
          });
        } catch (error) {
          console.error('GitHub API error:', error);
          return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 });
        }
      }

      case 'linkedin': {
        try {
          const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });
          
          const page = await browser.newPage();
          await page.goto(`https://www.linkedin.com/in/${username}/`, {
            waitUntil: 'networkidle0',
            timeout: 30000
          });

          // Extract profile data
          const profileData = await page.evaluate(() => {
            const name = document.querySelector('.text-heading-xlarge')?.textContent?.trim();
            const headline = document.querySelector('.text-body-medium')?.textContent?.trim();
            const location = document.querySelector('.text-body-small.inline.t-black--light')?.textContent?.trim();
            const about = document.querySelector('.display-flex.ph5.pv3 .visually-hidden')?.textContent?.trim();

            // Extract experience
            const experiences = Array.from(document.querySelectorAll('.experience-section .pv-entity__position-group-pager')).map(exp => ({
              title: exp.querySelector('.pv-entity__name')?.textContent?.trim(),
              company: exp.querySelector('.pv-entity__secondary-title')?.textContent?.trim(),
              duration: exp.querySelector('.pv-entity__date-range span:nth-child(2)')?.textContent?.trim(),
              description: exp.querySelector('.pv-entity__description')?.textContent?.trim()
            }));

            // Extract certifications
            const certifications = Array.from(document.querySelectorAll('.certification-section .pv-certification-entity')).map(cert => ({
              name: cert.querySelector('.pv-certification-entity__name')?.textContent?.trim(),
              issuer: cert.querySelector('.pv-certification-entity__issuer')?.textContent?.trim(),
              date: cert.querySelector('.pv-certification-entity__date-range span:nth-child(2)')?.textContent?.trim()
            }));

            return {
              name,
              headline,
              location,
              about,
              experience: experiences,
              certifications
            };
          });

          await browser.close();

          return NextResponse.json({
            platform: 'linkedin',
            url: `https://www.linkedin.com/in/${username}/`,
            ...profileData
          });
        } catch (error) {
          console.error('LinkedIn scraping error:', error);
          return NextResponse.json({ error: 'Failed to fetch LinkedIn data' }, { status: 500 });
        }
      }

      case 'leetcode': {
        try {
          // Fetch LeetCode stats using their API
          const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
          const data = await response.json();

          return NextResponse.json({
            platform: 'leetcode',
            url: `https://leetcode.com/${username}/`,
            username,
            totalSolved: data.totalSolved,
            acceptanceRate: data.acceptanceRate,
            ranking: data.ranking,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved
          });
        } catch (error) {
          console.error('LeetCode API error:', error);
          return NextResponse.json({ error: 'Failed to fetch LeetCode data' }, { status: 500 });
        }
      }

      default:
        return NextResponse.json({ error: 'Unsupported platform' }, { status: 400 });
    }
  } catch (error) {
    console.error('Social import error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 