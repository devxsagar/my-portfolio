import React from "react";
import ProjectLinkButton from "./ProjectLinkButton";
import { motion } from "motion/react";

const ProjectCardSecondary = ({
  index,
  projectName,
  title,
  description,
  mobileDesc,
  date,
  techStack,
  image,
  bgColor,
  textColor,
  linkTextColor,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      className="p-4 sm:p-6 md:p-8 md:min-h-[350px] lg:min-h-[542px] max-w-md md:max-w-xl lg:w-full lg:max-w-full mx-auto flex flex-col justify-between rounded-xl max-lg:gap-5 gap-6
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative"
      initial={{ scale: 0.8, y: 30 }}
      animate={index === 0 && { scale: 1, y: 0 }}
      whileInView={index !== 0 && { scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        backgroundColor: bgColor,
        border: `4px solid #fafafa`,
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
              <ul
                className="text-xs md:text-sm lg:text-base font-suisse-regular leading-relaxed list-disc pl-4 space-y-1 max-lg:hidden"
                style={{ color: textColor }}
              >
                {description.map((desc, index) => {
                  return <li key={index}>{desc}</li>;
                })}
              </ul>

              {/* Description For Mobile Screen */}
              <p
                className="text-xs md:text-sm lg:text-base font-suisse-regular leading-relaxed lg:hidden"
                style={{ color: textColor }}
              >
                {mobileDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden flex items-center">
          <div
            className="w-full lg:max-w-[550px]"
            // style={{ scale: imageScale }}
          >
            <img
              src={image}
              alt="periodic-table"
              loading="lazy"
              className="rounded-xl object-cover "
            />
          </div>
        </div>
      </div>

      {/* Tech Stack and Links */}
      <div className="flex max-lg:flex-col lg:items-center justify-between gap-6 md:gap-6 lg:gap-9">
        {/* Tech Stack */}
        <ul
          className="lg:w-[55%] flex flex-wrap gap-2 sm:gap-3 font-suisse-mono select-none "
          style={{ color: textColor }}
        >
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
            linkTextColor={linkTextColor}
            textColor={textColor}
          />
          <ProjectLinkButton
            buttonName="Live"
            link={liveLink}
            linkTextColor={linkTextColor}
            textColor={textColor}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardSecondary;
