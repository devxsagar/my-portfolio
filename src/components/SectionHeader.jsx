import { Sparkle } from "lucide-react";
import RevealTextEffect from "./RevealTextEffect";

const SectionHeader = ({heading, subheading}) => {
  return (
    <header className={`mb-12 md:mb-14 lg:mb-16 flex ${subheading && "flex-col"} items-center justify-center`}>
      <div className="flex items-center gap-2">
        <Sparkle size={20} className="text-blue" />
        <h2 className="text-3xl font-suisse-regular tracking-[0.02em] leading-tight">
          <RevealTextEffect text={heading}/>
        </h2>
        <Sparkle size={20} className="text-blue" />
      </div>

      {subheading && <p className=" mt-5 text-xl text-center font-caveat">{subheading}</p>}
    </header>
  );
};

export default SectionHeader;
