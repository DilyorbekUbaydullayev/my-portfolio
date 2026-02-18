"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { skills } from "@/constants";
import SkillCard from "./shared/skillCard";
import MotionWrapper from "./shared/motion-wrapper";

function Skills() {
  return (
    <section id="skills" className="py-10 md:py-20 container px-4 mx-auto">
      <MotionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-14">
          <Badge className="mb-4 bg-teal-400/10 text-teal-400 hover:bg-teal-400/20 transition-colors">
            Skills & Expertise
          </Badge>
          <h2
            className="text-3xl md:text-6xl font-bold pb-3 text-center tracking-tight 
            bg-gradient-to-r from-purple-700 to-purple-400 font-crete 
            dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
          >
            My Technical Proficiency
          </h2>
        </div>
      </MotionWrapper>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <MotionWrapper key={skill.title} delay={index * 0.05}>
            <SkillCard {...skill} />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

export default Skills;