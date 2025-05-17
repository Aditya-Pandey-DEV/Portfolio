'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from 'next/link';

interface SetupStatus {
  database: {
    status: string;
    message?: string;
  };
  auth: {
    status: string;
    message?: string;
  };
  storage: {
    status: string;
    message?: string;
  };
  steps: Array<{
    name: string;
    status: string;
    message?: string;
  }>;
}

export default function SetupPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [setupStatus, setSetupStatus] = useState<SetupStatus | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      checkStatus();
    }
  }, [status, router]);

  const checkStatus = async () => {
    try {
      const response = await fetch('/api/setup/status');
      const data = await response.json();
      setSetupStatus(data);
    } catch (error) {
      console.error('Error checking status:', error);
      toast({
        title: "Error",
        description: "Failed to check system status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInitialize = async () => {
    setInitializing(true);
    try {
      const response = await fetch('/api/setup/initialize', {
        method: 'POST',
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "System initialized successfully",
        });
        checkStatus();
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.message || "Failed to initialize system",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to communicate with server",
        variant: "destructive",
      });
    } finally {
      setInitializing(false);
    }
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
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/dashboard">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">System Setup</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Database Status</Label>
                <p className="text-sm text-muted-foreground">
                  {setupStatus?.database.status || 'Unknown'}
                  {setupStatus?.database.message && (
                    <span className="ml-2 text-yellow-600">
                      ({setupStatus.database.message})
                    </span>
                  )}
                </p>
              </div>

              <div>
                <Label>Authentication Status</Label>
                <p className="text-sm text-muted-foreground">
                  {setupStatus?.auth.status || 'Unknown'}
                  {setupStatus?.auth.message && (
                    <span className="ml-2 text-yellow-600">
                      ({setupStatus.auth.message})
                    </span>
                  )}
                </p>
              </div>

              <div>
                <Label>Storage Status</Label>
                <p className="text-sm text-muted-foreground">
                  {setupStatus?.storage.status || 'Unknown'}
                  {setupStatus?.storage.message && (
                    <span className="ml-2 text-yellow-600">
                      ({setupStatus.storage.message})
                    </span>
                  )}
                </p>
              </div>

              <div>
                <Label>Setup Steps</Label>
                <div className="mt-2 space-y-2">
                  {setupStatus?.steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        step.status === 'completed' ? 'bg-green-500' : 
                        step.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <span className="text-sm">{step.name}</span>
                      {step.message && (
                        <span className="text-sm text-muted-foreground">
                          ({step.message})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Initialize System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This will initialize all necessary system components and create required database tables.
                Make sure you have configured your environment variables before proceeding.
              </p>
              <Button 
                onClick={handleInitialize} 
                disabled={initializing}
                className="w-full"
              >
                {initializing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Initializing...
                  </>
                ) : (
                  'Initialize System'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 