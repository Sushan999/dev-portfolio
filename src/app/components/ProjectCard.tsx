"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
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
}

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={cardVariants} className="will-change-transform">
      <Card
        role="button"
        tabIndex={0}
        className="
          group relative h-full w-full cursor-pointer overflow-hidden
          border-border/50 hover:border-primary/50
          transition-colors duration-300
          hover:shadow-xl hover:shadow-primary/10 py-0
        "
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("a, button")) return;
          project.liveUrl &&
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            const target = e.target as HTMLElement;
            if (target.closest("a, button")) return;
            project.liveUrl &&
              window.open(project.liveUrl, "_blank", "noopener,noreferrer");
          }
        }}
      >
        {/* <div className="pointer-events-none absolute inset-0 hidden md:block">
          <ShineBorder />
        </div> */}

        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            className="
              h-full w-full object-cover
              transition-transform duration-300
              group-hover:scale-105
              will-change-transform
            "
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3 text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border-primary/20 bg-primary/10 text-primary"
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
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
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
