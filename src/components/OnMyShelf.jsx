import React from "react";
import SectionHeader from "./SectionHeader";
import { books } from "../data/images";
import Book from "./Book";

const OnMyShelf = () => {
  return (
    <section className="w-full xl:w-[1200px] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[5rem] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader
          heading="On My Shelf"
          subheading="What I've been read(ing)"
        />
      </div>

      <div
        className=" 
          w-full
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
          gap-6 sm:gap-8 place-items-center"
      >
        {books.map((book, index) => {
          return <Book key={index} cover={book} />;
        })}
      </div>
    </section>
  );
};

export default OnMyShelf;
