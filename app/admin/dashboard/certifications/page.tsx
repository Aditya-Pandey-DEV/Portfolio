'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { ImageUpload } from '@/app/components/ui/image-upload';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';

interface Certification {
  id?: string;
  name: string;
  issuer: string;
  date: string;
  image?: string;
}

export default function CertificationsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [newCertification, setNewCertification] = useState<Certification>({
    name: '',
    issuer: '',
    date: '',
    image: ''
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchCertifications();
    }
  }, [status, router]);

  const fetchCertifications = async () => {
    try {
      const response = await fetch('/api/admin/certifications');
      if (response.ok) {
        const data = await response.json();
        // Format dates for form inputs
        const formattedData = data.map((cert: any) => ({
          ...cert,
          date: cert.date ? new Date(cert.date).toISOString().split('T')[0] : ''
        }));
        setCertifications(formattedData);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching certifications:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCertification((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (url: string, index?: number) => {
    if (typeof index === 'number') {
      const updatedCertifications = [...certifications];
      updatedCertifications[index].image = url;
      setCertifications(updatedCertifications);
    } else {
      setNewCertification((prev) => ({
        ...prev,
        image: url,
      }));
    }
  };

  const addCertification = () => {
    if (
      newCertification.name.trim() && 
      newCertification.issuer.trim() && 
      newCertification.date
    ) {
      setCertifications([...certifications, { ...newCertification }]);
      setNewCertification({
        name: '',
        issuer: '',
        date: '',
        image: ''
      });
    }
  };

  const removeCertification = (index: number) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/certifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certifications }),
      });
      
      if (response.ok) {
        alert('Certifications saved successfully!');
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
            Certifications
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your professional certifications
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {certifications.map((certification, index) => (
                <div 
                  key={certification.id || index} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeCertification(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Certification Name
                      </label>
                      <Input
                        value={certification.name}
                        onChange={(e) => {
                          const updatedCertifications = [...certifications];
                          updatedCertifications[index].name = e.target.value;
                          setCertifications(updatedCertifications);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Issuing Organization
                      </label>
                      <Input
                        value={certification.issuer}
                        onChange={(e) => {
                          const updatedCertifications = [...certifications];
                          updatedCertifications[index].issuer = e.target.value;
                          setCertifications(updatedCertifications);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Date Received
                    </label>
                    <Input
                      type="date"
                      value={certification.date}
                      onChange={(e) => {
                        const updatedCertifications = [...certifications];
                        updatedCertifications[index].date = e.target.value;
                        setCertifications(updatedCertifications);
                      }}
                      className="w-full md:w-1/2"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <ImageUpload
                      label="Certificate Image"
                      value={certification.image || ''}
                      onChange={(url) => handleImageChange(url, index)}
                    />
                  </div>
                </div>
              ))}
              
              <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Certification
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Certification Name
                    </label>
                    <Input
                      name="name"
                      value={newCertification.name}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Issuing Organization
                    </label>
                    <Input
                      name="issuer"
                      value={newCertification.issuer}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date Received
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={newCertification.date}
                    onChange={handleInputChange}
                    className="w-full md:w-1/2"
                  />
                </div>
                
                <div className="mb-4">
                  <ImageUpload
                    label="Certificate Image"
                    value={newCertification.image || ''}
                    onChange={(url) => handleImageChange(url)}
                  />
                </div>
                
                <Button 
                  type="button"
                  variant="outline"
                  onClick={addCertification}
                  className="w-full"
                >
                  <FaPlus className="h-4 w-4 mr-2" />
                  Add Certification
                </Button>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save All Certifications'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 