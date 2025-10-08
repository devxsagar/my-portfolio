import { techStack } from "../data/images";
import { motion } from "motion/react";


const TechStack = () => {
  return (
    <section className="pt-30 pb-30">
      <header className="text-center mb-10">
        <h2 className=" text-3xl sm:text-[32px] md:text-[36px] lg:text-[42px] font-suisse-medium">
          What I Build With
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-secondary mt-2">
          Tools that fuel my creativity and clean code
        </p>
      </header>

      <div className="container mx-auto">
        <div
          className="flex overflow-x-hidden relative"
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Marquee effect */}
          <motion.div
            className=" flex py-10 shrink-0"
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
                <motion.div key={index} className="group relative pr-10 sm:pr-15 md:pr-20">
                  <img
                    src={tech.icon}
                    alt={`${tech.iconName} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                  />
                  <p className="absolute left-5 sm:left-7 lg:left-8 -translate-y-[50%] top-[130%] -translate-x-1/2 hidden group-hover:block text-sm lg:text-base hover-transition">
                    {tech.iconName}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className=" flex py-10  shrink-0"
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
                <motion.div key={index} className={"group relative pr-10 sm:pr-15 md:pr-20"}>
                  <img
                    src={tech.icon}
                    alt={`${tech.iconName} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                  />
                  <p className="absolute left-5 sm:left-7 lg:left-8 -translate-y-1/2 top-[130%] -translate-x-1/2 hidden group-hover:block text-sm lg:text-base hover-transition">
                    {tech.iconName}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
