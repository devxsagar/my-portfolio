import { useState } from "react";
import { email, footerLinks } from "../utils/constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClickButton = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
    }

    setTimeout(() => {
      setCopied(false);
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

        <div
          className="flex flex-col justify-between
        w-[calc(100%-30px)] xl:min-w-[1200px] xl:w-[1200px] min-h-[28rem] md:min-h-[38rem] lg:min-h-[40rem] mx-auto relative z-10"
        >
          {/* Top */}
          <div className="pt-1 md:pt-10 flex items-start justify-between  max-lg:flex-col max-lg:items-center max-lg:gap-15 relative z-10">
            <div className="flex flex-col">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
                Let's connect?
              </p>
            </div>
          </div>

          {/* Middle */}
          <div className="py-2 flex flex-col items-center gap-y-15">
            <div className="flex items-center justify-evenly md:justify-between max-md:gap-4 w-fit sm:w-md pl-7 pr-3 py-2 rounded-full bg-bg-black/90">
              <p className="text-sm md:text-lg font-suisse-light tracking-widest">
                {email}
              </p>
              <button
                className="text-center max-md:text-sm bg-blue w-25 h-10   md:w-35 md:h-15 rounded-full tracking-wider"
                onClick={handleEmailClickButton}
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="flex items-center gap-15 overflow-y-hidden px-5">
              {footerLinks.map((link, index) => {
                return <FooterLink key={index} {...link} />
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-[8px]  sm:text-xs">
            <p>Made with ☕ and 🎧 by Sagar Mitra</p>
            <p>Last updated October 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/** 

<div className="flex items-center justify-center max-md:mt-5">
    <div className="flex items-center gap-2 relative z-10">
        <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full animate-pulse" />
        <p className="text-base">Open to work and opportunities</p>
    </div>
</div>

 */
