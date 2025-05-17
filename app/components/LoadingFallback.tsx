'use client';

import { useEffect, useState } from 'react';

interface LoadingFallbackProps {
  delayMs?: number;
}

export default function LoadingFallback({ delayMs = 300 }: LoadingFallbackProps) {
  // Only show loading after a delay to prevent flashes
  const [showLoading, setShowLoading] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, delayMs);
    
    return () => clearTimeout(timer);
  }, [delayMs]);
  
  if (!showLoading) {
    return null;
  }
  
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="relative flex">
        <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-primary animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
} 