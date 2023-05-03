import React, { useState } from 'react';
import styled from "styled-components";
import loadmore from "assets/loadmore.png";
import portfolio3 from "assets/cleannails.jpg"
import portfolio4 from "assets/chillers2.jpg"
import portfolio5 from "assets/bedwithcrystals.jpg"
import portfolio6 from "assets/djbongz.jpg"
import portfolio7 from "assets/womeninpink.jpg"
import portfolio8 from "assets/gift.jpg"
import portfolio9 from "assets/bedcollage.jpg"
import portfolio10 from "assets/chillers.jpg";
import portfolio11 from "assets/prettynails.jpg"
import portfolio12 from "assets/brightlight.jpg"
import portfolio13 from "assets/pedicure.jpg"
import portfolio14 from "assets/owner.jpg"
import portfolio15 from "assets/meetup.jpg"
import portfolio16 from "assets/hotstones.jpg"
import portfolio17 from "assets/ringnails.jpg"
import portfolio18 from "assets/widthnails.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimations } from "animation";

function Portfolio() {
  const [element, controls] = useScroll();
  const [showSecondGrid, setSecondGrid] = useState(false);

  const handleLoadMoreClick = () => {
    setSecondGrid(true);
  }

  const changeCursor = (e) => {
    e.target.style.cursor = "pointer";
  }

  return (
  <Section ref={element}>
    <div className="portfolio-title">
        <span>Gallery of Our Work</span>
    </div>
    <div className="grid">
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-one grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-two grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-three grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-four grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-five grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-six grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-seven grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-eight grid-box"></motion.div>
    </div>
    {/* {showSecondGrid && (
    <div className="grid">
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-nine grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-ten grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-eleven grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-twelve grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-thirteen grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-fourteen grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-fifteen grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-sixteen grid-box"></motion.div>
    </div>
    )} */}
    <div className="portfolio-more" onClick={handleLoadMoreClick} onMouseOver={changeCursor}>
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
    </div>
  </Section>
  );
}

const Section = styled.section`
min-height: 100vh;
padding-bottom: 2rem;
background-color: var(--secondary-color);
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
  "one two three four"
  "five six seven eight"
  "nine ten eleven twelve"
  "thirteen fourteen fifteen sixteen";
  .grid-box {
    height: 15rem;
    width: 100%;
    cursor: pointer;
    &:nth-of-type(1) {
      grid-area: one;
      background: url(${portfolio3}) no-repeat right center;
      background-size: cover;
      height: 100%;
      z-index: 10;
    }
    &:nth-of-type(2) {
      grid-area: two;
      background: url(${portfolio4}) no-repeat center center;
      background-size: cover;
      z-index: 10;
    }
    &:nth-of-type(3) {
      grid-area: three;
      background: url(${portfolio5}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(4) {
      grid-area: four;
      background: url(${portfolio10}) no-repeat center center;
      background-size: cover;
    }
    &:nth-of-type(5) {
      z-index: 10;
      grid-area: five;
      background: url(${portfolio7}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(6) {
      grid-area: six;
      background: url(${portfolio8}) no-repeat center center;
      background-size: cover;
      height: 100%;
    }
    &:nth-of-type(7) {
      grid-area: seven;
      background: url(${portfolio9}) no-repeat right center;
      background-size: cover;
      height: 100%;
    }
    &:nth-of-type(8) {
      grid-area: eight;
      background: url(${portfolio6}) no-repeat right center;
      background-size: cover;
      z-index: 10;
    }
    &:nth-of-type(9) {
      grid-area: nine;
      background: url(${portfolio11}) no-repeat right center;
      background-size: cover;
      height: 100%;
      z-index: 10;
    }
    &:nth-of-type(10) {
      grid-area: ten;
      background: url(${portfolio12}) no-repeat center center;
      background-size: cover;
      z-index: 10;
    }
    &:nth-of-type(11) {
      grid-area: eleven;
      background: url(${portfolio13}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(12) {
      grid-area: twelve;
      background: url(${portfolio14}) no-repeat center center;
      background-size: cover;
    }
    &:nth-of-type(13) {
      z-index: 10;
      grid-area: thirteen;
      background: url(${portfolio15}) no-repeat right center;
      background-size: cover;
    }
    &:nth-of-type(14) {
      grid-area: fourteen;
      background: url(${portfolio16}) no-repeat center center;
      background-size: cover;
      height: 100%;
    }
    &:nth-of-type(15) {
      grid-area: fifteen;
      background: url(${portfolio17}) no-repeat right center;
      background-size: cover;
      height: 100%;
    }
    &:nth-of-type(16) {
      grid-area: sixteen;
      background: url(${portfolio18}) no-repeat right center;
      background-size: cover;
      z-index: 10;
    }
  }
}
.portfolio-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0;
  span {
    color: #fff;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
}
.portfolio-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
  span {
    color: #fff;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .grid {
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight";
    .grid-box {
      height: 25rem !important;
    }
  }
}
`;

export default Portfolio