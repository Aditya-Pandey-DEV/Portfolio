'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaExternalLinkAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fallbackResumeData } from '@/app/lib/fallbackData';

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

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  link: string | null;
  image: string | null;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string | null;
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

interface ResumeData {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  profileImage: string | null;
  skills: Skill[];
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  socialLinks: SocialLink[];
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        console.log('Fetching resume data...');
        const response = await fetch('/api/resume', {
          // Add cache control headers
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('API response not OK:', response.status, errorData);
          throw new Error(`Failed to fetch resume data: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Resume data fetched successfully');
        setResumeData(data);
      } catch (err) {
        console.error('Error fetching resume data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Handle error state with fallback option
  if (error || !resumeData) {
    if (useFallback) {
      // Using fallback data
      console.log('Using fallback data');
      return renderContent(fallbackResumeData);
    }
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error || 'Unable to load portfolio data'}</p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center">
            <Button onClick={() => window.location.reload()}>Retry</Button>
            <Button variant="outline" onClick={() => setUseFallback(true)}>
              Use Demo Data
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return renderContent(resumeData);
  
  // Helper function to render content
  function renderContent(data: ResumeData) {
    // Helper function to format dates
    const formatDate = (dateString: string | null): string => {
      if (!dateString) return 'Present';
      
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    // Helper function to get social icon component
    const getSocialIcon = (iconName: string) => {
      switch (iconName) {
        case 'FaGithub': return <FaGithub className="h-5 w-5" />;
        case 'FaLinkedin': return <FaLinkedin className="h-5 w-5" />;
        case 'FaInstagram': return <FaInstagram className="h-5 w-5" />;
        case 'FaTwitter': return <FaTwitter className="h-5 w-5" />;
        case 'FaCode': return <FaCode className="h-5 w-5" />;
        default: return <FaExternalLinkAlt className="h-5 w-5" />;
      }
    };
    
  return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <motion.div
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hi, I'm {data.name}
                  </h1>
                  <h2 className="mt-3 text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
                    {data.title}
                  </h2>
                  <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
                    {data.about}
                  </p>
                  
                  {data.socialLinks.length > 0 && (
                    <div className="mt-6 flex space-x-4">
                      {data.socialLinks.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
            target="_blank"
            rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          {getSocialIcon(link.icon)}
                          <span className="sr-only">{link.platform}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="#contact">
                      <Button size="lg">
                        Get in Touch
                      </Button>
                    </Link>
                    <Link href="/projects">
                      <Button variant="outline" size="lg">
                        View Projects
                      </Button>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
                    src={data.profileImage || "/profile-placeholder.jpg"}
                    alt={data.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  About Me
                </h2>
                <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
              </motion.div>
              
              <div className="max-w-3xl mx-auto">
                <motion.p 
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {data.about}
                </motion.p>
                
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {data.education.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Education
                      </h3>
                      {data.education.map((edu) => (
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
                      {data.skills.map((skill) => (
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
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Experience
                </h2>
                <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
              </motion.div>
              
              <div className="max-w-3xl mx-auto space-y-10">
                {data.experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Projects
                </h2>
                <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {project.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.split(',').map((tech, techIndex) => (
                          <span 
                            key={`${project.id}-${techIndex}`} 
                            className="inline-block px-2 py-1 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <div className="mt-4 flex justify-between">
                          <a 
                            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
                            <FaExternalLinkAlt className="mr-1 h-3 w-3" />
                            <span>View Project</span>
          </a>
        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          {data.certifications.length > 0 && (
            <section id="certifications" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Certifications
                  </h2>
                  <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {data.certifications.map((certification, index) => (
                    <motion.div
                      key={certification.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {certification.image && (
                        <div className="relative h-40 w-full">
          <Image
                            src={certification.image}
                            alt={certification.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {certification.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">
                          {certification.issuer}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {new Date(certification.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long'
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Contact Me
                </h2>
                <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
              </motion.div>
              
              <div className="max-w-3xl mx-auto">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Get in Touch
                      </h3>
                      <div className="space-y-4">
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                          <a href={`mailto:${data.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                            {data.email}
                          </a>
                        </p>
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <FaPhone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                          <a href={`tel:${data.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                            {data.phone}
                          </a>
                        </p>
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <FaMapMarkerAlt className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                          {data.location}
                        </p>
                      </div>
                      
                      {data.socialLinks.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Connect with me
                          </h4>
                          <div className="flex space-x-4">
                            {data.socialLinks.map((link) => (
                              <a
                                key={link.id}
                                href={link.url}
          target="_blank"
          rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                title={link.platform}
                              >
                                {getSocialIcon(link.icon)}
                                <span className="sr-only">{link.platform}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Send a Message
                      </h3>
                      <form className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                            required
                          ></textarea>
                        </div>
                        <Link href="/contact">
                          <Button type="button" className="w-full">
                            Send Message
                          </Button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  );
  }
}
