import KnowMe from "../components/KnowMe";
import LifeBeyondCode from "../components/LifeBeyondCode";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen pt-30 pb-30 md:pb-40 lg:pb-50">
      <div className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
        {/* Top */}
        <KnowMe />

        {/* Experience */}
        {/* <section className="mt-20 md:mt-24 lg:mt-28">
          <SectionHeader heading="Experience" />
        </section> */}

        {/* Life Beyond Code */}
        <LifeBeyondCode />
      </div>
    </div>
  );
};

export default AboutMe;
