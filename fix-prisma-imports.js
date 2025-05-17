const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/api/admin/seo/route.ts',
  'app/api/admin/skills/route.ts',
  'app/api/admin/projects/route.ts',
  'app/api/admin/education/route.ts',
  'app/api/admin/social-links/route.ts',
  'app/api/admin/profile-image/route.ts',
  'app/api/admin/personal/route.ts',
  'app/api/admin/experience/route.ts',
  'app/api/contact/route.ts'
];

// Process each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  console.log(`Processing ${filePath}...`);
  
  try {
    // Read the file
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the import and initialization
    content = content.replace(
      /import\s*{\s*PrismaClient\s*}\s*from\s*['"]@\/app\/generated\/prisma['"].*;?\s*\n\s*const\s+prisma\s*=\s*new\s+PrismaClient\(\);/,
      "import { getPrismaClient } from '@/app/lib/prisma';"
    );
    
    // Add prisma initialization before database operations
    content = content.replace(
      /\s+(const|let|var)(?!\s+prisma\s*=)/g,
      (match, p1, offset) => {
        // Check if we need to add prisma initialization
        const previousLines = content.slice(0, offset).split('\n').slice(-5).join('\n');
        if (
          !previousLines.includes('const prisma = getPrismaClient()') && 
          /session.*await.*getServerSession/.test(previousLines)
        ) {
          return '\n    const prisma = getPrismaClient();\n    ' + p1;
        }
        return match;
      }
    );

    // Write the updated content back to the file
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✓ Updated ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

console.log('All files processed!'); 