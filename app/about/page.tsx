'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  id: string;
  name: string;
  category: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  gpa: string | null;
}

interface ResumeData {
  about: string;
  skills: Skill[];
  education: Education[];
}

export default function About() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch('/api/resume');
        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }
        const data = await response.json();
        setResumeData({
          about: data.about,
          skills: data.skills || [],
          education: data.education || [],
        });
      } catch (err) {
        console.error('Error fetching resume data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  // Helper function to format dates
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                About Me
              </h1>
              <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {resumeData && (
                <>
                  <motion.p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {resumeData.about}
                  </motion.p>
                  
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {resumeData.education.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Education
                        </h3>
                        {resumeData.education.map((edu) => (
                          <div key={edu.id} className="border-l-2 border-blue-600 pl-4 py-2 mb-4">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              {edu.degree}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {edu.field}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {edu.institution}, {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </p>
                            {edu.gpa && (
                              <p className="text-gray-600 dark:text-gray-400">
                                GPA: {edu.gpa}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                          <span 
                            key={skill.id} 
                            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 