import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { hash } from "bcrypt";

export async function GET() {
  const dbUrl = process.env.DATABASE_URL || '';
  
  if (!dbUrl) {
    return NextResponse.json({ error: "DATABASE_URL environment variable is not set" }, { status: 500 });
  }
  
  const client = new MongoClient(dbUrl, {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000
  });
  
  try {
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('Connected successfully');
    
    // Get database name from connection string
    const dbName = new URL(dbUrl.replace('mongodb+srv://', 'http://')).pathname.substring(1) || 'portfolio';
    const db = client.db(dbName);
    
    // Initialize results object
    const results = {
      userCreated: false,
      themeCreated: false,
      collections: [],
      errors: []
    };
    
    // 1. Check for collections
    const collections = await db.listCollections().toArray();
    results.collections = collections.map(c => c.name);
    console.log(`Found ${collections.length} collections:`, results.collections);
    
    // 2. Create admin user if not exists
    try {
      const usersCollection = db.collection('User');
      
      // Check if admin user exists
      const existingUser = await usersCollection.findOne({ email: 'admin@example.com' });
      
      if (!existingUser) {
        console.log('Creating admin user...');
        const hashedPassword = await hash('Admin@123', 10);
        
        const newUser = {
          name: "Admin User",
          email: "admin@example.com",
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        const result = await usersCollection.insertOne(newUser);
        results.userCreated = !!result.insertedId;
        console.log('Admin user created with ID:', result.insertedId);
      } else {
        console.log('Admin user already exists');
        results.userCreated = true;
      }
    } catch (error) {
      console.error('Error creating admin user:', error);
      results.errors.push(`User creation error: ${error instanceof Error ? error.message : String(error)}`);
    }
    
    // 3. Create theme if not exists
    try {
      const themesCollection = db.collection('Theme');
      
      // Check if theme exists
      const existingTheme = await themesCollection.findOne({ name: 'Default Theme' });
      
      if (!existingTheme) {
        console.log('Creating default theme...');
        
        const newTheme = {
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
          
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        const result = await themesCollection.insertOne(newTheme);
        results.themeCreated = !!result.insertedId;
        console.log('Default theme created with ID:', result.insertedId);
      } else {
        console.log('Theme already exists');
        results.themeCreated = true;
      }
    } catch (error) {
      console.error('Error creating theme:', error);
      results.errors.push(`Theme creation error: ${error instanceof Error ? error.message : String(error)}`);
    }
    
    return NextResponse.json({
      success: true,
      message: "Database initialization complete",
      ...results
    });
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({
      success: false, 
      error: "Database connection failed",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
} 