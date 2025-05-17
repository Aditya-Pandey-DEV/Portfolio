#!/usr/bin/env node

/**
 * Bundle analyzer helper script
 * Run with: node scripts/analyze-bundle.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting bundle analysis...');

// Install bundle analyzer if not already installed
try {
  console.log('Checking for @next/bundle-analyzer...');
  require.resolve('@next/bundle-analyzer');
  console.log('✅ @next/bundle-analyzer is installed');
} catch (e) {
  console.log('📦 Installing @next/bundle-analyzer...');
  execSync('npm install --save-dev @next/bundle-analyzer', { stdio: 'inherit' });
}

// Run the bundle analyzer
console.log('📊 Running bundle analysis...');
execSync('ANALYZE=true npm run build', { stdio: 'inherit' });

// Print optimization tips
console.log('\n');
console.log('📝 Bundle optimization tips:');
console.log('----------------------------');
console.log('1. Use dynamic imports for large components: `dynamic(() => import("./Component"))`');
console.log('2. Move large libraries to dynamic loading with `next/dynamic`');
console.log('3. Replace large dependencies with smaller alternatives');
console.log('4. Make sure you\'re tree-shaking properly (use named imports, not * imports)');
console.log('5. Split code by routes using Next.js page-based routing system');
console.log('6. Use the `next/image` component for image optimization');
console.log('7. Implement code-splitting for components not needed on initial load');
console.log('8. Remove unused dependencies from package.json');
console.log('\n');

// Check for large dependencies
console.log('🧐 Checking for large dependencies...');
const packageJson = require('../package.json');

const LARGE_DEPENDENCY_WARNINGS = [
  { name: 'moment', alternative: 'date-fns or dayjs' },
  { name: 'lodash', alternative: 'lodash-es (with specific imports) or just native JS methods' },
  { name: 'jquery', alternative: 'native DOM methods' },
  { name: 'bootstrap', alternative: 'tailwindcss or custom CSS' },
  { name: 'material-ui', alternative: 'consider code-splitting or lighter alternatives' },
];

const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

LARGE_DEPENDENCY_WARNINGS.forEach(({ name, alternative }) => {
  if (dependencies[name]) {
    console.log(`⚠️  Found large dependency: ${name}`);
    console.log(`   Consider replacing with: ${alternative}`);
  }
});

console.log('\n✨ Bundle analysis complete!');
console.log('Check the generated reports in .next/analyze folder\n'); 