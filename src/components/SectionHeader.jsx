import { Sparkle } from "lucide-react";
import React from "react";
import RevealTextEffect from "./RevealTextEffect";

const SectionHeaderTrail = ({heading}) => {
  return (
    <header className="mb-12 md:mb-14 lg:mb-16 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <Sparkle size={20} className="text-blue" />
        <h2 className="text-3xl font-suisse-regular tracking-wide">
          <RevealTextEffect text={heading}/>
        </h2>
        <Sparkle size={20} className="text-blue" />
      </div>
    </header>
  );
};

export default SectionHeaderTrail;
