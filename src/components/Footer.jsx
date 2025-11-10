import { useState } from "react";
import { motion } from "motion/react";
import { email, footerLinks } from "../utils/constants";
import FooterLink from "./FooterLink";
import confetti from "canvas-confetti";

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
    <footer className="text-text-white">
      <div className="relative pt-8 pb-5 lg:py-10">
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

        <div className="absolute inset-0 z-50" />

        <div
          className="flex flex-col justify-between
        w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-[20rem] md:min-h-[25rem] mx-auto relative z-50"
        >
          {/* Top */}
          <div className="pt-1 md:pt-10 flex flex-col justify-center items-center gap-y-15">
            <motion.div
              className="flex items-center justify-evenly md:justify-between max-md:gap-4 w-fit sm:w-md pl-7 pr-3 py-2 rounded-full bg-bg-black/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm md:text-lg font-suisse-book opacity-60 tracking-widest">
                {email}
              </p>
              <button
                className="text-center max-md:text-sm bg-blue w-25 h-10   md:w-35 md:h-15 rounded-full tracking-wider"
                onClick={handleEmailClickButton}
              >
                {copied ? "Copied 🎉" : "Copy Email"}
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-15 overflow-y-hidden px-5"
             
            >
              {footerLinks.map((link, index) => {
                return <FooterLink key={index} {...link} />;
              })}
            </motion.div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-[8px]  sm:text-xs">
            <p>Made with ☕ and 🎧 by Sagar Mitra</p>
            <p>Last updated November 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
