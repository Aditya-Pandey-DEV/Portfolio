'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';

interface Education {
  id?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string | null;
  gpa?: string | null;
}

export default function EducationPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [education, setEducation] = useState<Education[]>([]);
  const [newEducation, setNewEducation] = useState<Education>({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: null,
    gpa: ''
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchEducation();
    }
  }, [status, router]);

  const fetchEducation = async () => {
    try {
      const response = await fetch('/api/admin/education');
      if (response.ok) {
        const data = await response.json();
        // Format dates for form inputs
        const formattedData = data.map((edu: any) => ({
          ...edu,
          startDate: edu.startDate ? new Date(edu.startDate).toISOString().split('T')[0] : '',
          endDate: edu.endDate ? new Date(edu.endDate).toISOString().split('T')[0] : null
        }));
        setEducation(formattedData);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching education:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addEducation = () => {
    if (
      newEducation.institution.trim() && 
      newEducation.degree.trim() && 
      newEducation.field.trim() && 
      newEducation.startDate
    ) {
      setEducation([...education, { ...newEducation }]);
      setNewEducation({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: null,
        gpa: ''
      });
    }
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ education }),
      });
      
      if (response.ok) {
        alert('Education saved successfully!');
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
            Education
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your educational background
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={edu.id || index} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Institution
                      </label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => {
                          const updatedEducation = [...education];
                          updatedEducation[index].institution = e.target.value;
                          setEducation(updatedEducation);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Degree
                      </label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => {
                          const updatedEducation = [...education];
                          updatedEducation[index].degree = e.target.value;
                          setEducation(updatedEducation);
                        }}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Field of Study
                    </label>
                    <Input
                      value={edu.field}
                      onChange={(e) => {
                        const updatedEducation = [...education];
                        updatedEducation[index].field = e.target.value;
                        setEducation(updatedEducation);
                      }}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Start Date
                      </label>
                      <Input
                        type="date"
                        value={edu.startDate}
                        onChange={(e) => {
                          const updatedEducation = [...education];
                          updatedEducation[index].startDate = e.target.value;
                          setEducation(updatedEducation);
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
                        value={edu.endDate || ''}
                        onChange={(e) => {
                          const updatedEducation = [...education];
                          updatedEducation[index].endDate = e.target.value || null;
                          setEducation(updatedEducation);
                        }}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        GPA (Optional)
                      </label>
                      <Input
                        value={edu.gpa || ''}
                        onChange={(e) => {
                          const updatedEducation = [...education];
                          updatedEducation[index].gpa = e.target.value || null;
                          setEducation(updatedEducation);
                        }}
                        className="w-full"
                        placeholder="e.g. 3.8/4.0"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Education
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Institution
                    </label>
                    <Input
                      name="institution"
                      value={newEducation.institution}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Degree
                    </label>
                    <Input
                      name="degree"
                      value={newEducation.degree}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Field of Study
                  </label>
                  <Input
                    name="field"
                    value={newEducation.field}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={newEducation.startDate}
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
                      value={newEducation.endDate || ''}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GPA (Optional)
                    </label>
                    <Input
                      name="gpa"
                      value={newEducation.gpa || ''}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="e.g. 3.8/4.0"
                    />
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  onClick={addEducation}
                  variant="outline" 
                  className="w-full"
                >
                  <FaPlus className="mr-2 h-4 w-4" />
                  Add Education
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