import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ProjectLinkButton from "./ProjectLinkButton";

const ProjectCard = ({
  i,
  projectName,
  title,
  description,
  mobileDesc,
  date,
  techStack,
  image,
  bgColor,
  textColor,
  githubLink,
  liveLink,
  range,
  progress,
  targetScale,
}) => {
  const containerRef = useRef(null);

  // scrollYProgress value ranges in between 0 to 1.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 8%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <article ref={containerRef} className="sticky top-10 lg:top-15">
      <motion.div
        className="p-4 sm:p-6 md:p-8 md:min-h-[350px] lg:min-h-[542px] max-w-md md:max-w-xl lg:w-full  lg:max-w-full mx-auto flex flex-col justify-between rounded-xl max-lg:gap-5 gap-6
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative "
        style={{
          backgroundColor: bgColor,
          border: `4px solid #fafafa`,
          scale,
          top: `calc(${i * 30}px)`, // on scroll each card will appears slightly below the previous one
        }}
      >
        {/* Date */}
        <div className="flex gap-x-2 font-suisse-mono text-[10px] sm:text-xs md:text-sm uppercase text-text-white/70">
          <p>{projectName}</p>
          <p>•</p>
          <p>{date}</p>
        </div>
        <div className="flex max-lg:flex-col-reverse justify-between max-lg:gap-8 gap-4">
          {/* left side */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between gap-6 md:gap-12 lg:gap-5">
            <div className="space-y-4 md:space-y-6">
              {/* Title and Description */}
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-base md:text-xl lg:text-3xl text-text-white font-suisse-medium leading-tight">
                  {title}
                </h3>

                {/* Description for Larger Screen  */}
                <ul className="text-xs md:text-sm lg:text-base font-suisse-regular text-text-white/80 leading-relaxed list-disc pl-4 space-y-1 max-lg:hidden">
                  {description.map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
                </ul>

                {/* Description For Mobile Screen */}
                <p className="text-xs md:text-sm lg:text-base font-suisse-regular text-text-white/80 leading-relaxed lg:hidden">
                  {mobileDesc}
                </p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="overflow-hidden flex items-center">
            <motion.div
              className="w-full lg:max-w-[550px]"
              // style={{ scale: imageScale }}
            >
              <img
                src={image}
                alt="periodic-table"
                loading="lazy"
                className="rounded-xl object-cover "
              />
            </motion.div>
          </div>
        </div>

        {/* Tech Stack and Links */}
        <div className="flex max-lg:flex-col lg:items-center justify-between gap-6 md:gap-6 lg:gap-9">
          {/* Tech Stack */}
          <ul className="lg:w-[55%] text-text-white/80 flex flex-wrap gap-2 sm:gap-3 font-suisse-mono select-none ">
            {techStack.map((tool, index) => {
              return (
                <li
                  key={index}
                  className="text-[8px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 border border-text-white/70 rounded-md lg:rounded-lg"
                >
                  {tool}
                </li>
              );
            })}
          </ul>

          {/* Links */}
          <div className="flex items-center lg:justify-between gap-4 lg:w-[45%]">
            <ProjectLinkButton
              buttonName="GitHub"
              link={githubLink}
              textColor={textColor}
            />
            <ProjectLinkButton
              buttonName="Live"
              link={liveLink}
              textColor={textColor}
            />
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectCard;
