import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    icon: SiReact,
    title: "React.js",
    style: "h-12 w-12 text-cyan-400",
    descr:
      "Building interactive UIs with modern React, hooks, and state management",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    style: "h-12 w-12 text-white",
    descr:
      "Creating fast, SEO-friendly applications with server-side rendering",
  },
  {
    icon: SiTypescript,
    title: "Typescript",
    style: "h-12 w-12 text-blue-400",
    descr: "Developing type-safe code for more reliable applications",
  },

  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    style: "h-12 w-12 text-cyan-400",
    descr: "Crafting responsive designs with utility-first CSS framework",
  },
];

export const projects = [
  {
    title: "E-Commerce Dashboard",
    descr:
      "A comprehensive admin dashboard for managing online stores with real-time analytics.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/e-commerce.jpg",
  },
  {
    title: "Travel Booking Platform",
    descr:
      "A modern travel booking application with interactive maps and personalized recommendations.",
    tags: ["Next.js", "Supabase", "Framer Motion"],
    image: "/projects/travel.webp",
  },
  {
    title: "Finance Management App",
    descr:
      "Personal finance tracker with budgeting tools and expense visualization.",
    tags: ["React", "Chart.js", "Firebase"],
    image: "/projects/taxpay.jpg",
  },
];
