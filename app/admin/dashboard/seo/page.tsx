'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
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
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
}

export default function SEOPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seoData, setSeoData] = useState<SEOData>({
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
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
        setSeoData({
          title: data.title || '',
          description: data.description || '',
          keywords: data.keywords || '',
          ogTitle: data.ogTitle || '',
          ogDescription: data.ogDescription || '',
          ogImage: data.ogImage || '',
          twitterTitle: data.twitterTitle || '',
          twitterDescription: data.twitterDescription || '',
          twitterImage: data.twitterImage || '',
          canonicalUrl: data.canonicalUrl || '',
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
        alert('SEO settings saved successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || 'Failed to save'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link 
            href="/admin/dashboard" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            SEO Settings
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Optimize your portfolio for search engines and social media
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Basic SEO Section */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Basic SEO
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <FieldLabel 
                      label="Page Title"
                      tooltip="The title that appears in search engine results and browser tabs. Ideal length: 50-60 characters."
                    />
                    <Input
                      name="title"
                      value={seoData.title}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe | Full Stack Developer"
                      maxLength={60}
                    />
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {seoData.title.length}/60 characters
                    </div>
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="Meta Description"
                      tooltip="A brief summary of your page content that appears in search results. Ideal length: 150-160 characters."
                    />
                    <Textarea
                      name="description"
                      value={seoData.description}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe is a full stack developer specializing in React, Node.js, and more. Check out my portfolio to see my projects and experience."
                      maxLength={160}
                      rows={3}
                    />
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {seoData.description.length}/160 characters
                    </div>
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="Keywords"
                      tooltip="Comma-separated keywords relevant to your portfolio. Less important for SEO nowadays, but still useful as a reference."
                    />
                    <Input
                      name="keywords"
                      value={seoData.keywords}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="full stack developer, web developer, react, node.js, javascript, portfolio"
                    />
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="Canonical URL"
                      tooltip="The preferred URL of your portfolio if there are multiple URLs with the same content."
                    />
                    <Input
                      name="canonicalUrl"
                      value={seoData.canonicalUrl}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="https://www.yourdomain.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Open Graph Section */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Open Graph (Social Media)
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  These settings control how your portfolio appears when shared on Facebook, LinkedIn, and other platforms.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <FieldLabel 
                      label="OG Title"
                      tooltip="The title that appears when your portfolio is shared on social media."
                    />
                    <Input
                      name="ogTitle"
                      value={seoData.ogTitle}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe | Full Stack Developer Portfolio"
                    />
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="OG Description"
                      tooltip="The description that appears when your portfolio is shared on social media."
                    />
                    <Textarea
                      name="ogDescription"
                      value={seoData.ogDescription}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Check out my projects and experience as a full stack developer"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="OG Image"
                      tooltip="The image that appears when your portfolio is shared on social media. Recommended size: 1200x630 pixels."
                    />
                    <ImageUpload
                      value={seoData.ogImage}
                      onChange={(url) => handleImageChange(url, 'ogImage')}
                    />
                  </div>
                </div>
              </div>
              
              {/* Twitter Card Section */}
              <div className="pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Twitter Card
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  These settings control how your portfolio appears when shared on Twitter.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <FieldLabel 
                      label="Twitter Title"
                      tooltip="The title that appears when your portfolio is shared on Twitter."
                    />
                    <Input
                      name="twitterTitle"
                      value={seoData.twitterTitle}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe | Web Developer"
                    />
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="Twitter Description"
                      tooltip="The description that appears when your portfolio is shared on Twitter."
                    />
                    <Textarea
                      name="twitterDescription"
                      value={seoData.twitterDescription}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Full Stack Developer Portfolio"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <FieldLabel 
                      label="Twitter Image"
                      tooltip="The image that appears when your portfolio is shared on Twitter. Recommended size: 1200x600 pixels."
                    />
                    <ImageUpload
                      value={seoData.twitterImage}
                      onChange={(url) => handleImageChange(url, 'twitterImage')}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={saving}
                  className="min-w-[120px]"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 