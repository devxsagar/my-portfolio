import { motion } from "motion/react";

const Zoop = ({text}) => {

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden"
      style={{lineHeight: 1.1}}
    >
      <div>
        {text.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{ initial: { y: 0 }, hovered: { y: "-110%" } }}
              transition={{ duration: 0.15, delay: 0.03 * i, ease: "easeInOut" }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{ initial: { y: "110%" }, hovered: { y: "0" } }}
              transition={{ duration: 0.15, delay: 0.03 * i, ease: "easeInOut" }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Zoop;
