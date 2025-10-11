import { motion } from "motion/react";
import { Copy, MapPin } from "lucide-react";
import Zoop from "./Zoop";
import { email, location } from "../utils/constants";
import { useState } from "react";

const HeroFooter = () => {
  const [emailHovered, setEmailHovered] = useState(false);

  const [copied, setCopied] = useState(false);

  // handle email copy
  const handleCopy = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
    }

    setEmailHovered(true);

    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    <div className="w-[calc(100%-20px)] lg:w-full absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center justify-between text-[9px] md:text-sm lg:text-base select-none tracking-wider ">
      {/* Email */}
      <button
        className="relative z-10 group text-text-secondary bg-bg-primary"
        onClick={handleCopy}
        onMouseEnter={() => setEmailHovered(true)}
        onMouseLeave={() => setEmailHovered(false)}
      >
        <span className="flex items-center gap-1 cursor-pointer ">
          <Copy className="w-3 h-3 md:w-4 md:h-4 group-hover:text-text-primary hover-transition" />
          <div
            href="mailto:mitrasagar10@gmail.com"
            className="group-hover:text-text-primary hover-transition"
          >
            <Zoop text={email} />
          </div>
        </span>

        <motion.span
          className={`absolute left-1/2 -translate-x-1/2 -top-8 md:-top-10 font-caveat text-xs md:text-base lg:text-xl whitespace-nowrap 
          `}
          animate={emailHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {copied ? "Email copied!" : "Click to copy"}
        </motion.span>
      </button>

      {/* Location */}
      <span className="group flex items-center gap-1 text-text-secondary">
        <MapPin className="w-3 h-3 md:w-4 md:h-4 group-hover:text-text-primary hover-transition" />
        <div className="group-hover:text-text-primary hover-transition">
          <Zoop text={location} />
        </div>
      </span>
    </div>
  );
};

export default HeroFooter;
