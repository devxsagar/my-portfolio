import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const MobileNavLink = () => {
  return (
    <div className="absolute top-12 -right-8 t-0 w-screen md:w-screen h-[80vh] bg-bg-primary rounded-lg flex flex-col items-center gap-y-5 md:gap-y-10 px-10 py-20 text-2xl md:text-4xl tracking-wide ">
      {navLinks.map((link, index) => {
        return (
          <Link key={index} to={link.href} >
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 5,
                delay: index * 0.3,
              }}
              className="inline-block"
            >
              {link.name}
            </motion.span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavLink;
