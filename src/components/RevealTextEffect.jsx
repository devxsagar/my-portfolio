import { motion } from "motion/react";

const RevealTextEffect = ({ text }) => {
  const LETTER_DELAY = 0.03;

  return (
    <span className="leading-tight tracking-normal">
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: "0",
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  delay: wordIndex * 0.2 + i * LETTER_DELAY,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}

          {/* real space between words */}
          <span>&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

export default RevealTextEffect;
