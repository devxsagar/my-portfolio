import { motion } from "motion/react";
import { Copy, MapPin } from "lucide-react";
import Zoop from "./Zoop";
import { email, location } from "../utils/constants";

const HeroFooter = ({handleCopy, copied}) => {
  return (
    <div className="w-[calc(100%-20px)] lg:w-full absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center justify-between text-[9px] md:text-sm lg:text-base select-none font-suisse-mono">
      {/* Email */}
      <button onClick={handleCopy} className="group text-text-secondary">
        {copied ? (
          <motion.p
            className="text-orange flex items-center gap-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Email copied!
          </motion.p>
        ) : (
          <span className="flex items-center gap-1">
            <Copy className="w-3 h-3 md:w-4 md:h-4 group-hover:text-orange hover-transition" />
            <a
              href="mailto:mitrasagar10@gmail.com"
              className="group-hover:text-text-primary hover-transition"
            >
              <Zoop text={email} />
            </a>
          </span>
        )}
      </button>

      {/* Location */}
      <span className="group flex items-center gap-1 text-text-secondary">
        <MapPin className="w-3 h-3 md:w-4 md:h-4 group-hover:text-orange hover-transition" />
        <div className="group-hover:text-text-primary hover-transition">
          <Zoop text={location} />  
        </div>
      </span>
    </div>
  );
};

export default HeroFooter;
