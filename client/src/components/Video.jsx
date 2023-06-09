import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoAnimations } from "animation";
import { useScroll } from "./useScroll";

function Video() {
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
      <h2 className='section-title'>Body Pamper Media</h2>
      <iframe 
        width="853" 
        height="480" 
        src="https://www.youtube.com/embed/4YlrC6ANrSE"
        title="East London&#39;s Finest Spa || Body Pamper Spa &amp; Salon"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
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

export default Video