export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Astro.js",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    category: "DevOps",
    skills: ["AWS", "Git"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Figma", "Postman", "Webpack", "Vite"],
  },
];

export async function getSkills(): Promise<SkillCategory[]> {
  return skills;
}
