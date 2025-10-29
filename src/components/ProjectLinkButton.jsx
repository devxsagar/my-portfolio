import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectLinkButton = ({ buttonName, link, linkTextColor, textColor }) => {
  return (
    <motion.div initial="initial" whileHover="hovered">
      <Link
        className={`flex items-center gap-1 overflow-hidden text-xs sm:text-sm md:text-base text-[var(--text-color)] font-suisse-regular cursor-pointer border-2 border-text-white/70 px-4 py-2 lg:px-20 lg:py-4 rounded-lg lg:rounded-2xl hover:bg-text-white hover:text-[var(--link-text-color)] transition`}
        to={link}
        style={{"--link-text-color": linkTextColor, "--text-color": textColor}}
      >
        {buttonName}{" "}
        <div className="relative w-4 h-4 sm:w-5 sm:h-5">
          <motion.div
            variants={{
              initial: { x: 0, y: 0 },
              hovered: { x: "100%", y: "-190%" },
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-full h-full" />
          </motion.div>
          <motion.div
            variants={{
              initial: { x: "-100%", y: "190%" },
              hovered: { x: 0, y: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <ArrowUpRight className="w-full h-full" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectLinkButton;
