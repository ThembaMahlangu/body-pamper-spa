import AboutHero from 'components/Abouthero';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import React from 'react';
import { motion } from 'framer-motion';
import Skills from 'components/Skills';
import StyledAboutSection from 'components/AboutUsInfo';

function About() {
  return (
    <motion.div>
      <AboutHero/>
      {/* <StyledAboutSection
        title="Our Mission"
        paragraph="Body Pamper Spa is a leading beauty salon in the city.
        We offer a wide range of beauty services to our clients.
        We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients."
        image="https://bodypampersalon.co.za/wp-content/uploads/2018/10/slide3.png"
      />
      <StyledAboutSection
        title="Our Vision"
        paragraph="Our vision is to be the best beauty salon in the city. We want to provide our clients with the best services and make them feel beautiful. We are committed to providing our clients with the best services and make them feel beautiful."
        image="https://bodypampersalon.co.za/wp-content/uploads/2018/10/slide3.png"
      />
      <StyledAboutSection
        title="Our Values"
        paragraph="We are committed to providing our clients with the best services and make them feel beautiful. We are committed to providing our clients with the best services and make them feel beautiful. We are committed to providing our clients with the best services and make them feel beautiful."
        image="https://bodypampersalon.co.za/wp-content/uploads/2018/10/slide3.png"
      /> */}
      <Skills/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  )
}

export default About;