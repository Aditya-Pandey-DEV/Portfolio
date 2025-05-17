'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeContextType {
  refreshTheme: () => Promise<void>;
  isRefreshing: boolean;
}

interface ThemeSettings {
  id: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  headingColor: string;
  linkColor: string;
  buttonColor: string;
  buttonTextColor: string;
  cardColor: string;
  borderColor: string;
  
  darkPrimaryColor: string;
  darkSecondaryColor: string;
  darkAccentColor: string;
  darkBackgroundColor: string;
  darkTextColor: string;
  darkHeadingColor: string;
  darkLinkColor: string;
  darkButtonColor: string;
  darkButtonTextColor: string;
  darkCardColor: string;
  darkBorderColor: string;
  
  headingFont: string;
  bodyFont: string;
  
  borderRadius: number;
  buttonRadius: number;
  cardRadius: number;
}

// Default theme as fallback
const defaultTheme: ThemeSettings = {
  id: 'default',
  primaryColor: '#3b82f6',
  secondaryColor: '#1e40af',
  accentColor: '#f59e0b',
  backgroundColor: '#ffffff',
  textColor: '#171717',
  headingColor: '#111827',
  linkColor: '#3b82f6',
  buttonColor: '#3b82f6',
  buttonTextColor: '#ffffff',
  cardColor: '#f9fafb',
  borderColor: '#e5e7eb',
  
  darkPrimaryColor: '#3b82f6',
  darkSecondaryColor: '#60a5fa',
  darkAccentColor: '#f59e0b',
  darkBackgroundColor: '#0a0a0a',
  darkTextColor: '#f3f4f6',
  darkHeadingColor: '#f9fafb',
  darkLinkColor: '#60a5fa',
  darkButtonColor: '#3b82f6',
  darkButtonTextColor: '#ffffff',
  darkCardColor: '#1f2937',
  darkBorderColor: '#374151',
  
  headingFont: 'Inter',
  bodyFont: 'Inter',
  
  borderRadius: 8,
  buttonRadius: 8,
  cardRadius: 12
};

const ThemeContext = createContext<ThemeContextType>({
  refreshTheme: async () => {}, 
  isRefreshing: false
});

export function useThemeSettings() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to refresh theme settings from API
  const refreshTheme = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // First try to fetch theme
      console.log('Refreshing theme settings...');
      const response = await fetch('/api/theme');
      
      if (!response.ok) {
        console.warn(`Theme refresh encountered a non-OK response: ${response.status}`);
        // Don't throw, just log the warning
      } else {
        const settings = await response.json();
        console.log('Theme refreshed successfully');
        applyThemeSettings(settings);
      }
    } catch (error) {
      console.error('Error refreshing theme, but continuing:', error);
      // Don't throw the error further, just log it
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Apply CSS variables based on theme settings
  const applyThemeSettings = (settings: any) => {
    if (!settings) return;
    
    const root = document.documentElement;
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    try {
      if (isDarkMode) {
        root.style.setProperty('--background', settings.darkBackgroundColor || '#0a0a0a');
        root.style.setProperty('--foreground', settings.darkTextColor || '#f3f4f6');
        root.style.setProperty('--primary', settings.darkPrimaryColor || '#3b82f6');
        root.style.setProperty('--heading', settings.darkHeadingColor || '#f9fafb');
        root.style.setProperty('--link', settings.darkLinkColor || '#60a5fa');
        root.style.setProperty('--button', settings.darkButtonColor || '#3b82f6');
        root.style.setProperty('--button-text', settings.darkButtonTextColor || '#ffffff');
        root.style.setProperty('--card', settings.darkCardColor || '#1f2937');
        root.style.setProperty('--border', settings.darkBorderColor || '#374151');
      } else {
        root.style.setProperty('--background', settings.backgroundColor || '#ffffff');
        root.style.setProperty('--foreground', settings.textColor || '#171717');
        root.style.setProperty('--primary', settings.primaryColor || '#3b82f6');
        root.style.setProperty('--heading', settings.headingColor || '#111827');
        root.style.setProperty('--link', settings.linkColor || '#3b82f6');
        root.style.setProperty('--button', settings.buttonColor || '#3b82f6');
        root.style.setProperty('--button-text', settings.buttonTextColor || '#ffffff');
        root.style.setProperty('--card', settings.cardColor || '#f9fafb');
        root.style.setProperty('--border', settings.borderColor || '#e5e7eb');
      }
      
      // Global variables
      root.style.setProperty('--heading-font', settings.headingFont || 'Inter');
      root.style.setProperty('--body-font', settings.bodyFont || 'Inter');
      root.style.setProperty('--border-radius', `${settings.borderRadius || 8}px`);
      root.style.setProperty('--button-radius', `${settings.buttonRadius || 8}px`);
      root.style.setProperty('--card-radius', `${settings.cardRadius || 12}px`);
    } catch (error) {
      console.error('Error applying theme settings:', error);
      // Continue execution, don't throw
    }
  };

  // Initial theme load
  useEffect(() => {
    refreshTheme().catch(error => {
      console.error('Initial theme refresh failed, but continuing:', error);
      // Don't throw the error, just log it
    });
  }, [refreshTheme]);

  return (
    <ThemeContext.Provider value={{ refreshTheme, isRefreshing }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
} 