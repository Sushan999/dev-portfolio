"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import { Particles } from "@/components/ui/particles";
import { Meteors } from "@/components/ui/meteors";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 gradient-bg relative overflow-hidden"
    >
      <div className="hidden md:block">
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color="#fffff"
          size={0.66}
          refresh
        />
      </div>
      <div className="">
        <Particles
          className="absolute inset-0"
          quantity={15}
          ease={80}
          color="#fffff"
          size={0.66}
          refresh
        />
      </div>
      <Meteors />

      {/* Removed rotating/animated blurred circles from the mid background */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-sm text-primary font-mono mb-4">Hello, I{"'"}m</p>
          <h1 className="text-3xl md:text-6xl font-bold mb-1 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-4">
            Susan Thapa Magar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build scalable web applications with modern technologies. Passionate
          about creating elegant solutions to complex problems, with expertise
          in React.js, Next.js and Node.js,
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" asChild className="group">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/sushan999/",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/susan-thapa-512666265",
              label: "LinkedIn",
            },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            {
              icon: Mail,
              href: "mailto:athapasusan777@gmail.com.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
