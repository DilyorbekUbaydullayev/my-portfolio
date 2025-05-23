import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { IProjectCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReadMoreText } from "./readmore";

function ProjectCard(project: IProjectCard) {
  return (
    <div className=" self-start group relative max-w-md overflow-hidden rounded-xl bg-gray-700 dark:bg-white/5 border border-gray-400 dark:border-white/10  hover:bg-gray-600 dark:hover:bg-white/10 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <Image
          width={300}
          height={200}
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <ReadMoreText text={project.descr} />
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className=" absolute px-4 bottom-4 w-full left-1/2 transform -translate-x-1/2 flex items-center justify-between">
          <Link
            href={project.githubLink ? project.githubLink : "#"}
            className={cn("text-gray-200 dark:text-white/70 hover:text-purple-300 dark:hover:text-white transition-colors flex",!project.githubLink&&'hidden')}
            target="_blank"
          >
            <Github className="h-5 w-5" />
            <span className="">GitHub</span>
          </Link>
          <Link
            href={project.siteLink ? project.siteLink : "#"}
            target="_blank"
            className={cn("text-gray-200 dark:text-white/70 hover:text-purple-300 dark:hover:text-white transition-colors flex",!project.siteLink&&'hidden')}
          >
            <ExternalLink className="h-5 w-5" />
            <span className="">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
