// Fallback data when database connection fails

export const fallbackResumeData = {
  id: 'fallback-id',
  name: 'John Doe',
  title: 'Full Stack Developer',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  about: 'Full Stack Developer with experience in React, Node.js, and modern web technologies.',
  profileImage: '/profile-placeholder.jpg',
  skills: [
    { id: 'skill-1', name: 'JavaScript', category: 'Programming' },
    { id: 'skill-2', name: 'React', category: 'Frontend' },
    { id: 'skill-3', name: 'Node.js', category: 'Backend' },
    { id: 'skill-4', name: 'Next.js', category: 'Frontend' },
    { id: 'skill-5', name: 'TypeScript', category: 'Programming' },
    { id: 'skill-6', name: 'MongoDB', category: 'Database' },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Technical University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      startDate: '2020-09-01',
      endDate: '2024-06-30',
      gpa: '3.8/4.0',
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      company: 'Tech Solutions Inc.',
      position: 'Software Engineering Intern',
      startDate: '2023-06-01',
      endDate: '2023-09-30',
      description: 'Developed features for a web application using React and Node.js.',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with user authentication.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://github.com/johndoe/ecommerce',
      image: null,
    },
    {
      id: 'proj-2',
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard for visualizing complex datasets.',
      technologies: 'React, D3.js, TypeScript',
      link: 'https://github.com/johndoe/dashboard',
      image: null,
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023-04-15',
      image: null,
    },
  ],
  socialLinks: [
    { id: 'social-1', platform: 'github', url: 'https://github.com/johndoe', icon: 'FaGithub' },
    { id: 'social-2', platform: 'linkedin', url: 'https://linkedin.com/in/johndoe', icon: 'FaLinkedin' },
    { id: 'social-3', platform: 'twitter', url: 'https://twitter.com/johndoe', icon: 'FaTwitter' },
  ],
}; 