import Marquee from "../components/Marquee";
import SectionHeader from "../components/SectionHeader";
import { techStack } from "../data/images";
import { motion } from "motion/react";

const TechStack = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 pb-30">
      <SectionHeader
        heading="What I Build With"
        subHeading="Tools that fuel my creativity and clean code"
      />

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
