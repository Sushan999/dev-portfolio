"use client";

import { motion } from "framer-motion";
import { Project, ProjectCard } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "CarRental",
    title: "CarRental - Rent Luxurious Cars",
    description: "",
    longDescription: "",
    image: "Carrental.png",
    technologies: ["React.js", "Express.js", "Mongodb", "Tailwind"],
    liveUrl: "https://car-rental-kohl-kappa.vercel.app/",
    githubUrl: "https://github.com/Sushan999/CarRental",
    featured: true,
  },
  {
    id: "styleForge",
    title: "StyleForge - Buy Clothes Online",
    description: "",
    longDescription: "",
    image: "Style-forge.png",
    technologies: ["Next.js", "Typescript", "Mongodb", "Tailwind CSS"],
    liveUrl: "https://style-forge.vercel.app/",
    githubUrl: "https://github.com/Sushan999/StyleForge",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Rentease - Home Rental",
    description: "",
    longDescription: "",
    image: "Rentease.png",
    technologies: ["Next.js", "TypeScript", "MySql", "Prisma", "Tailwind CSS"],
    liveUrl: "https://rent-ease-next.vercel.app/",
    githubUrl: "https://github.com/Sushan999/RentEase-next",
    featured: true,
  },
  {
    id: "ShopHub",
    title: "ShopHub - Online Shopping Website",
    description: "",
    longDescription: "",
    image: "Shophub.png",
    technologies: ["Next.js", "Typescript", "Tailwind"],
    liveUrl: "https://next-ecommerce-shophub.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Next-ecommerce",
    featured: true,
  },
  {
    id: "Estate",
    title: "Estate",
    description: "",
    longDescription: "",
    image: "Estate.png",
    technologies: ["React.js", "Tailwind"],
    liveUrl: "https://estate-alpha.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Estate",
    featured: true,
  },
  {
    id: "Myntra",
    title: "Myntra",
    description: "",
    longDescription: "",
    image: "Myntra.png",
    technologies: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://myntra-clone-zeta-seven.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Myntra_clone",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 nav-font">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent projects that showcase my skills
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
