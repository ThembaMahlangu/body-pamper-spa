import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";
import { BsPlay } from 'react-icons/bs';

function Home() {
  return (
    <Section>
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Body Pamper Spa</h1>
          </div>  
          <div className="subTitle">
            {/* <p>
              Body Pamper Spa is a leading beauty salon in the city.
              We offer a wide range of beauty services to our clients. 
              We have a team of highly skilled and experienced professionals who are dedicated to providing the best services to our clients.
            </p>   */}
          </div>
            <a href='/contact'>
              <BsPlay className="play"/>
            </a>
        </div>  
      </motion.div>

      <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
          <div className="grid">
            <div className="col">
                <strong>Beauty Spa</strong>
                <p>Body Pamper Academy</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>info@bodypampersalon.co.za</p>
            </div> 
            <div className="col">
                <strong>Mobile</strong>
                <p>+2743 721 3138</p>
            </div> 
            <div className="col">
                <strong>Address</strong>
                <p>9 Surrey Rd</p>
                <p>East London</p>
                <p>Easten Cape</p>
            </div> 
            <div className="col">
                <strong>Services</strong>
                <p>Sparking</p>
                <p>SPA Cream</p>
            </div> 
            <div className="col">
                <strong>Working Hours</strong>
                <p>Monday to Friday</p>
                <p>08:00 to 18:00</p>
            </div>   
          </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${"https://d1ooscleda9ip9.cloudfront.net/Upload/669/CMS/News/Photos/19c7c978-7e5.jpg"}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          padding-bottom: 8rem;
          justify-content: relative;
        }
      }
      .play {
        width: 5rem;
        height: 5rem;
        background-color: var(--secondary-color);
        border-radius: 50%;
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home