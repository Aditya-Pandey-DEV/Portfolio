'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaLink, FaDownload, FaStar, FaCodeBranch } from 'react-icons/fa';

interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  icon: string;
  metadata?: {
    name?: string;
    bio?: string;
    location?: string;
    repositories?: Array<{
      name: string;
      description: string;
      url: string;
      stars: number;
      language: string;
      topics: string[];
    }>;
    experience?: Array<{
      title: string;
      company: string;
      duration: string;
      description: string;
    }>;
    certifications?: Array<{
      name: string;
      issuer: string;
      date: string;
    }>;
    totalSolved?: number;
    acceptanceRate?: number;
    followers?: number;
    publicRepos?: number;
    easySolved?: number;
    mediumSolved?: number;
    hardSolved?: number;
    ranking?: string;
  };
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
  headline?: string;
  experience?: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  totalSolved?: number;
  acceptanceRate?: number;
  username?: string;
  ranking?: string;
  repositories?: Array<{
    name: string;
    description: string;
    url: string;
    stars: number;
    language: string;
    topics: string[];
  }>;
  experience?: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  totalSolved?: number;
  acceptanceRate?: number;
  followers?: number;
  publicRepos?: number;
  headline?: string;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
}

const PLATFORM_OPTIONS = [
  { value: 'github', label: 'GitHub', icon: 'FaGithub' },
  { value: 'linkedin', label: 'LinkedIn', icon: 'FaLinkedin' },
  { value: 'instagram', label: 'Instagram', icon: 'FaInstagram' },
  { value: 'twitter', label: 'Twitter/X', icon: 'FaTwitter' },
  { value: 'leetcode', label: 'LeetCode', icon: 'FaCode' },
  { value: 'other', label: 'Other', icon: 'FaLink' },
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
  const [refreshing, setRefreshing] = useState<{ [key: string]: boolean }>({});

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
        // Convert old icon format to new format if needed
        const convertedData = data.map((link: SocialLink) => ({
          ...link,
          icon: convertIconName(link.icon)
        }));
        setSocialLinks(convertedData);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching social links:', error);
      setLoading(false);
    }
  };

  // Helper function to convert old icon format to new format
  const convertIconName = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'fab fa-github': 'FaGithub',
      'fab fa-linkedin-in': 'FaLinkedin',
      'fab fa-instagram': 'FaInstagram',
      'fab fa-twitter': 'FaTwitter',
      'fas fa-code': 'FaCode',
      'fas fa-link': 'FaLink',
      'fas fa-envelope': 'FaLink'
    };
    return iconMap[iconName] || 'FaLink';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSocialLink((prev) => {
      if (name === 'platform') {
        const selectedPlatform = PLATFORM_OPTIONS.find(option => option.value === value);
        return {
          ...prev,
          [name]: value,
          icon: selectedPlatform ? selectedPlatform.icon : 'FaLink'
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
      
      const importData = await response.json();
      
      // Create a new social link with the imported data
      const platformInfo = PLATFORM_OPTIONS.find(p => p.value === importPlatform);
      const newLink: SocialLink = {
        platform: importPlatform,
        url: importData.url,
        icon: platformInfo ? platformInfo.icon : 'FaLink',
        metadata: {
          name: importData.name,
          bio: importData.bio,
          location: importData.location,
          repositories: importData.repositories,
          experience: importData.experience,
          certifications: importData.certifications,
          totalSolved: importData.totalSolved,
          acceptanceRate: importData.acceptanceRate,
          followers: importData.followers,
          publicRepos: importData.publicRepos,
          easySolved: importData.easySolved,
          mediumSolved: importData.mediumSolved,
          hardSolved: importData.hardSolved,
          ranking: importData.ranking
        }
      };
      
      // Add the new link to the list
      setSocialLinks([...socialLinks, newLink]);
      
      // Reset import form
      setImportUsername('');
      
      // Show success message with platform-specific details
      let successMessage = `Successfully imported ${importPlatform} profile!`;
      if (importPlatform === 'github') {
        successMessage += `\n• Name: ${importData.name || 'N/A'}`;
        successMessage += `\n• Bio: ${importData.bio || 'N/A'}`;
        successMessage += `\n• Location: ${importData.location || 'N/A'}`;
        successMessage += `\n• Followers: ${importData.followers || 0}`;
        successMessage += `\n• Public Repos: ${importData.publicRepos || 0}`;
        if (importData.repositories) {
          successMessage += `\n• Imported ${importData.repositories.length} repositories`;
        }
      } else if (importPlatform === 'linkedin') {
        successMessage += `\n• Name: ${importData.name || 'N/A'}`;
        successMessage += `\n• Headline: ${importData.headline || 'N/A'}`;
        successMessage += `\n• Location: ${importData.location || 'N/A'}`;
        if (importData.experience) {
          successMessage += `\n• Imported ${importData.experience.length} experiences`;
        }
        if (importData.certifications) {
          successMessage += `\n• Imported ${importData.certifications.length} certifications`;
        }
      } else if (importPlatform === 'leetcode') {
        successMessage += `\n• Username: ${importData.username}`;
        successMessage += `\n• Total Solved: ${importData.totalSolved || 0}`;
        successMessage += `\n• Acceptance Rate: ${importData.acceptanceRate || 0}%`;
        successMessage += `\n• Ranking: ${importData.ranking || 'N/A'}`;
        successMessage += `\n• Easy: ${importData.easySolved || 0}`;
        successMessage += `\n• Medium: ${importData.mediumSolved || 0}`;
        successMessage += `\n• Hard: ${importData.hardSolved || 0}`;
      }
      
      alert(successMessage);
      
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

  // Add refresh function
  const refreshSocialLink = async (index: number) => {
    const link = socialLinks[index];
    if (!link.url) return;

    setRefreshing(prev => ({ ...prev, [index]: true }));
    
    try {
      // Extract username from URL
      const url = new URL(link.url);
      const username = url.pathname.split('/').pop();
      
      if (!username) {
        throw new Error('Invalid URL format');
      }

      const response = await fetch('/api/admin/social-import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: link.platform,
          username: username,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to refresh data');
      }

      const importData = await response.json();
      
      // Update the link with fresh data
      const updatedSocialLinks = [...socialLinks];
      updatedSocialLinks[index] = {
        ...link,
        metadata: {
          name: importData.name,
          bio: importData.bio,
          location: importData.location,
          repositories: importData.repositories,
          experience: importData.experience,
          certifications: importData.certifications,
          totalSolved: importData.totalSolved,
          acceptanceRate: importData.acceptanceRate,
          followers: importData.followers,
          publicRepos: importData.publicRepos,
          easySolved: importData.easySolved,
          mediumSolved: importData.mediumSolved,
          hardSolved: importData.hardSolved,
          ranking: importData.ranking
        }
      };
      
      setSocialLinks(updatedSocialLinks);
      alert('Profile data refreshed successfully!');
    } catch (error) {
      console.error('Refresh error:', error);
      alert(error instanceof Error ? error.message : 'Failed to refresh profile data');
    } finally {
      setRefreshing(prev => ({ ...prev, [index]: false }));
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {getIconComponent(link.icon)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {PLATFORM_OPTIONS.find(p => p.value === link.platform)?.label || link.platform}
                        </p>
                        {link.metadata?.name && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {link.metadata.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => refreshSocialLink(index)}
                        disabled={refreshing[index]}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        {refreshing[index] ? (
                          <span className="flex items-center">
                            <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-current rounded-full"></span>
                            Refreshing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <FaDownload className="h-4 w-4 mr-2" />
                            Refresh
                          </span>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSocialLink(index)}
                        className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <FaTrash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
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

                    {/* Display platform-specific metadata */}
                    {link.metadata && (
                      <div className="mt-4 space-y-4">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {link.metadata.name && (
                            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{link.metadata.name}</p>
                            </div>
                          )}
                          {link.metadata.location && (
                            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{link.metadata.location}</p>
                            </div>
                          )}
                          {link.metadata.bio && (
                            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{link.metadata.bio}</p>
                            </div>
                          )}
                        </div>

                        {/* GitHub Stats */}
                        {link.platform === 'github' && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {link.metadata.followers !== undefined && (
                              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Followers</h4>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{link.metadata.followers}</p>
                              </div>
                            )}
                            {link.metadata.publicRepos !== undefined && (
                              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Public Repos</h4>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{link.metadata.publicRepos}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* LeetCode Stats */}
                        {link.platform === 'leetcode' && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {link.metadata.totalSolved !== undefined && (
                                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Solved</h4>
                                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{link.metadata.totalSolved}</p>
                                </div>
                              )}
                              {link.metadata.acceptanceRate !== undefined && (
                                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Acceptance Rate</h4>
                                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{link.metadata.acceptanceRate}%</p>
                                </div>
                              )}
                              {link.metadata.ranking !== undefined && (
                                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Ranking</h4>
                                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{link.metadata.ranking}</p>
                                </div>
                              )}
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              {link.metadata.easySolved !== undefined && (
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                  <h4 className="text-sm font-medium text-green-700 dark:text-green-400">Easy</h4>
                                  <p className="text-lg font-semibold text-green-900 dark:text-green-300">{link.metadata.easySolved}</p>
                                </div>
                              )}
                              {link.metadata.mediumSolved !== undefined && (
                                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                  <h4 className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Medium</h4>
                                  <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-300">{link.metadata.mediumSolved}</p>
                                </div>
                              )}
                              {link.metadata.hardSolved !== undefined && (
                                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                  <h4 className="text-sm font-medium text-red-700 dark:text-red-400">Hard</h4>
                                  <p className="text-lg font-semibold text-red-900 dark:text-red-300">{link.metadata.hardSolved}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Repositories */}
                        {link.metadata.repositories && link.metadata.repositories.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Top Repositories</h4>
                            <div className="space-y-2">
                              {link.metadata.repositories.map((repo, i) => (
                                <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                      {repo.name}
                                    </a>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                      <span className="flex items-center">
                                        <FaStar className="h-3 w-3 mr-1" />
                                        {repo.stars}
                                      </span>
                                      {repo.language && (
                                        <span className="flex items-center">
                                          <FaCodeBranch className="h-3 w-3 mr-1" />
                                          {repo.language}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {repo.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{repo.description}</p>
                                  )}
                                  {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      {repo.topics.map((topic, j) => (
                                        <span key={j} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Experience */}
                        {link.metadata.experience && link.metadata.experience.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Experience</h4>
                            <div className="space-y-2">
                              {link.metadata.experience.map((exp, i) => (
                                <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <p className="font-medium">{exp.title}</p>
                                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                                  <p className="text-gray-500 dark:text-gray-500 text-xs">{exp.duration}</p>
                                  {exp.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.description}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Certifications */}
                        {link.metadata.certifications && link.metadata.certifications.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Certifications</h4>
                            <div className="space-y-2">
                              {link.metadata.certifications.map((cert, i) => (
                                <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                  <p className="font-medium">{cert.name}</p>
                                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                                  <p className="text-gray-500 dark:text-gray-500 text-xs">{cert.date}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
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