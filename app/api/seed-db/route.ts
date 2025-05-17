import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET() {
  try {
    // Check if there's already resume data
    const existingResume = await db.resume.findFirst();
    
    if (existingResume) {
      return NextResponse.json({
        message: "Database already contains resume data",
        resume: existingResume,
      });
    }
    
    // Create new resume with all required data
    const resume = await db.resume.create({
      data: {
        name: "Aditya Pandey",
        title: "Full Stack Developer & B.Tech CSE Student",
        email: "adityapandey.dev.in@gmail.com",
        phone: "+91 0000000000", // Replace with actual number if needed
        location: "Bhimtal, Uttarakhand, India",
        about: "I'm a dedicated second-year B.Tech Computer Science student at Graphic Era Hill University, passionate about exploring the digital world through code. My journey in technology is driven by curiosity and a desire to create solutions that make a difference. Currently, I'm focusing on mastering the MERN Stack while also exploring AI and ML technologies.",
        profileImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/aditya-photo.webp",
        
        // Add skills
        skills: {
          create: [
            { name: "JavaScript", category: "Programming Languages" },
            { name: "TypeScript", category: "Programming Languages" },
            { name: "Python", category: "Programming Languages" },
            { name: "HTML/CSS", category: "Web Technologies" },
            { name: "React", category: "Frameworks & Libraries" },
            { name: "Next.js", category: "Frameworks & Libraries" },
            { name: "Node.js", category: "Frameworks & Libraries" },
            { name: "Express", category: "Frameworks & Libraries" },
            { name: "MongoDB", category: "Databases" },
            { name: "Prisma", category: "Databases" },
            { name: "Git", category: "Tools" },
            { name: "Responsive Design", category: "Web Technologies" },
            { name: "RESTful APIs", category: "Web Technologies" },
            { name: "Problem Solving", category: "Soft Skills" },
          ],
        },
        
        // Add education
        education: {
          create: [
            {
              institution: "Graphic Era Hill University",
              degree: "Bachelor of Technology",
              field: "Computer Science and Engineering",
              startDate: new Date("2023-08-01"),
              endDate: new Date("2027-05-31"),
              gpa: "3.8",
            },
          ],
        },
        
        // Add projects
        projects: {
          create: [
            {
              title: "Personal Portfolio",
              description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
              technologies: "Next.js, React, Tailwind CSS, TypeScript, Prisma",
              image: "/portfolio.png",
              link: "https://github.com/aditya-pandey-dev/portfolio",
            },
            {
              title: "Task Manager",
              description: "A full-stack task management application with user authentication.",
              technologies: "React, Node.js, Express, MongoDB",
              image: "/taskmanager.png",
              link: "https://github.com/aditya-pandey-dev/task-manager",
            },
          ],
        },
        
        // Add focus areas
        focusAreas: {
          create: [
            {
              title: "Full Stack Development",
              description: "Building responsive web applications with modern frameworks",
              icon: "fas fa-code",
            },
            {
              title: "AI & Machine Learning",
              description: "Exploring ML algorithms and AI applications",
              icon: "fas fa-brain",
            },
          ],
        },
        
        // Add social links
        socialLinks: {
          create: [
            {
              platform: "GitHub",
              url: "https://github.com/aditya-pandey-dev",
              icon: "fab fa-github",
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/aditya-pandey-dev/",
              icon: "fab fa-linkedin",
            },
            {
              platform: "Email",
              url: "mailto:adityapandey.dev.in@gmail.com",
              icon: "fas fa-envelope",
            },
          ],
        },
        
        // Add SEO data
        seo: {
          create: {
            title: "Aditya Pandey | Full Stack Developer & Student",
            description: "Personal portfolio of Aditya Pandey, a Full Stack Developer and Computer Science student.",
            keywords: "full stack developer, web development, react, next.js, javascript, typescript",
            ogTitle: "Aditya Pandey - Full Stack Developer",
            ogDescription: "Check out my portfolio showcasing my skills and projects in web development.",
            canonicalUrl: "https://adityapandey.dev",
          },
        },
      },
    });

    // Create theme separately since it's no longer directly connected in the schema
    await db.theme.create({
      data: {
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
        darkBorderColor: "#374151",
        
        headingFont: "Poppins",
        bodyFont: "Inter",
        
        borderRadius: 8,
        buttonRadius: 8,
        cardRadius: 12,
      }
    });
    
    return NextResponse.json({
      message: "Database seeded successfully with resume and theme data",
      resumeId: resume.id,
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