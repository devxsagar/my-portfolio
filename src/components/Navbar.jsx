import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { navLinks } from "../utils/constants";
import NavLink from "./NavLink";
import { logo } from "../data/images";
import { Menu, X } from "lucide-react";
import MobileNavLink from "./MobileNavLink";

const Navbar = () => {
  const [hideNav, setHideNav] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // if the latest is greater than previous and 200 px
    // then navbar will hide or else it will show
    if (latest > previous && latest > 200) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
      animate={hideNav ? "hidden" : "visible"}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="
      border border-border
      fixed top-8 md:top-5 left-1/2 -translate-x-1/2 rounded-2xl
      lg:rounded-3xl w-[calc(100%-60px)] xl:min-w-3xl xl:w-3xl min-h-12 
      flex items-center justify-between px-4 lg:px-3 lg:pl-8 py-3 z-15
      backdrop-blur-md"
    >
      {/* Logo  */}
      <Link
        to="/"
        className="relative z-20 text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-8 md:w-10 lg:w-12"
        />
      </Link>

      {/* Nav Links for Desktop */}
      <div className="text-sm lg:text-base flex items-center gap-2 lg:gap-6 font-semibold max-lg:hidden">
        {navLinks.map((link, index) => {
          return <NavLink key={index} {...link} />;
        })}
      </div>

      {/* Nav Links for Mobile & Tablet */}
      <div className="lg:hidden  flex items-center justify-center">
        <motion.span
          className="inline-block relative z-60"
          animate={{ rotate: isMenuClicked ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setIsMenuClicked((prev) => !prev)}
        >
          {isMenuClicked ? (
            <X className="md:w-12 md:h-8" />
          ) : (
            <Menu className="md:w-12 md:h-8" />
          )}
        </motion.span>

        {isMenuClicked && (
          <MobileNavLink
            position="right"
            items={navLinks}
            onClose={() => setIsMenuClicked(false)}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
