'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import Cookies from 'js-cookie';

// Loading fallback for Suspense
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-primary animate-spin"></div>
    </div>
  );
}

// Component that uses searchParams
function GodPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [envVarUrl, setEnvVarUrl] = useState('');
  const [urlMismatch, setUrlMismatch] = useState(false);
  const [callbackUrl, setCallbackUrl] = useState('/admin/dashboard');
  const [diagnosticsData, setDiagnosticsData] = useState<any>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  // Static passcode
  const STATIC_PASSCODE = '282499';

  // Check for error parameters in URL
  useEffect(() => {
    if (!searchParams) return;
    
    try {
      const errorParam = searchParams.get('error');
      const callbackUrlParam = searchParams.get('callbackUrl');
      
      if (callbackUrlParam) {
        setCallbackUrl(decodeURIComponent(callbackUrlParam));
      }
      
      if (errorParam) {
        setError(`Authentication error: ${errorParam}`);
        if (errorParam === 'Configuration' || errorParam === 'AccessDenied' || errorParam === 'JWT') {
          checkUrlMismatch();
          runDiagnostics();
        }
      }
      
      // Set current URL for comparison
      if (typeof window !== 'undefined') {
        const hostname = window.location.origin;
        setCurrentUrl(hostname);
      }
    } catch (err) {
      console.error("Error processing search params:", err);
    }
  }, [searchParams]);

  // Check if there might be a URL mismatch with NEXTAUTH_URL
  const checkUrlMismatch = async () => {
    try {
      setMessage("Checking configuration...");
      const response = await fetch('/api/check-url');
      if (!response.ok) throw new Error("Failed to fetch configuration");
      
      const data = await response.json();
      setEnvVarUrl(data.environment?.nextAuthUrl || 'Not set');
      
      const mismatch = data.environment?.nextAuthUrl && 
                       typeof window !== 'undefined' && 
                       !data.environment.nextAuthUrl.includes(window.location.host);
      
      setUrlMismatch(mismatch);
      setMessage("");
      return data;
    } catch (error) {
      console.error('Error checking configuration:', error);
      setMessage("");
    }
  };
  
  // Run diagnostics for auth issues
  const runDiagnostics = async () => {
    try {
      const response = await fetch('/api/diagnose-auth');
      if (!response.ok) throw new Error("Failed to run diagnostics");
      
      const data = await response.json();
      setDiagnosticsData(data);
      setShowDiagnostics(true);
      return data;
    } catch (error) {
      console.error('Diagnostics error:', error);
    }
  };

  // Initialize database before attempting login
  const initializeDatabase = async () => {
    try {
      setMessage('Initializing database...');
      const response = await fetch('/api/init');
      if (!response.ok) throw new Error("Database initialization failed");
      
      const data = await response.json();
      console.log('Database initialization:', data);
      return data;
    } catch (error) {
      console.error('Database initialization error:', error);
      throw error;
    }
  };
  
  // Direct access shortcut (no NextAuth)
  const useDirectAccess = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin-access?code=${STATIC_PASSCODE}`);
      if (!response.ok) throw new Error("Direct access failed");
      
      const data = await response.json();
      setMessage("Direct access granted! Redirecting...");
      
      // Short delay to ensure cookies are set
      setTimeout(() => {
        router.push(data.redirectTo || '/admin/dashboard');
      }, 500);
    } catch (error) {
      console.error('Direct access error:', error);
      setError('Direct access failed. Please try again.');
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    // Check if passcode matches the static one
    if (passcode !== STATIC_PASSCODE) {
      setError('Invalid passcode');
      setLoading(false);
      return;
    }

    try {
      // Use direct access method by default to bypass NextAuth issues
      setMessage('Setting up secure access...');
      
      // Initialize database (create admin user and theme if needed)
      await initializeDatabase();
      
      // Use direct admin token access method for maximum reliability
      const response = await fetch(`/api/admin-access?code=${STATIC_PASSCODE}`);
      if (!response.ok) throw new Error("Admin access failed");
      
      const data = await response.json();
      setMessage('Access granted! Redirecting to dashboard...');
      
      // Short delay to ensure cookies are set
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 500);
    } catch (error) {
      console.error('Access error:', error);
      setError('Access failed. Please try again or use the Emergency Access link below.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Special Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter the passcode to proceed
          </p>
        </div>
        
        {urlMismatch && (
          <div className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 p-3 rounded-md text-sm">
            <p><strong>URL Mismatch Detected!</strong></p>
            <p>Current URL: {currentUrl}</p>
            <p>NEXTAUTH_URL: {envVarUrl}</p>
            <p className="mt-2">This mismatch may cause authentication errors. Please update your NEXTAUTH_URL environment variable in Vercel.</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-3 rounded-md text-sm">
            <p>{error}</p>
            <div className="mt-3">
              <button 
                className="text-sm text-red-700 dark:text-red-300 font-medium hover:underline"
                onClick={runDiagnostics}
              >
                Run Diagnostics
              </button>
              <span className="mx-2">|</span>
              <button 
                className="text-sm text-red-700 dark:text-red-300 font-medium hover:underline"
                onClick={useDirectAccess}
              >
                Try Direct Access
              </button>
            </div>
          </div>
        )}
        
        {message && (
          <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 p-3 rounded-md text-sm">
            {message}
          </div>
        )}
        
        {showDiagnostics && diagnosticsData && (
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md text-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-2">Authentication Diagnostics</h3>
            
            {diagnosticsData.possibleFixes && diagnosticsData.possibleFixes.length > 0 && (
              <div className="mb-2">
                <p className="font-medium">Suggested Fixes:</p>
                <ul className="list-disc pl-5">
                  {diagnosticsData.possibleFixes.map((fix: string, i: number) => (
                    <li key={i}>{fix}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex justify-end mt-2">
              <button 
                className="text-xs text-gray-500 hover:underline"
                onClick={() => setShowDiagnostics(false)}
              >
                Hide Details
              </button>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Passcode"
              id="passcode"
              name="passcode"
              type="text"
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode"
            />
          </div>
          
          <div>
            <Button
              type="submit"
              className="w-full"
              isLoading={loading}
              disabled={loading}
            >
              Access Admin
            </Button>
          </div>
        </form>
        
        <div className="text-center text-sm mt-4 space-y-2">
          <div>
            <Link href="/admin-direct" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Use Emergency Access Instead
            </Link>
          </div>
          <div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GodPage() {
  return (
    <Suspense fallback={<Loading />}>
      <GodPageContent />
    </Suspense>
  );
} 