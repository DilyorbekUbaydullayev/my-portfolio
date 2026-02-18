"use client";

import { Badge } from "./ui/badge";
import { experiences } from "@/constants";
import { IExperience } from "@/types";
import MotionWrapper from "./shared/motion-wrapper";

function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 container px-4 mx-auto">
      <MotionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-14">
          <Badge className="mb-4 bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 transition-colors">
            Career Path
          </Badge>
          <h2
            className="text-3xl md:text-6xl font-bold pb-3 text-center tracking-tight 
            bg-gradient-to-r from-purple-700 to-purple-400 font-crete 
            dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
          >
            Experience
          </h2>
        </div>
      </MotionWrapper>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" />

        {experiences.map((exp: IExperience, index: number) => (
          <MotionWrapper
            key={index}
            delay={index * 0.15}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div
              className={`relative flex items-start mb-12 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-background shadow-lg shadow-purple-500/50 z-10" />

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <span className="text-sm text-purple-400 font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-purple-300/80 font-medium text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-800 dark:text-white/70 mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech: string) => (
                      <Badge
                        key={tech}
                        className="bg-purple-400/10 text-purple-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

export default Experience;
