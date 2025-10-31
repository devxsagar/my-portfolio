import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { X } from "lucide-react";

const MobileNavLink = () => {
  return (
    <div className="absolute -top-8 -right-8  w-screen md:w-screen h-screen bg-bg-primary rounded-lg flex flex-col items-center gap-y-5 md:gap-y-10 px-10 py-50 text-2xl md:text-4xl tracking-wide ">
      {navLinks.map((link, index) => {
        return (
          <Link key={index} to={link.href}>
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

      <motion.span
        className="inline-block absolute top-9 right-8"
        initial={{ rotate: 0 }}
        whileTap={{
          rotate: 180,
          transition: { duration: 0.1, ease: "linear" },
        }}
      >
        <X className=" z-50 md:w-12 md:h-8" />
      </motion.span>
    </div>
  );
};

export default MobileNavLink;
