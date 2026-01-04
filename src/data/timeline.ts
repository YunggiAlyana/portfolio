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
    role: "Independent Security Researcher",
    company: "Self-Employed",
    date: "Oct 2025 - Present",
    location: "Remote",
    desc: "Conducting ethical security research and vulnerability assessments on public academic infrastructure. Identified critical network misconfigurations (Origin IP Disclosure) and utilized OSINT methodologies.",
    skills: ["OSINT", "Vulnerability Assessment", "Network Security"]
  },
  {
    id: 2,
    type: "work",
    role: "Store Junior Leader",
    company: "Indomaret Group",
    date: "Jan 2026 - Present",
    location: "Depok, Jawa Barat",
    desc: "Leading a team to ensure operational targets and SLAs are met. Mentoring new crew members in SOPs and operational workflows while balancing academic responsibilities.",
    skills: ["Team Supervision", "Leadership", "Operational Excellence"]
  },
  {
    id: 3,
    type: "work",
    role: "Full Stack & AI Cohort Participant",
    company: "Asah led by Dicoding (Internship)",
    date: "Aug 2025 - Present",
    location: "Remote",
    desc: "Led the 'TelcoSense' capstone project (Score: 92). Developed secure backend using Hapi.js and integrated ML services via FastAPI. Managed end-to-end deployment on Vercel and Railway.",
    skills: ["Hapi.js", "FastAPI", "DevOps", "Team Leadership"]
  },
  {
    id: 4,
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
    id: 5,
    type: "education",
    role: "Bachelor's degree, Information Systems",
    company: "Universitas Terbuka",
    date: "Oct 2023 - Present", // Estimasi lulus 2026
    location: "Indonesia",
    desc: "Current GPA: 3.39 / 4.00. Focus on Software Engineering, Data Science, and Network Security.",
    skills: ["Data Structures", "Web Programming", "Network Security"]
  },
  {
    id: 6,
    type: "education",
    role: "High School Diploma, Software Engineering",
    company: "SMK Madya Depok",
    date: "Jul 2020 - Jun 2022",
    location: "Depok, Jawa Barat",
    desc: "Focus on Software Engineering fundamentals, Object-Oriented Programming (OOP), and Database Systems.",
    skills: ["OOP", "Database Systems", "Software Engineering"]
  }
];
