export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    title: "Front-end Developer Intern",
    company: "Redis Digital",
    period: "2025 ",
    description:
      "Leading development of cloud-native applications using Next.js and Node.js. Architecting scalable microservices and mentoring junior developers.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Astro.js",
      "Node.js",
      "Git",
      "Wordpress",
    ],
  },
];

export async function getExperience(): Promise<Experience[]> {
  return experience;
}
