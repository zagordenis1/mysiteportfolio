export type SkillGroupKey = "frontend" | "language" | "tooling" | "learning";

export type Skill = {
  name: string;
  level?: number;
};

export const skillGroups: Record<SkillGroupKey, Skill[]> = {
  frontend: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Framer Motion", level: 70 },
    { name: "HTML / CSS", level: 92 },
  ],
  language: [
    { name: "TypeScript", level: 82 },
    { name: "JavaScript", level: 90 },
    { name: "C#", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
    { name: "Python", level: 60 },
    { name: "SQL", level: 58 },
  ],
  tooling: [
    { name: "Git & GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Vite" },
    { name: "Node.js" },
  ],
  learning: [
    { name: "System Design" },
    { name: "Node.js / Express" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "Testing (Vitest)" },
  ],
};
