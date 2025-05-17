import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { MongoClient } from "mongodb";

const prisma = new PrismaClient();

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
        // Create default theme with proper timestamps
        console.log("No theme found, creating default theme...");
        results.steps.push({ action: "create_default_theme", status: "started" });
        
        const now = new Date();
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
            
            // Explicitly set timestamps
            createdAt: now,
            updatedAt: now
          }
        });
        
        results.steps.push({ 
          action: "create_default_theme", 
          status: "completed",
          theme_id: defaultTheme.id
        });
        
        results.theme = {
          id: defaultTheme.id,
          name: defaultTheme.name,
          createdAt: defaultTheme.createdAt,
        };
      }
    } catch (themeError) {
      console.error("Error fixing theme:", themeError);
      results.steps.push({ 
        action: "theme_operation", 
        status: "failed", 
        error: themeError instanceof Error ? themeError.message : String(themeError)
      });
      
      // Try direct MongoDB approach if Prisma fails
      if (process.env.DATABASE_URL) {
        results.steps.push({ action: "mongodb_fallback", status: "started" });
        
        const client = new MongoClient(process.env.DATABASE_URL);
        try {
          await client.connect();
          const db = client.db();
          const themesCollection = db.collection('Theme');
          
          // Check for existing themes
          const existingTheme = await themesCollection.findOne({});
          
          if (existingTheme) {
            // Update the theme with proper timestamps
            const now = new Date();
            await themesCollection.updateOne(
              { _id: existingTheme._id },
              { $set: { createdAt: now, updatedAt: now } }
            );
            
            results.steps.push({ 
              action: "mongodb_theme_update", 
              status: "completed",
              theme_id: existingTheme._id.toString()
            });
          } else {
            // Create a new theme with timestamps
            const now = new Date();
            const defaultTheme = {
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
              createdAt: now,
              updatedAt: now
            };
            
            const result = await themesCollection.insertOne(defaultTheme);
            
            results.steps.push({ 
              action: "mongodb_theme_create", 
              status: "completed",
              theme_id: result.insertedId.toString()
            });
          }
          
          results.steps.push({ action: "mongodb_fallback", status: "completed" });
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

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 