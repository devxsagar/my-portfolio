import React from "react";
import SectionHeader from "./SectionHeader";

const KnowMe = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <SectionHeader
          heading="About Me"
          subheading="Still learning, always building"
        />
      </div>

      <article>
        <h3 className="font-space-grotesk font-extrabold text-[14px] text-base text-text-grey opacity-70 mt-10">
          How It All Began
        </h3>
        <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          Hey, I’m Sagar, a software engineer currently learning and working in
          frontend development. My journey into tech began during my B.Tech in
          Electrical Engineering. As part of our curriculum, we had a few
          computer science subjects, and that’s where my interest in technology
          started to grow. Curious and excited, I began exploring programming
          and web development - learning through YouTube tutorials, online
          courses, and lots of hands-on practice. What started as curiosity soon
          turned into a real passion for creating digital experiences, and
          that’s how my journey as a developer began.
        </p>
      </article>

      <article>
        <h3 className="font-space-grotesk font-extrabold text-[14px] text-base text-text-grey opacity-70 mt-10">
          What I Do Now
        </h3>
        <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          I build modern web applications using{" "}
          <span className="highlight">
            React, JavaScript, and Tailwind CSS,
          </span>{" "}
          focusing on creating interfaces that are both beautiful and
          functional. From responsive layouts to seamless user interactions, I
          prioritize{" "}
          <span className="highlight">
            clean code, accessibility, and performance
          </span>{" "}
          in everything I create. I work with{" "}
          <span className="highlight">Git, Figma, and VS Code</span> daily and
          am eager to expand into backend technologies to become a full-stack
          developer ready to tackle any challenge.
        </p>
      </article>
    </section>
  );
};

export default KnowMe;
