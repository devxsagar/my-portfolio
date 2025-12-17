import { useRef } from "react";
import { useScroll } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import projectInfo from "../data/projectsInfo";
import SectionHeader from "../components/SectionHeader";

const Project = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <section className="w-full min-h-screen pt-16 md:pt-20 lg:pt-28">
      <SectionHeader
        heading="Selected Projects"
        subheading="A snapshot of what I’ve been building"
      />

      {/* Project Cards */}
      <div
        ref={containerRef}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projectInfo.map((project, index) => {
          const targetScale = 1 - (projectInfo.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              {...project}
              i={index}
              range={[index * 0.2, 1]}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
