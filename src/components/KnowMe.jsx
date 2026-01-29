import React from "react";
import SectionHeader from "./SectionHeader";
import { photoBentoThirteen } from "../data/images";
import RevealTextEffect from "./RevealTextEffect";
import EncryptedText from "./EncryptedText";

const KnowMe = () => {
  return (
    <section className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug md:leading-tight">
        <EncryptedText
          text="I’m not just a developer — I’m a user too. That’s why I build products
        I’d genuinely want to use myself."
        duration={2}
        />
      </h2>

      <img
        src={photoBentoThirteen}
        alt="cover-photo"
        className="mt-12 sm:mt-16 lg:mt-20 w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
      />

      <article>
        <h3 className="font-jetbrains font-extrabold text-[14px] text-base text-text-grey opacity-70 mt-10">
          How It All Began
        </h3>
        <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          Hey, I’m Sagar, a software engineer from India. My journey into tech
          began during my B.Tech in Electrical Engineering. As part of our
          curriculum, we had a few computer science subjects, and that’s where
          my interest in technology started to grow. Curious and excited, I
          began exploring programming and web development - learning through
          YouTube tutorials, online courses, and lots of hands-on practice. What
          started as curiosity soon turned into a real passion for creating
          digital experiences, and that’s how my journey as a developer began.
        </p>
      </article>

      <article>
        <h3 className="font-jetbrains font-extrabold text-[14px] text-base text-text-grey opacity-70 mt-10">
          What I Do Now
        </h3>
        <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          I build modern web applications using React, Redux Toolkit,
          JavaScript, and Tailwind CSS, with a strong focus on clean UI, smooth
          interactions, and performance. On the backend, I work with Node.js,
          Express, and MongoDB to build secure APIs, handle authentication, and
          manage data effectively. I care deeply about clean code,
          accessibility, and real-world usability.
        </p>

        <p className="text-[14px] md:text-base text-text-secondary-alt mt-3 tracking-wide leading-relaxed">
          Open to work and excited about new opportunities to grow as a
          <span className="font-caveat font-semibold text-blue text-lg md:text-xl">
            {" "}
            full-stack developer
          </span>
          .
        </p>
      </article>
    </section>
  );
};

export default KnowMe;
