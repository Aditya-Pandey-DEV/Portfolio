import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Octokit } from '@octokit/rest';
import puppeteer from 'puppeteer';

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
    const headersList = await headers();
    const referer = headersList.get('referer') || '';
    
    // Only allow requests from the admin dashboard
    if (!referer.includes('/admin/dashboard')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { platform, username } = await request.json() as SocialImportRequest;
    
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
      case 'github': {
        try {
          // Fetch user profile
          const { data: user } = await octokit.users.getByUsername({
            username: username
          });

          // Fetch user's repositories
          const { data: repos } = await octokit.repos.listForUser({
            username: username,
            sort: 'updated',
            per_page: 5
          });

          // Fetch repository details including topics
          const reposWithDetails = await Promise.all(
            repos.map(async (repo) => {
              const { data: repoDetails } = await octokit.repos.get({
                owner: username,
                repo: repo.name
              });
              return {
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                language: repo.language,
                topics: repoDetails.topics || []
              };
            })
          );

          socialData = {
            platform: 'github',
            url: user.html_url,
            name: user.name,
            bio: user.bio,
            location: user.location,
            followers: user.followers,
            publicRepos: user.public_repos,
            repositories: reposWithDetails
          };
        } catch (error) {
          console.error('GitHub API error:', error);
          return NextResponse.json(
            { error: 'Failed to fetch GitHub data' },
            { status: 500 }
          );
        }
        break;
      }

      case 'linkedin': {
        try {
          const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

          const page = await browser.newPage();
          await page.goto(`https://www.linkedin.com/in/${username}/`, {
            waitUntil: 'networkidle0'
          });

          // Extract profile data
          const profileData = await page.evaluate(() => {
            const getText = (selector: string) => {
              const element = document.querySelector(selector);
              return element ? element.textContent?.trim() : null;
            };

            const getList = (selector: string) => {
              const elements = document.querySelectorAll(selector);
              return Array.from(elements).map(el => el.textContent?.trim()).filter(Boolean);
            };

            return {
              name: getText('h1.text-heading-xlarge'),
              headline: getText('div.text-body-medium'),
              location: getText('span.text-body-small'),
              about: getText('div.display-flex.ph5.pv3 .visually-hidden'),
              experience: Array.from(document.querySelectorAll('section.experience-section li')).map(exp => ({
                title: getText('.t-bold .visually-hidden'),
                company: getText('.t-normal .visually-hidden'),
                duration: getText('.t-normal.t-black--light .visually-hidden'),
                description: getText('.t-normal .visually-hidden')
              })),
              certifications: Array.from(document.querySelectorAll('section.certifications-section li')).map(cert => ({
                name: getText('.t-bold .visually-hidden'),
                issuer: getText('.t-normal .visually-hidden'),
                date: getText('.t-normal.t-black--light .visually-hidden')
              }))
            };
          });

          await browser.close();

          socialData = {
            platform: 'linkedin',
            url: `https://www.linkedin.com/in/${username}/`,
            ...profileData
          };
        } catch (error) {
          console.error('LinkedIn scraping error:', error);
          return NextResponse.json(
            { error: 'Failed to fetch LinkedIn data' },
            { status: 500 }
          );
        }
        break;
      }

      case 'leetcode': {
        try {
          const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
          const data = await response.json();

          // Fetch additional LeetCode data
          const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

          const page = await browser.newPage();
          await page.goto(`https://leetcode.com/${username}/`, {
            waitUntil: 'networkidle0'
          });

          // Extract additional profile data
          const additionalData = await page.evaluate(() => {
            const getText = (selector: string) => {
              const element = document.querySelector(selector);
              return element ? element.textContent?.trim() : null;
            };

            return {
              ranking: getText('.ranking'),
              acceptanceRate: getText('.acceptance-rate'),
              totalSolved: getText('.total-solved')
            };
          });

          await browser.close();

          socialData = {
            platform: 'leetcode',
            url: `https://leetcode.com/${username}`,
            username: username,
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            acceptanceRate: data.acceptanceRate,
            ranking: data.ranking,
            ...additionalData
          };
        } catch (error) {
          console.error('LeetCode API error:', error);
          return NextResponse.json(
            { error: 'Failed to fetch LeetCode data' },
            { status: 500 }
          );
        }
        break;
      }

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
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 