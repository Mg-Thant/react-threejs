import React from "react";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
  ComputersCanvas,
} from "./index";
import { styles } from "../style";

const Hero = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div
            className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff] z-5" />
              <div
                class="w-1 -mt-3
                border-l-[5px] border-l-transparent
                border-t-[300px] border-t-[#915eff]
                border-r-[1px] border-r-transparent"
              ></div>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className="text-[#915eff]">Heron</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2`}>
                I develop visuals, user <br className="sm:block hidden" />{" "}
                interfaces and web applications
              </p>
            </div>
          </div>
          <ComputersCanvas />
        </section>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Hero;
