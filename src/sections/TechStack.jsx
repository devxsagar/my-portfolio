import Marquee from "../components/Marquee";
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
        <div className="flex overflow-x-hidden relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Marquee effect */}
          <Marquee />
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
