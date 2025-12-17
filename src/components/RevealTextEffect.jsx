import { motion } from "motion/react";

const RevealTextEffect = ({ text }) => {
  const LETTER_DELAY = 0.025;

  return (
    <span className="whitespace-normal">
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-1">
          {word.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1,
                  delay: wordIndex * 0.2 + i * LETTER_DELAY,
                  ease: "backInOut",
                },
              }}
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default RevealTextEffect;
