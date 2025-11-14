import { dozo, movieMatrix, periodicTable } from "./images";

const projectInfo = [
  {
    projectName: "movie matrix",
    title: "Movie Discovery Platform",
    description: [
      "Built a movie discovery platform with 20+ reusable components and 8+ custom hooks.",
      "Optimized search with 500ms debouncing, reducing API calls by ~60%.",
      "Implemented watchlist using Redux Toolkit with localStorage persistence.",
      "Integrated 10+ TMDB REST API endpoints with efficient data fetching and caching.",
      "Added auto-rotating hero carousel with touch and drag support.",
      "Improved performance using lazy loading and skeleton UI states.",
    ],
    mobileDesc:
      "A fast and responsive movie discovery app built with 20+ reusable components, featuring optimized 500ms debounced search, a Redux-powered watchlist with localStorage support, seamless TMDB API integration, an interactive auto-rotating hero carousel, and performance boosts like lazy-loaded images and skeleton screens for a smooth user experience.",
    date: "nov 2025",
    techStack: [
      "React",
      "JavaScript",
      "Redux",
      "TMDB API",
      "Tailwind CSS",
      "Framer Motion",
      "ShadCn/ui",
    ],
    bgColor: "#a855f7",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#ffffff",
    linkTextColor: "#6b21a8",
    image: movieMatrix,
    githubLink: "https://github.com/devxsagar/Dozo",
    liveLink: "https://dozo-dxs.vercel.app/",
  },
  {
    projectName: "dozo",
    title: "Kanban Task Management System",
    description: [
      "A comprehensive Kanban board with drag-and-drop capabilities.",
      "Added real-time updates with local storage for data retention.",
      "Allowed the creation of boards and tasks with full CRUD and custom colors.",
      "Every task has a priority, due date, and assignee.",
      "Used Redux Toolkit and dnd-kit for drag-and-drop handling.",
      "Fully responsive and optimized for desktop, tablet, and mobile devices.",
    ],
    mobileDesc:
      "A responsive Kanban board application that supports full CRUD for boards and tasks, has drag-and-drop capabilities, and provides real-time updates through local storage. Featuring unique colors, task priorities, deadlines, and assignees, it was constructed using the Redux Toolkit and dnd-kit.",
    date: "sep 2025",
    techStack: [
      "React",
      "Redux",
      "JavaScript",
      "dnd-kit/core",
      "Tailwind CSS",
      "ShadCn/ui",
    ],
    bgColor: "#8b5cf6",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#ffffff",
    linkTextColor: "#6b21a8",
    image: dozo,
    githubLink: "https://github.com/devxsagar/Dozo",
    liveLink: "https://dozo-dxs.vercel.app/",
  },
  {
    projectName: "periodic table",
    title: "A Visual Journey Through Elements",
    description: [
      "Modern, responsive web application with a sleek and user-friendly interface",
      "Interactive periodic table that lets users explore all 118 elements",
      "Detailed element information including atomic number, symbol, and more",
      "Includes lanthanides and actinides for complete periodic coverage",
      "Engaging animations and transitions for an immersive learning experience",
      "Fully responsive and optimized for desktop, tablet, and mobile devices",
    ],
    mobileDesc:
      "An interactive periodic table with all 118 elements, including actinides and lanthanides, is included in this contemporary, responsive web application.offers a sleek, user-friendly interface, fluid animations, and comprehensive element information.",
    date: "aug 2025",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    bgColor: "#6366f1",
    borderColor: "#fafafa",
    techBG: "#dbeafe",
    textColor: "#ffffff",
    linkTextColor: "#3730a3",
    image: periodicTable,
    githubLink: "https://github.com/devxsagar/Periodic-Table#",
    liveLink: "https://periodic-table-devwithsagar.vercel.app/",
  },
];

export default projectInfo;

/**
 *  500 - bg
 *  800 - link-text-color
 *  50 - text
 */
