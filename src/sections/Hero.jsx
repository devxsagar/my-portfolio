import { useState } from "react";
import { motion } from "motion/react";
import { directionArrow } from "../data/images";
import { email } from "../utils/constants";
import HeroHeading from "../components/HeroHeading";
import HeroFooter from "../components/HeroFooter";

const Hero = () => {
  

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {/* Main Content */}
      <div className="z-10">
        <div>
          {/* Software Engineer */}
          <motion.div
            className=" relative w-fit bg-bg-secondary border border-dashed border-border 
                px-1 py-0.5 mb-8 mx-auto rounded-3xl md:mb-10 lg:px-2 lg:py-1 lg:mb-12 xl:mb-14 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-xs md:text-sm xl:text-base text-text-secondary uppercase font-[590] font-suisse-regular">
              software engineer
            </h2>
            <img
              className="h-[75px] md:h-[100px] lg:h-[120px] xl:h-[130px] absolute z-20 -top-4 -right-16 md:-top-5 md:-right-24 lg:-right-28 rotate-170 md:rotate-170 opacity-50 select-none pointer-events-none"
              src={directionArrow}
              alt="arrow"
            />
            <div className="absolute group rotate-30 font-caveat leading-5 text-lg md:text-xl lg:text-2xl xl:text-3xl -top-12 -right-22 md:-top-7 md:-right-37 lg:-top-8 lg:-right-46 xl:-top-10 xl:-right-50">
              <span className="text-text-secondary">Click for</span>{" "}
              <span className="md:hidden">
                <br></br>
              </span>{" "}
              'About me'
            </div>
          </motion.div>

          <HeroHeading />
        </div>
      </div>
      {/* Footer */}
      {/* <HeroFooter  /> */}
    </section>
  );
};

export default Hero;
