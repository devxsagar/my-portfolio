
const SectionHeader = ({heading, subHeading}) => {
  return (
    <header className="text-center mb-10  md:mb-12">
      <h2 className=" text-2xl sm:text-3xl md:text-[32px] lg:text-4xl font-suisse-medium">
        {heading}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-text-secondary mt-2">
        {subHeading}
      </p>
    </header>
  );
};

export default SectionHeader;
