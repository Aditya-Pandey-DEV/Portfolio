/** @type {import('next').NextConfig} */

// Add bundle analyzer in analyze mode
const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config) => config;

const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app', 'raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Increase image caching duration
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  outputFileTracingIncludes: {
    "/*": ["./app/generated/prisma/**/*"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add compression
  compress: true,
  // Add static optimization
  poweredByHeader: false,
  reactStrictMode: true,
  // Configure webpack to handle Prisma properly
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure Prisma client is available in server-side code
      config.externals = [...config.externals, 'prisma', '@prisma/client'];
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Remove rewrites as we're now using a static file
};

// Export config with bundle analyzer if enabled
export default withBundleAnalyzer(nextConfig); 