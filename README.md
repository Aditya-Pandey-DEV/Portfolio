# Portfolio Website

A customizable portfolio website built with Next.js, MongoDB, and Tailwind CSS.

## Features

- Modern and responsive design
- Admin dashboard for content management
- Dark/light mode
- Customizable theme settings
- Contact form with email functionality
- Resume import from social platforms (GitHub, LinkedIn, Twitter/X, LeetCode)
- SEO optimization

## Setup Instructions

### Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Connection String (REQUIRED)
DATABASE_URL="mongodb+srv://your-username:your-password@your-cluster-url/portfolio?retryWrites=true&w=majority"

# For NextAuth.js (REQUIRED)
NEXTAUTH_SECRET="your-random-string-for-jwt-encryption"
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary for image uploads (OPTIONAL)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Admin credentials (used for initial setup) (REQUIRED)
ADMIN_PASSWORD="your-strong-password"
```

4. Generate Prisma client:
   ```
   npx prisma generate
   ```
5. Start the development server:
   ```
   npm run dev
   ```

### Deployment on Vercel

1. Create a new project on Vercel and connect it to your GitHub repository
2. Add the following environment variables in the Vercel dashboard:
   - `DATABASE_URL` - Your MongoDB connection string
   - `NEXTAUTH_SECRET` - A random string for JWT encryption
   - `NEXTAUTH_URL` - Your production URL (e.g., https://your-portfolio.vercel.app)
   - `ADMIN_PASSWORD` - Password for the admin dashboard
   - `CLOUDINARY_CLOUD_NAME` - (Optional) Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY` - (Optional) Your Cloudinary API key
   - `CLOUDINARY_API_SECRET` - (Optional) Your Cloudinary API secret
3. Deploy the project

## Social Media Integration

The portfolio website includes functionality to import your profile data from various social platforms:

- **GitHub**: Import your profile information, bio, and repositories
- **LinkedIn**: Connect your professional profile (requires authentication)
- **Twitter/X**: Link your social media presence
- **LeetCode**: Add your coding profile

To use this feature, navigate to the Admin Dashboard > Social Links section and use the import tool.

## Admin Dashboard

Access the admin dashboard at `/admin` to:

- Update personal information
- Manage skills, experience, education, and projects
- Configure theme settings
- Set up SEO metadata
- Import data from social platforms
- Manage contact information

## Troubleshooting Deployment Issues

If you encounter build errors related to Prisma:

1. Make sure your `DATABASE_URL` environment variable is correctly set in Vercel
2. Verify that your MongoDB instance is accessible from Vercel's servers
3. Check that your MongoDB connection string includes the database name (e.g., `/portfolio` at the end)
4. Try rebuilding the project in Vercel after confirming all environment variables are set

For other deployment issues, check the Vercel build logs for specific errors.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
# Portfolio
