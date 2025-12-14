import Marquee from "../components/Marquee";
import SectionHeader from "../components/SectionHeader";
import SectionHeader2 from "../components/SectionHeader2";

const TechStack = () => {
  return (
    <section className="pt-40 md:pt-52 lg:pt-58 pb-30 md:pb-40 lg:pb-50">
      <SectionHeader2
        heading="What I Build With"
        subheading="Tools that fuel my creativity"
      />

      <div className="container mx-auto">
        <div className="flex overflow-x-hidden relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafafa] via-white/80 to-transparent z-10"></div>

          {/* Marquee effect */}
          <Marquee />
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
