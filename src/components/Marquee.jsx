import { motion, useAnimation } from "motion/react";
import { i, p } from "motion/react-client";

import { useEffect } from "react";

const Marquee = ({ techStack, primary }) => {
  const controls = useAnimation();

  const animateMarquee = (duration) => {
    controls.start({
      x: primary ? "-100%" : "100%",
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    animateMarquee(30);
  }, [primary]);

  return (
    <motion.div
      className=" flex pb-5 sm:pb-7 lg:pb-10 shrink-0 overflow-y-hidden"
      initial={{ x: primary ? "0%" : "-100%" }}
      animate={{
        x: primary ? "-100%" : "0%",
        transition: {
          duration : 30,
          repeat: Infinity,
          ease: "linear",
        },
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
              alt={`${tech.iconName}-logo`}
              loading="lazy"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            />
            <motion.p
              className="absolute md:left-4.5 lg:left-8 -translate-y-[50%] top-[130%] -translate-x-1/2 max-md:hidden  md:text-base lg:text-lg whitespace-nowrap font-caveat pointer-events-none"
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
