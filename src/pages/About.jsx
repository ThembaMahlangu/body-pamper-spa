import AboutHero from 'components/Abouthero';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div>
      <AboutHero/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default About;