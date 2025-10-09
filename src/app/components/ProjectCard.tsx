"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="relative overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 gap-3 py-0 group border-border/50 hover:border-primary/50 w-full h-full cursor-pointer"
        onClick={(e) => {
          const target = e.target as HTMLElement | null;
          if (target && target.closest("a, button")) return;
          if (project.liveUrl) {
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
          }
        }}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            const target = e.target as HTMLElement | null;

            if (target && target.closest("a, button")) return;
            if (project.liveUrl) {
              window.open(project.liveUrl, "_blank", "noopener,noreferrer");
            }
          }
        }}
      >
        <ShineBorder />
        <div className="aspect-video bg-muted relative overflow-hidden cursor-pointer">
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer group-hover:translate-x-1 duration-300">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button size="sm" asChild className="group/btn">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
