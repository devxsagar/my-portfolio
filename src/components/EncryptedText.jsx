import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const EncryptedText = ({ text, duration = 2.5 }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration * 60;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < (frame / totalFrames) * text.length) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      frame++;
      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span className="relative block w-fit">
      {/* Invisible final text — locks width & height */}
      <span className="invisible block whitespace-normal">{text}</span>

      {/* Animated encrypted text */}
      <motion.span
        className="absolute inset-0 whitespace-normal overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {displayText}
      </motion.span>
    </span>
  );
};

export default EncryptedText;
