import { PrismaClient } from '@/app/generated/prisma';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Reference: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn'],
    // Add connection pooling in production
    ...(process.env.NODE_ENV === 'production' &&
      {
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
      }),
  });

// Export client as both 'prisma' and 'db' to maintain backward compatibility
export const db = prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Helper functions with caching
const cache = new Map();
const CACHE_TTL = 60 * 1000; // 1 minute cache time

export async function fetchWithCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = CACHE_TTL
): Promise<T> {
  const cached = cache.get(key);
  
  if (cached && cached.expiry > Date.now()) {
    return cached.data as T;
  }
  
  try {
    const data = await fetchFn();
    cache.set(key, {
      data,
      expiry: Date.now() + ttl
    });
    return data;
  } catch (error) {
    console.error(`Error fetching data for key ${key}:`, error);
    // If we have stale data, return it rather than failing
    if (cached) {
      return cached.data as T;
    }
    throw error;
  }
}

// Clear cache entries
export function clearCache(keyPattern?: string): void {
  if (!keyPattern) {
    cache.clear();
    return;
  }
  
  for (const key of cache.keys()) {
    if (key.includes(keyPattern)) {
      cache.delete(key);
    }
  }
} 