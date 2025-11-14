import React from "react";
import SectionHeader from "../components/SectionHeader";
import { blogsInfo } from "../data/blogsInfo";
import { BookOpen, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="w-full max-sm:px-[10px] max-md:px-[20px] xl:w-[1200px] mx-auto pt-40 pb-30 md:pb-40 lg:pb-50">
      <SectionHeader heading="Blogs" />

      <div className="px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {blogsInfo.map((blog) => {
            return (
              <motion.div
                key={blog.id}
                initial="initial"
                whileHover="hovered"
                className="cursor-pointer "
              >
                <Link to={blog.href} target="_blank">
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      variants={{
                        initial: { scale: 1 },
                        hovered: { scale: 1.05 },
                      }}
                      transition={{ duration: 0.5, ease: "linear" }}
                    />
                  </div>
                  <div className="pt-2 px-2 flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-sm lg:text-base ">
                      <BookOpen size={16} />
                      {blog.read}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm lg:text-base ">
                      <Calendar size={16} />
                      {blog.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
