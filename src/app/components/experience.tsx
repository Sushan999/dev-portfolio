"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ShineBorder } from "@/components/ui/shine-border";

interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
const techLogos = [
  "https://cdn.simpleicons.org/html5/E34F26",
  "https://cdn.simpleicons.org/css3/1572B6",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/angular/DD0031",
  "https://cdn.simpleicons.org/vue.js/4FC08D",
  "https://cdn.simpleicons.org/astro/FF5D01",
  "https://cdn.simpleicons.org/next.js/000000",
  "https://cdn.simpleicons.org/node.js/339933",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/181717",
  "https://cdn.simpleicons.org/vercel/000000",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/sass/CC6699",
  "https://cdn.simpleicons.org/webpack/8DD6F9",
  "https://cdn.simpleicons.org/vite/646CFF",
  "https://cdn.simpleicons.org/npm/CB3837",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/figma/F24E1E",
];

// Static data
const experience: ExperienceType[] = [
  {
    title: "Front-end Developer Intern",
    company: "Redis Digital",
    period: "2025",
    description:
      "Assisted in building and maintaining responsive web applications using Next.js and Astro.js. Collaborated with senior developers to implement new features and improve performance.",
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

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-8 bg-muted/30 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <p className="text-primary text-center nav-font">Experience</p>
        </motion.h2>

        <div className="flex justify-center it py-6">
          <IconCloud images={techLogos} />
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative  w-full overflow-hidden p-6 hover:shadow-lg hover:shadow-primary/5 transition-all hover:border-primary/30 border-border/50">
                <ShineBorder />

                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <p className="text-sm text-primary font-mono md:w-40 flex-shrink-0">
                    {exp.period}
                  </p>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground inline-flex items-center gap-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
