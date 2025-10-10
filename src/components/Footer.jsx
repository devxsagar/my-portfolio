import { motion } from "motion/react";
import { footerLinks, quickLinks } from "../utils/constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer
      initial="initial"
      whileInView="inView"
      className="relative  text-text-white pt-8 pb-5 lg:py-10  overflow-hidden "
    >
      {/* Background Pattern */}
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

      <div
        className="flex flex-col justify-between
        w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-[28rem] md:min-h-[38rem] lg:min-h-[40rem] mx-auto relative z-10"
      >
        {/* top */}
        <div className="pt-1 md:pt-10 flex items-start justify-between  max-lg:flex-col max-lg:items-center max-lg:gap-15 relative z-10">
          <div className="flex flex-col">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
              <span className="text-text-grey">Let's</span> Connect!
            </p>
          </div>

          <div className="flex gap-8 md:gap-12">
            <div>
              <p className="text-start text-[10px] md:text-xs text-text-grey mb-1.5 tracking-wider">
                (Quick links)
              </p>
              <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 relative z-10">
                {quickLinks.map((obj, index) => {
                  return <FooterLink key={index} {...obj} />;
                })}
              </div>
            </div>
            <div>
              <p className="text-start text-[10px] md:text-xs text-text-grey mb-1.5 tracking-wider">
                (Social links)
              </p>
              <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3 relative z-10">
                {footerLinks.map((obj, index) => {
                  return <FooterLink key={index} {...obj} social="true" />;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Big Text */}
        <motion.div
          className="mx-auto text-[4rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-suisse-medium opacity-10"
          initial={{ letterSpacing: "-0.1em" }}
          whileInView={{
            letterSpacing: "0.025em",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          devxsagar
        </motion.div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[8px]  sm:text-xs">
          <p>Made with ☕ and ❤️ by Sagar Mitra</p>
          <p>Last updated October 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/** 
<motion.div
        className="absolute left-1/2 -translate-x-1/2 
        -bottom-11 sm:-bottom-23 md:-bottom-25.5 lg:-bottom-34 xl:-bottom-10   
        text-[4rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-suisse-medium tracking-wide opacity-10 "
        initial={{ y: "20%", scale: 0.8, filter: "blur(10px)" }}
        whileInView={{
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
></motion.div>
 */

/**

<div className="flex items-center justify-center max-md:mt-5">
    <div className="flex items-center gap-2 relative z-10">
        <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full animate-pulse" />
        <p className="text-base">Open to work and opportunities</p>
    </div>
</div>

 */
