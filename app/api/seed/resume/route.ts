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
    
    // Create new resume with Aditya Pandey's data
    const resume = await prisma.resume.create({
      data: {
        name: "Aditya Pandey",
        title: "Full Stack Developer & B.Tech CSE Student",
        email: "adityapandey.dev.in@gmail.com",
        phone: "",
        location: "Bhimtal, Uttarakhand, India",
        about: "I'm a dedicated second-year B.Tech Computer Science student at Graphic Era Hill University, passionate about exploring the digital world through code. My journey in technology is driven by curiosity and a desire to create solutions that make a difference. Currently, I'm focusing on mastering the MERN Stack while also exploring AI and ML technologies. I believe in continuous learning and pushing my boundaries to grow as a developer. I'm particularly interested in the intersection of web development and artificial intelligence, where I see tremendous potential for creating intelligent, user-friendly applications that solve real problems. When I'm not coding, you might find me binge-watching the latest shows, exploring new technologies, or engaging with the developer community – because sometimes, the best debugging instincts come from unexpected places!",
        profileImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/aditya-photo.webp",
        
        // Create related records
        skills: {
          create: [
            // Programming skills
            { name: "JavaScript", category: "Programming" },
            { name: "Python", category: "Programming" },
            { name: "C++", category: "Programming" },
            { name: "Java", category: "Programming" },
            { name: "HTML/CSS", category: "Programming" },
            
            // Frontend skills
            { name: "React", category: "Frontend" },
            { name: "Next.js", category: "Frontend" },
            { name: "TailwindCSS", category: "Frontend" },
            { name: "Redux", category: "Frontend" },
            { name: "Bootstrap", category: "Frontend" },
            
            // Backend skills
            { name: "Node.js", category: "Backend" },
            { name: "Express.js", category: "Backend" },
            { name: "MongoDB", category: "Backend" },
            { name: "RESTful APIs", category: "Backend" },
            { name: "Firebase", category: "Backend" },
            { name: "MySQL", category: "Backend" },
            
            // Tools & DevOps
            { name: "Git & GitHub", category: "Tools & DevOps" },
            { name: "VS Code", category: "Tools & DevOps" },
            { name: "AWS", category: "Tools & DevOps" },
            { name: "CI/CD", category: "Tools & DevOps" },
            { name: "Docker", category: "Tools & DevOps" },
            
            // AI & ML
            { name: "Machine Learning Fundamentals", category: "AI & ML" },
            { name: "Deep Learning Concepts", category: "AI & ML" },
            { name: "Natural Language Processing", category: "AI & ML" },
            { name: "Python Libraries (TensorFlow, NumPy, Pandas)", category: "AI & ML" },
            { name: "Generative AI Applications", category: "AI & ML" },
            
            // Cloud & Other Technologies
            { name: "AWS Services (EC2, S3, Lambda)", category: "Cloud & Other" },
            { name: "Serverless Architecture", category: "Cloud & Other" },
            { name: "Ethical Hacking Basics", category: "Cloud & Other" },
            { name: "Mobile App Development", category: "Cloud & Other" },
            { name: "Responsive Web Design", category: "Cloud & Other" },
            
            // Soft Skills
            { name: "Problem Solving", category: "Soft Skills" },
            { name: "Team Collaboration", category: "Soft Skills" },
            { name: "Technical Communication", category: "Soft Skills" },
            { name: "Time Management", category: "Soft Skills" },
            { name: "Attention to Detail", category: "Soft Skills" },
            { name: "Continuous Learning", category: "Soft Skills" },
          ],
        },
        
        education: {
          create: [
            {
              institution: "Graphic Era Hill University",
              degree: "Bachelor of Technology",
              field: "Computer Science and Engineering",
              startDate: new Date("2023-08-01"),
              endDate: null, // Currently pursuing
              gpa: "3.8",
            },
            {
              institution: "Nirmala Convent Sr. Sec. School",
              degree: "Senior Secondary (Class XII)",
              field: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
              startDate: new Date("2022-01-01"),
              endDate: new Date("2023-12-31"),
              gpa: "",
            },
            {
              institution: "Nirmala Convent Sr. Sec. School",
              degree: "Secondary (Class X)",
              field: "General (Mathematics, Science, English, Social Studies)",
              startDate: new Date("2020-01-01"),
              endDate: new Date("2021-12-31"),
              gpa: "",
            },
          ],
        },
        
        experiences: {
          create: [], // No formal work experience listed in the HTML
        },
        
        projects: {
          create: [
            {
              title: "AtmosphereApp",
              description: "A sleek weather forecasting web application providing real-time weather updates for cities worldwide using the OpenWeather API.",
              technologies: "HTML, CSS, JavaScript, OpenWeather API",
              image: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/AtmosphereApp.png",
              link: "https://github.com/aditya-pandey-dev/AtmosphereApp",
            },
            {
              title: "KeyForge Password Generator",
              description: "A secure password generator designed to create strong, unique, and customizable passwords with adjustable complexity.",
              technologies: "HTML, CSS, JavaScript, Crypto",
              image: "",
              link: "https://github.com/aditya-pandey-dev/KeyForge-Secure-Password-Generator",
            },
            {
              title: "NeoCalc iOS",
              description: "A dark-themed, sleek calculator inspired by the iOS design, built with web technologies for a seamless experience.",
              technologies: "HTML, CSS, JavaScript, UI Design",
              image: "",
              link: "https://github.com/aditya-pandey-dev/NeoCalc-iOS",
            },
            {
              title: "QRify QR Code Generator",
              description: "A web application designed to generate custom QR codes for URLs, text, and other types of data with ease.",
              technologies: "HTML, CSS, JavaScript, QR API",
              image: "",
              link: "https://github.com/aditya-pandey-dev/QRify-QR-Code-Generator",
            },
            {
              title: "TaskMaster To-Do List",
              description: "A minimalistic to-do list application that helps organize and track daily tasks with local storage for persistence.",
              technologies: "HTML, CSS, JavaScript, Local Storage",
              image: "",
              link: "https://github.com/aditya-pandey-dev/TaskMaster-To-Do-List",
            },
            {
              title: "TicTacToe Master",
              description: "A web-based version of the classic Tic-Tac-Toe game that supports both multiplayer and computer gameplay.",
              technologies: "HTML, CSS, JavaScript, Game Logic",
              image: "",
              link: "https://github.com/aditya-pandey-dev/TicTacToe-Master",
            },
          ],
        },
        
        // Add focus areas
        focusAreas: {
          create: [
            {
              title: "Full Stack Web Development",
              description: "Creating responsive, intuitive interfaces and robust backend systems with React, Node.js, Express, and MongoDB.",
              icon: "fas fa-laptop-code",
            },
            {
              title: "AI & Machine Learning",
              description: "Exploring the fascinating world of artificial intelligence and machine learning applications using Python and TensorFlow.",
              icon: "fas fa-brain",
            },
            {
              title: "Competitive Programming",
              description: "Sharpening problem-solving skills through algorithmic challenges and data structure implementations in C++ and Python.",
              icon: "fas fa-code",
            },
            {
              title: "Cloud Computing",
              description: "Building scalable and reliable applications using cloud services and platforms like AWS and Google Cloud.",
              icon: "fas fa-cloud",
            },
          ],
        },
        
        certifications: {
          create: [
            {
              name: "Ethical Hacking",
              issuer: "Udemy",
              date: new Date("2024-09-01"),
              image: "",
            },
            {
              name: "Version Control Systems and Git",
              issuer: "Meta (Coursera)",
              date: new Date("2024-09-01"),
              image: "",
            },
            {
              name: "Introduction to Generative AI Learning Path",
              issuer: "Google Cloud Training (Coursera)",
              date: new Date("2024-09-01"),
              image: "",
            },
            {
              name: "Responsible AI",
              issuer: "Google Cloud Skills Boost (Coursera)",
              date: new Date("2024-09-01"),
              image: "",
            },
            {
              name: "Introduction to Large Language Models",
              issuer: "Google Cloud Skills Boost (Coursera)",
              date: new Date("2024-09-01"),
              image: "",
            },
          ],
        },
        
        socialLinks: {
          create: [
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/aditya-pandey-dev/",
              icon: "fab fa-linkedin-in",
            },
            {
              platform: "GitHub",
              url: "https://github.com/aditya-pandey-dev",
              icon: "fab fa-github",
            },
            {
              platform: "Email",
              url: "mailto:adityapandey.dev.in@gmail.com",
              icon: "fas fa-envelope",
            },
            {
              platform: "LeetCode",
              url: "https://leetcode.com/u/aditya-pandey-dev/",
              icon: "fas fa-code",
            },
          ],
        },
        
        seo: {
          create: {
            title: "Aditya Pandey | Full Stack Developer & B.Tech CSE Student | Portfolio",
            description: "Professional portfolio of Aditya Pandey, a B.Tech CSE student at Graphic Era Hill University, full stack developer, and AI/ML enthusiast. Explore projects, skills, and achievements.",
            keywords: "Aditya Pandey, Full Stack Developer, Web Developer, MERN Stack, AI/ML, B.Tech CSE, Graphic Era Hill University, React, Node.js, JavaScript, Python, theadityapandey, aditya-pandey-dev, adityapandey-tech, aditya2006p, Portfolio, Developer India",
            ogTitle: "Aditya Pandey | Full Stack Developer & B.Tech CSE Student",
            ogDescription: "Professional portfolio of Aditya Pandey, a B.Tech CSE student at Graphic Era Hill University, full stack developer, and AI/ML enthusiast.",
            ogImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/Portfolio.png",
            twitterTitle: "Aditya Pandey | Full Stack Developer & B.Tech CSE Student",
            twitterDescription: "Professional portfolio of Aditya Pandey, a B.Tech CSE student at Graphic Era Hill University, full stack developer, and AI/ML enthusiast.",
            twitterImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/Portfolio.png",
            canonicalUrl: "https://aditya-pandey-dev.github.io/",
          },
        },
        
        // Create a default theme for the resume
        themes: {
          create: [{
            name: "Aditya's Portfolio Theme",
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
      message: "Database seeded with Aditya Pandey's resume data",
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