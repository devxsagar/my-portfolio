import React from "react";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const ZoopButton = ({ text, link, textColor }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={link}
      target="_blank"
      rel="noreferrer"
      className={` flex relative overflow-hidden items-center gap-2`}
      style={{ lineHeight: 1.1 }}
    >
      <motion.div
        variants={{ initial: { y: 0, color: "#e9d9f7" }, hovered: { y: "-170%" } }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {text === "GitHub" ? (
          <IconBrandGithub className="w-5 h-5" />
        ) : (
          <IconExternalLink className="w-5 h-5" />
        )}
      </motion.div>

      <motion.div
        className="absolute"
        variants={{ initial: { y: "170%" }, hovered: { y: "0", color: textColor, } }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {text === "GitHub" ? (
          <IconBrandGithub className="w-5 h-5" />
        ) : (
          <IconExternalLink className="w-5 h-5" />
        )}
      </motion.div>

      {/* <div className="relative overflow-hidden">
        <div>
          {text.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                className="inline-block"
                variants={{ initial: { y: 0 }, hovered: { y: "-110%" } }}
                transition={{
                  duration: 0.15,
                  delay: 0.03 * i,
                  ease: "easeInOut",
                }}
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
                variants={{ initial: { y: "130%" }, hovered: { y: "0" } }}
                transition={{
                  duration: 0.15,
                  delay: 0.03 * i,
                  ease: "easeInOut",
                }}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </div> */}
    </motion.a>
  );
};

export default ZoopButton;
