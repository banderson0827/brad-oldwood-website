'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Allow us to introduce ourselves." textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-primary-lightbrown"
      >
        Welcome to
        <span className="font-extrabold text-primary-darkbrown"> Big Johnson's Old Wood</span>
        , where
        <span className="font-extrabold text-primary-darkbrown"> craftmanship </span>
        meets
        <span className="font-extrabold text-primary-darkbrown"> history</span>
        . We specialize in transforming well-maintained,
        <span className="font-extrabold text-primary-darkbrown"> aged wood slabs </span>
        into
        <span className="font-extrabold text-primary-darkbrown"> exquisite custom pieces</span>
        . Our passion lies in creating unique
        <span className="font-extrabold text-primary-darkbrown"> tables, bar tops, mantles, and more</span>
        , each telling a story through the grain and
        <span className="font-extrabold text-primary-darkbrown"> character of the wood</span>
        . With a commitment to preserving the legacy of these 
        <span className="font-extrabold text-primary-darkbrown"> timeless materials</span>
        , our skilled artisans bring
        <span className="font-extrabold text-primary-darkbrown"> decades of expertise </span>
        to every creation. At Big Johnson's Old Wood, we blend
        <span className="font-extrabold text-primary-darkbrown"> tradition </span>
        with
        <span className="font-extrabold text-primary-darkbrown"> innovation</span>
        , ensuring that each
        <span className="font-extrabold text-primary-darkbrown"> bespoke piece </span>
        not only
        <span className="font-extrabold text-primary-darkbrown"> enriches your space </span>
        but becomes a
        <span className="font-extrabold text-primary-darkbrown"> cherished part of your family's story</span>
        .
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
