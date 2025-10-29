import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navLinks } from "../utils/constants";
import NavLink from "./NavLink";
import { logo } from "../data/images";
import { Link } from "react-router-dom";
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
      fixed top-5 left-1/2 -translate-x-1/2 
      rounded-4xl w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-12 
      flex items-center justify-between px-4 lg:pl-10 py-3 z-15
      backdrop-blur-md
      "
    >
      {/* Logo  */}
      <Link
        to="/"
        className="relative z-20 font-metamorphous text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-5 md:w-7 lg:w-8"
        />
      </Link>

      {/* Nav Links for Desktop */}
      <div className="text-sm lg:text-base flex items-center gap-2 lg:gap-6 font-suisse-medium">
        {navLinks.map((link, index) => {
          return <NavLink key={index} link={link} />;
        })}
      </div>

      {/* Nav Links for Mobile & Tablet */}
      <div
        className="lg:hidden relative"
        onClick={() => setIsMenuClicked((prev) => !prev)}
      >
        {isMenuClicked ? (
          <motion.span
            className="inline-block"
            initial={{ rotate: 0 }}
            whileTap={{
              rotate: 180,
              transition: { duration: 0.1, ease: "linear" },
            }}
          >
            <X className="md:w-12 md:h-8" />
          </motion.span>
        ) : (
          <motion.span
            className="inline-block"
            initial={{ rotate: 0 }}
            whileTap={{
              rotate: -180,
              transition: { duration: 0.1, ease: "linear" },
            }}
          >
            <Menu className="md:w-12 md:h-8" />
          </motion.span>
        )}
        {isMenuClicked && <MobileNavLink />}
      </div>
    </motion.nav>
  );
};

export default Navbar;
