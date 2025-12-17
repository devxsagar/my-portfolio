import React from "react";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const ZoopButton = ({ text, link, primary }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={link}
      target="_blank"
      rel="noreferrer"
      className={` flex items-center gap-2 rounded-full border ${
        primary
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-300 bg-white text-gray-700"
      } px-5 py-2 text-sm font-medium  shadow-sm transition ${primary ? "hover:bg-white hover:text-gray-700 hover:border-gray-300" : "hover:bg-gray-900 hover:text-white"}   cursor-pointer`}
      style={{ lineHeight: 1.1 }}
    >
      {text === "GitHub" ? <IconBrandGithub size={16} /> : <IconExternalLink size={16} />}
      <div className="relative overflow-hidden">
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
      </div>
    </motion.a>
  );
};

export default ZoopButton;
