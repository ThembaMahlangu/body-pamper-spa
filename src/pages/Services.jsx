import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import ServicesHero from 'components/Serviceshero';
import { motion } from 'framer-motion';
import React from 'react';

function Services() {
  return (
    <motion.div>
      <ServicesHero/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default Services;