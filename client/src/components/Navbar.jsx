import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import logo from "assets/nicer-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "animation";

function Navbar() {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  const location = useLocation();
  
  const isActive = (href) => {
    return href === location.pathname ? 'active' : '';
  };
  
  return <Nav ref={element}
  variants={navAnimation}
  transition={{ delay: 0.1 }}
  animate={controls} 
  state={isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a href="/" className='brand'>
        <span className="logo glow" style={{ textDecoration: "none", color: 'white', fontWeight: 600}}>
        <img 
          src={logo} 
          alt="Body Pamper Spa Logo" 
          className="logo" 
          style={{ width: 125, height: 125 }} />
        </span>
      </a>  
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
      <ul>
        <li className={isActive('/')}>
          <a href="/">Home</a>
        </li>
        <li className={isActive('/about')}>
          <a href="/about">About</a>
        </li>
        <li className={isActive('/portfolio')}>
          <a href="/gallery">Gallery</a>
        </li>
        <li className={isActive('/services')}>
          <a href="/services">Services</a>
        </li>
        <li className={isActive('/pricing')}>
          <a href="/pricing">Pricing</a>
        </li>
        <li className={isActive('/contact')}>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
    .logo {
      margin: 0 auto;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;