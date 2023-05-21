import React from 'react';
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsBehance, BsInstagram, BsLinkedin, BsGoogle, BsTiktok } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { footerTextAnimation } from "animation";

function Footer() {
  const [element, controls] = useScroll();
  const navigateToFacebook = () => {
    window.location.href = "https://www.facebook.com/BodyPamperSalon";
  }

  const navigateToTiktok = () => {
    window.location.href = "https://www.tiktok.com/@bodypampersalon";
  }

  const navigateToInstagram = () => {
    window.location.href = "https://www.instagram.com/explore/locations/802676039/body-pamper-salon/";
  }
  return (
    <Foot ref={element}>
      <motion.span
      variants={footerTextAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
      >
        &copy; Body Pamper Spa 2023

        &nbsp;|&nbsp;
        
        Powered by <a href="https://wa.me/+27769360246">AsyncFam</a>
      </motion.span>
      <motion.div className="footer__social__icons"
      variants={footerTextAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}  
      >
        <BsFacebook onClick={navigateToFacebook} />
        <BsTiktok onClick={navigateToTiktok}/>
        <BsInstagram onClick={navigateToInstagram} />
      </motion.div>
    </Foot>
  )
}

const Foot = styled(motion.footer)`
background-color: var(--primary-color);
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5rem 10rem;
.footer__social__icons {
  display: flex;
  gap: 2rem;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
`;

export default Footer
