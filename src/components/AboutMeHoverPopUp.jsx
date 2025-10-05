import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { div } from "motion/react-client";
import { useNavigate } from "react-router-dom";
import { Ghost, HatGlasses } from "lucide-react";
import ButtonThreeD from "./ButtonThreeD";

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
        className={`w-fit text-center  text-sm lg:text-xl text-[#ffffff] rounded-3xl hidden group-hover:flex items-center gap-3 font-suisse-bold`}
        style={{
          x: springX,
          y: springY,
          top: 0,
          left: 0,
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <span className="inline-block"></span> */}
        <ButtonThreeD> 
          About Sagar
        </ButtonThreeD>
      </motion.div>
    </button>
  );
};

export default AboutMeHoverPopUp;
