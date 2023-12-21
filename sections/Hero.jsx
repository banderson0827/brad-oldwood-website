'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} mt-64 px-10`} id="home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative -mt-60 md:-mt-40 lg:-mt-48 z-10">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex justify-center items-center"
        >
          <Image
            src="/oldwood-logo.png"
            alt="logo"
            width={1000}
            height={1000}
            quality={100}
            className="sm:w-[800px] w-[1000px] sm:h-[800px] h-[1000px] -mb-60 md:-mb-32 object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:mt-6 mt-4"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/hero-temp.jpeg"
          alt="hero cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[40px] pr-[40px] relative z-10">
            <img
              src="/explore-stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
