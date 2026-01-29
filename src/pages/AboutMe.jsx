import GitHub from "../components/GitHub";
import KnowMe from "../components/KnowMe";
import LifeBeyondCode from "../components/LifeBeyondCode";
import OnMyShelf from "../components/OnMyShelf";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen p-2 ">
      {/* <div className="pb-30 md:pb-40 lg:pb-50 border border-white "> */}
      <div className="pt-30 pb-30 rounded-4xl bg-bg-secondary mb-2">
        <KnowMe />
      </div>

      {/* <div className="rounded-4xl bg-bg-secondary pt-16 md:pt-20 lg:pt-28 pb-30 mb-2">
        <GitHub />
      </div> */}

      <div className="rounded-4xl bg-bg-secondary pt-16 md:pt-20 lg:pt-28 pb-30 mb-2">
        <LifeBeyondCode />
      </div>

      <div className="rounded-4xl bg-bg-secondary pt-16 md:pt-20 lg:pt-28 pb-30">
        <OnMyShelf />
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutMe;
