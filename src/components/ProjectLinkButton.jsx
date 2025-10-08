import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectLinkButton = ({ buttonName, link }) => {
  return (
    <motion.div initial="initial"
      whileHover="hovered">
      <Link
        className="flex items-center gap-1 overflow-hidden  rounded-xl text-xs md:text-sm sm:text-base text-text-secondary hover:text-text-primary transition-colors font-suisse-mono font-semibold cursor-pointer"
        to={link}
      >
        {buttonName}{" "}
        <div className="relative w-4 h-4 sm:w-5 sm:h-5">
          <motion.div
            variants={{
              initial: { x: 0, y: 0 },
              hovered: { x: "100%", y: "-100%" },
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-full h-full" />
          </motion.div>
          <motion.div
            variants={{
              initial: { x: "-100%", y: "120%" },
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
