import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectInfo from "../data/projectsInfo";
import SectionHeader from "../components/SectionHeader";

const Project = () => {
  return (
    <section className="w-full min-h-screen pt-16 md:pt-20 lg:pt-28">
      <SectionHeader
        heading="Selected Work"
        subHeading="Crafted with code, creativity, and curiosity"
      />

      {/* Project Cards */}
      <div className="px-3 lg:px-0 flex flex-col gap-8 md:gap-10">
        {projectInfo.map((project) => {
          const id = crypto.randomUUID();
          return <ProjectCard key={id} data={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
