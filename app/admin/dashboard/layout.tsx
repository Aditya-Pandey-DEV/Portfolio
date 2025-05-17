'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import LoadingFallback from '@/app/components/LoadingFallback';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      // We'll handle this manually
    }
  });
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for any of the access methods
    const godAccess = Cookies.get('god_access') === 'true';
    const hasAdminToken = !!Cookies.get('admin_token');
    
    // Check browser storage for a previous successful login
    const storedAuth = localStorage.getItem('admin_authorized');
    
    if (status === 'loading') {
      return; // Still loading session
    }
    
    setIsLoading(false);
    
    // Authorized if has any form of authentication
    if (session || godAccess || hasAdminToken || storedAuth === 'true') {
      setIsAuthorized(true);
      // Store the authorization state
      localStorage.setItem('admin_authorized', 'true');
    } else {
      console.log('Not authorized:', { session, godAccess, hasAdminToken, storedAuth });
      // Only redirect if genuinely not authorized
      redirect('/admin-direct'); // Use the more reliable direct access page
    }
  }, [session, status]);
  
  // Show loading state while checking auth
  if (isLoading) {
    return <LoadingFallback />;
  }
  
  // Only render children if authorized
  return isAuthorized ? <div>{children}</div> : null;
} 