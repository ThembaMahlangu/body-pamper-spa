import Navbar from 'components/Navbar';
import { motion } from 'framer-motion';
import { homeAnimation } from 'animation';
import styled from 'styled-components';
import home from 'assets/bedcollage.jpg';
import React from 'react'
import Home from 'components/Home';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Portfolio from 'components/Portfolio';
import Testimonials from 'components/Testimonials';
import Video from 'components/Video';
import Milestones from 'components/Milestones';
import Blog from 'components/Blog';
import Maps from 'components/Maps';
import FloatingWhatsAppButton from 'components/FloatingButton';
import Promotions from 'components/Promotions';

function HomePage() {
  return (
    <motion.div>
        <Home/>
        <Blog/>
        <Promotions />
        <Maps/>
        <Milestones/>
        <Video/>
        <Footer/>
        <ScrollToTop/>
        <FloatingWhatsAppButton/>
    </motion.div>

    )
}

export default HomePage;