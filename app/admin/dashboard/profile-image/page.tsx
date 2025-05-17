'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { ImageUpload } from '@/app/components/ui/image-upload';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaUser } from 'react-icons/fa';

export default function ProfileImagePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileImage, setProfileImage] = useState<string>('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchProfileImage();
    }
  }, [status, router]);

  const fetchProfileImage = async () => {
    try {
      const response = await fetch('/api/admin/profile-image');
      if (response.ok) {
        const data = await response.json();
        setProfileImage(data.profileImage || '');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile image:', error);
      setLoading(false);
    }
  };

  const handleImageChange = (url: string) => {
    setProfileImage(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/profile-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profileImage }),
      });
      
      if (response.ok) {
        alert('Profile image updated successfully!');
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
            Profile Image
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your profile image
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Current Profile Image
                  </h3>
                  
                  <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mx-auto">
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt="Your profile"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <FaUser className="h-24 w-24" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Upload New Image
                  </h3>
                  
                  <ImageUpload
                    value={profileImage}
                    onChange={handleImageChange}
                  />
                  
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Recommended: Square image, at least 500x500 pixels
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Profile Image'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 