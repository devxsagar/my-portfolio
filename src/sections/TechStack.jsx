import { useState } from "react";
import Marquee from "../components/Marquee";
import SectionHeader from "../components/SectionHeader";
import { techStack, techStack2 } from "../data/images";

const TechStack = () => {
  return (
    <section className="relative pt-24 md:pt-30 lg:pt-30 pb-30 md:pb-40 lg:pb-30 bg-bg-secondary rounded-4xl">
      <div className="w-full max-w-7xl mx-auto ">
        <SectionHeader
          heading="What I Build With"
          subheading="Tools that fuel my creativity"
        />

        <div className="container mx-auto">
          <div className="flex overflow-x-hidden relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-bg-secondary via-bg-secondary/70 to-transparent z-10" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-bg-secondary via-bg-secondary/70 to-transparent z-10" />

            {/* Marquee effect */}
            <Marquee techStack={techStack} primary={true} />
            <Marquee techStack={techStack} primary={true} />
          </div>
        </div>

        <div className="container mx-auto pt-8">
          <div className="flex overflow-x-hidden relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-bg-secondary via-bg-secondary/70 to-transparent z-10" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-bg-secondary via-bg-secondary/70 to-transparent z-10" />

            {/* Marquee effect */}
            <Marquee techStack={techStack2} primary={false} />
            <Marquee techStack={techStack2} primary={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
