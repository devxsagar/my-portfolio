import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { bentoImages } from "../data/images";
import { motion } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useWindowWidth } from "../utils/useWindowWidth";

const LifeBeyondCode = () => {
  const [active, setActive] = useState(1);

  const width = useWindowWidth();
  console.log(width);

  const CARD_WIDTH = width < 1200 ? 200 : 300;
  const GAP = 90;
  const DRAG_THRESHOLD = 50;

  return (
    <section className="mt-20 md:mt-24 lg:mt-28">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader
          heading="Life Beyond Code"
          subheading="Exploring mountains, capturing moments"
        />
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-2xl">
         <p className="absolute top-5 font-caveat text-sm lg:text-lg text-text-secondary">( Drag to explore )</p>
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (
              info.offset.x < -DRAG_THRESHOLD ||
              info.offset.y < -DRAG_THRESHOLD
            ) {
              setActive((p) => {
                if (p !== 14) {
                  return Math.min(p + 1, bentoImages.length - 1);
                } else {
                  return 0;
                }
              });
            }
            if (
              info.offset.x > DRAG_THRESHOLD ||
              info.offset.y > DRAG_THRESHOLD
            ) {
              setActive((p) => Math.max(p - 1, 0));
            }
          }}
        >
          {bentoImages.map((item, index) => {
            const offset = index - active;

            let x = 0;
            let y = 0;
            let scale = 1;
            let opacity = 1;
            let rotate = 0;

            if (offset === -1) {
              x = width < 1200 ? -220 : -350;
              y = width < 1200 ? -200 : -180;
              scale = 0.85;
              rotate = -6;
            }

            if (offset === 1) {
              x = width < 1200 ? 220 : 350;
              y = width < 1200 ? 200 : 180;
              scale = 0.85;
              rotate = 6;
            }

            if (Math.abs(offset) > 1) {
              opacity = 0;
              scale = 0.7;
            }

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-xl bg-black"
                animate={{
                  x,
                  y,
                  scale,
                  rotate,
                  opacity,
                  filter: offset === 0 ? "blur(0px)" : "blur(6px)",
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                }}
                style={{
                  width: CARD_WIDTH,
                  height: width < 1200 ? 260 : 390,
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Controls */}
        {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-50">
          <button
            onClick={() => setActive((p) => Math.max(p - 1, 0))}
            className="px-2 py-2 rounded-lg
            "
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={() =>
              setActive((p) => {
                if (p !== 14) {
                  return Math.min(p + 1, bentoImages.length - 1);
                } else {
                  return 0;
                }
              })
            }
            className="px-2 py-2 rounded-lg"
          >
            <IconChevronRight />
          </button>
        </div> */}

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-[#fafafa] via-white/80 to-transparent z-10"></div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-[#fafafa] via-white/80 to-transparent z-10"></div>

        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-[#fafafa] via-white/80 to-transparent z-10" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-[#fafafa] via-white/80 to-transparent z-10" />

        
     
      </div>

    </section>
  );
};

export default LifeBeyondCode;
