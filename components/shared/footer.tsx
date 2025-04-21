
import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks, socialLinks } from "@/constants";
import { ILink, ISocial } from "@/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

function Footer() {
  return (
    <footer className="py-5 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="text-purple-400">Dilyorbek</span>.dev
            </Link>
            <p className="text-sm text-white/50 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <nav className="flex items-center gap-6">
            {navLinks.map((item: ILink) => (
              <Link
                href={item.link}
                key={item.title}
                className="hover:text-purple-400 transition-colors text-lg"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* social media */}
            {socialLinks.map((social: ISocial) => (
            <TooltipProvider key={social.link}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                  >
                    <Button
                      aria-label={social.name}
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
      </div>
    </footer>
  );
}

export default Footer;
