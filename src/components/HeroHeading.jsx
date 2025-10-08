import { motion, useSpring } from "motion/react";
import { jsLogo, reactLogo } from "../data/images";
import { useState } from "react";
import AboutMeHoverPopUp from "./AboutMeHoverPopUp";
import { useNavigate } from "react-router-dom";

const HeroHeading = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[700px] lg:w-full font-suisse-medium text-[32px] leading-10 md:text-[42px] md:leading-13 lg:text-[46px] lg:leading-14.5 xl:text-[54px] xl:leading-11 tracking-[-1.32px]">
      <h1 className="group w-fit mx-auto text-text-secondary text-center select-none" onClick={() => navigate("/about-me")}>
        Hi, I'm{" "}
        <span>
          <motion.img
            src="/pp.jpg"
            alt="profile pic"
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] border border-border rounded-xl md:rounded-2xl lg:rounded-3xl inline"
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
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] inline "
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
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] inline "
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
