import { ArrowRight } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"

function Hero() {
  return (
    <section id="home" className="pt-28 pb-14 md:pt-32 md:pb-26 container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-400/10 text-purple-400 hover:bg-purple-400/20 transition-colors">
            Available for work
          </Badge>
          <h1 className="text-3xl font-crete md:text-6xl font-bold tracking-tight pb-6 
  bg-gradient-to-r from-purple-700 to-purple-400 
  dark:from-white dark:to-purple-400 
  bg-clip-text text-transparent">
  {"Hi, I'm Dilyorbek Ubaydullayev"}
</h1>

          <h1 className="text-3xl  md:text-5xl font-bold tracking-tight pb-6 bg-gradient-to-r from-purple-700 to-purple-400 font-crete  dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            Front-End Developer
          </h1>
          <p className="text-md  md:text-xl text-gray-800 dark:text-white/70 mb-8 leading-relaxed">
            I build exceptional digital experiences that are fast, accessible, and visually appealing. Specializing in
            modern web technologies and frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href='/resume/Dilyorbek Ubaydullayev - Resume.pdf' target="_blank" rel="noopener noreferrer">
            <Button >
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
            <Link href="#contact">
            <Button  variant={'outline'}>
              Contact Me
            </Button>
            </Link>
            
          </div>
        </div>
      </section>
  )
}

export default Hero