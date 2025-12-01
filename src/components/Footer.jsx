import { useState } from "react";
import { motion } from "motion/react";
import { email, footerLinks } from "../utils/constants";
import FooterLink from "./FooterLink";
import confetti from "canvas-confetti";
import RevealTextEffect from "./RevealTextEffect";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClickButton = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      confetti({
        particleCount: 100,
        spread: 300,
        startVelocity: 15,
        scalar: 0.9,
      });
    }

    setTimeout(() => {
      setCopied(false);
      // confetti.reset()
    }, 3000);
  };

  return (
    <footer className="text-text-primary bg-bg-secondary rounded-t-4xl overflow-hidden">
      <div className="relative pt-8 pb-5 lg:py-10 ">
        {/* Background Pattern */}

        <div
          className="flex flex-col justify-between
        w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-[25rem] md:min-h-[28rem] mx-auto relative z-50"
        >
          {/* Top */}
          <div className="flex items-center justify-center mt-5">
            <h2 className="text-3xl md:text-5xl font-suisse-medium text-center tracking-tight">
              <RevealTextEffect text="Let's get in touch!" />
            </h2>
          </div>

          {/* Middle */}
          <div className="pt-10 md:pt-10 flex flex-col justify-center items-center gap-y-15">
            <motion.div
              className="relative flex items-center justify-evenly md:justify-between max-md:gap-4 w-fit sm:w-lg pl-7 pr-3 py-2 rounded-full bg-bg-primary shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm md:text-lg font-suisse-book opacity-60 tracking-widest pl-2  md:pl-5">
                {email}
              </p>
              <button
                className="text-center max-md:text-sm bg-blue shadow-lg  w-25 h-10 md:w-35 md:h-15 rounded-full tracking-wider text-primary cursor-pointer text-white"
                onClick={handleEmailClickButton}
              >
                {copied ? "Copied" : "Copy Email"}
              </button>
            </motion.div>

            <motion.div className="flex items-center gap-15 overflow-y-hidden px-5">
              {footerLinks.map((link, index) => {
                return <FooterLink key={index} {...link} />;
              })}
            </motion.div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-[8px]  sm:text-xs">
            <p>Made with ☕ and 🎧 by Sagar Mitra </p>
            <p>Last updated December 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
