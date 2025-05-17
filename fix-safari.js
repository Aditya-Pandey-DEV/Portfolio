// Script to fix Safari compatibility issues
const fs = require('fs');
const path = require('path');

console.log('🧰 Starting Safari compatibility fixes...');

// 1. Create SafariPolyfills component if it doesn't exist
const componentsDir = path.join(__dirname, 'app', 'components');
const safariPolyfillsPath = path.join(componentsDir, 'SafariPolyfills.tsx');
const clientWrapperPath = path.join(componentsDir, 'ClientSafariWrapper.tsx');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const safariPolyfillsContent = `'use client';

import { useEffect } from 'react';

/**
 * Component that adds polyfills and fixes for Safari browser
 * This component should be imported dynamically with { ssr: false }
 */
export default function SafariPolyfills() {
  useEffect(() => {
    // Check if browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      console.log('Safari detected, applying polyfills and fixes');
      
      // Fix for fetch issues in Safari
      const originalFetch = window.fetch;
      window.fetch = function(input, init) {
        const modifiedInit = init || {};
        
        // Ensure credentials are included for same-origin requests
        if (!modifiedInit.credentials) {
          modifiedInit.credentials = 'same-origin';
        }
        
        // Add cache control headers for Safari
        if (!modifiedInit.headers) {
          modifiedInit.headers = {};
        }
        
        // Convert headers to regular object if it's a Headers instance
        if (modifiedInit.headers instanceof Headers) {
          const headersObj = {};
          modifiedInit.headers.forEach((value, key) => {
            headersObj[key] = value;
          });
          modifiedInit.headers = headersObj;
        }
        
        // Add cache control to prevent Safari caching issues
        if (!modifiedInit.headers['Cache-Control']) {
          modifiedInit.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        }
        
        return originalFetch(input, modifiedInit);
      };
      
      // Fix for localStorage issues in Safari private browsing
      try {
        localStorage.setItem('safari_test', '1');
        localStorage.removeItem('safari_test');
      } catch (e) {
        // Create a memory-based fallback for localStorage
        const memoryStorage = {};
        Object.defineProperty(window, 'localStorage', {
          value: {
            setItem: (key, value) => {
              memoryStorage[key] = String(value);
            },
            getItem: (key) => {
              return key in memoryStorage ? memoryStorage[key] : null;
            },
            removeItem: (key) => {
              delete memoryStorage[key];
            },
            clear: () => {
              Object.keys(memoryStorage).forEach(key => {
                delete memoryStorage[key];
              });
            },
            key: (index) => {
              return Object.keys(memoryStorage)[index] || null;
            },
            get length() {
              return Object.keys(memoryStorage).length;
            }
          },
          writable: false,
          configurable: true
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything
}`;

fs.writeFileSync(safariPolyfillsPath, safariPolyfillsContent);
console.log('✅ Created SafariPolyfills component');

// Create client wrapper component
const clientWrapperContent = `'use client';

import dynamic from 'next/dynamic';

// Dynamically import the SafariPolyfills component with no SSR
const SafariPolyfills = dynamic(() => import('./SafariPolyfills'), {
  ssr: false,
});

export default function ClientSafariWrapper() {
  return <SafariPolyfills />;
}`;

fs.writeFileSync(clientWrapperPath, clientWrapperContent);
console.log('✅ Created ClientSafariWrapper component');

// 2. Update layout.tsx to use ClientSafariWrapper
const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Check if import is already added
if (!layoutContent.includes('import ClientSafariWrapper')) {
  // Add the import
  const importRegex = /import { Suspense } from "react";/;
  if (importRegex.test(layoutContent)) {
    layoutContent = layoutContent.replace(
      importRegex,
      'import { Suspense } from "react";\nimport ClientSafariWrapper from "./components/ClientSafariWrapper";'
    );
  } else {
    // Fallback if the specific import line isn't found
    const lastImportRegex = /(import .+ from ".+";)\s/;
    layoutContent = layoutContent.replace(
      lastImportRegex,
      '$1\nimport ClientSafariWrapper from "./components/ClientSafariWrapper";\n\n'
    );
  }
  
  // Add the component to the body
  layoutContent = layoutContent.replace(
    /<body className={`\${inter\.className} antialiased`}>/,
    '<body className={`${inter.className} antialiased`}>\n        {/* Safari polyfills for better Safari compatibility */}\n        <ClientSafariWrapper />\n        '
  );
  
  fs.writeFileSync(layoutPath, layoutContent);
  console.log('✅ Updated layout.tsx to use ClientSafariWrapper');
} else {
  console.log('ℹ️ layout.tsx already has ClientSafariWrapper');
}

// 3. Create a static manifest.json file in the public directory
const publicDir = path.join(__dirname, 'public');
const manifestPath = path.join(publicDir, 'manifest.json');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const manifestContent = `{
  "name": "Portfolio",
  "short_name": "Portfolio",
  "description": "Personal Portfolio Website",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}`;

fs.writeFileSync(manifestPath, manifestContent);
console.log('✅ Created manifest.json');

// 4. Create placeholder icon files if they don't exist
const faviconPath = path.join(publicDir, 'favicon.ico');
const icon192Path = path.join(publicDir, 'icon-192.png');
const icon512Path = path.join(publicDir, 'icon-512.png');

// Create a simple 1x1 transparent pixel as placeholder
const createEmptyImage = (filePath) => {
  // Simple 1x1 transparent pixel in different formats
  const emptyPixelIco = Buffer.from('AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAA==', 'base64');
  const emptyPixelPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
  
  // Choose the right format based on file extension
  if (filePath.endsWith('.ico')) {
    fs.writeFileSync(filePath, emptyPixelIco);
  } else {
    fs.writeFileSync(filePath, emptyPixelPng);
  }
};

// Create favicon.ico if it doesn't exist
if (!fs.existsSync(faviconPath)) {
  createEmptyImage(faviconPath);
  console.log('✅ Created placeholder favicon.ico');
}

// Create icon files if they don't exist
if (!fs.existsSync(icon192Path)) {
  createEmptyImage(icon192Path);
  console.log('✅ Created placeholder icon-192.png');
}

if (!fs.existsSync(icon512Path)) {
  createEmptyImage(icon512Path);
  console.log('✅ Created placeholder icon-512.png');
}

// 5. Update next.config.js to add Safari compatibility headers
const nextConfigPath = path.join(__dirname, 'next.config.mjs');
let nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

if (!nextConfigContent.includes('safari-compatibility')) {
  // Add Safari compatibility headers
  const headersPatch = `
  // Add headers for Safari compatibility
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'Safari-Compatibility',
            value: 'true',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },`;
  
  // Insert headers config
  nextConfigContent = nextConfigContent.replace(
    'const nextConfig = {',
    'const nextConfig = {\n' + headersPatch
  );
  
  fs.writeFileSync(nextConfigPath, nextConfigContent);
  console.log('✅ Updated next.config.mjs with Safari compatibility headers');
} else {
  console.log('ℹ️ next.config.mjs already has Safari compatibility headers');
}

console.log('\n✅ Safari compatibility fixes applied!');
console.log('\n🚀 Next steps:');
console.log('1. Run "npm run build" to build your project');
console.log('2. Deploy with "vercel --prod"');
console.log('3. After deployment, visit your site at: https://your-vercel-url.vercel.app/api/init');
console.log('4. Then access the god page at: https://your-vercel-url.vercel.app/god');
console.log('5. Use passcode: 282499'); 