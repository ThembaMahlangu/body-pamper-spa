import Footer from 'components/Footer';
import GalleryHero from 'components/GalleryHero';
import Portfolio from 'components/Portfolio';
import ScrollToTop from 'components/ScrollToTop';
import { motion } from 'framer-motion';
import React from 'react';

function OurWork() {
  return (
    <motion.div>
      <GalleryHero/>
      <Portfolio/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default OurWork;