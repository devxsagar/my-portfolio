import { useState } from "react";
import { motion } from "motion/react";
import HeroHeading from "../components/HeroHeading";
import { email } from "../utils/constants";
import HeroFooter from "../components/HeroFooter";
import { directionArrow } from "../data/images";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  // handle email copy
  const handleCopy = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
    }

    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {/* Background Line Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <div className="z-10">
        <div>
          {/* Software Engineer */}
          <motion.div
            className=" relative w-fit bg-bg-secondary border border-dashed border-border 
                px-1 py-0.5 mb-8 mx-auto rounded-3xl md:mb-10 lg:px-2 lg:py-1 lg:mb-12 xl:mb-14 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-xs md:text-sm xl:text-base text-text-secondary uppercase font-[590] font-suisse-mono">
              software engineer
            </h2>
            <img
              className="h-[85px] md:h-[130px] lg:h-[140px] xl:h-[150px] absolute z-20 -top-8 -right-20 md:-top-14 md:-right-34 lg:-right-34 rotate-160 md:rotate-160 opacity-50 "
              src={directionArrow}
              alt="arrow"
            />
            <div className="absolute group rotate-25 font-caveat leading-5 text-lg md:text-xl lg:text-2xl xl:text-3xl -top-18 -right-22 md:-top-19 md:-right-44 lg:-right-46 xl:-top-20 xl:-right-50">
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
      <HeroFooter handleCopy={handleCopy} copied={copied} />
    </section>
  );
};

export default Hero;
