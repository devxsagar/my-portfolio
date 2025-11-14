import { motion } from "motion/react";

const RevealTextEffect = ({ text }) => {
  const LETTER_DELAY = 0.025;

  return text.split("").map((l, i) => {
    return (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: 20 ,filter: "blur(10px)" }}
        animate={text === "Projects" && {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1, delay: i * LETTER_DELAY, ease:"backInOut" },
        }}
        whileInView={text !== "Projects" && {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1, delay: i * LETTER_DELAY, ease:"backInOut" },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        {l === " " ? "\u00A0" : l}
      </motion.span>
    );
  });
};

export default RevealTextEffect;
