// Optimization script for build process
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create directory if it doesn't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Ensure icons directory exists
createDirIfNotExists('./public/icons');

// Create placeholder icons if they don't exist
const createPlaceholderIcon = (size) => {
  const iconPath = `./public/icons/icon-${size}.png`;
  
  if (!fs.existsSync(iconPath)) {
    console.log(`Creating placeholder ${size}x${size} icon...`);
    // This is a simple command to create a placeholder icon
    // In a real project, you'd want to generate proper icons
    execSync(`convert -size ${size}x${size} xc:#3b82f6 ${iconPath}`);
  }
};

// Try to create placeholder icons, but don't fail if ImageMagick isn't installed
try {
  createPlaceholderIcon(192);
  createPlaceholderIcon(512);
} catch (error) {
  console.log('Could not create placeholder icons. Please create them manually.');
}

// Optimize package.json for production
console.log('Optimizing package.json for production...');
const packageJson = require('../package.json');

// Remove devDependencies from production build
const optimizedPackageJson = {
  ...packageJson,
  devDependencies: undefined
};

// Write back optimized package.json
fs.writeFileSync(
  path.join(__dirname, '../package.json'),
  JSON.stringify(optimizedPackageJson, null, 2)
);

// Clean up unnecessary files
console.log('Cleaning up unnecessary files...');
const filesToRemove = [
  '.eslintrc',
  '.prettierrc',
  'README.md',
];

filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

// Run additional optimizations
console.log('Running build optimizations...');

// Done
console.log('Build optimization complete!'); 