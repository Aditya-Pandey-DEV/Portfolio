import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { db } from '@/app/lib/db';
import { MongoClient, ObjectId } from "mongodb";

// Helper for CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// GET - Get theme settings
export async function GET(request: NextRequest) {
  try {
    console.log('Theme API called, attempting to fetch theme settings');
    
    // Log database URL (with password partially redacted)
    const dbUrl = process.env.DATABASE_URL || '';
    const maskedUrl = dbUrl.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    console.log('Using database URL:', maskedUrl);
    
    // Check if db is initialized - if not, use direct MongoDB connection
    let themeSettings;
    
    try {
      // First try with Prisma
      themeSettings = await db.theme.findFirst();
      console.log('Theme query result with Prisma:', themeSettings ? 'Found' : 'Not found');
    } catch (prismaError) {
      console.log('Prisma error, falling back to direct MongoDB:', prismaError);
      
      // Fall back to direct MongoDB connection
      if (dbUrl) {
        const client = new MongoClient(dbUrl, {
          connectTimeoutMS: 5000,
          socketTimeoutMS: 5000
        });
        
        try {
          await client.connect();
          console.log('Connected directly to MongoDB');
          
          // Get database name from connection string or default to 'portfolio'
          const dbName = new URL(dbUrl.replace('mongodb+srv://', 'http://')).pathname.substring(1) || 'portfolio';
          const db = client.db(dbName);
          
          // Get theme from MongoDB directly
          const themesCollection = db.collection('Theme');
          themeSettings = await themesCollection.findOne({ name: 'Default Theme' });
          console.log('Theme query with direct MongoDB:', themeSettings ? 'Found' : 'Not found');
          
        } catch (mongoError) {
          console.error('MongoDB direct connection error:', mongoError);
          throw mongoError;
        } finally {
          await client.close();
        }
      }
    }
    
    // If no theme settings exist, create default settings
    if (!themeSettings) {
      console.log('No theme settings found, creating default theme');
      
      try {
        const defaultSettings = await db.theme.create({
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
        
        console.log('Default theme created successfully:', defaultSettings.id);
        return NextResponse.json(defaultSettings, { headers: corsHeaders });
      } catch (createError) {
        console.error('Error creating default theme with Prisma:', createError);
        
        // Return a basic theme if we can't create one
        const fallbackTheme = {
          name: "Fallback Theme",
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
        };
        
        console.log('Returning fallback theme');
        return NextResponse.json(fallbackTheme, { headers: corsHeaders });
      }
    }
    
    console.log('Returning existing theme');
    return NextResponse.json(themeSettings, { headers: corsHeaders });
  } catch (error) {
    console.error('Error fetching theme settings:', error);
    
    // Return a basic theme to prevent UI from breaking
    const emergencyTheme = {
      name: "Emergency Theme",
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
    };
    
    return NextResponse.json(emergencyTheme, { 
      headers: {
        ...corsHeaders,
        'X-Error': 'Failed to fetch theme settings',
      }
    });
  }
}

// POST - Update theme settings
export async function POST(request: NextRequest) {
  try {
    // Skip session check if there's a god_access cookie for emergency admin access
    let isAuthorized = false;
    const godAccess = request.cookies.get('god_access')?.value;
    
    if (godAccess === 'true') {
      isAuthorized = true;
    } else {
      const session = await getServerSession(authOptions);
      if (session) {
        isAuthorized = true;
      }
    }
    
    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized" }, { 
        status: 401, 
        headers: corsHeaders 
      });
    }
    
    const data = await request.json();
    console.log('Theme data received:', JSON.stringify(data));
    
    // Remove any fields that aren't valid for the Prisma schema
    delete data.createdAt;
    delete data.updatedAt;
    
    // Remove the resumeId field if it's null to avoid validation errors
    if (data.resumeId === null || data.resumeId === undefined) {
      delete data.resumeId;
    }
    
    let themeSettings;
    
    try {
      if (data.id) {
        // Update existing theme settings
        themeSettings = await db.theme.update({
          where: { id: data.id },
          data
        });
        console.log('Theme updated with Prisma successfully');
      } else {
        // Create new theme settings
        themeSettings = await db.theme.create({
          data
        });
        console.log('Theme created with Prisma successfully');
      }
    } catch (dbError) {
      console.error('Prisma error saving theme, trying MongoDB fallback:', dbError);
      
      // Try direct MongoDB approach as fallback
      const dbUrl = process.env.DATABASE_URL;
      if (dbUrl) {
        const client = new MongoClient(dbUrl, {
          connectTimeoutMS: 5000,
          socketTimeoutMS: 5000
        });
        
        try {
          await client.connect();
          console.log('Connected directly to MongoDB for theme update');
          
          // Get database name from connection string or default to 'portfolio'
          const dbName = new URL(dbUrl.replace('mongodb+srv://', 'http://')).pathname.substring(1) || 'portfolio';
          const db = client.db(dbName);
          
          // Access theme collection directly
          const themesCollection = db.collection('Theme');
          
          // Create a copy of data to avoid modifying the original object
          const mongoData = {...data};

          if (data.id) {
            let mongoId;
            // Try to convert to MongoDB ObjectId - handle both string IDs and ObjectIds
            try {
              // Check if it's already a valid ObjectId string
              if (ObjectId.isValid(data.id)) {
                mongoId = new ObjectId(data.id);
              } else {
                // If not a valid ObjectId, use it as a string ID
                mongoId = data.id;
              }
            } catch (idError) {
              console.log('Failed to convert ID to ObjectId, using as string:', idError);
              mongoId = data.id;
            }
            
            console.log('Using MongoDB ID for query:', mongoId);
            
            // Remove id from data to avoid conflicts
            delete mongoData.id;
            
            // Try matching by _id or name as fallback
            const result = await themesCollection.updateOne(
              { $or: [{ _id: mongoId }, { name: data.name || 'Default Theme' }] },
              { $set: mongoData }
            );
            
            console.log('MongoDB update result:', result);
            
            if (result.matchedCount > 0) {
              themeSettings = await themesCollection.findOne({ 
                $or: [{ _id: mongoId }, { name: data.name || 'Default Theme' }] 
              });
              console.log('Theme found after update:', themeSettings ? 'Yes' : 'No');
            }
          } else {
            // Create new theme
            delete mongoData.id;
            mongoData.name = mongoData.name || 'Default Theme';
            
            const result = await themesCollection.insertOne(mongoData);
            console.log('MongoDB insert result:', result);
            
            themeSettings = await themesCollection.findOne({ _id: result.insertedId });
          }
          
          console.log('MongoDB operation complete, theme settings:', 
            themeSettings ? 'Retrieved successfully' : 'Not found');
          
        } catch (mongoError) {
          console.error('MongoDB direct connection error:', mongoError);
          throw mongoError;
        } finally {
          await client.close();
        }
      }
    }
    
    if (!themeSettings) {
      console.log('No theme settings returned from database operations');
      return NextResponse.json(
        { error: 'Failed to update theme settings - database operation returned no result' },
        { status: 500, headers: corsHeaders }
      );
    }
    
    console.log('Successfully updated theme, returning response');
    return NextResponse.json(themeSettings, { headers: corsHeaders });
  } catch (error) {
    console.error('Error updating theme settings:', error);
    return NextResponse.json(
      { error: 'Failed to update theme settings', details: error instanceof Error ? error.message : String(error) },
      { status: 500, headers: corsHeaders }
    );
  }
} 