import { motion } from "framer-motion";

import { styles } from "../../style";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span scroll-smooth" id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
