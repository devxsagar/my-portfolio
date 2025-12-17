import SectionHeader from "../components/SectionHeader";
import projectInfo from "../data/projectsInfo";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full max-sm:px-[10px] max-md:px-[20px] xl:w-[1200px] mx-auto pt-30 md:pt-40 pb-30 md:pb-40 lg:pb-50">
      <SectionHeader
        heading="Projects"
        subheading="Projects I’ve worked on and learned from"
      />
      <div className="px-3 lg:px-0 flex flex-col gap-8 md:gap-12">
        {projectInfo.map((project, index) => {
          const { projectNo } = project;
          return (
            <div key={projectNo} className={`flex  justify-center gap-8`}>

              

              {/* Project card  */}
              <div className="w-full md:w-[70%]">
                <ProjectCard {...project} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
