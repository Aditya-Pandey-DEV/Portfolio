'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';

interface Skill {
  id?: string;
  name: string;
  category: string;
}

export default function SkillsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState<Skill>({ name: '', category: '' });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchSkills();
    }
  }, [status, router]);

  const fetchSkills = async () => {
    try {
      const response = await fetch('/api/admin/skills');
      if (response.ok) {
        const data = await response.json();
        setSkills(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setLoading(false);
    }
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = () => {
    if (newSkill.name.trim() && newSkill.category.trim()) {
      setSkills([...skills, { ...newSkill }]);
      setNewSkill({ name: '', category: '' });
    }
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skills }),
      });
      
      if (response.ok) {
        alert('Skills saved successfully!');
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
            Skills
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your technical and professional skills
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Current Skills
              </h2>
              
              {skills.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 italic">No skills added yet.</p>
              ) : (
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-md p-3">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </span>
                      </div>
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeSkill(index)}
                        aria-label="Remove skill"
                      >
                        <FaTrash className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Add New Skill
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  id="name"
                  name="name"
                  value={newSkill.name}
                  onChange={handleSkillChange}
                  placeholder="e.g. JavaScript"
                />
                
                <Input
                  label="Category"
                  id="category"
                  name="category"
                  value={newSkill.category}
                  onChange={handleSkillChange}
                  placeholder="e.g. Programming"
                />
              </div>
              
              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={addSkill}
                  disabled={!newSkill.name || !newSkill.category}
                >
                  <FaPlus className="mr-2 h-4 w-4" />
                  Add Skill
                </Button>
              </div>
            </div>
            
            <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                type="submit"
                isLoading={saving}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save All Skills'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 