import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoAnimations } from "animation";
import { useScroll } from "./useScroll";

function Maps() {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <div className="background"></div>
      <motion.div className="video"
      variants={videoAnimations}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
      <h2 className='section-title'>Find Us On Maps</h2>
        <iframe 
          title="Body Pamper on Google Maps"  
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.807643068928!2d27.900340574872487!3d-32.98247641528644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66e0391afd04bb%3A0x79870c7ed0f735a8!2sBody%20Pamper%20Salon!5e0!3m2!1sen!2sza!4v1682528334993!5m2!1sen!2sza" 
          width="800" 
          height="450" 
          style={{borderRadius: 5, border: 100}}
          allowFullScreen={true}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
background-color: var(--secondary-color);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
.video {
  z-index: 10;
}
.section-title {
  color: var(--primary-color);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  height: 100%;
  padding: 6rem 2rem;
  .video {
    iframe {
      width: 80vw;
      height: 10rem;
    }
  }
}
`;

export default Maps;