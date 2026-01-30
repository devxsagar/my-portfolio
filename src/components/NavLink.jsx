import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const NavLink = ({ label, link }) => {

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative group text-text-primary"
    >
      <Link to={link} target={label === "Resume" ? "_blank" : ""}>
        <div
          className={`px-5 ${
            label === "Blogs" ? "w-22" : "w-27"
          } h-10 flex items-center overflow-hidden`}
        >
          {/* Background */}
          <motion.div
            className={`
              ${
                label === "Resume" &&
                "group-hover:bg-gradient-to-tl from-[#3b82f6] via-[#4f46e5] to-[#4338ca]"
              } bg-bg-black absolute left-0 top-1/2 -translate-y-1/2 -z-10 group-hover:left-0 transition-all duration-300 ease-linear rounded-full max-lg:hidden`}
            variants={{
              initial: { width: "6px", height: "6px" },
              hovered: { width: "100%", height: "100%" },
            }}
            transition={{ duration: 0.3, ease: "linear" }}
          />

          {/* Arrow & Link Name  */}
          <motion.div
            variants={{
              initial: { color: "#000000" },
              hovered: { color: "#fafafa" },
            }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="z-20 relative max-lg:hidden"
          >
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-5  max-lg:hidden"
              variants={{
                initial: { x: "-150%" },
                hovered: { x: 12 },
              }}
              transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
            >
              {link.name === "Resume" ? (
                <ArrowRight size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </motion.div>

            <motion.p
              variants={{
                initial: { x: 0 },
                hovered: { x: 15 },
              }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              {" "}
              {label}
            </motion.p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NavLink;
