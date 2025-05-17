'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { FaDatabase, FaCloudUploadAlt, FaKey, FaCheck, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

export default function SetupPage() {
  const [envConfig, setEnvConfig] = useState({
    DATABASE_URL: '',
    NEXTAUTH_SECRET: generateRandomSecret(),
    NEXTAUTH_URL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
    CLOUDINARY_CLOUD_NAME: '',
    CLOUDINARY_API_KEY: '',
    CLOUDINARY_API_SECRET: ''
  });
  
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  // Generate a random secret for NextAuth
  function generateRandomSecret() {
    return Array.from(Array(32), () => Math.floor(Math.random() * 36).toString(36)).join('');
  }
  
  // Handle input changes
  const handleChange = (key: string, value: string) => {
    setEnvConfig(prev => ({ ...prev, [key]: value }));
  };
  
  // Copy env contents to clipboard
  const copyToClipboard = () => {
    const envString = Object.entries(envConfig)
      .map(([key, value]) => `${key}="${value}"`)
      .join('\n');
      
    navigator.clipboard.writeText(envString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Define setup steps
  const steps = [
    {
      title: "MongoDB Setup",
      icon: <FaDatabase className="h-6 w-6" />,
      fields: ["DATABASE_URL"],
      description: "Connect your MongoDB database to store your portfolio content.",
      links: [
        {
          name: "Create MongoDB Atlas Account",
          url: "https://www.mongodb.com/cloud/atlas/register"
        },
        {
          name: "Get Connection String Guide",
          url: "https://www.mongodb.com/docs/guides/atlas/connection-string/"
        }
      ]
    },
    {
      title: "Authentication Setup",
      icon: <FaKey className="h-6 w-6" />,
      fields: ["NEXTAUTH_SECRET", "NEXTAUTH_URL"],
      description: "Set up NextAuth.js for secure admin login.",
      links: [
        {
          name: "NextAuth.js Documentation",
          url: "https://next-auth.js.org/configuration/options"
        }
      ]
    },
    {
      title: "Cloudinary Setup",
      icon: <FaCloudUploadAlt className="h-6 w-6" />,
      fields: ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"],
      description: "Configure Cloudinary for image uploads on your portfolio.",
      links: [
        {
          name: "Create Cloudinary Account",
          url: "https://cloudinary.com/users/register/free"
        },
        {
          name: "Find Your API Keys",
          url: "https://cloudinary.com/documentation/how_to_integrate_cloudinary#get_familiar_with_the_dashboard"
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Portfolio Setup Wizard
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Configure your environment variables to get your portfolio up and running
            </p>
          </div>
          
          {/* Step Progress */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${index <= activeStep ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'} cursor-pointer transition-colors duration-300`}>
                    {step.icon}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${index <= activeStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Current Step Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              {steps[activeStep].icon}
              <span className="ml-2">{steps[activeStep].title}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {steps[activeStep].description}
            </p>
            
            <div className="space-y-6">
              {steps[activeStep].fields.map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {field}
                  </label>
                  <input
                    type={field.includes('SECRET') || field.includes('KEY') ? 'password' : 'text'}
                    value={envConfig[field as keyof typeof envConfig]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder={`Enter your ${field.replace(/_/g, ' ').toLowerCase()}`}
                  />
                </div>
              ))}
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Helpful Resources
                </h3>
                <div className="space-y-2">
                  {steps[activeStep].links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <FaExternalLinkAlt className="h-3 w-3 mr-2" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              Previous
            </Button>
            
            {activeStep < steps.length - 1 ? (
              <Button
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={copyToClipboard}
                className="relative"
              >
                {copied ? (
                  <>
                    <FaCheck className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="h-4 w-4 mr-2" />
                    Copy .env Configuration
                  </>
                )}
              </Button>
            )}
          </div>
          
          {/* Final Step - Complete Config and Preview */}
          {activeStep === steps.length - 1 && (
            <div className="mt-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Your .env Configuration
              </h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded-md font-mono text-sm whitespace-pre overflow-x-auto">
                {Object.entries(envConfig).map(([key, value]) => (
                  <div key={key}>
                    {key}="{value}"
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-1">
                    Next Steps:
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Copy this configuration to a <code>.env</code> file in your project root</li>
                    <li>For Vercel deployment, add these as Environment Variables in your project settings</li>
                    <li>Run <code>npm run dev</code> to start your development server</li>
                    <li>Visit <code>/api/seed</code> to populate your database with initial data</li>
                  </ol>
                </div>
                
                <div className="pt-4">
                  <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Go to Homepage →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 