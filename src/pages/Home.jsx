import Navbar from 'components/Navbar';
import { motion } from 'framer-motion';
import { homeAnimation } from 'animation';
import styled from 'styled-components';
import home from 'assets/home.png';
import React from 'react'
import Home from 'components/Home';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

function HomePage() {
  return (
    <motion.div>
        <Home/>
        <Footer/>
        <ScrollToTop/>
    </motion.div>

    )
}

export default HomePage;