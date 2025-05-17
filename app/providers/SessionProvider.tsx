'use client';

import { SessionProvider } from 'next-auth/react';
import React, { useEffect } from "react";

// Error handler to suppress NextAuth client errors in production
if (process.env.NODE_ENV === "production") {
  // Override the console.error for NextAuth client errors
  const originalConsoleError = console.error;
  console.error = function (...args) {
    // Check if it's a NextAuth client error
    if (
      typeof args[0] === "string" &&
      (args[0].includes("[next-auth]") || 
       args[0].includes("Unexpected token '<'"))
    ) {
      // Log a more helpful message instead
      console.log("Authentication client error suppressed. This is expected behavior when auth is not configured.");
      return;
    }
    // Call the original for all other errors
    originalConsoleError.apply(console, args);
  };
}

export default function NextAuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>;
} 