import React from "react";
import styled from "styled-components";

const AboutSection = ({ title, paragraph, image }) => {
  return (
    <section className="about-section">
      <h1>{title}</h1>
      <div className="about-content">
        <div className="image-wrapper">
          <img src={image} alt="About us" />
        </div>
        <div className="text-wrapper">
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

const StyledAboutSection = styled(AboutSection)`
  section {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 2em;
    text-align: center;
  }

  .about-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .image-wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
  }

  .text-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  p {
    width: 100%;
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
    }

    .image-wrapper,
    .text-wrapper {
      width: 100%;
    }
  }
`;

export default StyledAboutSection;