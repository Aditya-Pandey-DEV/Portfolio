#!/bin/bash

# Deployment script for portfolio website

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set."
  echo "Please set it before deploying."
  echo "Example: export DATABASE_URL='mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority'"
  exit 1
fi

# Check if NEXTAUTH_SECRET is set
if [ -z "$NEXTAUTH_SECRET" ]; then
  echo "Warning: NEXTAUTH_SECRET is not set. Generating a new one..."
  # Generate a random string for NEXTAUTH_SECRET
  export NEXTAUTH_SECRET=$(openssl rand -base64 32)
  echo "NEXTAUTH_SECRET set to: $NEXTAUTH_SECRET"
  echo "Please save this value for future deployments."
fi

# Check if NEXTAUTH_URL is set
if [ -z "$NEXTAUTH_URL" ]; then
  echo "Warning: NEXTAUTH_URL is not set."
  echo "Please set it to your deployment URL."
  echo "Example: export NEXTAUTH_URL='https://your-domain.vercel.app'"
fi

# Run build
echo "Building the application..."
npm run build

echo "Deployment preparation complete."
echo "Run the following command to deploy to Vercel:"
echo "vercel --prod" 