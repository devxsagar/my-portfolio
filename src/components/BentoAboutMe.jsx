import { briefcase, hello, location, pfp } from "../data/images";

const BentoAboutMe = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {/* Item 1 */}
      <div className="bg-indigo-100 rounded-2xl px-6 py-10 flex items-center justify-center order-1 sm:col-span-2 lg:col-span-1">
        <h2 className="text-4xl sm:text-5xl font-suisse-medium tracking-wide leading-14 text-center sm:text-left">
          <span className="text-blue font-caveat text-5xl">Hello,</span> I'm{" "}
          <br /> Sagar{" "}
          <img src={hello} alt="waving-icon" className="w-16 sm:w-20 inline" />
        </h2>
      </div>

      {/* Item 2 */}
      <div className="bg-blue-100 rounded-2xl p-6 order-2 sm:col-span-2 lg:col-span-2">
        <h3 className="font-suisse-mono text-[14px] font-extrabold text-base text-text-grey opacity-70">
          What I Do
        </h3>
        <p className="text-[14px] md:text-base font-suisse-regular text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          I build modern web applications using{" "}
          <span className="highlight">
            React.js, JavaScript, and Tailwind CSS,
          </span>{" "}
          focusing on creating interfaces that are both beautiful and
          functional. From responsive layouts to seamless user interactions, I
          prioritize{" "}
          <span className="highlight">
            clean code, accessibility, and performance
          </span>{" "}
          in everything I create. I work with{" "}
          <span className="highlight">Git, Figma, and VS Code</span> daily and
          am eager to expand into backend technologies to become a full-stack
          developer ready to tackle any challenge.
        </p>
      </div>

      {/* Item 3 */}
      <div className="bg-purple-100 rounded-2xl p-6 flex items-center justify-center order-3 sm:col-span-2 lg:col-span-1 lg:row-span-3">
        <img
          src={pfp}
          alt="profile-pic"
          className="rounded-xl max-w-[250px] sm:max-w-[300px] w-full h-auto"
        />
      </div>

      {/* Item 4 */}
      <div className="bg-pink-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center order-4">
        <img
          src={briefcase}
          alt="location-icon"
          className="w-16 sm:w-20"
          loading="lazy"
        />
        <h3 className="text-base sm:text-lg mt-4">
          Open to exciting <span className="highlight">opportunities</span> and
          ready to <span className="highlight">relocate</span> if needed.
        </h3>
      </div>

      {/* Item 5 */}
      <div className="bg-[#FFF7E0] rounded-2xl p-6 flex flex-col gap-2 items-center justify-center text-center order-5">
        <img
          src={location}
          alt="location-icon"
          className="w-24 -mt-6 sm:-mt-10"
          loading="lazy"
        />
        <h3 className="text-xl sm:text-2xl font-suisse-regular -mt-4">
          Kolkata, IN
        </h3>
      </div>

      {/* Item 6 */}
      <div className="bg-green-100 rounded-2xl p-6 order-6 sm:col-span-2 lg:col-span-2 lg:row-span-2">
        <h3 className="font-suisse-mono text-[14px] font-extrabold text-base text-text-grey opacity-70">
          Education
        </h3>
        <div className="mt-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] md:text-base font-suisse-regular text-text-secondary-alt font-semibold tracking-wide leading-relaxed">
              B.P. Poddar Institute of Management & Technology
            </p>
            <span className="text-text-secondary">BTech (EE)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] md:text-base font-suisse-regular text-text-secondary-alt font-semibold tracking-wide leading-relaxed">
              Gaighata Government Polytechnic
            </p>
            <span className="text-text-secondary">Diploma (EE)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] md:text-base font-suisse-regular text-text-secondary-alt font-semibold tracking-wide leading-relaxed">
              Rajballavpur High School
            </p>
            <span className="text-text-secondary">
              Secondary & Higher Secondary
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoAboutMe;
