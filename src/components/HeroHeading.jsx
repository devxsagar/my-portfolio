import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { jsLogo, reactLogo } from "../data/images";
import AboutMeHoverPopUp from "./AboutMeHoverPopUp";

const HeroHeading = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[700px] lg:w-full font-suisse-medium text-[28px] leading-9 
md:text-[36px] md:leading-11 
lg:text-[40px] lg:leading-12 
xl:text-[46px] xl:leading-[56px] 
tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.3px] xl:tracking-[-1.4px]">
      <h1 className="group w-fit mx-auto text-text-secondary text-center select-none" onClick={() => navigate("/about-me")}>
        Hi, I'm{" "}
        <span>
          <motion.img
            src="/pp.jpg"
            alt="profile pic"
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px] xl:w-[62px] xl:h-[62px] border border-border rounded-lg md:rounded-xl lg:rounded-2xl inline"
            whileHover={{
              // scale: 1.5,
              rotate: -12,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.2 }}
          />
        </span>{" "}
        Sagar,
        <AboutMeHoverPopUp />
      </h1>
      <h2 className="text-center">
        a frontend developer{" "}
        <span>
          <motion.img
            src={reactLogo}
            alt="react logo"
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px] xl:w-[62px] xl:h-[62px] inline "
            whileHover={{
              // scale: 1.5,
              rotate: 12,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.2 }}
          />
        </span>{" "}
        who loves{" "}
        <span className="hidden lg:inline">
          <br />
        </span>{" "}
        turning ideas{" "}
        <span>
          <motion.img
            src={jsLogo}
            alt="javascript logo"
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px] xl:w-[62px] xl:h-[62px] inline "
            whileHover={{
              // scale: 1.5,
              rotate: -12,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.2 }}
          />
        </span>{" "}
        into reality through code.
      </h2>
    </div>
  );
};

export default HeroHeading;
