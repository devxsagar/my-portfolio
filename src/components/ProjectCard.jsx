import { motion } from "motion/react";
import ZoopButton from "./ZoopButton";

const ProjectCard = ({
  i,
  projectNo,
  title,
  subheading,
  date,
  techStack,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      className="group relative flex flex-col justify-between rounded-3xl bg-[#F7F9FC] p-8 shadow-sm hover:shadow-lg"
      initial={{ y: 30, opacity: 0, rotate: 0, filter: "blur(10px)" }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "linear" },
      }}
      whileHover={{
        rotate: i % 2 === 0 ? 0.8 : -0.8,
        transition: { duration: 0.3, ease: "linear" },
      }}

      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top Content */}
      <div>
        {/* Title / Label */}
        <h3 className="mb-2 text-xs font-space-grotesk font-semibold tracking-[0.3em] text-blue/80 uppercase">
          {title}
        </h3>

        {/* Main Heading */}
        <p className="mb-8 max-w-[28rem] lg:max-w-[32rem] text-xl lg:text-2xl font-semibold leading-tight text-gray-900">
          {subheading}
        </p>

        {/* Tech Stack */}
        <p className="text-xs lg:text-sm font-medium font-space-grotesk tracking-wide text-gray-400 uppercase">
          {techStack.map((tech, index) => {
            return (
              <span key={index}>
                {tech}
                {index !== techStack.length - 1 && (
                  <span className="mx-1 lg:mx-2">·</span>
                )}
              </span>
            );
          })}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3">
        <ZoopButton text="GitHub" link={githubLink} />
        <ZoopButton text="Live" link={liveLink} primary />
      </div>

      {/* Image */}
      <div className="mt-10 flex justify-center overflow-hidden rounded-2xl">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full object-cover rounded-2xl"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
