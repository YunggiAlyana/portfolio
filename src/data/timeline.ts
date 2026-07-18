export type TimelineItem = {
  id: number;
  type: "work" | "education";
  role: string;
  company: string;
  date: string;
  location: string;
  desc?: string;
  skills?: string[];
};

export const timelineData: TimelineItem[] = [
  // --- WORK EXPERIENCE ---
  {
    id: 1,
    type: "work",
    role: "Project Drafter",
    company: "Indomaret Group",
    date: "Jul 2026 - Present",
    location: "Depok, Jawa Barat",
    desc: "Successfully transitioned to the Project Department, bridging extensive retail operations experience with technical drafting to design highly efficient commercial spaces.",
    skills: ["AutoCAD", "Space Planning", "2D Drafting", "Process Optimization"]
  },
  {
    id: 2,
    type: "work",
    role: "Front-end AI Engineering Intern",
    company: "FlyRank AI",
    date: "Jun 2026 - Present",
    location: "Chicago, IL (Remote)",
    desc: "Focusing on Front-end AI Engineering. Utilizing AI tools to accelerate problem-solving and component development, specializing in Next.js, TypeScript, and modern cloud deployment.",
    skills: ["Next.js", "TypeScript", "AI Integration", "Prompt Engineering"]
  },
  {
    id: 3,
    type: "work",
    role: "Full-Stack Web Developer Cohort",
    company: "Coding Camp powered by DBS Foundation",
    date: "Feb 2026 - Present",
    location: "Remote",
    desc: "Led the frontend and UI/UX architecture for the 'Vitara' capstone project. Mastered industry-standard web development, focusing on React and Next.js, while receiving direct guidance from IT experts.",
    skills: ["React", "Next.js", "Frontend Development", "UI/UX"]
  },
  {
    id: 4,
    type: "work",
    role: "Independent Security Researcher",
    company: "Self-Employed",
    date: "Jan 2026 - Present",
    location: "Remote",
    desc: "Conducting ethical security research and vulnerability assessments on public academic infrastructure. Identified critical network misconfigurations (Origin IP Disclosure) and utilized OSINT methodologies.",
    skills: ["OSINT", "Vulnerability Assessment", "Network Security"]
  },
  {
    id: 5,
    type: "work",
    role: "Store Junior Leader",
    company: "Indomaret Group",
    date: "Jan 2026 - Jul 2026",
    location: "Depok, Jawa Barat",
    desc: "Led a team to ensure operational targets and SLAs were met. Mentored new crew members in SOPs and operational workflows while balancing academic responsibilities.",
    skills: ["Team Supervision", "Leadership", "Operational Excellence"]
  },
  {
    id: 6,
    type: "work",
    role: "Full Stack & AI Cohort (Distinction)",
    company: "Asah led by Dicoding & Accenture",
    date: "Aug 2025 - Jan 2026",
    location: "Remote",
    desc: "Graduated with Distinction. Led the 'TelcoSense' capstone project (Score: 92). Developed secure backend using Hapi.js and integrated ML services via FastAPI. Managed end-to-end deployment on Vercel and Railway.",
    skills: ["Hapi.js", "FastAPI", "DevOps", "Team Leadership"]
  },
  {
    id: 7,
    type: "work",
    role: "Store Crew",
    company: "Indomaret Group",
    date: "Aug 2022 - Dec 2025",
    location: "Bogor, West Java",
    desc: "Built a strong operational foundation. Developed a Barcode Lookup Web App to solve manual price-checking inefficiencies. Consistently maintained 100% transaction accuracy.",
    skills: ["POS Systems", "Inventory Management", "Process Innovation"]
  },
  // --- EDUCATION ---
  {
    id: 8,
    type: "education",
    role: "Bachelor's degree, Information Systems",
    company: "Universitas Terbuka",
    date: "Oct 2023 - Aug 2027", 
    location: "Indonesia",
    desc: "Current GPA: 3.51 / 4.00. Relevant Coursework: Web Programming, Software Engineering, Data Science, Network Security, and Database Systems.",
    skills: ["Data Structures", "Web Programming", "Network Security"]
  },
  {
    id: 9,
    type: "education",
    role: "High School Diploma, Software Engineering",
    company: "SMK Madya Depok",
    date: "Jul 2020 - Jun 2022",
    location: "Depok, Jawa Barat",
    desc: "Focus on Software Engineering fundamentals, Object-Oriented Programming (OOP), and Database Systems.",
    skills: ["OOP", "Database Systems", "Software Engineering"]
  }
];
