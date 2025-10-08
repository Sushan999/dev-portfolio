import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Experience } from "./components/experience";

import { Skills } from "./components/Skills";

import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export default async function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
