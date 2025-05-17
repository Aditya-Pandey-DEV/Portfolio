'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { ImageUpload } from '@/app/components/ui/image-upload';
import Link from 'next/link';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';

interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string;
  link: string;
  image?: string;
}

export default function ProjectsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    title: '',
    description: '',
    technologies: '',
    link: '',
    image: ''
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchProjects();
    }
  }, [status, router]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (url: string, index?: number) => {
    if (typeof index === 'number') {
      const updatedProjects = [...projects];
      updatedProjects[index].image = url;
      setProjects(updatedProjects);
    } else {
      setNewProject((prev) => ({
        ...prev,
        image: url,
      }));
    }
  };

  const addProject = () => {
    if (
      newProject.title.trim() && 
      newProject.description.trim() && 
      newProject.technologies.trim()
    ) {
      setProjects([...projects, { ...newProject }]);
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        link: '',
        image: ''
      });
    }
  };

  const removeProject = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projects }),
      });
      
      if (response.ok) {
        alert('Projects saved successfully!');
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
            Projects
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Update your portfolio projects
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={project.id || index} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative"
                >
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Title
                    </label>
                    <Input
                      value={project.title}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].title = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <ImageUpload
                      label="Project Image"
                      value={project.image || ''}
                      onChange={(url) => handleImageChange(url, index)}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <Textarea
                      value={project.description}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].description = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      className="w-full"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Technologies (comma separated)
                    </label>
                    <Input
                      value={project.technologies}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].technologies = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      className="w-full"
                      placeholder="e.g. React, Node.js, MongoDB"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Link (GitHub, Demo, etc.)
                    </label>
                    <Input
                      value={project.link}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].link = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      className="w-full"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
              ))}
              
              <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Project
                </h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Title
                  </label>
                  <Input
                    name="title"
                    value={newProject.title}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div className="mb-4">
                  <ImageUpload
                    label="Project Image"
                    value={newProject.image || ''}
                    onChange={(url) => handleImageChange(url)}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    className="w-full"
                    rows={3}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Technologies (comma separated)
                  </label>
                  <Input
                    name="technologies"
                    value={newProject.technologies}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="e.g. React, Node.js, MongoDB"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Link (GitHub, Demo, etc.)
                  </label>
                  <Input
                    name="link"
                    value={newProject.link}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="https://github.com/username/project"
                  />
                </div>
                
                <Button 
                  type="button" 
                  onClick={addProject}
                  variant="outline" 
                  className="w-full"
                >
                  <FaPlus className="mr-2 h-4 w-4" />
                  Add Project
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