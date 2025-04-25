import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail, generateUserConfirmationEmail, generateAdminNotificationEmail } from '@/lib/email';

// Validation schema for waitlist entries
const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = waitlistSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const { email, name } = result.data;
    
    // Check if email already exists in the waitlist
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email },
    });
    
    if (existingEntry) {
      return NextResponse.json(
        { success: false, message: 'This email is already on our waiting list' },
        { status: 409 }
      );
    }
      // Save to database
    await prisma.waitlistEntry.create({
      data: {
        email,
        name,
      },
    });
    
    // Send confirmation email to user
    const userEmail = generateUserConfirmationEmail(name || '');
    await sendEmail({
      to: email,
      ...userEmail,
    });
    
    // Send notification email to admin
    if (process.env.ADMIN_EMAIL) {
      const adminEmail = generateAdminNotificationEmail(email, name);
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        ...adminEmail,
      });
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist' 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
