import { dozo, periodicTable } from "./images";

const projectInfo = [
  {
    projectName: "dozo",
    title: "Kanban Task Management System",
    description: [
      "Full-featured Kanban board with drag-and-drop functionality.",
      "Added real-time updates with local storage for data retention.",
      "Enabled board and task creation with custom colors and full CRUD.",
      "Every task has priority, due date, and assignee.",
      "Used Redux Toolkit and dnd-kit for drag-and-drop handling.",
      "Fully responsive design, optimized for desktop, tablet, and mobile devices",
    ],
    mobileDesc:
      "A modern, responsive web app featuring an interactive periodic table with all 118 elements, including lanthanides and actinides.Provides detailed element info with smooth animations and a sleek, user-friendly interface.",
    date: "sep 2025",
    techStack: ["React", "JavaScript", "Redux", "dnd-kit/core", "Tailwind CSS", "Framer Motion", "ShadCn/ui"],
    bgColor: "#a78bfa",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#a78bfa",
    image: dozo,
    githubLink: "https://github.com/devxsagar/Dozo",
    liveLink: "https://dozo-dxs.vercel.app/",
  },
  {
    projectName: "periodic table",
    title: "A Visual Journey Through Elements",
    description: [
      "Modern, responsive web application with a sleek and user-friendly interface",
      "Interactive periodic table allowing users to explore all 118 elements",
      "Detailed element information including atomic number, symbol, and more",
      "Includes lanthanides and actinides for complete periodic coverage",
      "Engaging animations and transitions for an immersive learning experience",
      "Fully responsive design, optimized for desktop, tablet, and mobile devices",
    ],
    mobileDesc:
      "A modern, responsive web app featuring an interactive periodic table with all 118 elements, including lanthanides and actinides.Provides detailed element info with smooth animations and a sleek, user-friendly interface.",
    date: "aug 2025",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    bgColor: "#818cf8",
    borderColor: "#fafafa",
    techBG: "#dbeafe",
    textColor: "#818cf8",
    image: periodicTable,
    githubLink: "https://github.com/devxsagar/Periodic-Table#",
    liveLink: "https://periodic-table-devwithsagar.vercel.app/",
  },
];

export default projectInfo;
