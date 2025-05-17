'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface StartupStatus {
  database: {
    url: string;
    status: string;
  };
  theme: {
    id: string;
    name: string | null;
    createdAt: string;
  };
  steps: Array<{
    name: string;
    status: string;
    message?: string;
  }>;
}

export default function StartupPage() {
  const [status, setStatus] = useState<StartupStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [passcode, setPasscode] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      const response = await fetch('/api/init');
      const data = await response.json();
      setStatus(data);
    } catch (error) {
      console.error('Error checking status:', error);
      toast({
        title: "Error",
        description: "Failed to check startup status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasscodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Startup sequence initiated successfully",
        });
        checkStatus();
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.message || "Failed to initiate startup sequence",
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
      setLoading(false);
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
      <h1 className="text-3xl font-bold mb-6">System Startup</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Database Status</Label>
              <p className="text-sm text-muted-foreground">
                {status?.database.status || 'Unknown'}
              </p>
            </div>
            
            <div>
              <Label>Theme Status</Label>
              <p className="text-sm text-muted-foreground">
                {status?.theme.name || 'Default Theme'}
              </p>
            </div>

            <div>
              <Label>Startup Steps</Label>
              <div className="mt-2 space-y-2">
                {status?.steps.map((step, index) => (
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
          <form onSubmit={handlePasscodeSubmit} className="space-y-4">
            <div>
              <Label htmlFor="passcode">Passcode</Label>
              <Input
                id="passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Initializing...
                </>
              ) : (
                'Initialize System'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 