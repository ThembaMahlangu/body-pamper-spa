import React from 'react';
import styled from "styled-components";
import play from "assets/play.png";
import pic1 from "assets/pedicure.jpg";
import pic2 from "assets/womeninpink.jpg";
import pic3 from "assets/brightlight.jpg";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
  {
    title:"Pedicure",
    type: "Nails",
    description: "We provide the best pedicure in town, be sure to check out our latest offering when it comes to prices",
    image: pic1
  },
  {
    title:"Massage",
    type: "Relax",
    description: "Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
    image: pic2
  },
  {
    title:"Facial",
    type: "Face",
    description: "Keep your skin looking younger and softer, Our spa treatment is meant to provide you with the best.",
    image: pic3
  },
];

  const navigateToGallery = () => {
    window.location.href = "/gallery";
  }
  
  return <Section ref={element}>
    <Title value="Featured" />
    <div className="blogs">
        {blogsData.map(({ title, type, description, image }) => {
          return (
            <motion.div className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}s
            >
              <img className="image" src={image}/>
              <div className="title">
                <h3>{title}</h3>  
              </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>  
                </div>
                <div className="more" onClick={navigateToGallery}>
                  <img src={play} alt="Play" />
                  <span>See More</span>  
                </div>
            </motion.div>
          )
        })}
    </div>
    </Section>
}

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 15rem;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 10rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  margin: 2rem 0;
  .blogs {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
}
`;

export default Blog