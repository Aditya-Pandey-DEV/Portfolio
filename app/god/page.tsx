'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import { Loader2, Eye, EyeOff, Copy } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function GodPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin-direct');
    } else if (status === 'authenticated') {
      setLoading(false);
    }
  }, [status, router]);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await fetch('/api/admin-access');
        const data = await response.json();
        if (data.success) {
          setCredentials(data.credentials);
        }
      } catch (error) {
        console.error('Error fetching credentials:', error);
        toast({
          title: "Error",
          description: "Failed to fetch credentials",
          variant: "destructive",
        });
      }
    };

    if (status === 'authenticated') {
      fetchCredentials();
    }
  }, [status, toast]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Credentials copied to clipboard",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">God Mode</h1>
        <Button variant="outline" onClick={() => router.push('/admin/dashboard')}>
          Go to Dashboard
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current User</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Email</Label>
              <div className="flex items-center gap-2">
                <Input
                  value={session?.user?.email || 'Not available'}
                  readOnly
                  className="bg-muted"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleCopy(session?.user?.email || '')}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {credentials && (
              <div>
                <Label>Admin Credentials</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={credentials.email}
                      readOnly
                      className="bg-muted"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopy(credentials.email)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={credentials.password}
                      readOnly
                      className="bg-muted"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopy(credentials.password)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/startup')}
            >
              System Startup
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/api/auth/signout')}
            >
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 