# Setting Up Environment Variables in Vercel

Follow these steps to fix the 401/500 errors on your deployed site:

## 1. Add Required Environment Variables

1. Log in to your Vercel dashboard
2. Select your portfolio project
3. Go to "Settings" tab
4. Click on "Environment Variables"
5. Add the following variables:

```
DATABASE_URL="mongodb+srv://Aditya:Ad282499@cluster0.zao8ofb.mongodb.net/portfolio?retryWrites=true&w=majority"
NEXTAUTH_SECRET="this-is-a-secret-key-for-jwt-tokens"
NEXTAUTH_URL="https://aditya-3d8klgs74-adityapandey-devs-projects.vercel.app"
```

⚠️ IMPORTANT: 
- Make sure NEXTAUTH_URL matches your exact Vercel deployment URL!
- Note we removed the `&appName=Cluster0` parameter from DATABASE_URL to avoid encoding issues

## 2. Database Connection Issues

If you're having problems with the MongoDB connection from Vercel, try these alternative DATABASE_URL formats:

```
# Option 1: Simplified URL (recommended)
DATABASE_URL="mongodb+srv://Aditya:Ad282499@cluster0.zao8ofb.mongodb.net/portfolio"

# Option 2: Regular MongoDB URL instead of SRV record
DATABASE_URL="mongodb://Aditya:Ad282499@cluster0.zao8ofb.mongodb.net/portfolio"
```

## 3. Test Database Connection

After updating the environment variables, use this diagnostic tool to test your database connection:
```
https://aditya-3d8klgs74-adityapandey-devs-projects.vercel.app/api/db-test
```

This will show detailed information about your database connection and suggest fixes for any issues.

## 4. Initialize Database

If the database connection works but no data exists:
```
https://aditya-3d8klgs74-adityapandey-devs-projects.vercel.app/api/init
```

This will create the necessary admin user and theme settings in your production database.

## 5. Access the God Page

Now you should be able to access the god page at:
```
https://aditya-3d8klgs74-adityapandey-devs-projects.vercel.app/god
```

## MongoDB Atlas Configuration

1. **Check IP Access**: Make sure your MongoDB Atlas cluster allows connections from anywhere:
   - Go to Atlas dashboard → Network Access
   - Add `0.0.0.0/0` to allow all IPs (only for testing)

2. **Verify Database User**: Make sure your database user has the correct password and permissions:
   - Go to Atlas dashboard → Database Access
   - Check if "Aditya" user exists with the correct password

3. **Try Creating a New Cluster**: If issues persist, creating a new cluster sometimes resolves connectivity problems:
   - Create a new M0 free tier cluster
   - Create a new database user
   - Update the DATABASE_URL with the new connection string

## Troubleshooting

If you still see errors:

### Authentication Error Redirects
- If you're redirected to /api/auth/error, your NEXTAUTH_URL environment variable doesn't match your current deployment URL
- Go back to Vercel dashboard and update the NEXTAUTH_URL variable to match your current URL
- Then redeploy the application

### Database Connection Issues
- Verify your MongoDB connection string works from Vercel's region
- Check for any protection rules on your MongoDB Atlas cluster
- Make sure Atlas IP whitelist includes Vercel's deployment IPs (or is set to allow access from anywhere)

### Manifest.json 401 Errors
- Check that the middleware.ts file is correctly configured to only run on admin paths
- Verify the vercel.json file has the correct headers configuration

### Theme API 500 Errors
- Check the Vercel Function Logs for detailed error messages
- Try running the /api/debug endpoint to see database connection status 