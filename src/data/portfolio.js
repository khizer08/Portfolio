// Single source of truth for all portfolio content.
// Update this file to change copy across the entire site.

export const profile = {
  name: "Syed Khizer",
  initials: "SK",
  role: "Full-Stack Developer",
  rolesRotating: [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Problem solver",
  ],
  tagline:
    "I'm a third-year Information Science & Engineering student at REVA University. I build full-stack apps with React and Node that solve real user problems and keep working well over time.",
  bio: [
    "I enjoy turning practical ideas into working digital products — from a rental marketplace with live bookings to a finance assistant that reads bank alerts and surfaces useful summaries.",
    "My focus is on clear interfaces, fast frontends, and backend systems that keep working when real users are interacting with them.",
    "I’m focused on delivery, quality, and building polished software that serves real needs.",
  ],
  location: "Bengaluru, Karnataka, India",
  email: "syedkhizer2004@gmail.com",
  phone: "+91-7975366988",
  github: "https://github.com/khizer08",
  linkedin: "https://www.linkedin.com/in/syedkhizer08/",
  resumeUrl: "/Syed_Khizer_Resume.pdf",
};

export const stackLayers = [
  { id: "ui", label: "UI / Frontend", detail: "React.js · Tailwind CSS" },
  { id: "api", label: "API / Backend", detail: "Node.js · Express.js" },
  { id: "db", label: "Database", detail: "MongoDB · MySQL · PostgreSQL" },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    items: ["JavaScript (ES6+)", "Java", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Docker", "Figma"],
  },
  {
    id: "learning",
    title: "Currently Learning",
    items: ["Data Structures & Algorithms", "Machine Learning", "System Design"],
  },
];

export const projects = [
  {
    id: "casastay",
    name: "CasaStay",
    tag: "Full-Stack Rental Marketplace",
    description:
      "A rental marketplace built for Bengaluru homes, complete with listing workflows, host controls, Razorpay checkout, and session-based auth for guests and hosts.",
    highlights: [
      "A complete booking flow with calendar availability and reservation status",
      "Passport.js auth across hosts and guests with persistent sessions",
      "Razorpay scoring and payment verification for secure checkout",
      "Email notifications, booking confirmations, and admin alerts",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Razorpay", "Cloudinary"],
    live: "https://khizer.casastay.in/",
    github: "https://github.com/khizer08/CasaStay",
    accent: "primary",
  },
  {
    id: "finsense",
    name: "FinSense",
    tag: "Financial Intelligence App",
    description:
      "A finance assistant that reads banking alerts, extracts transaction details, and surfaces quick summaries in a clean mobile UI.",
    highlights: [
      "Parsing bank alerts to extract transactions and balances",
      "Quick summaries with important updates highlighted",
      "Secure REST APIs for app-to-backend communication",
      "A mobile-first interface designed for fast daily use",
    ],
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "FastAPI"],
    github: "https://github.com/khizer08/Finsense-AI",
    accent: "secondary",
  },
  {
    id: "skillgap",
    name: "SkillGap",
    tag: "Career Guidance Platform",
    description:
      "A toolkit that analyzes resumes, maps skills to technical roles, and generates practical learning plans for engineering preparation.",
    highlights: [
      "Resume analysis that matches skills to job expectations",
      "Training plans for web and mobile development",
      "Interview prep with scored questions for each role",
      "Backend automation built for clarity and speed",
    ],
    stack: ["React.js", "FastAPI", "MongoDB Atlas", "Gemini API"],
    github: "https://github.com/khizer08/SkillsGap_AI",
    accent: "primary",
  },
];

export const achievements = [
  {
    id: "hackathon",
    title: "Project Decrypt '25",
    detail: "Top 10 out of 240+ teams",
  },
  {
    id: "data-analytics",
    title: "Data Analysis Challenge",
    detail: "4th place among 20 finalist teams",
  },
];

export const certifications = [
  {
    id: "fullstack-cert",
    title: "Full Stack Web Development",
    issuer: "Apna College — Delta Batch",
    url: "https://drive.google.com/file/d/1QPHuK8fDsZ2j96eAVZBqOKjTAntmAXlH/view",
  },
  {
    id: "dsa-cert",
    title: "Data Structures & Algorithms with Java",
    issuer: "Apna College — Alpha Batch",
    url: "https://drive.google.com/file/d/1NBE9E4bXmlCvIniZ4kisqGW9wo4mIptJ/view",
  },
];

export const education = {
  degree: "B.Tech, Information Science & Engineering",
  school: "REVA University, Bengaluru",
  period: "2023 — 2027",
  gpa: "CGPA: 8.56",
  prior: {
    school: "Narayana PU College, Bengaluru",
    detail: "PUC (PCMC) — 87.3%",
    period: "2020 — 2022",
  },
};

export const navLinks = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "achievements" },
  { id: "contact", label: "contact" },
];
