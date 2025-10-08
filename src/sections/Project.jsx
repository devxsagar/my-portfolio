import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectInfo from "../data/projectsInfo";

const Project = () => {
  return (
    <section className="w-full min-h-screen pt-25 lg:pt-25">
      <header className="text-center mb-10">
        <h2 className=" text-3xl sm:text-[32px] md:text-[36px] lg:text-[42px] font-suisse-medium">
          Selected Work
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-secondary mt-2">
          Crafted with code, creativity, and curiosity.
        </p>
      </header>

      {/* Project Cards */}
      <div className="px-3 lg:px-0">
        {projectInfo.map((project) => {
          const id = crypto.randomUUID();
          return <ProjectCard key={id} data={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
