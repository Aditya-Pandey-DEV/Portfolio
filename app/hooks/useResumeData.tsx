'use client';

import { useState, useEffect, useCallback } from 'react';
import { fetchResumeData } from '@/app/lib/api-client';

interface ResumeData {
  id?: string;
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  about?: string;
  skills?: any[];
  experiences?: any[];
  projects?: any[];
  education?: any[];
  socialLinks?: any[];
  focusAreas?: any[];
  certifications?: any[];
}

// Default data to use while loading or on error
const defaultResumeData: ResumeData = {
  name: 'Portfolio Owner',
  title: 'Developer',
  about: 'Portfolio information is loading...',
};

interface UseResumeDataOptions {
  fields?: string[];
  initialData?: Partial<ResumeData>;
}

/**
 * Hook to fetch and cache resume data across components
 */
export function useResumeData(options: UseResumeDataOptions = {}) {
  const { fields, initialData } = options;
  
  const [data, setData] = useState<ResumeData>({ ...defaultResumeData, ...initialData });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch function that can be called on demand
  const fetchData = useCallback(async (forceRefresh = false) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const resumeData = await fetchResumeData(fields, { 
        revalidate: forceRefresh 
      }) as ResumeData;
      
      setData(resumeData || { ...defaultResumeData });
    } catch (err) {
      console.error('Error fetching resume data:', err);
      setError(err instanceof Error ? err : new Error('Failed to load data'));
      // Keep existing data on error
    } finally {
      setIsLoading(false);
    }
  }, [fields]);

  // Initial fetch on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Return data, loading state, error, and refresh function
  return {
    data,
    isLoading,
    error,
    refresh: () => fetchData(true),
  };
}

/**
 * Simplified hook that only returns the name - useful for components 
 * like Navbar and Footer that only need the name
 */
export function useResumeName() {
  const { data, isLoading, error } = useResumeData({ 
    fields: ['name'] 
  });
  
  return {
    name: data.name,
    isLoading,
    error,
  };
} 