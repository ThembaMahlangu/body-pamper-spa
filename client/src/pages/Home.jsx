import { motion } from 'framer-motion';
import React from 'react'
import Home from 'components/Home';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Video from 'components/Video';
import Milestones from 'components/Milestones';
import Blog from 'components/Blog';
import Maps from 'components/Maps';
import FloatingWhatsAppButton from 'components/FloatingButton';
import Promotions from 'components/Promotions';
import Special from 'components/Special';

function HomePage() {
  return (
    <motion.div>
        <Home/>
        <Special />
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