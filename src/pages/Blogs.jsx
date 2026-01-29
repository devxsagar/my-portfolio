import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { blogsInfo } from "../data/blogsInfo";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IconBook, IconCalendarWeekFilled } from "@tabler/icons-react";

const Blogs = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full min-h-screen p-2 ">
      <div className="w-full h-full min-h-screen bg-bg-secondary rounded-4xl ">
        <div className="max-sm:px-1 max-md:px-[20px] w-full max-w-7xl mx-auto pt-30 lg:pt-40 pb-30 md:pb-40 lg:pb-50"   >
          <SectionHeader
            heading="Blogs"
            subheading="Writing about what I learn and build"
          />

          <div className="px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {blogsInfo.map((blog) => {
                return (
                  <motion.div
                    key={blog.id}
                    initial="initial"
                    whileHover="hovered"
                    whileInView="inView"
                    className="cursor-pointer "
                  >
                    <Link to={blog.href} target="_blank" rel="noopener">
                      <div className="relative overflow-hidden rounded-xl">
                        {!loaded && (
                          <div className="absolute inset-0 shimmer rounded-xl" />
                        )}

                        <motion.img
                          src={blog.image}
                          alt={blog.title}
                          className={`w-full h-full object-cover ${
                            loaded ? "opacity-100" : "opacity-0"
                          }`}
                          loading="lazy"
                          onLoad={() => setLoaded(true)}
                          variants={{
                            initial: { scale: 1, filter: "blur(10px)" },
                            hovered: { scale: 1.05 },
                            inView: {
                              filter: "blur(0px)",
                              transition: {
                                duration: 0.5,
                                ease: "linear",
                              },
                            },
                          }}
                          transition={{ duration: 0.5, ease: "linear" }}
                        />
                      </div>
                      <div className="pt-2 px-2 flex items-center justify-between">
                        <p className="flex items-center gap-1.5 text-sm lg:text-base ">
                          <IconBook size={16} />
                          {blog.read}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm lg:text-base ">
                          <IconCalendarWeekFilled size={16} />
                          {blog.date}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
