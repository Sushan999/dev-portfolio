"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

// Static data
const experience: ExperienceType[] = [
  {
    title: "Front-end Developer Intern",
    company: "Redis Digital",
    period: "2025",
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
          <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:shadow-primary/5 transition-all hover:border-primary/30 border-border/50">
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
