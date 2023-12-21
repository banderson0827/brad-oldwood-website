'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-primary-blue opacity-10" />

        <div className="items-center flex-row gap-4">
          <h4 className="font-extrabold text-[24px] text-primary-darkbrown">Big Johnson's Old Wood</h4>
          <p className="font-normal text-[14px] text-primary-darkbrown opacity-50">
            Copyright © 2023 Big Johnson's Old Wood. All rights reserved. Developed by <a href="https://github.com/banderson0827" className="text-primary-lightbrown underline">Brett Anderson</a>.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
