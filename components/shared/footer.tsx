import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

function Footer() {
  return (
    <footer className="py-5 border-t border-white/10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                <span className="text-purple-400">Dilyorbek</span>.dev
              </Link>
              <p className="text-sm text-white/50 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm text-white/70 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              {/* social media */}
              <Link href="https://github.com/DilyorbekUbaydullayev" target="_blank">
              <Button
                variant={'ghost'}
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dilyorbekubaydullayev" target="_blank">
              <Button
                variant={'ghost'}
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&to=dilyorbekubaydullayev@gmail.com" target="_blank">
              <Button
                variant={'ghost'}
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Mail</span>
              </Button>
            </Link>
            <Link href="https://t.me/dilyorbek_dev" target="_blank">
              <Button
              variant={'ghost'}
                size="icon"
                className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
              >
                <Send className="h-5 w-5 me-[2px]" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer