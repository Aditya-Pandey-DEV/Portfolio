#!/usr/bin/env node

/**
 * This script checks if all required npm packages for the social import
 * functionality are installed and offers to install missing ones
 */

const { execSync } = require('child_process');
const readline = require('readline');

const requiredPackages = [
  'node-fetch',
  'cross-fetch',
];

console.log('Checking for required packages for social import functionality...');

const installed = [];
const missing = [];

// Check which packages are installed
for (const pkg of requiredPackages) {
  try {
    require.resolve(pkg);
    installed.push(pkg);
  } catch (e) {
    missing.push(pkg);
  }
}

if (missing.length === 0) {
  console.log('✅ All required packages are already installed!');
  process.exit(0);
}

console.log(`\n⚠️ The following packages are required but missing: ${missing.join(', ')}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Would you like to install them now? (y/n) ', (answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    console.log('\nInstalling missing packages...');
    
    try {
      execSync(`npm install ${missing.join(' ')}`, { stdio: 'inherit' });
      console.log('\n✅ All packages installed successfully!');
    } catch (error) {
      console.error('\n❌ Error installing packages:', error.message);
      console.log('Please try installing them manually:');
      console.log(`npm install ${missing.join(' ')}`);
    }
  } else {
    console.log('\n⚠️ Please install these packages manually to use the social import functionality:');
    console.log(`npm install ${missing.join(' ')}`);
  }
  
  rl.close();
}); 