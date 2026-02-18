"use client";

import React from "react";
import { Badge } from "./ui/badge";
import MotionWrapper from "./shared/motion-wrapper";

function About() {
  return (
    <section id="about" className="bg-background py-10 md:py-15">
      <div className="container mx-auto px-4 text-center">
        <MotionWrapper>
          <Badge className="mb-4 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
            About me
          </Badge>
          <h2
            className="text-3xl md:text-6xl font-bold mb-6 text-center tracking-tight 
            bg-gradient-to-r from-purple-700 to-purple-400 font-crete 
            dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </MotionWrapper>
        <div className="max-w-4xl mx-auto">
          <MotionWrapper delay={0.1}>
            <p className="text-md md:text-xl text-gray-800 dark:text-white/70 mb-8 leading-relaxed">
              I&apos;m a Software Engineer who builds modern applications using
              React.js, Next.js, Flutter, TypeScript, and AI technologies. I
              actively integrate AI APIs like Gemini and OpenAI into real
              products, and I&apos;m skilled in prompt engineering to get the
              best results from AI models.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-md md:text-xl text-gray-800 dark:text-white/70 mb-8 leading-relaxed">
              I work on diverse projects — from AI-powered language learning
              platforms to intelligent Telegram bots and full-stack web apps. I
              prioritize clean code, user-friendly design, and always look for
              ways to leverage AI to solve problems faster and smarter.
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

export default About;