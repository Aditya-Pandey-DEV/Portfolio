'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaArrowLeft, FaLock } from 'react-icons/fa';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface CredentialsForm {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function CredentialsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formValues, setFormValues] = useState<CredentialsForm>({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchUserData();
    }
  }, [status, router]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/admin/credentials');
      if (response.ok) {
        const data = await response.json();
        setFormValues((prev) => ({
          ...prev,
          name: data.name || '',
          email: data.email || '',
        }));
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Check if passwords match when changing password
    if (formValues.newPassword && formValues.newPassword !== formValues.confirmPassword) {
      setMessage({
        type: 'error',
        text: 'New password and confirmation do not match',
      });
      return false;
    }

    // Require current password when changing password
    if (formValues.newPassword && !formValues.currentPassword) {
      setMessage({
        type: 'error',
        text: 'Current password is required to set a new password',
      });
      return false;
    }

    // Email validation
    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
      setMessage({
        type: 'error',
        text: 'Please enter a valid email address',
      });
      return false;
    }

    // Password strength validation (if changing password)
    if (
      formValues.newPassword &&
      (formValues.newPassword.length < 8 ||
        !/[A-Z]/.test(formValues.newPassword) ||
        !/[a-z]/.test(formValues.newPassword) ||
        !/[0-9]/.test(formValues.newPassword))
    ) {
      setMessage({
        type: 'error',
        text: 'Password must be at least 8 characters and include uppercase, lowercase, and numbers',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSaving(true);
    setMessage({ type: '', text: '' });
    
    try {
      // Only send necessary fields
      const dataToSend = {
        name: formValues.name,
        email: formValues.email,
        ...(formValues.newPassword
          ? {
              currentPassword: formValues.currentPassword,
              newPassword: formValues.newPassword,
            }
          : {}),
      };
      
      const response = await fetch('/api/admin/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Credentials updated successfully',
        });
        
        // Clear password fields after successful update
        setFormValues((prev) => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }));
      } else {
        const error = await response.json();
        setMessage({
          type: 'error',
          text: error.error || 'Failed to update credentials',
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage({
        type: 'error',
        text: 'An unexpected error occurred',
      });
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
            Admin Credentials
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your name, email, and password
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-2xl">
          {message.text && (
            <div 
              className={`mb-6 p-4 rounded-md text-sm ${
                message.type === 'error'
                  ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                  : 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              }`}
            >
              {message.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Name"
                id="name"
                name="name"
                type="text"
                required
                value={formValues.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                required
                value={formValues.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                  <FaLock className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Change Password (Optional)
                </h3>
                
                <Input
                  label="Current Password"
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={formValues.currentPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                
                <Input
                  label="New Password"
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={formValues.newPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                
                <Input
                  label="Confirm New Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                isLoading={saving}
                disabled={saving}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 