import Hero from "../sections/Hero";
import Project from "../sections/Project";
import TechStack from "../sections/TechStack";

const Home = () => {
  return (
    <main>
      <div className="w-full  p-2 mx-auto  ">
        <Hero />
        <Project />
        <TechStack />
      </div>
    </main>
  );
};

export default Home;
