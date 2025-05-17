'use client';

import { useEffect } from 'react';

/**
 * Component that adds Safari-specific polyfills and workarounds
 */
export default function SafariPolyfills() {
  useEffect(() => {
    // Detect if browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      console.log('Safari detected, applying polyfills and workarounds');
      
      // Add Safari-specific polyfills here
      
      // Fix for Safari's IndexedDB issues
      if (window.indexedDB) {
        const originalOpen = window.indexedDB.open;
        window.indexedDB.open = function(...args) {
          const request = originalOpen.apply(this, args);
          // Wrap the success event to prevent Safari IDB transaction issues
          const originalSuccess = request.onsuccess;
          request.onsuccess = function(event) {
            try {
              if (originalSuccess) originalSuccess.call(this, event);
            } catch (e) {
              console.warn('Safari IndexedDB error handled:', e);
            }
          };
          return request;
        };
      }
      
      // Fix for Safari's fetch cache behavior
      const originalFetch = window.fetch;
      window.fetch = function(input, init) {
        const newInit = init || {};
        
        // For Safari, add cache control headers if not present
        if (isSafari && !newInit.headers) {
          newInit.headers = {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          };
        }
        
        return originalFetch.call(this, input, newInit);
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 