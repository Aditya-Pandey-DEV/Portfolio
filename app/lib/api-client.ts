'use client';

/**
 * Client-side API utility with caching for optimized data fetching
 */

// Cache storage
type CacheEntry<T> = {
  data: T;
  expiry: number;
};

const cache = new Map<string, CacheEntry<any>>();

interface FetchOptions extends RequestInit {
  cacheTtl?: number; // Cache time-to-live in milliseconds
  revalidate?: boolean; // Force revalidation even if cached
}

/**
 * Client-side fetch with intelligent caching
 */
export async function fetchWithCache<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    cacheTtl = 60 * 1000, // Default 1 minute cache
    revalidate = false,
    ...fetchOptions
  } = options;

  const cacheKey = `${url}:${JSON.stringify(fetchOptions)}`;
  const cached = cache.get(cacheKey);
  const now = Date.now();

  // Return cached data if valid and not revalidating
  if (cached && cached.expiry > now && !revalidate) {
    return cached.data;
  }

  try {
    // Actual fetch operation with better Safari compatibility
    const response = await fetch(url, {
      credentials: 'same-origin', // Include credentials for same-origin requests
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      ...fetchOptions
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Cache the new data
    cache.set(cacheKey, {
      data,
      expiry: now + cacheTtl,
    });
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    
    // Return stale data if available rather than failing
    if (cached) {
      console.log(`Using cached data for ${url} due to fetch error`);
      return cached.data;
    }
    
    throw error;
  }
}

/**
 * Clear all or specific cached data
 */
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

/**
 * Optimized resume data fetcher with field selection
 */
export async function fetchResumeData(fields?: string[], options: FetchOptions = {}) {
  const fieldsParam = fields && fields.length > 0 ? `?fields=${fields.join(',')}` : '';
  return fetchWithCache(`/api/resume${fieldsParam}`, {
    ...options,
    // Use a longer cache time for resume data
    cacheTtl: 5 * 60 * 1000, // 5 minutes
  });
} 