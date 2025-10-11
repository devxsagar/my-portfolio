import SectionHeader from "../components/SectionHeader";
import Education from "../sections/Education";
import { howItBegan } from "../utils/constants";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen pt-30 pb-30 md:pb-40 lg:pb-50">
      <div className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
        {/* About Me */}
        <section>
          <div className="flex items-center justify-center">
            <SectionHeader
              heading="My journey"
              subHeading="About Sagar"
              isAbout="true"
            />
          </div>
          <article>
            <h3 className="font-suisse-mono font-extrabold text-[14px] text-base text-text-grey opacity-70 ">
              How It All Began
            </h3>
            <p className="text-[14px] md:text-base text-text-light mt-3 leading-relaxed">
              {howItBegan}
            </p>
          </article>

          <article className="mt-10">
            <h3 className="font-suisse-mono text-[14px] font-extrabold text-base text-text-grey opacity-70 ">
              What I Do Now
            </h3>
            <p className="text-[14px] md:text-base text-text-light mt-3 leading-relaxed">
              I build modern web applications using <span className="highlight">React.js, JavaScript, and
              Tailwind CSS,</span> focusing on creating interfaces that are both
              beautiful and functional. From responsive layouts to seamless user
              interactions, I prioritize <span className="highlight">clean code, accessibility, and
              performance </span> in everything I create. I work with tools like <span className="highlight">Git, Figma, and VS Code </span> daily, and eager to expanding my skills
              into backend technologies to become a full-stack developer ready
              to tackle any challenge.
            </p>
          </article>
        </section>

        {/* Education */}
        <section className="mt-16 md:mt-20 lg:mt-24">
          <div>
            <SectionHeader
              heading="Progress"
              subHeading="The learning path that shaped me"
            />
          </div>
          <article>
            <Education />
          </article>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
