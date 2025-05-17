'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { FaUser, FaBriefcase, FaGraduationCap, FaLaptopCode, FaCertificate, FaTools, FaLink, FaImage, FaSearch, FaLock, FaPalette, FaCog } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      setLoading(false);
    }
  }, [status, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const menuItems = [
    {
      title: 'Admin Credentials',
      description: 'Update your admin login email and password',
      icon: <FaLock className="h-6 w-6 text-red-600 dark:text-red-400" />,
      href: '/admin/dashboard/credentials',
    },
    {
      title: 'Profile Image',
      description: 'Update your profile picture displayed in the hero section',
      icon: <FaImage className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/profile-image',
    },
    {
      title: 'Personal Information',
      description: 'Update your name, title, contact details, and about section',
      icon: <FaUser className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/personal',
    },
    {
      title: 'Social Links',
      description: 'Manage your social media and external profile links',
      icon: <FaLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/social-links',
    },
    {
      title: 'Experience',
      description: 'Manage your work experience and job history',
      icon: <FaBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/experience',
    },
    {
      title: 'Education',
      description: 'Update your academic qualifications and achievements',
      icon: <FaGraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/education',
    },
    {
      title: 'Projects',
      description: 'Showcase your projects, work samples, and portfolio items',
      icon: <FaLaptopCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/projects',
    },
    {
      title: 'Certifications',
      description: 'Add professional certifications and achievements',
      icon: <FaCertificate className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/certifications',
    },
    {
      title: 'Skills',
      description: 'Update your technical and professional skills',
      icon: <FaTools className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/skills',
    },
    {
      title: 'SEO Settings',
      description: 'Optimize your site for search engines and social media sharing',
      icon: <FaSearch className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/seo',
    },
    {
      title: 'Theme',
      description: 'Customize your portfolio\'s look and feel',
      icon: <FaPalette className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      href: '/admin/dashboard/theme',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="mt-8">
          <Link href="/setup">
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaCog className="h-5 w-5" />
                  System Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Initialize and configure your portfolio system
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
} 