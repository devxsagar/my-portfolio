import { img } from "motion/react-client";
import RevealTextEffect from "./RevealTextEffect";

const SectionHeader = ({ heading, subHeading, isAbout }) => {
  return (
    <header className="text-center mb-8 md:mb-10 lg:mb-16">
      <h2
        className="w-fit mx-auto capitalize text-xs md:text-sm lg:text-base tracking-wider text-text-secondary
                 bg-bg-secondary border border-dashed border-border px-2 py-1 rounded-3xl lg:px-3 lg:py-1.5 
                shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
      >
        {heading}
      </h2>
      <div className={`${isAbout && "flex items-end gap-4"}`}>
        <p className="max-sm:max-w-[70vw] mx-auto tracking-tight text-xl sm:text-2xl md:text-[2.5rem] font-suisse-medium mt-5">
          <RevealTextEffect text={subHeading} />
        </p>
        {isAbout && (
          <img
            src="/pp.jpg"
            alt="profile-pic"
            className="w-[30px] h-[30px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px] border border-border rounded-lg md:rounded-xl lg:rounded-xl"
          />
        )}
      </div>
    </header>
  );
};

export default SectionHeader;
