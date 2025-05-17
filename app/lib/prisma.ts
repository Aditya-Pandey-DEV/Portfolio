import { PrismaClient } from '@prisma/client';

// Create a mock client for build time when database connection isn't available
function createMockPrismaClient() {
  console.log('Creating mock Prisma client for build process');
  const mockHandler = {
    get: (target, prop) => {
      // Handle common model properties
      if (typeof prop === 'string' && !['then', 'catch', 'finally'].includes(prop)) {
        return new Proxy({}, {
          get: (modelTarget, modelProp) => {
            // Handle common Prisma methods
            const methodName = String(modelProp);
            if (['findUnique', 'findFirst', 'findMany', 'create', 'update', 'delete', 'upsert', 'count', 'aggregate'].includes(methodName)) {
              return async () => {
                console.log(`Mock Prisma client: ${prop}.${methodName} called`);
                return prop === 'resume' && methodName === 'findFirst' ? { id: 'mock-id' } : null;
              };
            }
            return () => {};
          }
        });
      }
      return () => {};
    }
  };
  
  return new Proxy({}, mockHandler);
}

// Global type for Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | Record<string, any> | undefined;
};

// Create Prisma client with error handling
function createPrismaClient() {
  console.log('Initializing Prisma client...');
  if (process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'preview') {
    console.log('Preview environment detected, using mock client');
    return createMockPrismaClient();
  }
  
  try {
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not defined! Using mock client for build.');
      return createMockPrismaClient();
    }
    
    return new PrismaClient({
      log: process.env.NODE_ENV === 'development' 
        ? ['query', 'info', 'warn', 'error'] 
        : ['error'],
      datasourceUrl: process.env.DATABASE_URL
    });
  } catch (error) {
    console.error('Failed to create Prisma client:', error);
    // Return a mock client instead of throwing
    return createMockPrismaClient();
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