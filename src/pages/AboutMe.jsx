import SectionHeader from "../components/SectionHeader";
import Education from "../sections/Education";
import { storySoFar } from "../utils/constants";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen pt-10 pb-30 md:pb-40 lg:pb-50">
      <div className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
        {/* About Me */}
        <section >
          <div className="flex items-center justify-center">
            <SectionHeader heading="My journey" subHeading="About Sagar" />
            
          </div>
          <article >
            <h3 className="font-suisse-mono font-extrabold text-base text-text-grey opacity-70 ">
              The Story So Far
            </h3>
            <p className="text-[15px] md:text-base text-text-light mt-3 leading-relaxed">
              {storySoFar}
            </p>
          </article>

          <article className="mt-10">
            <h3 className="font-suisse-mono font-extrabold text-base text-text-grey opacity-70 ">
              The Story So Far
            </h3>
            <p className="text-[15px] md:text-base text-text-light mt-3 leading-relaxed">
              {storySoFar}
            </p>
          </article>
        </section>

        {/* Education */}
        <section className="mt-16 md:mt-20 lg:mt-24">
          <div>
            <SectionHeader
              heading="My Education"
              subHeading="The learning path that shaped me"
            />
          </div>
          <article >
            <Education />
          </article>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

