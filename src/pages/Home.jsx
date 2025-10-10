import Hero from "../sections/Hero";
import Project from "../sections/Project";
import TechStack from "../sections/TechStack";

const Home = () => {
  return (
    <main >
      <div className="w-full max-sm:px-[10px] max-md:px-[20px] xl:w-[1200px] mx-auto">
        <Hero />
        <Project />
        <TechStack />
      </div>
    </main>
  );
};

export default Home;
