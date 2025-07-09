import { nanoid } from "nanoid";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import {
  FaPinterest,
  FaNode,
  FaPython,
  FaHtml5,
  FaJs,
  FaReact,
  FaGitSquare,
  FaDocker,
} from "react-icons/fa";
import { GrVirtualMachine } from "react-icons/gr";

import store1 from "./assets/Store1.png";
import Cooktails from "./assets/Cooktails.png";
import { TbBrandDjango } from "react-icons/tb";
import { DiMysql, DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import { SiPrisma, SiPostman } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoDevTo } from "react-icons/bi";
import IEEE from "./assets/IEEE.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];
export const frontend = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Angular",
    icon: <FaHtml5 className="h-16 w-16 text-pink-500" />,
  },
];
export const backend = [
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Django",
    icon: <TbBrandDjango className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "REST API",
    icon: <FaPinterest className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Machine Learning",
    icon: <GrVirtualMachine className="h-16 w-16 text-pink-500" />,
  },
];

export const databasesTools = [
  {
    id: nanoid(),
    title: "FastApi",
    icon: <SiTypescript className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <DiMongodb className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <DiMysql className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "PL/SQL",
    icon: <PiFileSql className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitSquare className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "Postman",
    icon: <SiPostman className="h-16 w-16 text-pink-500" />,
  },
  {
    id: nanoid(),
    title: "GraphQL",
    icon: <GrGraphQl className="h-16 w-16 text-pink-500" />,
  },

  {
    id: nanoid(),
    title: "DevTools",
    icon: <BiLogoDevTo className="h-16 w-16 text-pink-500" />,
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-pink-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-pink-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-pink-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-pink-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.JS",
    icon: <FaNode className="h-16 w-16 text-pink-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next.JS",
    icon: <SiNextdotjs className="h-16 w-16 text-pink-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 text-pink-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: store1,
    url: "https://store-4lrgna6si-dolev-peretzs-projects.vercel.app/",
    github: "https://github.com/DolevPeretz/Store",
    title: "Store Project",
    text: "🛒 A full-featured online store with product management, shopping cart, Stripe payments, Clerk-based authentication, and a dynamic admin dashboard.💻 Tech stack:Next.js 15, React 19, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Prisma ORM, Clerk Auth, Stripe, Zod, Radix UI, Lucide Icons, Embla Carousel, Next Themes, React Share.🧠 What I learned:How to build a real-time responsive UI, work with real database schemas, create efficient Server Actions, and connect client and server seamlessly.",
  },
  {
    id: nanoid(),
    img: Cooktails,
    url: "https://cocktaildolev.netlify.app/",
    github: "https://github.com/DolevPeretz/MixMaster",
    title: "Cooktails",
    text: "🎉 MixMaster – אפליקציית קוקטיילים שבניתי ב-React!🔍 חיפוש מתכונים בזמן אמת דרך TheCocktailDB API🧠 השתמשתי ב-React Router, React Query ו-Styled Components חוויית משתמש אינטראקטיבית עם טופס ניוזלטר וניהול טעינה חכם",
  },

  {
    id: nanoid(),
    img: IEEE,
    url: "https://ieeexplore.ieee.org/abstract/document/10402645",
    github: "https://github.com/DolevPeretz/AI-Driven-Skin-Disease-Detection",
    title: "AI-Driven Skin Disease Detection",
    text: "Conducted research presented at the IEEE VCIP Conference in Sweden, focused on skin disease detection using image analysis and machine learning. Developed a Python-based system that included custom web-scraping scripts for collecting dermatological images from Google, data preprocessing pipelines, and a neural network model for accurate classification and detection.",
  },
];
