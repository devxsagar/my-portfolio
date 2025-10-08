import ProjectLinkButton from "./ProjectLinkButton";

const ProjectCard = ({ data }) => {
  const {
    projectName,
    description,
    date,
    techStack,
    image,
    githubLink,
    liveLink,
  } = data;
  return (
    <article className="p-4 sm:p-6 md:p-8 md:min-h-[350px] max-w-md md:max-w-2xl lg:w-full lg:max-w-full mx-auto flex max-lg:flex-col-reverse justify-between rounded-xl max-lg:gap-8 gap-4 bg-bg-white border border-[#e7e7e7]">
      {/* left side */}
      <div className=" flex flex-col justify-between gap-10 md:gap-12 lg:gap-5">
        <div className="space-y-3 md:space-y-4">
          {/* Date */}
          <div className="font-suisse-mono text-[10px] sm:text-xs md:text-sm uppercase text-text-secondary">
            {date}
          </div>

          {/* Title and Description */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-suisse-medium leading-tight">
              {projectName}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Tech Stack and Links */}
        <div className="flex flex-col gap-6 md:gap-6 lg:gap-9">
          {/* Tech Stack */}
          <ul className="text-text-secondary flex flex-wrap gap-2 sm:gap-3 font-suisse-mono select-none">
            {techStack.map((tool, index) => {
              return (
                <li
                  key={index}
                  className="text-[10px] sm:text-xs md:text-sm border border-dashed border-orange px-2 sm:px-3 py-1 sm:py-1.5 rounded-md lg:rounded-lg bg-orange-100 text-orange"
                >
                  {tool}
                </li>
              );
            })}
          </ul>

          {/* Links */}
          <div className="flex items-center gap-4 ml-1">
            <ProjectLinkButton buttonName="GitHub" link={githubLink} />
            <ProjectLinkButton buttonName="Live" link={liveLink} />
          </div>
        </div>
      </div>

      {/* right side */}

      <img
        src={image}
        alt="periodic-table"
        className="rounded-xl w-full lg:max-w-[480px] "
      />
    </article>
  );
};

export default ProjectCard;
