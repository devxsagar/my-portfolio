import { Link } from "react-router-dom";
import { motion } from "motion/react";

const NavLink = ({ link }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden text-text-primary hover:text-text-secondary  transition-all duration-200 ease-linear"
      style={{ lineHeight: 0.92 }}
    >
      <Link to={link.href}>
        {/* text will go upwards */}
        <div>
          {link.name.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                transition={{
                  duration: 0.15,
                  delay: 0.03 * i,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        {/* same text this one will come upwards from downwards */}
        <div className="absolute inset-0">
          {link.name.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{ initial: { y: "110%" }, hovered: { y: 0 } }}
                transition={{
                  duration: 0.15,
                  delay: 0.03 * i,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </Link>
    </motion.div>
  );
};

export default NavLink;
