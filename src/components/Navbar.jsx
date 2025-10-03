import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border border-border fixed top-5 left-1/2 -translate-x-1/2 rounded-4xl w-[calc(100%-30px)] xl:w-[1200px] min-h-12 flex items-center justify-between px-5">
      <h2 className="font-metamorphous text-3xl">sm.</h2>

      {/* Nav links */}
      <div className="text-sm gap-5 lg:text-base flex lg:gap-8">
        <Link to="/projects">Projects</Link>
        <Link>Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
