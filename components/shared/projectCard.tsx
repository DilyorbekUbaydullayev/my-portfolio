import { ExternalLink, Github } from "lucide-react"
import { Badge } from "../ui/badge"
import { IProjectCard } from "@/types"
import Image from "next/image"
import Link from "next/link"

function ProjectCard(project:IProjectCard) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
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
        <p className="text-white/70 text-sm mb-4">{project.descr}</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white/5 hover:bg-white/10">
              {tag}
            </Badge>
          ))}
        </div>
        <div className=" absolute px-4 bottom-4 w-full left-1/2 transform -translate-x-1/2 flex items-center justify-between">
        <Link href="#" className="text-white/70 hover:text-white transition-colors flex">
            <Github className="h-5 w-5" />
            <span className="">GitHub</span>
          </Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors flex">
            <ExternalLink className="h-5 w-5" />
            <span className="">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard