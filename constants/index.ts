
import { Codely, ComingSoon,Gym, Quizbot} from "@/assets";
import { Github, Linkedin, Mail, Send } from "lucide-react";
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
    title: "Gym Training",
    descr:
      "A full-stack gym dashboard built for practice, featuring Firebase auth, backend integration, and real-time class and member management.",
    tags: ["React", "TypeScript", "Firebase","ShadcnUI"],
    image: Gym,
    githubLink:'https://github.com/DilyorbekUbaydullayev/gym',
    siteLink:'https://gym-jade-two.vercel.app/'
  },
  {
    title: "Codely Programming Articles",
    descr:
      "Programming news, tips, and tutorials on React Suspense, scalable APIs, full-stack development, and in-browser AI chatbots. Find guides and best practices to level up your code!",
    tags: ["Next.js","Typecript", "Hygraph", "Shadcn"],
    image: Codely,
    githubLink:'https://github.com/DilyorbekUbaydullayev/cms-blog',
    siteLink:'https://codely-woad.vercel.app/'
  },{
    title: "Telegram QuizBot",
    descr:
      "A Telegram bot that creates interactive quizzes from .docx files. Solved the problem found in many bots that require manual entry for each question — this one automates the whole process. Deployed on Railway and actively running.",
    tags: ["Python","Telebot","Firebase","Railway"],
    image: Quizbot, 
    siteLink:'https://t.me/quiz_savollar_bot/'
  },
  {
    title: "LearnUp: Online Courses",
    descr:
      "Revolutionize e-learning with our Udemy clone. Seamlessly authenticate users, process payments, support multilingual content, and integrate AI for enhanced learning experiences.",
    tags: ["Next","Typescript","Shadcn","Mongodb","Nodejs-express","Stripe","Server-actions"],
    image: ComingSoon,
  },
  
];

export const navLinks = [
  {
    link:'#home',
    title:'Home'
  },
  {
    link:'#about',
    title:'About'
  },
  {
    link:'#projects',
    title:'Projects'
  },
  {
    link:'#contact',
    title:'Contact'
  },
]

export const socialLinks = [
  {
    link:'https://github.com/DilyorbekUbaydullayev',
    icon:Github,
    name:'Github'
  },
  {
    link:'https://www.linkedin.com/in/dilyorbekubaydullayev',
    icon:Linkedin,
    name:'Linkedin'
  },
  {
    link:'https://mail.google.com/mail/?view=cm&to=dilyorbekubaydullayev@gmail.com',
    icon:Mail,
    name:'Mail'
  },
  {
    link:'https://t.me/dilyorbek_dev',
    icon:Send,
    name:'Telegram'
  },
]
