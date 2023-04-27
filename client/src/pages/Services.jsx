import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import ServicesTab from 'components/Services';
import ServicesHero from 'components/Serviceshero';
import { motion } from 'framer-motion';
import React from 'react';

function Services() {
  return (
    <motion.div>
      <ServicesHero/>
      <ServicesTab/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default Services;