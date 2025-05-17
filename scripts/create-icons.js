// Script to create basic icon files for the portfolio
const fs = require('fs');
const path = require('path');

// Create a simple colored square as placeholder
function createSimpleIcon(size, color) {
  // Simple SVG square with the specified size and color
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="${color}" />
    <text x="50%" y="50%" font-family="Arial" font-size="${size/4}" 
          fill="white" text-anchor="middle" dominant-baseline="middle">P</text>
  </svg>`;
  
  return Buffer.from(svg);
}

// Create the icon files
async function createIcons() {
  const publicDir = path.join(__dirname, '../public');
  
  // Create 192x192 icon
  const icon192 = createSimpleIcon(192, '#1e40af');
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192);
  console.log('Created icon-192.png');
  
  // Create 512x512 icon
  const icon512 = createSimpleIcon(512, '#1e40af');
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512);
  console.log('Created icon-512.png');
}

createIcons().catch(console.error); 