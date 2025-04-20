import Link from "next/link"
import { Button } from "../ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"


function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
      <div className=" container flex items-center justify-between h-16  text-2xl">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-purple-400">Dilyorbek</span>.dev
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:text-purple-400 transition-colors text-lg">
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors text-lg">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors text-lg">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors text-lg">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-3">
            <Link href="https://github.com/DilyorbekUbaydullayev" target="_blank">
              <Button
                
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dilyorbekubaydullayev" target="_blank">
              <Button
                
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&to=dilyorbekubaydullayev@gmail.com" target="_blank">
              <Button
                
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Mail</span>
              </Button>
            </Link>
            <Link href="https://t.me/dilyorbek_dev" target="_blank">
              <Button
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Send className="h-5 w-5 me-[2px]" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
      </div>
    </header>
  )
}

export default Navbar