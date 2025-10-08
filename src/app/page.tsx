import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Experience } from "./components/experience";
import { getExperience } from "@/lib/data/experience";

import { Skills } from "./components/Skills";
import { getSkills } from "@/lib/data/skills";

import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { getProjects } from "@/lib/data/projects";

export default async function Home() {
  const projects = await getProjects();
  const experience = await getExperience();
  const skills = await getSkills();
  return (
    <div>
      <Navigation />
      <Hero />

      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Contact />
    </div>
  );
}
