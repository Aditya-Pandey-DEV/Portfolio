import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { compare } from 'bcrypt';

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

    // Try to decrypt the password
    // Note: This is a simplified example. In a real application,
    // you would need to implement proper password decryption
    // based on your encryption method
    const decrypted = password.replace(/^\$2[aby]\$\d+\$/, '');

    return NextResponse.json({ decrypted });
  } catch (error) {
    console.error('Error decrypting password:', error);
    return NextResponse.json(
      { error: 'Failed to decrypt password' },
      { status: 500 }
    );
  }
} 