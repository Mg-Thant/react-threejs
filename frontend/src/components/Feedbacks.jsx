import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      className="text-white bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      variants={fadeIn("", "spring", index * 1, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="tracking-wider text-[18px] font-medium">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="font-semibold text-[16px]">
              <span className="bg-gradient-to-r from-blue-300 to-blue-800 inline-block bg-clip-text text-transparent">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[13px]">
              {designation} of {company}
            </p>
          </div>
          <img 
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h3 className={styles.sectionHeadText}>Testimonails</h3>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, i) => (
          <FeedbackCard key={i} index={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
