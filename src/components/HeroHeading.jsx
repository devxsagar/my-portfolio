import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { jsLogo, pfpHero, reactLogo } from "../data/images";
import AboutMeHoverPopUp from "./AboutMeHoverPopUp";

const HeroHeading = () => {
  const navigate = useNavigate();

  const handleAboutMe = () => {
    navigate("/about-me");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-full md:w-[700px] lg:w-full font-suisse-medium 
      text-[28px] leading-9 md:text-[36px] md:leading-11 lg:text-[40px] lg:leading-12 xl:text-[46px] xl:leading-[56px] tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.3px] xl:tracking-[-1.4px]"
    >
      <motion.h1
        className="group w-fit mx-auto text-text-secondary text-center select-none"
        onClick={handleAboutMe}
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 10,
          mass: 2,
        }}
      >
        Hi, I'm{" "}
        <span>
          <motion.img
            src={pfpHero}
            alt="profile-pic"
            loading="lazy"
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px] xl:w-[62px] xl:h-[62px] object-cover object-top border border-border rounded-lg md:rounded-xl lg:rounded-2xl inline"
            whileHover={{
              rotate: -12,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.2 }}
          />
        </span>{" "}
        Sagar,
        <AboutMeHoverPopUp />
      </motion.h1>
      <motion.h2
        className="text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 10,
          mass: 2,
        }}
      >
        a frontend developer{" "}
        <span>
          <motion.img
            src={reactLogo}
            alt="react-logo"
            loading="lazy"
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
            alt="javascript-logo"
            loading="lazy"
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
      </motion.h2>
    </div>
  );
};

export default HeroHeading;
