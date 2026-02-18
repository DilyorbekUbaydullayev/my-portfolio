import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { IProjectCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReadMoreText } from "./readmore";

function ProjectCard(project: IProjectCard) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 flex flex-col">
      <div className="aspect-video overflow-hidden relative">
        <Image
          width={300}
          height={200}
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.inProgress && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-amber-500/90 text-white border-none text-xs font-semibold">
              🚧 In Progress
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <ReadMoreText text={project.descr} />
        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {project.tags.map((tag) => (
            <Badge key={tag} className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-white/10">
          <Link
            href={project.githubLink ? project.githubLink : "#"}
            className={cn(
              "text-gray-600 dark:text-white/70 hover:text-purple-500 dark:hover:text-white transition-colors flex items-center gap-1",
              !project.githubLink && "hidden"
            )}
            target="_blank"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">GitHub</span>
          </Link>
          <Link
            href={project.siteLink ? project.siteLink : "#"}
            target="_blank"
            className={cn(
              "text-gray-600 dark:text-white/70 hover:text-purple-500 dark:hover:text-white transition-colors flex items-center gap-1",
              !project.siteLink && "hidden"
            )}
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
