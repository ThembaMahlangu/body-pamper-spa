import FloatingWhatsAppButton from 'components/FloatingButton';
import Footer from 'components/Footer';
import PricingTab from 'components/Pricing';
import PricingHero from 'components/Pricinghero';
import ScrollToTop from 'components/ScrollToTop';
import { motion } from 'framer-motion';
import React from 'react';

function Pricing() {
  return (
    <motion.div>
      <PricingHero/>
      <PricingTab/>
      <Footer/>
      <ScrollToTop/>
      <FloatingWhatsAppButton/>
    </motion.div>
  )
}

export default Pricing;