import { motion } from "motion/react";
import { bentoImages } from "../data/images";

const BentoImage = () => {
  return (
    <motion.div
      initial={{ filter: "blur(5px)", y: 50, }}
      whileInView={{
        filter: "blur(0px)", y: 0, 
        transition: { duration: 1, ease: "easeInOut" },
      }}
      viewport={{
        once: true,
        // amount: 0.1,
      }}
    >
      <img src={bentoImages} alt="bento-images" />
    </motion.div>
  );
};

export default BentoImage;
