'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { useToast } from "@/app/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { ImageUpload } from '@/app/components/ui/image-upload';
import Link from 'next/link';
import { FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
}

export default function SEOPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seoData, setSeoData] = useState<SEOData>({
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCard: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    canonicalUrl: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchSEOData();
    }
  }, [status, router]);

  const fetchSEOData = async () => {
    try {
      const response = await fetch('/api/admin/seo');
      if (response.ok) {
        const data = await response.json();
        setSeoData(data);
      }
    } catch (error) {
      console.error('Error fetching SEO data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch SEO settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seoData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "SEO settings updated successfully",
        });
        // Refresh the page to show updated metadata
        window.location.reload();
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.message || "Failed to update SEO settings",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while saving",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (url: string, field: string) => {
    setSeoData((prev) => ({
      ...prev,
      [field]: url,
    }));
  };

  // Helper component for field label with tooltip
  const FieldLabel = ({ label, tooltip }: { label: string; tooltip: string }) => (
    <div className="flex items-center gap-1 mb-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative group">
        <FaQuestionCircle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <div className="absolute z-10 invisible group-hover:visible bg-black text-white text-xs rounded py-1 px-2 left-0 -bottom-[80px] w-60">
          {tooltip}
        </div>
      </div>
    </div>
  );

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
        <Button
          variant="outline"
          size="icon"
          onClick={() => router.back()}
        >
          <Loader2 className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">SEO Settings</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Page Title</Label>
              <Input
                id="title"
                name="title"
                value={seoData.title}
                onChange={handleChange}
                placeholder="Your Portfolio - Web Developer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                name="description"
                value={seoData.description}
                onChange={handleChange}
                placeholder="A brief description of your portfolio"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                name="keywords"
                value={seoData.keywords}
                onChange={handleChange}
                placeholder="web developer, portfolio, react, next.js"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Graph</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ogTitle">OG Title</Label>
              <Input
                id="ogTitle"
                name="ogTitle"
                value={seoData.ogTitle}
                onChange={handleChange}
                placeholder="Your Portfolio Title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ogDescription">OG Description</Label>
              <Textarea
                id="ogDescription"
                name="ogDescription"
                value={seoData.ogDescription}
                onChange={handleChange}
                placeholder="Description for social media sharing"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ogImage">OG Image URL</Label>
              <Input
                id="ogImage"
                name="ogImage"
                value={seoData.ogImage}
                onChange={handleChange}
                placeholder="https://example.com/og-image.jpg"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Twitter Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="twitterCard">Card Type</Label>
              <Input
                id="twitterCard"
                name="twitterCard"
                value={seoData.twitterCard}
                onChange={handleChange}
                placeholder="summary_large_image"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitterTitle">Twitter Title</Label>
              <Input
                id="twitterTitle"
                name="twitterTitle"
                value={seoData.twitterTitle}
                onChange={handleChange}
                placeholder="Your Portfolio Title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitterDescription">Twitter Description</Label>
              <Textarea
                id="twitterDescription"
                name="twitterDescription"
                value={seoData.twitterDescription}
                onChange={handleChange}
                placeholder="Description for Twitter sharing"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitterImage">Twitter Image URL</Label>
              <Input
                id="twitterImage"
                name="twitterImage"
                value={seoData.twitterImage}
                onChange={handleChange}
                placeholder="https://example.com/twitter-image.jpg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
} 