# Deployment Guide

## Environment Variables for Vercel

To deploy this portfolio project on Vercel, you need to set the following environment variables in your Vercel project settings:

```
# Database URL - MongoDB connection string
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# NextAuth configuration 
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-nextauth-secret-key

# Cloudinary for image uploads (if used)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Database Setup

After deploying to Vercel, you need to initialize your database with seed data. Visit the following endpoint:

```
https://your-domain.vercel.app/api/seed-db
```

This will create the initial resume data and theme settings required for the portfolio to function properly.

## Fixing API Issues

If you're seeing errors in your API endpoints (like 500 errors in /api/resume or /api/theme), check that:

1. The database is properly seeded using the seed-db endpoint
2. Your schema matches the Prisma models (if you see errors about invalid fields)
3. Your MongoDB instance is accessible from Vercel

## Admin Setup

To create an admin user for the dashboard:

```
https://your-domain.vercel.app/api/auth/register
```

This will create an admin user with:
- Email: adityapandey.dev.in@gmail.com
- Password: Admin@123

You can then log in to the admin dashboard at:

```
https://your-domain.vercel.app/admin
```

## Troubleshooting

If you encounter issues with Prisma on Vercel, make sure:

1. Your MongoDB connection string is correct
2. The MongoDB user has appropriate permissions
3. The IP address is allowed in your MongoDB network settings (or set to allow access from anywhere for testing)
4. The Prisma schema matches your API queries 