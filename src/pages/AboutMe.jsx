import BentoAboutMe from "../components/BentoAboutMe";
import SectionHeader from "../components/SectionHeader";
import Education from "../sections/Education";
import { howItBegan } from "../utils/constants";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen pt-30 pb-30 md:pb-40 lg:pb-50">
      <div className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
        {/* About Me */}
        <section >
          <div className="flex items-center justify-center">
            <SectionHeader heading="About Me" isAbout="true" />
          </div>

          <BentoAboutMe />
        </section>

        <section className="mt-20 md:mt-24 lg:mt-28">
           <div className="flex items-center justify-center">
            <SectionHeader heading="Life Beyond Code" />
          </div>
         <div className="">
          dfds
         </div>
        </section>

        {/* Education */}
        {/* <section className="mt-16 md:mt-20 lg:mt-24">
          <div>
            <SectionHeader
              heading="Progress"
              subHeading="The learning path that shaped me"
            />
          </div>
          <article>
            <Education />
          </article>
        </section> */}
      </div>
    </div>
  );
};

export default AboutMe;
