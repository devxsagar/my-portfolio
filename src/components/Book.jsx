import { motion } from "motion/react";

const Book = ({ cover }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative perspective-[1200px]  w-[120px] h-48
        sm:w-[140px] sm:h-56
        md:w-[160px] md:h-64
        lg:w-[180px] lg:h-72"
    >
      {/* Pages */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hovered: { opacity: 1 },
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="
          absolute top-1 left-1
          w-full h-full
          rounded-tl-md rounded-bl-md
          bg-gradient-to-r from-gray-100 to-gray-200
          shadow-inner
        "
      />

      {/* Front Cover */}
      <motion.img
        src={cover}
        alt="Book cover"
        className="
          relative z-10
          w-full h-full 
          rounded-tl-md rounded-bl-md
          origin-left
          shadow-lg
        "
        whileHover={{
          rotateY: -18,
          boxShadow: "30px 10px 40px rgba(0,0,0,0.3)",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
      />
    </motion.div>
  );
};

export default Book;
