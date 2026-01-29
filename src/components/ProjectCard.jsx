import { motion } from "motion/react";
import { IconPointFilled } from "@tabler/icons-react";
import ZoopButton from "./ZoopButton";

const ProjectCard = ({
  i,
  title,
  description,
  date,
  cardBackground,
  cardBorder,
  textColor,
  techStack,
  image,
  keyPoints,
  githubLink,
  liveLink,
}) => {
  return (
    <article className="px-4 sm:px-6 xl:px-0">
      <motion.div
        className="mx-auto w-full md:max-w-xl lg:max-w-6xl rounded-3xl p-2 md:p-4"
        style={{ backgroundColor: cardBackground }}
        initial={{ scale: 0.8, y: 30, filter: "blur(10px)" }}
        whileInView={{ scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative group grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-xl bg-white/25 backdrop-blur-3xl border border-white/30">
          {/* LEFT — Image */}
          <div className="flex items-center justify-center px-4 py-6 lg:px-6 lg:py-0">
            <img
              src={image}
              alt={title}
              className="
                w-full object-contain rounded-xl
                max-h-[220px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-full
              "
            />
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col justify-between gap-6 p-5 sm:p-6 md:p-8 relative z-10">
            {/* TOP */}
            <div className="space-y-4">
              {/* Date + Buttons */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="inline-block capitalize rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-text-white">
                  {date}
                </span>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <ZoopButton
                    text="GitHub"
                    link={githubLink}
                    textColor={textColor}
                  />
                  <ZoopButton
                    text="Live"
                    link={liveLink}
                    textColor={textColor}
                  />
                </div>
              </div>

              {/* Title + Description */}
              <div className="space-y-2">
                <h3
                  className="
                    text-xl sm:text-2xl md:text-3xl lg:text-4xl
                    font-semibold tracking-tight text-text-white capitalize
                  "
                >
                  {title}
                </h3>

                <p className="text-sm sm:text-base text-text-white leading-relaxed max-md:">
                  {description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-sm text-text-white/80 max-lg:hidden">
                {keyPoints?.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <IconPointFilled
                      size={14}
                      className="mt-1 shrink-0"
                      color="white"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTTOM */}
            <div className="space-y-4 lg:pt-2">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {techStack?.map(({ name, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center gap-2
                      rounded-full px-2 py-1 md:px-3 md:py-1.5
                      text-[11px] sm:text-xs
                      font-medium text-white/80
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                    "
                  >
                    <Icon className="w-3 h-3 md:w-4 md:h-4" color={textColor} />
                    <span className="font-jetbrains">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectCard;
