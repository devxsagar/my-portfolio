import { devtinder, dozo, movieMatrix, periodicTable } from "./images";

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const projectInfo = [
  {
    projectNo: "01",
    title: "DevTinder — Connect with Developers",
    description:
      "DevTinder is a full-stack web application that helps developers discover and connect with each other through a clean interface, secure authentication, and streamlined connection workflows.",
    date: "jan 2026",
    keyPoints: [
      "Secure authentication with JWT, bcrypt, and protected routes",
      "Real-time user interactions: send, accept, and reject connections",
      "Global auth & user state managed via Redux Toolkit",
    ],
    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      // {
      //   name: "Redux",
      //   icon: SiRedux,
      // },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
    cardBackground: "#9333ea",
    cardBorder: "#0057ff",
    textColor: "#5a1f90",
    image: devtinder,
    githubLink: "https://github.com/devxsagar/DevTinder-frontend",
    liveLink: "https://dev-tinder-frontend-opal.vercel.app/",
  },

  {
    projectNo: "02",
    title: "Movie Matrix — Discover Movies Effortlessly",
    description:
      "Movie Matrix is a modern movie discovery platform that allows users to explore trending films, search titles, and save favorites using real-time data from the TMDB API.",
    date: "nov 2025",
    keyPoints: [
      "Reduced API calls by ~60% using debouncing, caching, and code splitting",
      "Integrated 10+ TMDB APIs with animated, gesture-enabled carousel",
      "Persistent watchlist with Redux Toolkit and localStorage support",
    ],
    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      // {
      //   name: "JavaScript",
      //   icon: TbBrandJavascript,
      // },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssLine,
      },
      {
        name: "TMDB API",
        icon: TbApi,
      },
    ],
    cardBackground: "#3164da",
    cardBorder: "#7c3aed",
    textColor: "#1d3b82",
    image: movieMatrix,
    githubLink: "https://github.com/devxsagar/Movie-Matrix",
    liveLink: "https://movie-matrix-dxs.vercel.app/",
  },

  {
    projectNo: "03",
    title: "Dozo — A Modern Kanban Workflow Tool",
    description:
      "Dozo is a responsive Kanban application designed to help users organize tasks efficiently through intuitive drag-and-drop interactions, clean UI, and persistent state management for a seamless workflow experience.",
    keyPoints: [
      "Full CRUD for boards and tasks with persistent global state",
      "Modern, responsive UI with theme support and 95+ Lighthouse score",
    ],
    date: "sep 2025",
    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssLine,
      },
    ],
    cardBackground: "#be185d",
    cardBorder: "#c7c3ff",
    textColor: "#7c0f3c",
    image: dozo,
    githubLink: "https://github.com/devxsagar/Dozo",
    liveLink: "https://dozo-dxs.vercel.app/",
  },

  {
    projectNo: "04",
    title: "periodic table",
    description:
      "An interactive periodic table with all 118 elements, including actinides and lanthanides.",
    keyPoints: [
      "Interactive periodic table with complete element coverage",
      "Detailed element information with smooth animations",
      "Enhanced user experience with smooth animations and transitions",
    ],
    date: "aug 2025",
    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssLine,
      },
    ],
    cardBackground: "#49815d",
    cardBorder: "#7c3aed",
    textColor: "#233d2c",
    image: periodicTable,
    githubLink: "https://github.com/devxsagar/Periodic-Table#",
    liveLink: "https://periodic-table-devwithsagar.vercel.app/",
  },
];

export default projectInfo;
