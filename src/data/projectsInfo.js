import { dozo, periodicTable } from "./images";

const projectInfo = [
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
      "JavaScript",
      "Redux",
      "dnd-kit/core",
      "Tailwind CSS",
      "Framer Motion",
      "ShadCn/ui",
    ],
    bgColor: "#8b5cf6",
    borderColor: "#fafafa",
    techBG: "#c4b5fd",
    textColor: "#faf5ff",
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
    textColor: "#eff6ff",
    linkTextColor: "#3730a3",
    image: periodicTable,
    githubLink: "https://github.com/devxsagar/Periodic-Table#",
    liveLink: "https://periodic-table-devwithsagar.vercel.app/",
  },
];

export default projectInfo;
