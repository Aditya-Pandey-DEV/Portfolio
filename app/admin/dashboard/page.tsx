'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { FaUser, FaBriefcase, FaGraduationCap, FaLaptopCode, FaCertificate, FaTools, FaLink, FaImage, FaSearch, FaLock, FaPalette, FaCog, FaExclamationTriangle } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [showDefaultCredentials, setShowDefaultCredentials] = useState(false);
  const [defaultCredentials, setDefaultCredentials] = useState<{ email: string; password: string } | null>(null);
  const [envCheck, setEnvCheck] = useState<{
    isConfigured: boolean;
    missingVars: string[];
  }>({ isConfigured: true, missingVars: [] });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      checkDefaultCredentials();
      checkEnvironmentVariables();
      setLoading(false);
    }
  }, [status, router]);

  const checkEnvironmentVariables = async () => {
    try {
      const response = await fetch('/api/admin/env-check');
      const data = await response.json();
      setEnvCheck(data);
    } catch (error) {
      console.error('Error checking environment variables:', error);
      setEnvCheck({ isConfigured: false, missingVars: ['Error checking environment variables'] });
    }
  };

  const checkDefaultCredentials = async () => {
    try {
      const response = await fetch('/api/admin/credentials');
      const data = await response.json();
      
      // Only show default credentials if user has changed them
      if (data.isDefault && !data.allowDefaultLogin) {
        setDefaultCredentials({
          email: 'admin@example.com',
          password: 'Admin@123'
        });
        setShowDefaultCredentials(true);
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const menuItems = [
    {
      title: 'System Setup',
      description: 'Configure environment variables and system settings',
      icon: <FaCog className="h-6 w-6 text-red-600 dark:text-red-400" />,
      href: '/setup',
      priority: 1
    },
    {
      title: 'Admin Credentials',
      description: 'Update your admin login email and password',
      icon: <FaLock className="h-6 w-6 text-red-600 dark:text-red-400" />,
      href: '/admin/dashboard/credentials',
      priority: 2
    },
    {
      title: 'Profile Image',
      description: 'Update your profile picture displayed in the hero section',
      icon: <FaImage className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/profile-image',
      priority: 3
    },
    {
      title: 'Personal Information',
      description: 'Update your name, title, contact details, and about section',
      icon: <FaUser className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/personal',
      priority: 3
    },
    {
      title: 'Social Links',
      description: 'Manage your social media and external profile links',
      icon: <FaLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/social-links',
      priority: 3
    },
    {
      title: 'Experience',
      description: 'Manage your work experience and job history',
      icon: <FaBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/experience',
      priority: 3
    },
    {
      title: 'Education',
      description: 'Update your academic qualifications and achievements',
      icon: <FaGraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/education',
      priority: 3
    },
    {
      title: 'Projects',
      description: 'Showcase your projects, work samples, and portfolio items',
      icon: <FaLaptopCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/projects',
      priority: 3
    },
    {
      title: 'Certifications',
      description: 'Add professional certifications and achievements',
      icon: <FaCertificate className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/certifications',
      priority: 3
    },
    {
      title: 'Skills',
      description: 'Update your technical and professional skills',
      icon: <FaTools className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/skills',
      priority: 3
    },
    {
      title: 'SEO Settings',
      description: 'Optimize your site for search engines and social media sharing',
      icon: <FaSearch className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/seo',
      priority: 3
    },
    {
      title: 'Theme',
      description: 'Customize your portfolio\'s look and feel',
      icon: <FaPalette className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/theme',
      priority: 3
    },
  ].sort((a, b) => a.priority - b.priority);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        {!envCheck.isConfigured && (
          <Alert variant="destructive" className="mb-6">
            <FaExclamationTriangle className="h-4 w-4" />
            <AlertTitle>Environment Variables Not Configured</AlertTitle>
            <AlertDescription>
              <p className="mb-2">The following environment variables are missing:</p>
              <ul className="list-disc list-inside mb-2">
                {envCheck.missingVars.map((varName) => (
                  <li key={varName}>{varName}</li>
                ))}
              </ul>
              <p>Please configure these variables in the System Setup page to ensure proper functionality.</p>
            </AlertDescription>
          </Alert>
        )}

        {showDefaultCredentials && defaultCredentials && (
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              First Time Login
            </h2>
            <p className="text-yellow-700 dark:text-yellow-300 mb-2">
              Please change your default credentials for security:
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Email:</span> {defaultCredentials.email}
              </p>
              <p className="text-sm">
                <span className="font-medium">Password:</span> {defaultCredentials.password}
              </p>
            </div>
            <Link href="/admin/dashboard/credentials">
              <Button variant="outline" size="sm" className="mt-3">
                Change Credentials
              </Button>
            </Link>
          </div>
        )}
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Manage your portfolio content
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <Link href="/">
              <Button variant="outline" size="sm">
                View Site
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push('/api/auth/signout')}
            >
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.title}
              href={item.href}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 