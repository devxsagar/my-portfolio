import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FooterLink = ({ href, icon, linkName }) => {
  return (
    <Link to={href} className="relative pt-5 pb-8">
      <motion.div initial="initial" whileHover="hovered" className="group">
        <motion.p
          variants={{
            initial: { y: -30, filter: "blur(6px)" },
            hovered: { y: 20, filter: "blur(0px)", },
          }}
          className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 tracking-wide text-sm font-suisse-book group-hover:opacity-100"
        >
          {linkName}
        </motion.p>
        <motion.img
          variants={{
            initial: { y: 0 },
            hovered: { y: 30 },
          }}
          src={icon}
          alt={linkName}
          className="w-8 opacity-60 "
        />
      </motion.div>
    </Link>
  );
};

export default FooterLink;
