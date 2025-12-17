import { dozo, movieMatrix, periodicTable } from "./images";

const projectInfo = [
  {
    projectNo: "01",
    title: "Movie Matrix",
    subheading: "A web app that makes discovering, exploring, and saving your favorite movies effortless.",
    description: [
      "Optimized search using 500ms debouncing, reducing unnecessary API calls",
      "Implemented a persistent watchlist with Redux Toolkit and localStorage.",
      "Integrated multiple TMDB REST API endpoints with efficient data fetching",
      "Improved performance using lazy loading and skeleton UI states",
    ],
    mobileDesc:
      "A fast and responsive movie discovery app built with 20+ reusable components, featuring optimized 500ms debounced search, a Redux-powered watchlist with localStorage support, seamless TMDB API integration, an interactive auto-rotating hero carousel, and performance boosts like lazy-loaded images and skeleton screens for a smooth user experience.",
    date: "nov 2025",
    techStack: [
      "React",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    bgColor: "#FDE8E8",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#000000",
    linkTextColor: "#000000",
    image: movieMatrix,
    githubLink: "https://github.com/devxsagar/Movie-Matrix",
    liveLink: "https://movie-matrix-dxs.vercel.app/",
  },
  {
    projectNo: "02",
    title: "Dozo",
    subheading: "A responsive Kanban board application with drag-and-drop capabilities.",
    description: [
      "Implemented drag-and-drop functionality using dnd-kit for seamless task movement",
      "Built full CRUD workflows for boards and tasks with custom colors",
      "Managed application state with Redux Toolkit and persisted data using localStorage",
    ],
    mobileDesc:
      "A responsive Kanban board application that supports full CRUD for boards and tasks, has drag-and-drop capabilities, and provides real-time updates through local storage. Featuring unique colors, task priorities, deadlines, and assignees, it was constructed using the Redux Toolkit and dnd-kit.",
    date: "sep 2025",
    techStack: [
      "React",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
    ],
    bgColor: "#d0b7ff",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#000000",
    linkTextColor: "#6b21a8",
    image: dozo,
    githubLink: "https://github.com/devxsagar/Dozo",
    liveLink: "https://dozo-dxs.vercel.app/",
  },
  {
    projectNo: "03",
    title: "periodic table",
    subheading: "An interactive periodic table with all 118 elements, including actinides and lanthanides.",
    description: [
      "Interactive periodic table with complete element coverage",
      "Detailed element information with smooth animations",
      "Enhanced user experience with smooth animations and transitions",
    ],
    mobileDesc:
      "An interactive periodic table with all 118 elements, including actinides and lanthanides, is included in this contemporary, responsive web application.offers a sleek, user-friendly interface, fluid animations, and comprehensive element information.",
    date: "aug 2025",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    bgColor: "#a7a9ff",
    borderColor: "#fafafa",
    techBG: "#a7a9ff",
    textColor: "#000000",
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
