// Test and fix theme data in the database
const { PrismaClient } = require('./app/generated/prisma');
const prisma = new PrismaClient();

async function testAndFixTheme() {
  try {
    console.log("Testing database connection...");
    console.log("URL from ENV:", process.env.DATABASE_URL);
    
    // Check for existing theme
    const themes = await prisma.theme.findMany();
    console.log("Found themes:", themes.length);
    
    if (themes.length === 0) {
      console.log("Creating default theme...");
      const defaultTheme = await prisma.theme.create({
        data: {
          name: "Default Theme",
          isDefault: true,
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
        }
      });
      console.log("Created default theme:", defaultTheme);
    } else {
      console.log("Themes found:", themes);
    }

    // Check if admin user exists
    const users = await prisma.user.findMany();
    console.log("Found users:", users.length);
    
    if (users.length === 0) {
      console.log("No users found. Please run the seed route to create an admin user.");
    }

  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testAndFixTheme(); 