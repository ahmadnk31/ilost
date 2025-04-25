import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    // Get the email from the query string
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    // Check if the email exists in the waitlist
    const existingUser = await prisma.waitlistEntry.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    // Return whether the email exists
    return NextResponse.json({ exists: !!existingUser }, { status: 200 });
  } catch (error) {
    console.error('Error checking waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to check waitlist' },
      { status: 500 }
    );
  }
}
