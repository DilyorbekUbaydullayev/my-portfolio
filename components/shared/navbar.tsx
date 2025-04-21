"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks, socialLinks } from "@/constants";
import { ILink, ISocial } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/50 border-b border-white/10">
      <div className=" container flex items-center justify-between h-16  text-2xl">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-purple-400">Dilyorbek</span>.dev
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((item: ILink) => (
            <Link
              href={item.link}
              key={item.title}
              className={cn("hover:text-purple-400 transition-colors text-lg",)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-3">
          {socialLinks.map((social: ISocial) => (
            <TooltipProvider key={social.link}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                    className={cn((social.name==='Mail'||social.name==='Telegram')&&'max-sm:hidden')}
                  >
                    <Button
                      name={social.name}
                      variant={"ghost"}
                      size="icon"
                      className="rounded-full text-white hover:text-purple-400 hover:bg-white/10"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
