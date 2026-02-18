"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "AI-Powered Developer",
  "Full-Stack Developer",
  "Prompt Engineer",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < currentRole.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span>
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-14 md:pt-32 md:pb-26 container px-4 mx-auto overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Badge className="mb-4 bg-purple-400/10 text-purple-400 hover:bg-purple-400/20 transition-colors">
          Available for work
        </Badge>
        <h1
          className="text-3xl font-crete md:text-5xl lg:text-6xl font-bold tracking-tight pb-4 
          bg-gradient-to-r from-purple-700 to-purple-400 
          dark:from-white dark:to-purple-400 
          bg-clip-text text-transparent"
        >
          {"Hi, I'm Dilyorbek Ubaydullayev"}
        </h1>

        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight pb-6 
          bg-gradient-to-r from-purple-700 to-purple-400 font-crete 
          dark:from-white dark:to-purple-400 bg-clip-text text-transparent min-h-[2.5em]"
        >
          <Typewriter />
        </h2>

        <p className="text-md md:text-xl text-gray-800 dark:text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
          I build AI-powered applications and modern web solutions. From intelligent bots to 
          full-stack platforms — I leverage AI APIs, prompt engineering, and cutting-edge 
          technologies to deliver exceptional digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume/Dilyorbek Ubaydullayev - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Link href="#contact">
            <Button size="lg" variant={"outline"}>
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;