import { motion } from "motion/react";
import { asterisk } from "../data/images";
import { ArrowLeft } from "lucide-react";

const WorkInProgress = () => {
  return (
    <div className="w-full flex flex-col  select-none px-20 sm:px-30 md:px-45 lg:px-42 xl:px-45">
      {/* <div className="mb-15">
        <button className="flex items-center px-4 py-2 w-fit font-medium tracking-wide text-white transition-colors duration-300 transform bg-[#f44336] rounded-lg hover:bg-[#ff5338] focus:outline-none">
          <ArrowLeft className="w-5 h-5 mx-1" />
          Back to home
        </button>
      </div> */}
      <p
        className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        style={{ lineHeight: 1 }}
      >
        Ideas
      </p>
      <p
        className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
        style={{ lineHeight: 1.5 }}
      >
        in pr
        <span className="inline-block">
          <motion.img
            className="w-10 sm:w-14 md:w-17 lg:w-20 xl:w-24"
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              transition: { duration: 10, repeat: Infinity, ease: "linear" },
            }}
            src={asterisk}
            alt="asterisk-icon"
          />
        </span>
        gress
      </p>
    </div>
  );
};

export default WorkInProgress;
