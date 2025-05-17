import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeProvider as CustomThemeProvider } from "./providers/ThemeProvider";
import NextAuthProvider from "./providers/SessionProvider";
import { Toaster } from "./components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

// Define metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "John Doe | Full Stack Developer",
    template: "%s | John Doe Portfolio",
  },
  description: "BTech CSE student and Full Stack Developer with expertise in modern web technologies.",
  keywords: ["portfolio", "developer", "full stack", "btech", "cse", "computer science", "react", "next.js"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-example.com",
    title: "John Doe | Full Stack Developer",
    description: "BTech CSE student and Full Stack Developer with expertise in modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full Stack Developer",
    description: "BTech CSE student and Full Stack Developer with expertise in modern web technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add viewport optimization
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  // Add manifest for PWA
  manifest: '/manifest.json',
  // Add verification for search engines
  verification: {
    google: 'google-site-verification',
  },
  // Add canonical URL
  alternates: {
    canonical: 'https://your-portfolio-url.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" type="application/manifest+json" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextAuthProvider>
          <CustomThemeProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster />
              {/* Add analytics components with minimal impact */}
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </CustomThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
