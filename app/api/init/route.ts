import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { hash } from "bcrypt";
import prisma from "@/app/lib/prisma-wrapper";

const VALID_PASSCODE = '282499'; // From your fix-deploy.js

export async function GET(request: NextRequest) {
  console.log("Initializing database...");
  const results: Record<string, any> = {
    status: "pending",
    theme: null,
    database: {
      url: process.env.DATABASE_URL ? "configured" : "missing",
    },
    steps: []
  };

  try {
    // Check database connection
    const dbStatus = await prisma.$queryRaw`SELECT 1`
      .then(() => ({ url: 'configured', status: 'connected' }))
      .catch(() => ({ url: 'configured', status: 'disconnected' }));

    // Get current theme
    const theme = await prisma.theme.findFirst() || {
      id: 'default',
      name: null,
      createdAt: new Date().toISOString()
    };

    // Define startup steps
    const steps = [
      {
        name: 'Database Connection',
        status: dbStatus.status === 'connected' ? 'completed' : 'failed',
        message: dbStatus.status
      },
      {
        name: 'Theme Configuration',
        status: theme ? 'completed' : 'pending',
        message: theme?.name || 'Default'
      },
      {
        name: 'System Initialization',
        status: 'pending'
      }
    ];

    // 1. Check if theme exists and try to fix it
    try {
      const existingTheme = await prisma.theme.findFirst();
      results.steps.push({ action: "check_theme", status: "completed", found: !!existingTheme });
      
      if (existingTheme) {
        results.theme = {
          id: existingTheme.id,
          name: existingTheme.name,
          createdAt: existingTheme.createdAt,
        };
        
        // Check if theme has null createdAt (which causes schema errors)
        if (!existingTheme.createdAt) {
          console.log("Found theme with null createdAt, fixing...");
          results.steps.push({ action: "fix_theme_dates", status: "started" });
          
          // Update with current timestamp
          const now = new Date();
          await prisma.theme.update({
            where: { id: existingTheme.id },
            data: { 
              createdAt: now,
              updatedAt: now
            }
          });
          
          results.steps.push({ 
            action: "fix_theme_dates", 
            status: "completed",
            message: "Fixed theme with null timestamps" 
          });
          
          // Verify fix
          const verifiedTheme = await prisma.theme.findUnique({
            where: { id: existingTheme.id }
          });
          
          results.theme = {
            id: verifiedTheme.id,
            name: verifiedTheme.name,
            createdAt: verifiedTheme.createdAt,
          };
        }
      } else {
        // Create default theme if none exists
        console.log("No theme found, creating default theme...");
        results.steps.push({ action: "create_theme", status: "started" });
        
        try {
          const now = new Date();
          const defaultTheme = await prisma.theme.create({
            data: {
              name: "Default Theme",
              primaryColor: "#1e40af",
              secondaryColor: "#3b82f6",
              accentColor: "#60a5fa",
              fontPrimary: "Inter, sans-serif",
              fontSecondary: "Roboto, sans-serif",
              darkMode: true,
              createdAt: now,
              updatedAt: now
            }
          });
          
          results.steps.push({ 
            action: "create_theme", 
            status: "completed", 
            theme: defaultTheme.name 
          });
          
          results.theme = {
            id: defaultTheme.id,
            name: defaultTheme.name,
            createdAt: defaultTheme.createdAt,
          };
        } catch (themeError) {
          console.error("Error creating theme:", themeError);
          results.steps.push({ 
            action: "create_theme", 
            status: "failed", 
            error: themeError instanceof Error ? themeError.message : String(themeError)
          });
        }
      }
    } catch (themeError) {
      console.error("Error checking theme:", themeError);
      results.steps.push({ 
        action: "check_theme", 
        status: "failed", 
        error: themeError instanceof Error ? themeError.message : String(themeError)
      });
      
      // Try using direct MongoDB connection as fallback
      const dbUrl = process.env.DATABASE_URL;
      
      if (dbUrl) {
        console.log("Trying direct MongoDB connection as fallback...");
        results.steps.push({ action: "mongodb_fallback", status: "started" });
        
        const client = new MongoClient(dbUrl, {
          connectTimeoutMS: 10000,
          socketTimeoutMS: 10000
        });
        
        try {
          await client.connect();
          
          // Get database name from connection string
          const dbName = new URL(dbUrl.replace('mongodb+srv://', 'http://')).pathname.substring(1) || 'portfolio';
          const db = client.db(dbName);
          
          // Check for and fix themes
          const themesCollection = db.collection('Theme');
          const existingTheme = await themesCollection.findOne({ name: 'Default Theme' });
          
          if (existingTheme) {
            console.log("Found theme in MongoDB, fixing timestamps...");
            
            // Fix dates if needed
            if (!existingTheme.createdAt) {
              const now = new Date();
              await themesCollection.updateOne(
                { _id: existingTheme._id },
                { $set: { createdAt: now, updatedAt: now } }
              );
              
              results.steps.push({ 
                action: "fix_mongodb_theme_dates", 
                status: "completed" 
              });
            }
          } else {
            console.log("Creating theme with MongoDB...");
            const now = new Date();
            await themesCollection.insertOne({
              name: "Default Theme",
              primaryColor: "#1e40af",
              secondaryColor: "#3b82f6",
              accentColor: "#60a5fa",
              fontPrimary: "Inter, sans-serif",
              fontSecondary: "Roboto, sans-serif",
              darkMode: true,
              createdAt: now,
              updatedAt: now
            });
            
            results.steps.push({ 
              action: "create_mongodb_theme", 
              status: "completed" 
            });
          }
          
          // Check for admin user
          const usersCollection = db.collection('User');
          const adminUser = await usersCollection.findOne({ email: 'admin@example.com' });
          
          if (!adminUser) {
            console.log("Creating admin user with MongoDB...");
            const hashedPassword = await hash('Admin@123', 10);
            const now = new Date();
            
            await usersCollection.insertOne({
              name: "Admin User",
              email: "admin@example.com",
              password: hashedPassword,
              createdAt: now,
              updatedAt: now
            });
            
            results.steps.push({ 
              action: "create_mongodb_admin", 
              status: "completed" 
            });
          }
          
          results.steps.push({ 
            action: "mongodb_fallback", 
            status: "completed" 
          });
        } catch (mongoError) {
          console.error("MongoDB fallback error:", mongoError);
          results.steps.push({ 
            action: "mongodb_fallback", 
            status: "failed", 
            error: mongoError instanceof Error ? mongoError.message : String(mongoError)
          });
        } finally {
          await client.close();
        }
      }
    }

    // Final status
    results.status = "completed";
    return NextResponse.json(results, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error("Initialization error:", error);
    results.status = "failed";
    results.error = error instanceof Error ? error.message : String(error);
    
    return NextResponse.json(results, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Cache-Control': 'no-store'
      }
    });
  }
}

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (passcode !== VALID_PASSCODE) {
      return NextResponse.json(
        { error: 'Invalid passcode' },
        { status: 401 }
      );
    }

    // Initialize database with default theme if none exists
    const existingTheme = await prisma.theme.findFirst();
    if (!existingTheme) {
      await prisma.theme.create({
        data: {
          name: 'Default Theme',
          colors: {
            primary: '#000000',
            secondary: '#ffffff',
            accent: '#1e40af'
          }
        }
      });
    }

    // Add any other initialization steps here
    // For example: creating default admin user, setting up initial content, etc.

    return NextResponse.json({
      message: 'System initialized successfully',
      status: 'completed'
    });
  } catch (error) {
    console.error('Startup initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize system' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 