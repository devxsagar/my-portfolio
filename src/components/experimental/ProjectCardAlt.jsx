import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ProjectLinkButton from "./ProjectLinkButton";
import { Sparkle } from "lucide-react";

const ProjectCard = ({
  i,
  projectNo,
  title,
  subheading,
  description,
  mobileDesc,
  date,
  techStack,
  techBG,
  image,
  bgColor,
  textColor,
  linkTextColor,
  linkBgColor,
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
        className="p-4 sm:p-6 md:p-2  max-w-md md:max-w-xl lg:w-full  lg:max-w-full mx-auto rounded-xl relative flex items-center"
        style={{
          // backgroundColor: bgColor,
          scale,
          top: `calc(${i * 30}px)`, // on scroll each card will appears slightly below the previous one
        }}
      >
        <div className=" p-4 flex max-lg:flex-col-reverse justify-between max-lg:gap-8 gap-4 rounded-lg bg-[#ffffff] border border-border">
          {/* left side */}
          <div className="flex flex-col justify-between lg:w-[60%] ">
            <div className="space-y-4 md:space-y-6">
              <div
                className="flex justify-between font-space-grotesk font tracking-wider text-[10px] sm:text-xs md:text-sm uppercase"
                style={{ color: textColor }}
              >
                {/* <p>{projectNo}</p> */}
                <p>{date}</p>
              </div>
              <div className="space-y-4 md:space-y-6">
                {/* Title and Description */}
                <div className="space-y-2 md:space-y-4">
                  <h3
                    className="text-base md:text-xl lg:text-3xl text-text-white font-space-grotesk font-bold leading-tight"
                    style={{ color: textColor }}
                  >
                    {title}
                  </h3>

                  <p className="text-base leading-relaxed text-text-">
                    {subheading}
                  </p>

                  {/* Description for Larger Screen  */}
                  {/* <ul className="text-sm leading-relaxed space-y-1 max-lg:hidden list-none list-inside text-text-secondary-alt">
                  {description.map((desc, index) => {
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <Sparkle size={12} className="text-[#F98080]" />
                        {desc}
                      </li>
                    );
                  })}
                </ul> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 md:gap-6 lg:gap-9">
              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 sm:gap-3 font-space-grotesk select-none text-text-primary font-medium ">
                {techStack.map((tool, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[8px] md:text-xs px-2 sm:px-3 py-1 sm:py-1.5 border border-black/30 rounded-md lg:rounded-lg"
                      style={{ backgroundColor: techBG }}
                    >
                      {tool}
                    </li>
                  );
                })}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4">
                <ProjectLinkButton
                  buttonName="GitHub"
                  link={githubLink}
                  linkBgColor={linkBgColor}
                  linkTextColor={linkTextColor}
                  textColor={textColor}
                />
                <ProjectLinkButton
                  buttonName="Live"
                  link={liveLink}
                  linkBgColor={linkBgColor}
                  linkTextColor={linkTextColor}
                  textColor={textColor}
                  primary
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="overflow-hidden w-full lg:w-[85%] flex items-center">
            <motion.div
              className="w-full"
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
      </motion.div>
    </article>
  );
};

export default ProjectCard;

// shadow-[0_3px_10px_rgb(0,0,0,0.2)]
