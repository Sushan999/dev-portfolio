"use client";

import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const skills = [
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
  { category: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  { category: "DevOps", skills: ["AWS", "Git"] },
  {
    category: "Tools",
    skills: ["VS Code", "Figma", "Postman", "Webpack", "Vite"],
  },
];

const iconMap: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Database,
  Database: Database,
  DevOps: Cloud,
  Tools: Wrench,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-8 bg-muted/30 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 nav-font">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with regularly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="relative  p-6 hover:shadow-lg hover:shadow-primary/5 transition-all h-full border-border/50 hover:border-primary/30 overflow-hidden">
                  <BorderBeam />
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
