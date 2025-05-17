import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const dbUrl = process.env.DATABASE_URL || '';
  // Mask the password in the database URL for logging
  const maskedDbUrl = dbUrl.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
  
  const results = {
    database: {
      url_provided: !!dbUrl,
      masked_url: maskedDbUrl,
      mongodb_format_valid: dbUrl.startsWith('mongodb'),
      connection_attempted: false,
      connection_successful: false,
      auth_successful: false,
      database_exists: false,
      collections_found: [],
      raw_connection_error: null,
    },
    diagnostics: {
      timestamp: new Date().toISOString(),
      node_version: process.version,
      environment: process.env.NODE_ENV,
      vercel_region: process.env.VERCEL_REGION || 'Not on Vercel'
    },
    nextAuth: {
      secret_provided: !!process.env.NEXTAUTH_SECRET,
      url_provided: !!process.env.NEXTAUTH_URL,
      url_value: process.env.NEXTAUTH_URL || 'Not set'
    },
    troubleshooting: {
      possible_issues: [],
      suggested_actions: []
    }
  };
  
  try {
    if (!dbUrl) {
      results.troubleshooting.possible_issues.push('DATABASE_URL environment variable is not set');
      results.troubleshooting.suggested_actions.push('Add DATABASE_URL to your Vercel environment variables');
      return NextResponse.json(results);
    }
    
    // Check for URL format issues
    if (!dbUrl.startsWith('mongodb')) {
      results.troubleshooting.possible_issues.push('DATABASE_URL does not start with mongodb:// or mongodb+srv://');
      results.troubleshooting.suggested_actions.push('Check DATABASE_URL format');
      return NextResponse.json(results);
    }
    
    console.log('Attempting to connect to MongoDB...');
    results.database.connection_attempted = true;
    
    // Set a timeout for the connection attempt
    const client = new MongoClient(dbUrl, { 
      connectTimeoutMS: 10000,
      socketTimeoutMS: 10000
    });
    
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB successfully');
    results.database.connection_successful = true;
    results.database.auth_successful = true;
    
    // Get database name from connection string
    const dbName = new URL(dbUrl.replace('mongodb+srv://', 'http://')).pathname.substring(1);
    console.log('Database name:', dbName || 'Not specified in URL');
    
    // List all collections in the database
    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();
    results.database.database_exists = true;
    results.database.collections_found = collections.map(c => c.name);
    
    if (collections.length === 0) {
      results.troubleshooting.possible_issues.push('Database exists but has no collections');
      results.troubleshooting.suggested_actions.push('Initialize the database by visiting /api/init');
    }
    
    // Check for essential collections
    const requiredCollections = ['User', 'Theme'];
    const missingCollections = requiredCollections.filter(
      required => !collections.some(c => c.name.toLowerCase() === required.toLowerCase())
    );
    
    if (missingCollections.length > 0) {
      results.troubleshooting.possible_issues.push(`Missing required collections: ${missingCollections.join(', ')}`);
      results.troubleshooting.suggested_actions.push('Initialize the database by visiting /api/init');
    }
    
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    
    results.database.raw_connection_error = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack?.split('\n').slice(0, 3).join('\n')
    } : String(error);
    
    // Analyze the error
    const errorMsg = String(error);
    
    if (errorMsg.includes('ENOTFOUND')) {
      results.troubleshooting.possible_issues.push('DNS resolution failed - host not found');
      results.troubleshooting.suggested_actions.push('Check if the MongoDB host is correct');
    } 
    else if (errorMsg.includes('ETIMEDOUT')) {
      results.troubleshooting.possible_issues.push('Connection timeout - server unreachable');
      results.troubleshooting.suggested_actions.push('Check if MongoDB Atlas IP whitelist includes Vercel deployment IPs');
    }
    else if (errorMsg.includes('AuthenticationFailed')) {
      results.troubleshooting.possible_issues.push('Authentication failed - incorrect username or password');
      results.troubleshooting.suggested_actions.push('Check MongoDB username and password');
    }
    else if (errorMsg.includes('Invalid scheme')) {
      results.troubleshooting.possible_issues.push('Invalid MongoDB connection string format');
      results.troubleshooting.suggested_actions.push('Check DATABASE_URL format');
    }
    else {
      results.troubleshooting.possible_issues.push('Unknown MongoDB connection error');
      results.troubleshooting.suggested_actions.push('Check Vercel logs for more details');
    }
  }
  
  // Add general recommendations
  if (!results.database.connection_successful) {
    results.troubleshooting.suggested_actions.push(
      'Try creating a new MongoDB Atlas cluster with unrestricted network access',
      'Update DATABASE_URL with the new connection string'
    );
  }
  
  return NextResponse.json(results);
} 