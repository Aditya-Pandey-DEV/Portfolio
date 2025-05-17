import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { compare } from 'bcrypt';

// Common passwords to try
const COMMON_PASSWORDS = [
  'Admin@123',
  'admin@123',
  'admin123',
  'Admin123',
  'password',
  'Password',
  'Password123',
  'password123'
];

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const referer = headersList.get('referer') || '';
    const isFromGod = referer.includes('/god');

    if (!isFromGod) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Try to match the password with common passwords
    for (const commonPassword of COMMON_PASSWORDS) {
      const isMatch = await compare(commonPassword, password);
      if (isMatch) {
        return NextResponse.json({ decrypted: commonPassword });
      }
    }

    // If no match found, return the original password
    return NextResponse.json({ 
      decrypted: 'Unable to decrypt. This is likely a custom password.',
      original: password 
    });

  } catch (error) {
    console.error('Error decrypting password:', error);
    return NextResponse.json(
      { error: 'Failed to decrypt password' },
      { status: 500 }
    );
  }
} 