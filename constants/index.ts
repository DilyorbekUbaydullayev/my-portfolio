
import { Codely, ComingSoon, Gym, Quizbot, Linguo5, Linguo01 } from "@/assets";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiFigma,
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
    title: "TypeScript",
    style: "h-12 w-12 text-blue-400",
    descr: "Developing type-safe code for more reliable applications",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    style: "h-12 w-12 text-yellow-400",
    descr: "Core language for dynamic web interactions and modern ES6+ features",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    style: "h-12 w-12 text-cyan-400",
    descr: "Crafting responsive designs with utility-first CSS framework",
  },
  {
    icon: SiHtml5,
    title: "HTML5",
    style: "h-12 w-12 text-orange-500",
    descr: "Semantic markup and modern web standards for accessible content",
  },
  {
    icon: SiCss3,
    title: "CSS3",
    style: "h-12 w-12 text-blue-500",
    descr: "Advanced styling with animations, grid, flexbox, and custom properties",
  },
  {
    icon: SiGit,
    title: "Git & GitHub",
    style: "h-12 w-12 text-orange-400",
    descr: "Version control, collaboration, branching strategies, and CI/CD",
  },
  {
    icon: SiNodedotjs,
    title: "Node.js",
    style: "h-12 w-12 text-green-500",
    descr: "Server-side JavaScript for APIs, Express, and backend services",
  },
  {
    icon: SiFirebase,
    title: "Firebase",
    style: "h-12 w-12 text-amber-400",
    descr: "Auth, Firestore, Cloud Functions, and real-time database solutions",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    style: "h-12 w-12 text-green-400",
    descr: "NoSQL database design, aggregation pipelines, and Mongoose ODM",
  },
  {
    icon: SiPython,
    title: "Python",
    style: "h-12 w-12 text-yellow-300",
    descr: "Scripting, automation, Telegram bots, and data processing tools",
  },
  {
    icon: SiFigma,
    title: "Figma",
    style: "h-12 w-12 text-pink-400",
    descr: "UI/UX design, prototyping, and design-to-code workflows",
  },
];

export const projects = [
  {
    title: "LearnUp: Online Courses",
    descr:
      "An e-learning platform inspired by Udemy. Features user authentication, payment processing with Stripe, multilingual content, and AI-powered learning tools. Currently in active development.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Stripe"],
    image: ComingSoon,
    siteLink: "https://learnup.uz",
    category: "web" as const,
    inProgress: true,
  },
  {
    title: "Linguo AI",
    descr:
      "A powerful language learning platform that makes mastering new languages easy through movies and real content. Built with Flutter & Dart, featuring AI-powered subtitles, Gemini & OpenAI integrations, Whisper speech recognition, and much more. Available on Mobile & Windows.",
    tags: ["Flutter", "Dart", "Gemini API", "OpenAI", "Whisper", "Firebase"],
    image: Linguo5,
    siteLink: "https://linguo.uz",
    category: "mobile" as const,
  },
  {
    title: "@LinguoSaveBot",
    descr:
      "A feature-rich Telegram bot that downloads videos and audio from any social media platform in your preferred quality. Supports Instagram, YouTube, TikTok, Twitter, and more. Select video quality (up to 4K) or extract audio with a single click.",
    tags: ["Node.js", "TypeScript", "Telegram Bot API", "yt-dlp", "Docker"],
    image: Linguo01,
    siteLink: "https://t.me/LinguoSaveBot",
    category: "bot" as const,
  },
  {
    title: "Gym Training",
    descr:
      "A full-stack gym dashboard built for practice, featuring Firebase auth, backend integration, and real-time class and member management.",
    tags: ["React", "TypeScript", "Firebase", "ShadcnUI"],
    image: Gym,
    githubLink: "https://github.com/DilyorbekUbaydullayev/gym",
    siteLink: "https://gym-jade-two.vercel.app/",
    category: "web" as const,
  },
  {
    title: "Codely Programming Articles",
    descr:
      "Programming news, tips, and tutorials on React Suspense, scalable APIs, full-stack development, and in-browser AI chatbots. Find guides and best practices to level up your code!",
    tags: ["Next.js", "TypeScript", "Hygraph", "Shadcn"],
    image: Codely,
    githubLink: "https://github.com/DilyorbekUbaydullayev/cms-blog",
    siteLink: "https://codely-woad.vercel.app/",
    category: "web" as const,
  },
  {
    title: "Telegram QuizBot",
    descr:
      "A Telegram bot that creates interactive quizzes from .docx files. Solved the problem found in many bots that require manual entry for each question — this one automates the whole process. Deployed on Railway and actively running.",
    tags: ["Python", "Telebot", "Firebase", "Railway"],
    image: Quizbot,
    siteLink: "https://t.me/quiz_savollar_bot/",
    category: "bot" as const,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Freelancer / Self-employed",
    period: "2025 — Present",
    description:
      "Building modern web and mobile applications using React, Next.js, Flutter, and TypeScript. Integrating AI APIs (Gemini, OpenAI, Whisper) into real-world products. Skilled in prompt engineering and leveraging AI tools to accelerate development.",
    technologies: ["React", "Next.js", "Flutter", "TypeScript", "AI APIs", "Firebase"],
  },
  {
    title: "AI-Powered Bot Developer",
    company: "Personal & Client Projects",
    period: "2025 — Present",
    description:
      "Developing intelligent Telegram bots: @LinguoSaveBot (multi-platform video/audio downloader with quality selection up to 4K), QuizBot (auto quiz generation from .docx files). Built with Node.js, Python, and integrated with AI services.",
    technologies: ["Node.js", "Python", "Telegram Bot API", "Docker", "Railway", "yt-dlp"],
  },
];

export const navLinks = [
  {
    link: "#home",
    title: "Home",
  },
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#experience",
    title: "Experience",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    link: "https://github.com/DilyorbekUbaydullayev",
    icon: Github,
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/dilyorbekubaydullayev",
    icon: Linkedin,
    name: "Linkedin",
  },
  {
    link: "https://mail.google.com/mail/?view=cm&to=dilyorbekubaydullayev@gmail.com",
    icon: Mail,
    name: "Mail",
  },
  {
    link: "https://t.me/dilyorbek_dev",
    icon: Send,
    name: "Telegram",
  },
];
