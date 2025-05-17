#!/usr/bin/env node

/**
 * This script helps set up environment variables for Vercel deployment
 * It creates a .vercel.env file that you can use to import variables into Vercel
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const requiredEnvVars = [
  { key: 'DATABASE_URL', description: 'MongoDB connection string (mongodb+srv://...)' },
  { key: 'NEXTAUTH_SECRET', description: 'Random string for JWT encryption' },
  { key: 'NEXTAUTH_URL', description: 'Your production URL (e.g., https://your-portfolio.vercel.app)' },
  { key: 'ADMIN_PASSWORD', description: 'Password for the admin dashboard' },
];

const optionalEnvVars = [
  { key: 'CLOUDINARY_CLOUD_NAME', description: 'Your Cloudinary cloud name' },
  { key: 'CLOUDINARY_API_KEY', description: 'Your Cloudinary API key' },
  { key: 'CLOUDINARY_API_SECRET', description: 'Your Cloudinary API secret' },
];

const envVars = {};

console.log('This script will help you set up environment variables for Vercel deployment.\n');
console.log('Required environment variables:');

function askForEnvVar(envVars, varList, index = 0) {
  if (index >= varList.length) {
    if (varList === requiredEnvVars) {
      console.log('\nOptional environment variables (press Enter to skip):');
      askForEnvVar(envVars, optionalEnvVars);
    } else {
      writeEnvFile(envVars);
    }
    return;
  }

  const envVar = varList[index];
  rl.question(`${envVar.key} (${envVar.description}): `, (answer) => {
    if (answer.trim() || varList === requiredEnvVars) {
      if (answer.trim()) {
        envVars[envVar.key] = answer.trim();
      }
    }
    askForEnvVar(envVars, varList, index + 1);
  });
}

function writeEnvFile(envVars) {
  const envFilePath = path.join(process.cwd(), '.vercel.env');
  let envContent = '';

  for (const [key, value] of Object.entries(envVars)) {
    envContent += `${key}="${value}"\n`;
  }

  fs.writeFileSync(envFilePath, envContent);

  console.log('\n✅ Environment variables saved to .vercel.env');
  console.log('\nNext steps:');
  console.log('1. Install the Vercel CLI: npm i -g vercel');
  console.log('2. Run: vercel login');
  console.log('3. To import these environment variables: vercel env import .vercel.env');
  
  rl.close();
}

// Generate a random string for NEXTAUTH_SECRET
function generateRandomString(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Start asking for environment variables
console.log('Tip: For NEXTAUTH_SECRET, press Enter to generate a random string\n');
rl.question(`NEXTAUTH_SECRET (Random string for JWT encryption): `, (answer) => {
  envVars['NEXTAUTH_SECRET'] = answer.trim() || generateRandomString();
  askForEnvVar(envVars, requiredEnvVars, 1); // Skip NEXTAUTH_SECRET as we already asked
}); 