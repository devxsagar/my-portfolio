import React from "react";
import SectionHeader from "./SectionHeader";
import { GitHubCalendar } from "react-github-calendar";

const GitHub = () => {
  return (
    <section className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
      <SectionHeader
        heading="The Build Log"
        subheading="Ongoing work and experimentation"
      />

      <div className="flex items-center justify-center">
        <GitHubCalendar username="devxsagar" blockLabel="Commit" colorScheme="light" />
      </div>
    </section>
  );
};

export default GitHub;
