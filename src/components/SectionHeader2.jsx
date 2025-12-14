import RevealTextEffect from "./RevealTextEffect";

const SectionHeader2 = ({ heading, subheading, isAbout }) => {
  return (
    <header className="text-center mb-8 md:mb-10 lg:mb-16">
      <h2
        className="w-fit mx-auto font-space-grotesk font-medium uppercase text-xs md:text-sm lg:text-sm text-text-secondary
                 bg-bg-secondary border border-dashed border-border px-2 py-1 rounded-3xl lg:px-3 lg:py-1.5 
                shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
      >
        {heading}
      </h2>
      <div className={`${isAbout && "flex items-end gap-4"}`}>
        <p className="max-sm:max-w-[70vw] mx-auto tracking-tight text-xl sm:text-2xl md:text-[2.5rem] font-satoshi font-medium mt-5">
          <RevealTextEffect text={subheading} />
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

export default SectionHeader2;

/**
  <article>
            <h3 className="font-suisse-mono font-extrabold text-[14px] text-base text-text-grey opacity-70 ">
              How It All Began
            </h3>
            <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
              {howItBegan}
            </p>
          </article>

          <article className="mt-10">
            <h3 className="font-suisse-mono text-[14px] font-extrabold text-base text-text-grey opacity-70 ">
              What I Do Now
            </h3>
            <p className="text-[14px] md:text-base font-suisse-regular text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
              I build modern web applications using <span className="highlight">React.js, JavaScript, and
              Tailwind CSS,</span> focusing on creating interfaces that are both
              beautiful and functional. From responsive layouts to seamless user
              interactions, I prioritize <span className="highlight">clean code, accessibility, and
              performance </span> in everything I create. I work with tools like <span className="highlight">Git, Figma, and VS Code </span> daily, and eager to expanding my skills
              into backend technologies to become a full-stack developer ready
              to tackle any challenge.
            </p>
          </article> 
 
 */
