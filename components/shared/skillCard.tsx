"use client";

import { ISkillCard } from "@/types";
import { motion } from "framer-motion";

function SkillCard(skill: ISkillCard) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-6 px-3 
        hover:bg-gray-200 dark:hover:bg-white/10 hover:border-purple-400/30 
        hover:shadow-lg hover:shadow-purple-500/10 transition-colors cursor-default"
    >
      <div className="flex flex-col items-center text-center">
        <div>
          <skill.icon className={skill.style} />
        </div>
        <h3 className="mt-4 font-medium text-lg">{skill.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-white/70 max-sm:hidden max-lg:line-clamp-2">
          {skill.descr}
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCard;