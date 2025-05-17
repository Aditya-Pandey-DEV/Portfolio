'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';

interface Experience {
  id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  description: string;
}

export default function ExperiencePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    company: '',
    position: '',
    startDate: '',
    endDate: null,
    description: ''
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchExperiences();
    }
  }, [status, router]);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('/api/admin/experience');
      if (response.ok) {
        const data = await response.json();
        // Format dates for form inputs
        const formattedData = data.map((exp: any) => ({
          ...exp,
          startDate: exp.startDate ? new Date(exp.startDate).toISOString().split('T')[0] : '',
          endDate: exp.endDate ? new Date(exp.endDate).toISOString().split('T')[0] : null
        }));
        setExperiences(formattedData);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching experiences:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExperience = () => {
    if (
      newExperience.company.trim() && 
      newExperience.position.trim() && 
      newExperience.startDate && 
      newExperience.description.trim()
    ) {
      setExperiences([...experiences, { ...newExperience }]);
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: null,
        description: ''
      });
    }
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ experiences }),
      });
      
      if (response.ok) {
        alert('Experiences saved successfully!');
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
            Experience
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your work experience
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id || index} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company
                      </label>
                      <Input
                        value={experience.company}
                        onChange={(e) => {
                          const newExperiences = [...experiences];
                          newExperiences[index].company = e.target.value;
                          setExperiences(newExperiences);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Position
                      </label>
                      <Input
                        value={experience.position}
                        onChange={(e) => {
                          const newExperiences = [...experiences];
                          newExperiences[index].position = e.target.value;
                          setExperiences(newExperiences);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Start Date
                      </label>
                      <Input
                        type="date"
                        value={experience.startDate}
                        onChange={(e) => {
                          const newExperiences = [...experiences];
                          newExperiences[index].startDate = e.target.value;
                          setExperiences(newExperiences);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        End Date (Leave blank for current)
                      </label>
                      <Input
                        type="date"
                        value={experience.endDate || ''}
                        onChange={(e) => {
                          const newExperiences = [...experiences];
                          newExperiences[index].endDate = e.target.value || null;
                          setExperiences(newExperiences);
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <Textarea
                      value={experience.description}
                      onChange={(e) => {
                        const newExperiences = [...experiences];
                        newExperiences[index].description = e.target.value;
                        setExperiences(newExperiences);
                      }}
                      className="w-full"
                      rows={3}
                      required
                    />
                  </div>
                </div>
              ))}
              
              <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Experience
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={newExperience.company}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Position
                    </label>
                    <Input
                      name="position"
                      value={newExperience.position}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={newExperience.startDate}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      End Date (Leave blank for current)
                    </label>
                    <Input
                      type="date"
                      name="endDate"
                      value={newExperience.endDate || ''}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={newExperience.description}
                    onChange={handleInputChange}
                    className="w-full"
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="button" 
                  onClick={addExperience}
                  variant="outline" 
                  className="w-full"
                >
                  <FaPlus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
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