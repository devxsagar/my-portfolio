import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FooterLink = ({ href, icon, linkName }) => {
  return (
    <Link to={href} className="relative py-5">
      <motion.div initial="initial" whileHover="hovered">
        <motion.p
          variants={{
            initial: { y: -30, filter: "blur(6px)" },
            hovered: { y: 0, filter: "blur(0px)" },
          }}
          className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 tracking-wide text-sm font-suisse-book"
        >
          {linkName}
        </motion.p>
        <img src={icon} alt={linkName} className="w-8 opacity-60 " />
      </motion.div>
    </Link>
  );
};

export default FooterLink;
