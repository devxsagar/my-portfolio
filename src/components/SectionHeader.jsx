import RevealTextEffect from "./RevealTextEffect";

const SectionHeader = ({ heading, subheading="" }) => {
  return (
    <header className="text-center mb-8 md:mb-10 lg:mb-16">
      <h2
        className="w-fit mx-auto font-space-grotesk font-medium uppercase text-xs md:text-sm lg:text-sm text-text-secondary
                 bg-bg-secondary border border-dashed border-border px-2 py-1 rounded-3xl lg:px-3 lg:py-1.5 
                shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
      >
        {heading}
      </h2>
      <div >
        <p className="max-sm:max-w-[70vw] mx-auto tracking-tight text-xl sm:text-2xl md:text-[2.5rem] font-satoshi font-medium mt-5 text-nowrap">
          {subheading && <RevealTextEffect text={subheading}/>}
        </p>
      </div>
    </header>
  );
};

export default SectionHeader;

