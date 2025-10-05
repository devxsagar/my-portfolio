import { Ghost, HatGlasses } from "lucide-react";
import React from "react";

const ButtonThreeD = ({ children }) => {
  return (
    <button
      className={`
        relative
        px-4 py-2 
        lg:px-7 lg:py-5 
        rounded-[30px] 
        font-semibold text-xs md:text:sm lg:text-xl
        bg-gradient-to-b from-[#ff6b3c] to-[#db4500]
        transition-all duration-150 ease-in-out
        overflow-hidden
        flex items-center gap-2
      `}
    >
      <Ghost className=" w-4 h-4 lg:w-6 lg:h-6
          bg-clip-text 
          drop-shadow-[0_2px_2px_rgba(128,0,0,0.8)] opacity-75" />
      {/* Text with gradient and drop shadow */}
      <span
        className="
          -mb-0.5 md:-mb-1
          bg-gradient-to-t from-[#ffb399] to-[#fff2ee] 
          bg-clip-text text-transparent 
          drop-shadow-[0_2px_2px_rgba(128,0,0,0.8)]
        "
      >
        {children}
      </span>

      {/* Top highlight */}
      <span
        className="
          absolute top-1 left-1/2 transform -translate-x-1/2 
          w-[calc(100%-3.75rem)] h-[2px] 
          rounded-full 
          opacity-70
          bg-gradient-to-l from-transparent via-white to-transparent
        "
      ></span>

      {/* Bottom blur */}
      <span
        className="
          absolute bottom-1.5 left-1/2 transform -translate-x-1/2 
          w-[calc(100%-3.75rem)] h-[2px] 
          rounded-full 
          opacity-5
          blur-sm
          bg-gradient-to-l from-transparent via-white to-transparent
        "
      ></span>
    </button>
  );
};

export default ButtonThreeD;
