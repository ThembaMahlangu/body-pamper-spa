import ContactForm from 'components/Contact';
import ContactHero from 'components/Contacthero';
import Footer from 'components/Footer';
import Maps from 'components/Maps';
import ScrollToTop from 'components/ScrollToTop';
import { motion } from 'framer-motion';
import React from 'react';

function Contact() {
  return (
    <motion.div>
      <ContactHero/>
      <ContactForm/>
      <Maps/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default Contact;