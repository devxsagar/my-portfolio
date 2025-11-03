import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
import { UserRound } from "lucide-react";

const AboutMeHoverPopUp = () => {
  const navigate = useNavigate();

  // Create motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add smooth spring animation for natural movement
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Update position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);
  return (
    <button onClick={() => navigate("/about-me")}>
      <motion.div
        className="w-fit text-center text-sm lg:text-xl text-[#ffffff] bg-blue px-3 py-2 rounded-3xl hidden group-hover:flex items-center gap-3 font-suisse-medium tracking-wide
        shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
        "
        style={{
          x: springX,
          y: springY,
          top: 0,
          left: 0,
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="inline-block">
          <UserRound className="w-4 h-4 lg:w-6 lg:h-6" />
        </span>
        <p className="-mb-0.5 md:-mb-1">About Sagar</p>
      </motion.div>
    </button>
  );
};

export default AboutMeHoverPopUp;
