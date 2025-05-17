import { Metadata } from 'next';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function getSEOData(): Promise<Metadata> {
  try {
    // Get the first resume
    const resume = await prisma.resume.findFirst();
    
    if (!resume) {
      return defaultSEO();
    }
    
    // Get SEO data
    const seoData = await prisma.sEO.findUnique({
      where: { resumeId: resume.id }
    });
    
    if (!seoData) {
      return defaultSEO(resume.name);
    }
    
    // Construct metadata from SEO data
    return {
      title: {
        default: seoData.title,
        template: `%s | ${resume.name}`,
      },
      description: seoData.description,
      keywords: seoData.keywords.split(',').map(k => k.trim()),
      authors: [{ name: resume.name }],
      creator: resume.name,
      openGraph: {
        type: "website",
        locale: "en_US",
        url: seoData.canonicalUrl || undefined,
        title: seoData.ogTitle || seoData.title,
        description: seoData.ogDescription || seoData.description,
        ...(seoData.ogImage && {
          images: [
            {
              url: seoData.ogImage,
              width: 1200,
              height: 630,
              alt: seoData.ogTitle || seoData.title,
            },
          ],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: seoData.twitterTitle || seoData.title,
        description: seoData.twitterDescription || seoData.description,
        ...(seoData.twitterImage && {
          images: [seoData.twitterImage],
        }),
      },
      robots: {
        index: true,
        follow: true,
      },
      ...(seoData.canonicalUrl && {
        alternates: {
          canonical: seoData.canonicalUrl,
        },
      }),
    };
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return defaultSEO();
  }
}

function defaultSEO(name: string = 'John Doe'): Metadata {
  return {
    title: {
      default: `${name} | Full Stack Developer`,
      template: `%s | ${name} Portfolio`,
    },
    description: "Full Stack Developer with expertise in modern web technologies.",
    keywords: ["portfolio", "developer", "full stack", "react", "next.js"],
    authors: [{ name }],
    creator: name,
    openGraph: {
      type: "website",
      locale: "en_US",
      title: `${name} | Full Stack Developer`,
      description: "Full Stack Developer with expertise in modern web technologies.",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Full Stack Developer`,
      description: "Full Stack Developer with expertise in modern web technologies.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
} 