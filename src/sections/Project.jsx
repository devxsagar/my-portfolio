import projectInfo from "../data/projectsInfo";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <section className="relative w-full min-h-screen pt-16 md:pt-20 lg:pt-28 pb-30  bg-bg-secondary rounded-4xl mb-2 max-sm:px-2 md:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeader
          heading="Selected Projects"
          subheading="A snapshot of what I’ve been building"
        />

        {/* Project Cards */}
        <div className="mx-auto w-full  max-w-6xl space-y-10 md:space-y-12 lg:space-y-16">
          {projectInfo.slice(0, 3).map((project, index) => {
            return <ProjectCard key={index} {...project} i={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
