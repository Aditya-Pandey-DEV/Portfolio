'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { useToast } from '@/app/components/ui/use-toast';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useResumeName } from '@/app/hooks/useResumeData';

interface ResumeContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: Array<{
    id: string;
    platform: string;
    url: string;
    icon: string;
  }>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ResumeContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { name: ownerName } = useResumeName();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/resume');
        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }
        const data = await response.json();
        setContactInfo({
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          socialLinks: data.socialLinks || []
        });
      } catch (err) {
        console.error('Error fetching contact info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }
      
      // Success - show toast and reset form
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully. We'll get back to you soon!",
        variant: "default",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(true);
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                Contact {ownerName}
              </h1>
              <div className="mt-1 h-1 w-20 bg-blue-600 mx-auto"></div>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {contactInfo && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Get in Touch
                      </h3>
                      <div className="space-y-4">
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                          <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                            {contactInfo.email}
                          </a>
                        </p>
                        {contactInfo.phone && (
                          <p className="flex items-center text-gray-700 dark:text-gray-300">
                            <FaPhone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                            <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                              {contactInfo.phone}
                            </a>
                          </p>
                        )}
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <FaMapMarkerAlt className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                          {contactInfo.location}
                        </p>
                      </div>
                      
                      {contactInfo.socialLinks.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Connect with me
                          </h4>
                          <div className="flex space-x-4">
                            {contactInfo.socialLinks.map((link) => (
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
                      {formSubmitted ? (
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                          <h4 className="font-medium text-green-800 dark:text-green-300">Thank you for your message!</h4>
                          <p className="mt-2 text-sm text-green-700 dark:text-green-400">
                            We've received your inquiry and will get back to you as soon as possible.
                          </p>
                          <button
                            onClick={() => setFormSubmitted(false)}
                            className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Send another message
                          </button>
                        </div>
                      ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 border ${
                                formErrors.name 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              } rounded-md dark:bg-gray-700 dark:text-white`}
                            />
                            {formErrors.name && (
                              <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                            )}
                          </div>
                          <div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 border ${
                                formErrors.email 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              } rounded-md dark:bg-gray-700 dark:text-white`}
                            />
                            {formErrors.email && (
                              <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                            )}
                          </div>
                          <div>
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              rows={4}
                              value={formData.message}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 border ${
                                formErrors.message 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              } rounded-md dark:bg-gray-700 dark:text-white`}
                            ></textarea>
                            {formErrors.message && (
                              <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                            )}
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 