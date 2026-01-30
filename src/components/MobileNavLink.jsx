import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const panelVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const MobileNavLink = ({ items = [], onClose }) => {
  return (
    <AnimatePresence>
      <motion.aside
        className="
          fixed inset-y-15 -right-1 w-[80%] sm:w-[50%]
          bg-bg-secondary border-l border-border rounded-xl
          backdrop-blur-4xl z-40 px-8 py-20 border h-[85vh]
        "
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ul className="space-y-6">
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="text-3xl font-semibold"
            >
              <Link
                to={item.link}
                onClick={onClose}
                className="flex items-center gap-4 hover:text-primary transition"
              >
                <span className="text-lg opacity-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.aside>
    </AnimatePresence>
  );
};

export default MobileNavLink;
