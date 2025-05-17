'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface ThemePreviewProps {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  cardColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  borderColor?: string;
  headingColor?: string;
  linkColor?: string;
  
  // Sizing props
  borderRadius?: number;
  buttonRadius?: number;
  cardRadius?: number;
}

export default function ThemePreview({
  primaryColor,
  backgroundColor,
  textColor,
  cardColor,
  buttonColor,
  buttonTextColor,
  borderColor,
  headingColor,
  linkColor,
  borderRadius,
  buttonRadius,
  cardRadius,
}: ThemePreviewProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  
  const previewStyles = {
    '--preview-primary': primaryColor,
    '--preview-background': backgroundColor,
    '--preview-text': textColor,
    '--preview-card': cardColor,
    '--preview-button': buttonColor,
    '--preview-button-text': buttonTextColor,
    '--preview-border': borderColor,
    '--preview-heading': headingColor,
    '--preview-link': linkColor,
    '--preview-border-radius': borderRadius ? `${borderRadius}px` : undefined,
    '--preview-button-radius': buttonRadius ? `${buttonRadius}px` : undefined,
    '--preview-card-radius': cardRadius ? `${cardRadius}px` : undefined,
  } as React.CSSProperties;
  
  return (
    <div 
      className="preview-container border rounded-lg overflow-hidden shadow-sm"
      style={{
        ...previewStyles,
        backgroundColor: 'var(--preview-background, var(--background))',
        color: 'var(--preview-text, var(--foreground))',
        borderColor: 'var(--preview-border, var(--border))',
        borderRadius: 'var(--preview-border-radius, var(--border-radius))',
        padding: '1rem',
      }}
    >
      <div className="preview-header flex justify-between items-center mb-4">
        <h3 
          style={{ 
            color: 'var(--preview-heading, var(--heading))' 
          }}
          className="font-semibold"
        >
          Theme Preview
        </h3>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full"
          style={{
            backgroundColor: 'var(--preview-card, var(--card))',
            color: 'var(--preview-primary, var(--primary))',
          }}
        >
          {currentTheme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>
      
      <div className="preview-content mb-4">
        <Card
          style={{
            backgroundColor: 'var(--preview-card, var(--card))',
            borderColor: 'var(--preview-border, var(--border))',
            borderRadius: 'var(--preview-card-radius, var(--card-radius))',
          }}
        >
          <CardHeader className="pb-2">
            <CardTitle 
              className="text-sm"
              style={{ 
                color: 'var(--preview-heading, var(--heading))' 
              }}
            >
              Profile Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <p className="text-xs">
                This is sample text to preview the theme appearance.
              </p>
              <a 
                href="#" 
                className="text-xs"
                style={{ 
                  color: 'var(--preview-link, var(--link))' 
                }}
              >
                Sample link
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="preview-buttons flex flex-wrap gap-2">
        <Button 
          size="sm"
          style={{
            backgroundColor: 'var(--preview-button, var(--button))',
            color: 'var(--preview-button-text, var(--button-text))',
            borderRadius: 'var(--preview-button-radius, var(--button-radius))',
          }}
        >
          Primary Button
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          style={{
            borderColor: 'var(--preview-primary, var(--primary))',
            color: 'var(--preview-primary, var(--primary))',
            borderRadius: 'var(--preview-button-radius, var(--button-radius))',
          }}
        >
          Outline Button
        </Button>
      </div>
      
      <div className="preview-icons flex justify-center mt-4 space-x-2">
        <a 
          href="#"
          className="rounded-full p-2 inline-flex"
          style={{
            backgroundColor: 'var(--preview-card, var(--card))',
            color: 'var(--preview-primary, var(--primary))',
          }}
        >
          <FaGithub size={14} />
        </a>
        <a 
          href="#"
          className="rounded-full p-2 inline-flex"
          style={{
            backgroundColor: 'var(--preview-card, var(--card))',
            color: 'var(--preview-primary, var(--primary))',
          }}
        >
          <FaLinkedin size={14} />
        </a>
        <a 
          href="#"
          className="rounded-full p-2 inline-flex"
          style={{
            backgroundColor: 'var(--preview-card, var(--card))',
            color: 'var(--preview-primary, var(--primary))',
          }}
        >
          <FaEnvelope size={14} />
        </a>
      </div>
    </div>
  );
} 