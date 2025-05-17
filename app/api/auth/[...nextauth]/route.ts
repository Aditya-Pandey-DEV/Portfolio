import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";

// Create a NextAuth handler with our options
const handler = NextAuth(authOptions);

// Export the handlers for GET and POST requests
export { handler as GET, handler as POST };

// Note: We're not using custom wrappers to avoid interfering with NextAuth's internal handling
// This is the recommended approach for Next.js 13+ route handlers with NextAuth 