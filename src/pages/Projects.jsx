import React from "react";
import WorkInProgress from "../components/WorkInProgress";
import SectionHeader from "../components/SectionHeader";
import ProjectCardSecondary from "../components/ProjectCardSecondary";
import projectInfo from "../data/projectsInfo";

const Projects = () => {
  return (
    <div className="w-full max-sm:px-[10px] max-md:px-[20px] xl:w-[1200px] mx-auto pt-30 md:pt-40 pb-30 md:pb-40 lg:pb-50">
      <SectionHeader heading="Projects" />
      <div className="px-3 lg:px-0 flex flex-col gap-8 md:gap-10 ">
        {projectInfo.map((project, index) => {
          return <ProjectCardSecondary index={index} key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
