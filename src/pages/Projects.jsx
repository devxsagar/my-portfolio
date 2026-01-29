import SectionHeader from "../components/SectionHeader";
import projectInfo from "../data/projectsInfo";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="bg-bg-secondary rounded-4xl">
        <div className="w-full max-sm:px-1 max-md:px-[20px] max-w-7xl mx-auto pt-30 md:pt-40 pb-30 md:pb-40">
          <SectionHeader
            heading="Projects"
            subheading="Projects I’ve worked on and learned from"
          />
          <div className="flex flex-col gap-8 md:gap-12">
            {projectInfo.map((project, index) => {
              return (
                <div key={index} className={`flex  justify-center gap-8`}>
                  {/* Project card  */}
                  <div className="w-full">
                    <ProjectCard {...project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
