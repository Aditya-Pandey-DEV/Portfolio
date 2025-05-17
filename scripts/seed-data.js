// Simple script to seed the database with portfolio data
const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    // Check if data already exists to prevent duplicate entries
    const existingResume = await prisma.resume.findFirst();
    
    if (existingResume) {
      console.log('Data already exists. Skipping seed operation.');
      console.log('Existing resume ID:', existingResume.id);
      return;
    }
    
    // Create a new resume with all personal information
    const resume = await prisma.resume.create({
      data: {
        name: "Aditya Pandey",
        title: "B.Tech CSE Student & Full Stack Developer",
        email: "adityapandey.dev.in@gmail.com",
        phone: "+91 XXXXXXXXXX", // Replace with actual number
        location: "Bhimtal, Uttarakhand, India",
        about: "I'm a dedicated second-year B.Tech Computer Science student at Graphic Era Hill University, passionate about exploring the digital world through code. My journey in technology is driven by curiosity and a desire to create solutions that make a difference. Currently, I'm focusing on mastering the MERN Stack while also exploring AI and ML technologies. I believe in continuous learning and pushing my boundaries to grow as a developer. I'm particularly interested in the intersection of web development and artificial intelligence, where I see tremendous potential for creating intelligent, user-friendly applications that solve real problems.",
        profileImage: "https://raw.githubusercontent.com/aditya-pandey-dev/aditya-pandey-dev/main/assets/images/aditya-photo.webp",
        
        // Add skills categorized by type
        skills: {
          create: [
            // Programming Languages
            { name: "JavaScript", category: "Programming" },
            { name: "Python", category: "Programming" },
            { name: "C++", category: "Programming" },
            { name: "Java", category: "Programming" },
            { name: "HTML5", category: "Programming" },
            { name: "CSS3", category: "Programming" },
            { name: "TypeScript", category: "Programming" },
            
            // Frontend
            { name: "React.js", category: "Frontend" },
            { name: "Tailwind CSS", category: "Frontend" },
            { name: "Bootstrap", category: "Frontend" },
            { name: "Redux", category: "Frontend" },
            { name: "Responsive Design", category: "Frontend" },
            { name: "UI/UX Principles", category: "Frontend" },
            
            // Backend
            { name: "Node.js", category: "Backend" },
            { name: "Express.js", category: "Backend" },
            { name: "MongoDB", category: "Backend" },
            { name: "RESTful APIs", category: "Backend" },
            { name: "MySQL", category: "Backend" },
            { name: "Firebase", category: "Backend" },
            { name: "Authentication", category: "Backend" },
            
            // DevOps & Tools
            { name: "Git & GitHub", category: "DevOps" },
            { name: "VS Code", category: "DevOps" },
            { name: "AWS", category: "DevOps" },
            { name: "CI/CD", category: "DevOps" },
            { name: "GitHub Actions", category: "DevOps" },
            { name: "Docker", category: "DevOps" },
            
            // AI & ML
            { name: "Machine Learning Fundamentals", category: "AI/ML" },
            { name: "Deep Learning Concepts", category: "AI/ML" },
            { name: "Natural Language Processing", category: "AI/ML" },
            { name: "TensorFlow", category: "AI/ML" },
            { name: "NumPy", category: "AI/ML" },
            { name: "Pandas", category: "AI/ML" },
            { name: "Generative AI", category: "AI/ML" },
          ]
        },
        
        // Add educational background
        education: {
          create: [
            {
              institution: "Graphic Era Hill University",
              degree: "Bachelor of Technology",
              field: "Computer Science and Engineering",
              startDate: new Date("2023-08-01"),
              endDate: new Date("2027-06-30"),
              gpa: "Current CGPA: 8.5" // Replace with actual GPA if available
            },
            {
              institution: "Nirmala Convent Sr. Sec. School, Kathgodam",
              degree: "Senior Secondary (Class XII)",
              field: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
              startDate: new Date("2022-01-01"),
              endDate: new Date("2023-12-31")
            },
            {
              institution: "Nirmala Convent Sr. Sec. School, Kathgodam",
              degree: "Secondary (Class X)",
              field: "General Education",
              startDate: new Date("2020-01-01"),
              endDate: new Date("2021-12-31")
            }
          ]
        },
        
        // Add projects
        projects: {
          create: [
            {
              title: "AtmosphereApp",
              description: "A sleek weather forecasting web application providing real-time weather updates for cities worldwide using the OpenWeather API.",
              technologies: "HTML, CSS, JavaScript, OpenWeather API, Geolocation API, Local Storage",
              image: "https://placeholder.co/600x400/3b82f6/FFFFFF?text=AtmosphereApp",
              link: "https://github.com/aditya-pandey-dev/AtmosphereApp"
            },
            {
              title: "KeyForge Password Generator",
              description: "A secure password generator designed to create strong, unique, and customizable passwords with adjustable complexity.",
              technologies: "HTML, CSS, JavaScript, Crypto",
              image: "https://placeholder.co/600x400/6366f1/FFFFFF?text=KeyForge",
              link: "https://github.com/aditya-pandey-dev/KeyForge-Secure-Password-Generator"
            },
            {
              title: "NeoCalc iOS",
              description: "A dark-themed, sleek calculator inspired by the iOS design, built with web technologies for a seamless experience.",
              technologies: "HTML, CSS, JavaScript, UI Design",
              image: "https://placeholder.co/600x400/1f2937/FFFFFF?text=NeoCalc",
              link: "https://github.com/aditya-pandey-dev/NeoCalc-iOS"
            },
            {
              title: "QRify QR Code Generator",
              description: "A web application designed to generate custom QR codes for URLs, text, and other types of data with ease.",
              technologies: "HTML, CSS, JavaScript, QR API",
              image: "https://placeholder.co/600x400/10b981/FFFFFF?text=QRify",
              link: "https://github.com/aditya-pandey-dev/QRify-QR-Code-Generator"
            },
            {
              title: "TaskMaster To-Do List",
              description: "A minimalistic to-do list application that helps organize and track daily tasks with local storage for persistence.",
              technologies: "HTML, CSS, JavaScript, Local Storage",
              image: "https://placeholder.co/600x400/f59e0b/FFFFFF?text=TaskMaster",
              link: "https://github.com/aditya-pandey-dev/TaskMaster-To-Do-List"
            },
            {
              title: "TicTacToe Master",
              description: "Interactive Tic Tac Toe game with multiple difficulty levels and a sleek user interface.",
              technologies: "HTML, CSS, JavaScript, Game Logic",
              image: "https://placeholder.co/600x400/ec4899/FFFFFF?text=TicTacToe",
              link: "https://github.com/aditya-pandey-dev/TicTacToe-Master"
            }
          ]
        },
        
        // Add certifications
        certifications: {
          create: [
            {
              name: "Ethical Hacking",
              issuer: "Udemy",
              date: new Date("2024-09-01"),
              image: "https://placeholder.co/600x400/3b82f6/FFFFFF?text=EthicalHacking"
            },
            {
              name: "Version Control Systems and Git",
              issuer: "Meta (Coursera)",
              date: new Date("2024-09-01"),
              image: "https://placeholder.co/600x400/6366f1/FFFFFF?text=Git"
            },
            {
              name: "Introduction to Generative AI Learning Path",
              issuer: "Google Cloud Training (Coursera)",
              date: new Date("2024-09-01"),
              image: "https://placeholder.co/600x400/8b5cf6/FFFFFF?text=GenerativeAI"
            },
            {
              name: "Responsible AI",
              issuer: "Google Cloud Training (Coursera)",
              date: new Date("2024-09-01"),
              image: "https://placeholder.co/600x400/8b5cf6/FFFFFF?text=ResponsibleAI"
            }
          ]
        },
        
        // Add social links
        socialLinks: {
          create: [
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/aditya-pandey-dev/",
              icon: "fab fa-linkedin-in"
            },
            {
              platform: "GitHub",
              url: "https://github.com/aditya-pandey-dev",
              icon: "fab fa-github"
            },
            {
              platform: "LeetCode",
              url: "https://leetcode.com/u/aditya-pandey-dev/",
              icon: "fas fa-code"
            },
            {
              platform: "Email",
              url: "mailto:adityapandey.dev.in@gmail.com",
              icon: "fas fa-envelope"
            }
          ]
        },
        
        // Add SEO data
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
            canonicalUrl: "https://aditya-pandey-dev.github.io/"
          }
        }
      }
    });
    
    console.log('Created resume with ID:', resume.id);
    
    // Create a default theme for the portfolio
    const theme = await prisma.theme.create({
      data: {
        name: "Blue Professional",
        isDefault: true,
        primaryColor: "#1e40af",
        secondaryColor: "#3b82f6",
        accentColor: "#f59e0b",
        backgroundColor: "#ffffff",
        textColor: "#333333",
        headingColor: "#1e3a8a",
        linkColor: "#1e40af",
        buttonColor: "#1e40af",
        buttonTextColor: "#ffffff",
        cardColor: "#f9fafb",
        borderColor: "#e5e7eb",
        
        // Dark mode colors based on the previous portfolio's design
        darkPrimaryColor: "#3b82f6",
        darkSecondaryColor: "#60a5fa",
        darkAccentColor: "#f59e0b",
        darkBackgroundColor: "#0f172a",
        darkTextColor: "#f3f4f6",
        darkHeadingColor: "#f8fafc",
        darkLinkColor: "#60a5fa",
        darkButtonColor: "#3b82f6",
        darkButtonTextColor: "#ffffff",
        darkCardColor: "#1e293b",
        darkBorderColor: "#334155",
        
        // Font settings
        headingFont: "Poppins",
        bodyFont: "Inter",
        
        // Border radius
        borderRadius: 8,
        buttonRadius: 8,
        cardRadius: 12,
        
        // Connect to the resume
        resumeId: resume.id
      }
    });
    
    console.log('Created theme with ID:', theme.id);
    console.log('Data seeded successfully!');
    
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => console.log('Seed script completed'))
  .catch((e) => {
    console.error('Error running seed script:', e);
    process.exit(1);
  }); 