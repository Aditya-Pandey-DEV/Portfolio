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
import { getSEOData } from "./lib/seo";

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  return await getSEOData();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/api/manifest" />
        <meta name="theme-color" content="#000000" />
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
