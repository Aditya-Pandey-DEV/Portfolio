import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt';
import prisma from '@/app/lib/prisma-wrapper';
import { headers } from 'next/headers';

// Determine the base URL dynamically based on environment variables and request
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  try {
    const headersList = headers();
    const host = headersList.get('host');
    if (host) {
      const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
      return `${protocol}://${host}`;
    }
  } catch (e) {
    console.log('Could not access request headers');
  }
  
  return process.env.NEXTAUTH_URL || 'http://localhost:3000';
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
          throw new Error('Email and password are required');
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
            throw new Error('Invalid default credentials');
          }

          // For existing users, check credentials normally
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (!user) {
            throw new Error('No user found with this email');
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name
          };
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
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
    maxAge: 30 * 24 * 60 * 60, // 30 days
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
    async redirect({ url, baseUrl }) {
      // Allow relative URLs
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      // Allow URLs from the same origin
      else if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
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
  debug: process.env.NODE_ENV === 'development',
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