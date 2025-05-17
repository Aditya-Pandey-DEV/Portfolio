import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { prisma } from "@/app/lib/db";

export async function GET() {
  try {
    // Check if admin user already exists
    const existingAdmin = await prisma.user.findFirst({
      where: {
        email: "adityapandey.dev.in@gmail.com"
      }
    });

    if (existingAdmin) {
      return NextResponse.json({
        message: "Admin user already exists",
        userId: existingAdmin.id
      });
    }

    // Create admin user
    const hashedPassword = await hash("Admin@123", 10);
    const admin = await prisma.user.create({
      data: {
        name: "Aditya Pandey",
        email: "adityapandey.dev.in@gmail.com",
        password: hashedPassword
      }
    });

    return NextResponse.json({
      message: "Admin user created successfully",
      userId: admin.id
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      {
        error: "Failed to create admin user",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 