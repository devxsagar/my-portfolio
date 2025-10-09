import { Link } from "react-router-dom";
import Zoop from "./Zoop";
import { footerLinks } from "../utils/constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="relative min-h-[30rem] bg-bg-black text-text-white py-10 overflow-hidden "
      initial={{ opacity: 0, height: 0 }}
      whileInView={{
        opacity: 1,
        height: "30rem",
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />

      <div className="flex flex-col justify-between w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] max-md:min-h-[20rem] max-lg:min-h-[18rem] min-h-[20rem] mx-auto relative z-10">
        {/* top */}
        <div className="pt-10 flex items-start justify-between max-lg:flex-col-reverse max-lg:items-center  max-md:min-h-[20rem] max-lg:min-h-[18rem] relative z-10">
          <div className="flex items-center gap-2 relative z-10">
            <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full animate-pulse" />
            <p className="text-base">Open to work and opportunities</p>
          </div>
          <div className="flex flex-col gap-5 relative z-10">
            {footerLinks.map((obj, index) => {
              return (
                <Link
                  key={index}
                  to={obj.href}
                  className="text-xl text-text-grey hover:text-text-white h-fit hover-transition"
                >
                  <div className="flex items-center justify-between w-32 h-fit">
                    <Zoop text={obj.link} />
                    <ArrowUpRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 relative z-10">
            <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full animate-pulse" />
            <p className="text-base">Open to work and opportunities</p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -bottom-11 sm:-bottom-23 md:-bottom-25.5 lg:-bottom-34 xl:-bottom-40 text-[4rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-suisse-medium tracking-wide text-text-grey"
        initial={{ y: "20%", scale: 0.8, filter: "blur(10px)" }}
        whileInView={{
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        devxsagar
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
