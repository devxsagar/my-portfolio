import { motion } from "motion/react";
import { techStack } from "../data/images";


const Marquee = () => {
  return (
    <motion.div
      className=" flex pb-5 sm:pb-7 lg:pb-10 shrink-0 overflow-y-hidden"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {techStack.map((tech, index) => {
        return (
          <motion.div
            key={index}
            className="group relative pr-10 sm:pr-15 md:pr-20"
            initial="initial"
            whileHover="hovered"
          >
            <img
              src={tech.icon}
              alt={`${tech.iconName} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
            />
            <motion.p
              className="absolute left-5 sm:left-7 lg:left-8.5 -translate-y-[50%] top-[130%] -translate-x-1/2 text-base lg:text-lg whitespace-nowrap font-caveat"
              variants={{ initial: { y: "120%" }, hovered: { y: 0 } }}
            >
              {tech.iconName}
            </motion.p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Marquee;
