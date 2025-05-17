import { PrismaClient } from '@prisma/client';

// Add detailed logging for troubleshooting
const logLevel = process.env.NODE_ENV === 'development' 
  ? ['query', 'info', 'warn', 'error'] 
  : ['error'];

// Validate DATABASE_URL or provide a fallback for builds
const getDatabaseUrl = () => {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL is not defined! Using dummy URL for build process only.');
    return 'file:./dev.db';
  }
  return process.env.DATABASE_URL;
};

// Global type for Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with error handling
function createPrismaClient() {
  console.log('Initializing Prisma client...');
  try {
    return new PrismaClient({
      log: logLevel,
      datasourceUrl: getDatabaseUrl(),
    });
  } catch (error) {
    console.error('Failed to create Prisma client:', error);
    throw new Error('Database connection failed');
  }
}

// Initialize client only once
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Export helper function to get Prisma client safely
export function getPrismaClient() {
  return prisma;
} 