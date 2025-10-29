"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { cursor as cursorImg } from "../data/images";

export default function CustomCursor() {
  // Track cursor position with motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement using spring animation
  const smoothX = useSpring(mouseX, { stiffness: 1000, damping: 90 });
  const smoothY = useSpring(mouseY, { stiffness: 1000, damping: 90 });

  useEffect(() => {
    // Hide the default system cursor
    // document.body.style.cursor = "none"7

    // Update motion values on mouse move
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto"; // restore on unmount
    };
  }, [mouseX, mouseY]);

  return (
    <motion.img
      src={cursorImg}
      alt="custom cursor"
      className="fixed w-7 h-7 pointer-events-none z-[9999]"
      style={{
        translateX: smoothX,
        translateY: smoothY,
        x: "-50%", // centers the image on pointer
        y: "-50%",
      }}
    />
  );
}
