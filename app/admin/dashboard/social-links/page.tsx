'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaLink, FaDownload } from 'react-icons/fa';

interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  icon: string;
}

interface ImportResponse {
  platform: string;
  url: string;
  name?: string;
  bio?: string;
  location?: string;
  avatar?: string;
  followers?: number;
  publicRepos?: number;
}

const PLATFORM_OPTIONS = [
  { value: 'github', label: 'GitHub', icon: FaGithub },
  { value: 'linkedin', label: 'LinkedIn', icon: FaLinkedin },
  { value: 'instagram', label: 'Instagram', icon: FaInstagram },
  { value: 'twitter', label: 'Twitter/X', icon: FaTwitter },
  { value: 'leetcode', label: 'LeetCode', icon: FaCode },
  { value: 'other', label: 'Other', icon: FaLink },
];

export default function SocialLinksPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [newSocialLink, setNewSocialLink] = useState<SocialLink>({
    platform: 'github',
    url: '',
    icon: 'FaGithub'
  });
  const [importUsername, setImportUsername] = useState('');
  const [importPlatform, setImportPlatform] = useState('github');
  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchSocialLinks();
    }
  }, [status, router]);

  const fetchSocialLinks = async () => {
    try {
      const response = await fetch('/api/admin/social-links');
      if (response.ok) {
        const data = await response.json();
        setSocialLinks(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching social links:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSocialLink((prev) => {
      if (name === 'platform') {
        const selectedPlatform = PLATFORM_OPTIONS.find(option => option.value === value);
        return {
          ...prev,
          [name]: value,
          icon: selectedPlatform ? selectedPlatform.icon.name : 'FaLink'
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addSocialLink = () => {
    if (newSocialLink.platform && newSocialLink.url.trim()) {
      setSocialLinks([...socialLinks, { ...newSocialLink }]);
      setNewSocialLink({
        platform: 'github',
        url: '',
        icon: 'FaGithub'
      });
    }
  };

  const removeSocialLink = (index: number) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks.splice(index, 1);
    setSocialLinks(updatedSocialLinks);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/social-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ socialLinks }),
      });
      
      if (response.ok) {
        alert('Social links saved successfully!');
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

  const importFromSocialPlatform = async () => {
    if (!importUsername || !importPlatform) return;
    
    setImporting(true);
    setImportError('');
    
    try {
      const response = await fetch('/api/admin/social-import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: importPlatform,
          username: importUsername,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        setImportError(errorData.error || `Failed to import from ${importPlatform}`);
        setImporting(false);
        return;
      }
      
      const importData: ImportResponse = await response.json();
      
      // Create a new social link with the imported data
      const platformInfo = PLATFORM_OPTIONS.find(p => p.value === importPlatform);
      const newLink: SocialLink = {
        platform: importPlatform,
        url: importData.url,
        icon: platformInfo ? platformInfo.icon.name : 'FaLink'
      };
      
      // Add the new link to the list
      setSocialLinks([...socialLinks, newLink]);
      
      // Reset import form
      setImportUsername('');
      
      // Show confirmation
      alert(`Successfully imported ${importPlatform} profile!`);
      
    } catch (error) {
      console.error('Import error:', error);
      setImportError('An unexpected error occurred');
    } finally {
      setImporting(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FaGithub': return <FaGithub />;
      case 'FaLinkedin': return <FaLinkedin />;
      case 'FaInstagram': return <FaInstagram />;
      case 'FaTwitter': return <FaTwitter />;
      case 'FaCode': return <FaCode />;
      default: return <FaLink />;
    }
  };

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
            Social Links
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Add and manage your social media and external profile links
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Import from Social Platforms
          </h2>
          
          <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Platform
                </label>
                <select
                  value={importPlatform}
                  onChange={(e) => setImportPlatform(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                >
                  <option value="github">GitHub</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="leetcode">LeetCode</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Username
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value={importUsername}
                    onChange={(e) => setImportUsername(e.target.value)}
                    placeholder="Enter username (not full URL)"
                    className="flex-grow"
                  />
                  <Button 
                    onClick={importFromSocialPlatform}
                    disabled={importing || !importUsername}
                    className="whitespace-nowrap"
                  >
                    {importing ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                        Importing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FaDownload className="mr-2 h-4 w-4" />
                        Import
                      </span>
                    )}
                  </Button>
                </div>
                {importError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">{importError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <div 
                  key={link.id || index} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeSocialLink(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {getIconComponent(link.icon)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {PLATFORM_OPTIONS.find(p => p.value === link.platform)?.label || link.platform}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      URL
                    </label>
                    <Input
                      value={link.url}
                      onChange={(e) => {
                        const updatedSocialLinks = [...socialLinks];
                        updatedSocialLinks[index].url = e.target.value;
                        setSocialLinks(updatedSocialLinks);
                      }}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
              ))}
              
              <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Social Link
                </h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Platform
                  </label>
                  <select
                    name="platform"
                    value={newSocialLink.platform}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  >
                    {PLATFORM_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    URL
                  </label>
                  <Input
                    name="url"
                    value={newSocialLink.url}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                
                <Button 
                  type="button"
                  variant="outline"
                  onClick={addSocialLink}
                  className="w-full"
                >
                  <FaPlus className="h-4 w-4 mr-2" />
                  Add Social Link
                </Button>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  type="submit" 
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Social Links'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 