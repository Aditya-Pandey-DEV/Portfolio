import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import prisma from '@/app/lib/prisma-wrapper';
import { headers } from 'next/headers';
import { hash } from 'bcrypt';

// Determine the base URL dynamically based on environment variables and request
const getBaseUrl = () => {
  // For Vercel deployments, use VERCEL_URL
  if (process.env.VERCEL_URL) {
    // Make sure to use https for Vercel URLs
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Try to extract host from headers in a server context
  try {
    const headersList = headers();
    const host = headersList.get('host');
    if (host) {
      const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
      return `${protocol}://${host}`;
    }
  } catch (e) {
    // Headers might not be available in all contexts
    console.log('Could not access request headers');
  }
  
  // Fallback to NEXTAUTH_URL if set
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }
  
  // Local development fallback
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // Ultimate fallback - likely a Vercel deployment
  return 'https://your-portfolio-url.vercel.app';
};

// Set NEXTAUTH_URL dynamically if it's not already set
if (!process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = getBaseUrl();
  console.log(`Dynamically setting NEXTAUTH_URL to: ${process.env.NEXTAUTH_URL}`);
}

// Log important configuration info
console.log('NextAuth initialization');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL ? '(Set)' : '(Not set)');
console.log('VERCEL_URL:', process.env.VERCEL_URL ? process.env.VERCEL_URL : '(Not set)');

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Check if this is the first user (no users in database)
          const userCount = await prisma.user.count();
          const isFirstUser = userCount === 0;

          // If it's the first user, allow default credentials
          if (isFirstUser) {
            if (credentials.email === 'admin@example.com' && credentials.password === 'Admin@123') {
              // Create the first user with default credentials
              const user = await prisma.user.create({
                data: {
                  email: 'admin@example.com',
                  password: await hash('Admin@123', 10),
                  name: 'Admin'
                }
              });
              return {
                id: user.id,
                email: user.email,
                name: user.name
              };
            }
            return null;
          }

          // For existing users, check credentials normally
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    // Add a callback to detect URL mismatches
    async redirect({ url, baseUrl }) {
      console.log(`Redirect callback - URL: ${url}, BaseUrl: ${baseUrl}`);
      
      // Always allow admin dashboard redirects
      if (url.includes('/admin/dashboard')) {
        console.log('Allowing admin dashboard redirect');
        return url;
      }
      
      // Get the current base URL dynamically
      const dynamicBaseUrl = getBaseUrl();
      console.log(`DynamicBaseUrl: ${dynamicBaseUrl}`);
      
      // If the URL starts with a slash, join it with the dynamic base URL
      if (url.startsWith('/')) {
        return `${dynamicBaseUrl}${url}`;
      }
      // If the URL is on the same site, return it as is
      else if (url.startsWith(dynamicBaseUrl) || url.startsWith(baseUrl)) {
        return url;
      }
      // Otherwise, return the dynamic base URL
      return dynamicBaseUrl;
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,  // Removed __Secure- prefix for better compatibility
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      },
    },
  },
  // More verbose debugging in production to catch issues
  debug: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
};

// More resilient version of getServerAuthSession
export const getServerAuthSession = async () => {
  try {
    return await getServerSession(authOptions);
  } catch (error) {
    console.error('Error getting server session:', error);
    return null;
  }
}; 