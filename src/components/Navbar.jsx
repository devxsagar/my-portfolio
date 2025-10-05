import React from "react";
import NavLink from "./NavLink";
import { logo } from "../data/images";


const Navbar = () => {

  const navLinks = [{name: "Projects", href: "/projects"}, {name: "Resume", href: "/"}]

  return (
    <nav className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] fixed top-5 left-1/2 -translate-x-1/2 rounded-4xl w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-12 flex items-center justify-between px-5 py-3 z-15">
      <h2 className="font-metamorphous text-lg md:text-xl lg:text-2xl xl:text-3xl">
        sm
      </h2>

      {/* Nav links */}
      <div className="text-sm gap-5 lg:text-lg flex lg:gap-8">
        {navLinks.map((link, index) => {
          return <NavLink key={index} link={link}/>
        })}
      </div>
    </nav>
  );
};

export default Navbar;
