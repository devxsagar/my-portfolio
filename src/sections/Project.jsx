import { motion, useScroll } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import projectInfo from "../data/projectsInfo";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";

const Project = () => {
  const containerRef = useRef();
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", 'end end']
  })
  return (
    <section className="w-full min-h-screen pt-16 md:pt-20 lg:pt-28">
      <SectionHeader
        heading="Selected Work"
        subHeading="Crafted with code, creativity, and curiosity"
      />

      {/* Project Cards */}
      <div ref={containerRef} className="px-3 lg:px-0 flex flex-col gap-8 md:gap-10">
        {projectInfo.map((project, index) => {
          const targetScale = 1 - ((projectInfo.length - index) * 0.05)
          return <ProjectCard key={index} {...project} i = {index} range={[index*0.2, 1]} progress={scrollYProgress} targetScale={targetScale} />;
        })}
      </div>
    </section>
  );
};

export default Project;
