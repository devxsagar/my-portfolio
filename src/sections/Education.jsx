import { motion } from "motion/react";
import TimeLine from "../components/TimeLine";
import { educationDetails } from "../utils/constants";

const Education = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {educationDetails.map((edu, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <TimeLine {...edu} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Education;
