
const TimeLine = ({ year, instituteName, degree }) => {
  return (
    <div className="flex gap-x-3">
      {/* Left Content */}
      <div className="w-25 min-w-25 text-end">
        <span className="text-xs md:text-sm lg:text-base text-text-secondary">{year}</span>
      </div>
      {/* End Left Content */}

      {/* Icon */}
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      {/* End Icon */}

      {/* Right Content */}
      <div className="grow pt-0.5 pb-8">
        <h3 className="flex gap-x-1.5 font-semibold text-text-primary text-sm md:text-base lg:text-lg">
          
          {instituteName}
        </h3>
        <p className="mt-1 text-xs md:text-sm lg:text-base text-text-secondary leading-relaxed">
          {degree}
        </p>
      </div>
      {/* End Right Content */}
    </div>
  );
};

export default TimeLine;
