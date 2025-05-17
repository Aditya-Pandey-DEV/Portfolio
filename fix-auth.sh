#!/bin/bash

# Fix authentication issues script
echo "Starting authentication fix..."

# 1. Check if .env exists
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cat > .env << EOL
DATABASE_URL="mongodb+srv://Aditya:Ad282499@cluster0.zao8ofb.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
NEXTAUTH_SECRET="this-is-a-secret-key-for-jwt-tokens"
NEXTAUTH_URL="http://localhost:3000"
EOL
  echo ".env file created"
else
  echo ".env file exists, ensuring it has the right values..."
  # Make sure NEXTAUTH_SECRET is valid
  sed -i '' 's/NEXTAUTH_SECRET=.*/NEXTAUTH_SECRET="this-is-a-secret-key-for-jwt-tokens"/' .env
  # Make sure DATABASE_URL doesn't have escaped characters
  sed -i '' 's/%//' .env
fi

# 2. Install dependencies if needed
echo "Installing js-cookie..."
npm install --save js-cookie @types/js-cookie

# 3. Initialize the database with admin user and theme
echo "Initializing database (this may take a moment)..."
curl -X GET http://localhost:3000/api/init

echo ""
echo "Fix completed! You can now:"
echo "1. Access the god page with passcode 282499"
echo "2. Log in to admin with admin@example.com / Admin@123"
echo ""
echo "If you still encounter issues, restart your dev server with:"
echo "npm run dev" 