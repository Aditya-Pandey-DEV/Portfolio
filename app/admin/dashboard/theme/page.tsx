'use client';

import { useState, useEffect } from 'react';
import { FaPalette, FaCheck, FaUndo, FaMagic } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useToast } from '@/app/components/ui/use-toast';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { colorPalettes, applyPaletteToTheme, ColorPalette } from '@/app/lib/colorPalettes';
import ThemePreview from '@/app/components/ThemePreview';
import { useThemeSettings } from '@/app/providers/ThemeProvider';

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

const defaultTheme: Partial<ThemeSettings> = {
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
  cardRadius: 12,
};

const fontOptions = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto Mono', label: 'Roboto Mono' },
  { value: 'Fira Code', label: 'Fira Code' },
];

export default function ThemePage() {
  const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();
  const { toast } = useToast();
  const [showPalettes, setShowPalettes] = useState(false);
  const { refreshTheme } = useThemeSettings();
  
  // Fetch theme settings
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await fetch('/api/theme');
        if (response.ok) {
          const data = await response.json();
          setThemeSettings(data);
        } else {
          throw new Error('Failed to fetch theme settings');
        }
      } catch (error) {
        console.error('Error fetching theme:', error);
        toast({
          title: 'Error',
          description: 'Failed to load theme settings',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTheme();
  }, [toast]);
  
  // Handle form input changes
  const handleChange = (field: keyof ThemeSettings, value: string | number) => {
    if (themeSettings) {
      setThemeSettings({
        ...themeSettings,
        [field]: value,
      });
    }
  };
  
  // Apply a color palette
  const applyPalette = (palette: ColorPalette) => {
    if (!themeSettings) return;
    
    const updatedTheme = applyPaletteToTheme(palette, themeSettings);
    setThemeSettings(updatedTheme);
    
    toast({
      title: 'Theme Applied',
      description: `${palette.name} theme has been applied. Click Save to keep these changes.`,
    });
    
    // Preview the theme
    applyThemeVariables(updatedTheme);
  };
  
  // Save theme settings
  const saveTheme = async () => {
    if (!themeSettings) return;
    
    setIsSaving(true);
    
    try {
      const response = await fetch('/api/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(themeSettings),
      });
      
      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Theme settings saved successfully',
        });
        
        // Apply CSS variables
        applyThemeVariables(themeSettings);
        
        // Try to refresh global theme context, but don't throw if it fails
        try {
          await refreshTheme();
        } catch (refreshError) {
          console.error('Theme refresh failed, but settings were saved:', refreshError);
          // Don't show an error toast here since the save was successful
        }
      } else {
        // Handle API error but don't throw
        console.error('Failed to save theme settings, status:', response.status);
        
        // Try to get more details from the response
        let errorDetails = '';
        try {
          const errorResponse = await response.json();
          errorDetails = errorResponse.details || errorResponse.error || '';
        } catch (jsonError) {
          // If we can't parse the JSON, just use the status code
        }
        
        toast({
          title: 'Error',
          description: `Failed to save theme settings. ${errorDetails ? 'Details: ' + errorDetails : 'Please try again.'}`,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error saving theme:', error);
      toast({
        title: 'Error',
        description: 'Network error while saving theme settings. Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  // Reset to defaults
  const resetToDefaults = () => {
    if (themeSettings && themeSettings.id) {
      setThemeSettings({
        ...defaultTheme,
        id: themeSettings.id,
      } as ThemeSettings);
      
      toast({
        title: 'Reset',
        description: 'Theme settings reset to defaults. Click Save to apply.',
      });
    }
  };
  
  // Apply theme variables
  const applyThemeVariables = (settings: ThemeSettings) => {
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
      root.style.setProperty('--background', settings.darkBackgroundColor);
      root.style.setProperty('--foreground', settings.darkTextColor);
      root.style.setProperty('--primary', settings.darkPrimaryColor);
      root.style.setProperty('--heading', settings.darkHeadingColor);
      root.style.setProperty('--link', settings.darkLinkColor);
      root.style.setProperty('--button', settings.darkButtonColor);
      root.style.setProperty('--button-text', settings.darkButtonTextColor);
      root.style.setProperty('--card', settings.darkCardColor);
      root.style.setProperty('--border', settings.darkBorderColor);
    } else {
      root.style.setProperty('--background', settings.backgroundColor);
      root.style.setProperty('--foreground', settings.textColor);
      root.style.setProperty('--primary', settings.primaryColor);
      root.style.setProperty('--heading', settings.headingColor);
      root.style.setProperty('--link', settings.linkColor);
      root.style.setProperty('--button', settings.buttonColor);
      root.style.setProperty('--button-text', settings.buttonTextColor);
      root.style.setProperty('--card', settings.cardColor);
      root.style.setProperty('--border', settings.borderColor);
    }
    
    // Global variables
    root.style.setProperty('--heading-font', settings.headingFont);
    root.style.setProperty('--body-font', settings.bodyFont);
    root.style.setProperty('--border-radius', `${settings.borderRadius}px`);
    root.style.setProperty('--button-radius', `${settings.buttonRadius}px`);
    root.style.setProperty('--card-radius', `${settings.cardRadius}px`);
  };
  
  // Preview theme
  const previewTheme = () => {
    if (themeSettings) {
      applyThemeVariables(themeSettings);
      
      toast({
        title: 'Preview',
        description: 'Theme preview applied. Save to make permanent.',
      });
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!themeSettings) {
    return (
      <div className="p-6">
        <p className="text-red-600">Error loading theme settings</p>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Theme Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Customize the look and feel of your portfolio
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setShowPalettes(!showPalettes)}
          >
            <FaMagic className="mr-2 h-4 w-4" />
            Template Themes
          </Button>
          <Button variant="outline" onClick={resetToDefaults}>
            <FaUndo className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button variant="outline" onClick={previewTheme}>
            <FaPalette className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={saveTheme} disabled={isSaving}>
            {isSaving ? (
              <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
            ) : (
              <FaCheck className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </div>
      
      {/* Live Preview Section */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="light">
            <TabsList className="mb-6">
              <TabsTrigger value="light">Light Mode</TabsTrigger>
              <TabsTrigger value="dark">Dark Mode</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="sizing">Sizing & Spacing</TabsTrigger>
            </TabsList>
            
            {/* Light Mode Colors */}
            <TabsContent value="light">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorCard
                  title="Primary Color"
                  description="Main brand color used for primary elements"
                  value={themeSettings.primaryColor}
                  onChange={(value) => handleChange('primaryColor', value)}
                />
                
                <ColorCard
                  title="Secondary Color"
                  description="Used for secondary elements and accents"
                  value={themeSettings.secondaryColor}
                  onChange={(value) => handleChange('secondaryColor', value)}
                />
                
                <ColorCard
                  title="Accent Color"
                  description="Highlights and call-to-action elements"
                  value={themeSettings.accentColor}
                  onChange={(value) => handleChange('accentColor', value)}
                />
                
                <ColorCard
                  title="Background Color"
                  description="Main page background color"
                  value={themeSettings.backgroundColor}
                  onChange={(value) => handleChange('backgroundColor', value)}
                />
                
                <ColorCard
                  title="Text Color"
                  description="Main text color"
                  value={themeSettings.textColor}
                  onChange={(value) => handleChange('textColor', value)}
                />
                
                <ColorCard
                  title="Heading Color"
                  description="Color for headings and titles"
                  value={themeSettings.headingColor}
                  onChange={(value) => handleChange('headingColor', value)}
                />
                
                <ColorCard
                  title="Link Color"
                  description="Color for links and navigation items"
                  value={themeSettings.linkColor}
                  onChange={(value) => handleChange('linkColor', value)}
                />
                
                <ColorCard
                  title="Button Color"
                  description="Background color for buttons"
                  value={themeSettings.buttonColor}
                  onChange={(value) => handleChange('buttonColor', value)}
                />
                
                <ColorCard
                  title="Button Text Color"
                  description="Text color for buttons"
                  value={themeSettings.buttonTextColor}
                  onChange={(value) => handleChange('buttonTextColor', value)}
                />
                
                <ColorCard
                  title="Card Color"
                  description="Background color for cards and panels"
                  value={themeSettings.cardColor}
                  onChange={(value) => handleChange('cardColor', value)}
                />
                
                <ColorCard
                  title="Border Color"
                  description="Color for borders and dividers"
                  value={themeSettings.borderColor}
                  onChange={(value) => handleChange('borderColor', value)}
                />
              </div>
            </TabsContent>
            
            {/* Dark Mode Colors */}
            <TabsContent value="dark">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorCard
                  title="Primary Color (Dark)"
                  description="Main brand color in dark mode"
                  value={themeSettings.darkPrimaryColor}
                  onChange={(value) => handleChange('darkPrimaryColor', value)}
                />
                
                <ColorCard
                  title="Secondary Color (Dark)"
                  description="Secondary elements in dark mode"
                  value={themeSettings.darkSecondaryColor}
                  onChange={(value) => handleChange('darkSecondaryColor', value)}
                />
                
                <ColorCard
                  title="Accent Color (Dark)"
                  description="Highlights in dark mode"
                  value={themeSettings.darkAccentColor}
                  onChange={(value) => handleChange('darkAccentColor', value)}
                />
                
                <ColorCard
                  title="Background Color (Dark)"
                  description="Page background in dark mode"
                  value={themeSettings.darkBackgroundColor}
                  onChange={(value) => handleChange('darkBackgroundColor', value)}
                />
                
                <ColorCard
                  title="Text Color (Dark)"
                  description="Main text color in dark mode"
                  value={themeSettings.darkTextColor}
                  onChange={(value) => handleChange('darkTextColor', value)}
                />
                
                <ColorCard
                  title="Heading Color (Dark)"
                  description="Headings in dark mode"
                  value={themeSettings.darkHeadingColor}
                  onChange={(value) => handleChange('darkHeadingColor', value)}
                />
                
                <ColorCard
                  title="Link Color (Dark)"
                  description="Links in dark mode"
                  value={themeSettings.darkLinkColor}
                  onChange={(value) => handleChange('darkLinkColor', value)}
                />
                
                <ColorCard
                  title="Button Color (Dark)"
                  description="Button background in dark mode"
                  value={themeSettings.darkButtonColor}
                  onChange={(value) => handleChange('darkButtonColor', value)}
                />
                
                <ColorCard
                  title="Button Text Color (Dark)"
                  description="Button text in dark mode"
                  value={themeSettings.darkButtonTextColor}
                  onChange={(value) => handleChange('darkButtonTextColor', value)}
                />
                
                <ColorCard
                  title="Card Color (Dark)"
                  description="Card background in dark mode"
                  value={themeSettings.darkCardColor}
                  onChange={(value) => handleChange('darkCardColor', value)}
                />
                
                <ColorCard
                  title="Border Color (Dark)"
                  description="Borders in dark mode"
                  value={themeSettings.darkBorderColor}
                  onChange={(value) => handleChange('darkBorderColor', value)}
                />
              </div>
            </TabsContent>
            
            {/* Typography Settings */}
            <TabsContent value="typography">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Heading Font</CardTitle>
                    <CardDescription>Font used for headings and titles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={themeSettings.headingFont}
                      onValueChange={(value) => handleChange('headingFont', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontOptions.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="mt-4">
                      <h3 className={`text-xl font-bold`} style={{ fontFamily: themeSettings.headingFont }}>
                        Heading Preview
                      </h3>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Body Font</CardTitle>
                    <CardDescription>Font used for body text</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={themeSettings.bodyFont}
                      onValueChange={(value) => handleChange('bodyFont', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontOptions.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="mt-4">
                      <p className={`text-base`} style={{ fontFamily: themeSettings.bodyFont }}>
                        This is how your body text will appear on your portfolio website.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sizing & Spacing */}
            <TabsContent value="sizing">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Border Radius</CardTitle>
                    <CardDescription>Global border radius for elements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>Border Radius: {themeSettings.borderRadius}px</Label>
                        <Input
                          type="range"
                          min={0}
                          max={24}
                          value={themeSettings.borderRadius}
                          onChange={(e) => handleChange('borderRadius', parseInt(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      <div className="mt-2">
                        <div 
                          className="w-full h-16 bg-primary flex items-center justify-center text-white"
                          style={{ borderRadius: `${themeSettings.borderRadius}px` }}
                        >
                          Preview
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Button Radius</CardTitle>
                    <CardDescription>Border radius for buttons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>Button Radius: {themeSettings.buttonRadius}px</Label>
                        <Input
                          type="range"
                          min={0}
                          max={24}
                          value={themeSettings.buttonRadius}
                          onChange={(e) => handleChange('buttonRadius', parseInt(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      <div className="mt-2">
                        <button 
                          className="px-4 py-2 bg-primary text-white"
                          style={{ borderRadius: `${themeSettings.buttonRadius}px` }}
                        >
                          Button Preview
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Card Radius</CardTitle>
                    <CardDescription>Border radius for cards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>Card Radius: {themeSettings.cardRadius}px</Label>
                        <Input
                          type="range"
                          min={0}
                          max={24}
                          value={themeSettings.cardRadius}
                          onChange={(e) => handleChange('cardRadius', parseInt(e.target.value))}
                          className="mt-2"
                        />
                      </div>
                      <div className="mt-2">
                        <div 
                          className="w-full p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                          style={{ borderRadius: `${themeSettings.cardRadius}px` }}
                        >
                          Card Preview
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Live preview column */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
          <ThemePreview 
            primaryColor={themeSettings.primaryColor}
            backgroundColor={themeSettings.backgroundColor}
            textColor={themeSettings.textColor}
            cardColor={themeSettings.cardColor}
            buttonColor={themeSettings.buttonColor}
            buttonTextColor={themeSettings.buttonTextColor}
            borderColor={themeSettings.borderColor}
            headingColor={themeSettings.headingColor}
            linkColor={themeSettings.linkColor}
            borderRadius={themeSettings.borderRadius}
            buttonRadius={themeSettings.buttonRadius}
            cardRadius={themeSettings.cardRadius}
          />
        </div>
      </div>
      
      {/* Template Palettes Section */}
      {showPalettes && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Theme Templates</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Click on a template to instantly apply it to your site
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colorPalettes.map((palette, index) => (
              <div 
                key={index}
                onClick={() => applyPalette(palette)}
                className="cursor-pointer group"
              >
                <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg p-2">
                  <div className="aspect-square rounded-md mb-2 relative overflow-hidden">
                    {/* Color Preview */}
                    <div className="absolute inset-0 flex">
                      <div style={{ backgroundColor: palette.colors.primaryColor }} className="w-1/3 h-full"></div>
                      <div style={{ backgroundColor: palette.colors.secondaryColor }} className="w-1/3 h-full"></div>
                      <div style={{ backgroundColor: palette.colors.accentColor }} className="w-1/3 h-full"></div>
                    </div>
                    {/* Dark Mode Preview */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 flex">
                      <div style={{ backgroundColor: palette.colors.darkPrimaryColor }} className="w-1/3 h-full"></div>
                      <div style={{ backgroundColor: palette.colors.darkSecondaryColor }} className="w-1/3 h-full"></div>
                      <div style={{ backgroundColor: palette.colors.darkAccentColor }} className="w-1/3 h-full"></div>
                    </div>
                    {/* Overlay with name on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-200">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Apply
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-center">{palette.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Color Card Component
function ColorCard({ 
  title, 
  description, 
  value, 
  onChange 
}: { 
  title: string; 
  description: string; 
  value: string; 
  onChange: (value: string) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div
              className="w-10 h-10 rounded-md border"
              style={{ backgroundColor: value }}
            ></div>
            <Input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1"
            />
          </div>
          <div>
            <Input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 