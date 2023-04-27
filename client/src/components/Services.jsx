import React from 'react';
import styled from "styled-components";
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";
import Title from './Title';
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";

function ServicesTab() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Facial",
      text: "Facial is a skin care treatment for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. It is normally performed in beauty salons, but it is also a common spa treatment.",
      image: service1,
    },
    {
      type: "Bridal Makeup",
      text: "Bridal makeup is makeup worn by the bride on her wedding day. It is meant to enhance her natural beauty and complement her wedding dress. It is also meant to last through photographs, tears, and the many hours of the wedding day.",
      image: service2,
    },
    {
      type: "Manicures",
      text: "Manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon. Manicures are also known as nail treatments, hand treatments, hand therapy, hand massages, or nail care.",
      image: service3,
    },
    {
      type: "Pedicures",
      text: "Pedicure is a cosmetic treatment of the feet and toenails, analogous to a manicure. Pedicures are popular throughout the world and are a common spa treatment. Pedicures are also known as foot spas, foot baths, foot soaks, or foot treatments.",
      image: service1,
    },
    {
      type: "Massages",
      text: "Massage is the manipulation of soft tissues in the body. Massage techniques are commonly applied with hands, fingers, elbows, knees, forearms, feet, or a device. The purpose of massage is generally for the treatment of body stress or pain.",
      image: service2,
    },
    {
      type: "Waxing",
      text: "Wa",
      image: service3,
    },
  ];
  return <Section id="services" ref={element}>
    <Title value="services" />
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="services__service__image">
                    <img src={image} alt="Service" />  
                  </div>
                  <div className="services__service__title">
                    <span>0{index + 1}</span>  
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description">{text}</p>
                  <img src={play} alt="Readmore" />
              </motion.div>
            )
          })}
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .services__service__title {
        span {
          color: #fff;
        }
      }
      .services__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default ServicesTab;