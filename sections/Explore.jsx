'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/Carousel';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const images1 = [
  '/before-1.jpeg',
  '/before-2.jpeg',
  '/mid-1.jpeg',
  '/mid-2.jpeg',
  '/installed-1.jpeg',
  '/installed-2.jpeg',
];
const images2 = [
  '/before-3.jpeg',
  '/mid-3.jpeg',
];
const images3 = [
  '/oldwood-1.jpeg',
  '/oldwood-2.jpeg',
  '/double-mantle.jpeg',
];
const images4 = [
  '/shell-table.jpeg',
  '/greentable-1.jpeg',
  '/greentable-2.jpeg',
  '/greentable-3.jpeg',
  '/greentable-4.jpeg',
  '/woodstock-1.jpeg',
  '/woodstock-2.jpeg',
  '/bartop.jpeg',
  '/bluetable.jpeg',
  '/credenza-1.jpg',
  '/credenza-2.jpg',
  '/credenza-3.jpg',
  '/credenza-4.jpg',
  '/credenza-5.jpg',
  '/credenza-6.jpg',
  '/dining-table.jpeg',
  '/small-table-1.jpeg',
  '/small-table-2.jpeg',
];
const images5 = [
  '/round-pre-1.jpg',
  '/round-pre-2.jpg',
  '/round-pre-3.jpg',
  '/round-pre-4.jpg',
  '/round-pre-5.jpg',
  '/round-pre-6.jpg',
  '/round-start-2.jpg',
  '/round-start-1.jpg',
  '/round-start-4.jpg',
  '/round-complete-3.jpg',
  '/round-complete-1.jpg',
  '/round-final.jpeg',
];

const Explore = () => (
  <section className={`${styles.paddings} mb-30`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
    >
      <TypingText title="| This is the bread and butter!" textStyles="text-center" />
      <TitleText title={<>View our work </>} textStyles="text-center" />
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:w-[600px] md:mt-6 mt-4 flex flex-col items-center"
      >
        <p className="text-center text-white text-2xl mb-2 mt-2">See the whole process...</p>
        <ImageCarousel images={images1} />
        <div className="h-[175px] w-full items-center justify-center flex">
          <p className="text-center text-white text-2xl mb-2 mt-2">...from start...</p>
        </div>
        <ImageCarousel images={images2} />
        <div className="h-[175px] w-full items-center justify-center flex">
          <p className="text-center text-white text-2xl mb-2 mt-2">...to finish!</p>
        </div>
        <ImageCarousel images={images3} />
        <div className="h-[175px] w-full items-center justify-center flex" />
        <ImageCarousel images={images5} />
        <div className="h-[175px] w-full items-center justify-center flex">
          <p className="text-center text-white text-2xl mb-2 mt-2">Assorted Gallery</p>
        </div>
        <ImageCarousel images={images4} />
      </motion.div>
    </motion.div>
  </section>
);

export default Explore;
