"use client";
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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/50 border-b border-gray-300 dark:border-white/10">
      <div className="container flex items-center justify-between h-16 text-2xl">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-purple-400">Dilyorbek</span>.dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((item: ILink) => (
            <Link
              href={pathname === "/allprojects" ? `/${item.link}` : item.link}
              key={item.title}
              className={cn(
                "hover:text-purple-400 transition-colors font-crete text-lg"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:text-purple-400 hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Desktop social links */}
          <div className="hidden md:flex space-x-1">
            {socialLinks.map((social: ISocial) => (
              <TooltipProvider key={social.link}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.link}
                      aria-label={social.name}
                      target="_blank"
                      className={cn(
                        (social.name === "Mail" ||
                          social.name === "Telegram") &&
                          "max-lg:hidden"
                      )}
                    >
                      <Button
                        aria-label={social.name}
                        variant={"ghost"}
                        size="icon"
                        className="rounded-full hover:text-purple-400 hover:bg-white/10"
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

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:text-purple-400 hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((item: ILink) => (
                <Link
                  href={
                    pathname === "/allprojects" ? `/${item.link}` : item.link
                  }
                  key={item.title}
                  className="hover:text-purple-400 transition-colors font-crete text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full justify-center">
                {socialLinks.map((social: ISocial) => (
                  <Link
                    key={social.link}
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                  >
                    <Button
                      aria-label={social.name}
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:text-purple-400 hover:bg-white/10"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
