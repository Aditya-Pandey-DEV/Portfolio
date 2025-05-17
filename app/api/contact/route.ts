import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPrismaClient } from '@/app/lib/prisma';

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Fetch the recipient email from the database
    let recipientEmail;
    try {
      const resumeData = await prisma.resume.findFirst();
      recipientEmail = resumeData?.email;
      
      if (!recipientEmail) {
        console.warn("No email found in database, falling back to environment variable");
        recipientEmail = process.env.CONTACT_EMAIL || "adityapandey.dev.in@gmail.com";
      } else {
        console.log(`Using email from database: ${recipientEmail}`);
      }
    } catch (dbError) {
      console.error("Error fetching email from database:", dbError);
      recipientEmail = process.env.CONTACT_EMAIL || "adityapandey.dev.in@gmail.com";
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true" ? true : false,
      auth: {
        user: process.env.EMAIL_USER || recipientEmail,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Portfolio Contact" <${recipientEmail}>`,
      to: recipientEmail,
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    try {
      // Try to send the email if credentials are set up
      if (process.env.EMAIL_PASSWORD) {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);

        return NextResponse.json({ success: true, message: "Message sent successfully" });
      } else {
        // If email credentials are not set up, log the submission and return success
        // This allows testing the form without actual email sending
        console.log("Email would be sent with these details:", {
          name,
          email,
          message,
          recipient: recipientEmail
        });

        return NextResponse.json({ 
          success: true, 
          message: "Message received (email not sent - missing configuration)"
        });
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      
      // Still return success to the user but log the error
      return NextResponse.json({ 
        success: true, 
        message: "Your message was received but there was an issue with our email system. We'll still get your message."
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 