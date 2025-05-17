'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
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
  
  // Use refs to avoid unnecessary re-renders in Safari
  const optionsRef = useRef({ fields, initialData });
  
  const [data, setData] = useState<ResumeData>(() => ({ 
    ...defaultResumeData, 
    ...initialData 
  }));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Memoize fields array to prevent unnecessary re-renders
  const fieldsKey = fields ? fields.join(',') : '';

  // Fetch function that can be called on demand
  const fetchData = useCallback(async (forceRefresh = false) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use a try-finally pattern that's more reliable across browsers
      const resumeData = await fetchResumeData(optionsRef.current.fields, { 
        revalidate: forceRefresh,
        // Add cache-busting for Safari
        headers: forceRefresh ? { 
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache' 
        } : undefined
      }) as ResumeData;
      
      if (resumeData) {
        setData(resumeData);
      }
    } catch (err) {
      console.error('Error fetching resume data:', err);
      setError(err instanceof Error ? err : new Error('Failed to load data'));
      // Keep existing data on error
    } finally {
      setIsLoading(false);
    }
  }, [fieldsKey]); // Use fieldsKey as dependency instead of fields array

  // Initial fetch on mount - using an empty dependency array to prevent refetching
  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout | null = null;
    
    const loadData = async () => {
      try {
        const resumeData = await fetchResumeData(optionsRef.current.fields, { 
          revalidate: false 
        }) as ResumeData;
        
        if (isMounted) {
          setData(resumeData || { ...defaultResumeData });
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error fetching resume data:', err);
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to load data'));
          setIsLoading(false);
          
          // Retry once after a short delay - helps with Safari
          timeoutId = setTimeout(() => {
            if (isMounted) {
              loadData();
            }
          }, 1000);
        }
      }
    };
    
    loadData();
    
    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array - only run on mount

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
    name: data.name || 'Portfolio',
    isLoading,
    error,
  };
} 