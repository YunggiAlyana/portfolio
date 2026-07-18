export type SkillCategory = {
  id: string;
  title: string;
  iconName: 'Terminal' | 'Sparkles' | 'PenTool' | 'Shield';
  iconColor: string;
  items: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Core",
    iconName: "Terminal",
    iconColor: "text-emerald-500",
    items: [
      "Next.js & React 19",
      "TypeScript (Strict Mode)",
      "Tailwind CSS & Shadcn/UI"
    ]
  },
  {
    id: "backend",
    title: "Backend & AI",
    iconName: "Sparkles",
    iconColor: "text-blue-500",
    items: [
      "Node.js & Hapi.js",
      "Python & FastAPI (ML)",
      "Supabase & MongoDB"
    ]
  },
  {
    id: "security",
    title: "Security & Cloud",
    iconName: "Shield",
    iconColor: "text-red-500",
    items: [
      "Vulnerability Assessment",
      "OSINT Methodologies",
      "Network Security"
    ]
  },
  {
    id: "spatial",
    title: "Spatial & Drafting",
    iconName: "PenTool",
    iconColor: "text-yellow-500",
    items: [
      "AutoCAD & GstarCAD",
      "Commercial Space Planning",
      "Process Optimization"
    ]
  }
];
