'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/app/components/ui/alert';
import { Loader2 } from 'lucide-react';

export default function SetupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [envStatus, setEnvStatus] = useState<{
    configured: boolean;
    missingVars: string[];
  } | null>(null);

  useEffect(() => {
    checkEnvironmentVariables();
  }, []);

  const checkEnvironmentVariables = async () => {
    try {
      const response = await fetch('/api/admin/env-check');
      const data = await response.json();
      setEnvStatus(data);
    } catch (error) {
      console.error('Error checking environment variables:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await fetch('/api/admin/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admin@example.com',
          password: 'Admin@123',
        }),
      });

      if (!result.ok) {
        throw new Error('Failed to set up initial credentials');
      }

      // Redirect to admin login
      router.push('/admin/login');
    } catch (error) {
      setError('Failed to set up initial configuration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Initial Setup
          </CardTitle>
          <p className="text-center text-sm text-muted-foreground">
            Configure your portfolio website
          </p>
        </CardHeader>
        <CardContent>
          {envStatus && !envStatus.configured && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Missing Environment Variables</AlertTitle>
              <AlertDescription>
                <p className="mb-2">Please configure the following environment variables in your Vercel project:</p>
                <ul className="list-disc pl-4">
                  {envStatus.missingVars.map((variable) => (
                    <li key={variable}>{variable}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Default Admin Credentials</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value="admin@example.com"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value="Admin@123"
                    disabled
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || (envStatus && !envStatus.configured)}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Setting up...
                </>
              ) : (
                'Complete Setup'
              )}
            </Button>
          </form>

          {error && (
            <div className="mt-4 text-red-500 text-sm text-center">{error}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 