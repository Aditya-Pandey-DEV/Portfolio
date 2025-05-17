import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function GET() {
  try {
    // Check if there's already resume data
    const existingResume = await prisma.resume.findFirst();
    
    if (existingResume) {
      return NextResponse.json({
        message: "Database already seeded with resume data",
        resume: existingResume,
      });
    }
    
    // Create new resume with basic data
    const resume = await prisma.resume.create({
      data: {
        name: "Aditya Pandey",
        title: "Full Stack Developer & B.Tech CSE Student",
        email: "adityapandey.dev.in@gmail.com",
        phone: "",
        location: "Bhimtal, Uttarakhand, India",
        about: "I'm a dedicated second-year B.Tech Computer Science student at Graphic Era Hill University, passionate about exploring the digital world through code.",
        profileImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/aditya-photo.webp",
        
        // Create a default theme
        themes: {
          create: [{
            name: "Default Theme",
            isDefault: true,
            primaryColor: "#1e40af",
            secondaryColor: "#3b82f6", 
            accentColor: "#f59e0b",
            backgroundColor: "#ffffff",
            textColor: "#333333",
            headingColor: "#111827",
            linkColor: "#1e40af",
            buttonColor: "#1e40af",
            buttonTextColor: "#ffffff",
            cardColor: "#f9fafb",
            borderColor: "#e5e7eb",
            
            darkPrimaryColor: "#3b82f6",
            darkSecondaryColor: "#60a5fa",
            darkAccentColor: "#f59e0b",
            darkBackgroundColor: "#0f172a",
            darkTextColor: "#f3f4f6",
            darkHeadingColor: "#f9fafb",
            darkLinkColor: "#60a5fa",
            darkButtonColor: "#3b82f6",
            darkButtonTextColor: "#ffffff",
            darkCardColor: "#1e293b",
            darkBorderColor: "#334155",
            
            headingFont: "Poppins",
            bodyFont: "Inter",
            
            borderRadius: 8,
            buttonRadius: 8,
            cardRadius: 12,
          }],
        }
      },
    });
    
    return NextResponse.json({
      message: "Database seeded with basic resume data",
      resume,
    });
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json(
      {
        error: "Failed to seed database",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
} 