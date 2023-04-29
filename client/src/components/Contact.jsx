import React, { useState } from 'react';
import styled from "styled-components";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";
import axios from "axios";

function ContactForm() {
  const [element, controls] = useScroll();
  const [selectedOption, setSelectedOption] = useState('booking');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const url = `https://bodypamper-server.onrender.com/api/bookings`
    const data = {
      service: selectedOption,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    await axios.post(url, data).then(() => {
      setSubmitting(false);
      alert("Thank you, we will get back to you shortly");
      e.target.reset();
    }).catch(() => {
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <Section ref={element}>
      <Title value="contact" />
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
        <div className="contact__title">
          <p>Stay in touch with us </p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say hi !!</h4>
            <p>
              We are happy to hear from you
            </p>
            <p>
              Whether it's a booking for your next appointment with us or just a general enquiry, we are happy to hear from you. Please fill in the form below and we will get back to you as soon as possible.
            </p>
            <div>
              <p>
                <strong>Address:</strong> 9 Surrey Rd, Vincent, East London
              </p>
              <p>
                <strong>Phone:</strong> +27 43 721 3138
              </p>
              <p>
                <strong>Cell:</strong> +27 84 750 1407
              </p>
              <p>
                <strong>Email:</strong> info@bodypampersalon.co.za
              </p>
              <p>
                <strong>Website:</strong> www.bodypampersalon.co.za
              </p>
            </div>
          </div>
          <form className="contact__data__form" onSubmit={handleSubmit}>
              <select name='service' className='select' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="booking">Booking</option>
                <option value="enquiry">Enquiry</option>
              </select>
              <input name='name' type="text" placeholder='name' />
              <input name='phone' type="number" placeholder='phone' />
              <input name='email' type="email" placeholder='email' />
              <textarea name='message' placeholder='message'></textarea>
              <button type='submit'>
                {submitting ? "Submitting..." : (selectedOption === 'booking' ? 'Submit Booking' : 'Submit Enquiry')}
              </button>
          </form>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
.contact {
  color: var(--primary-color);
  margin: 0 18rem;
  &__title {
    margin: 6rem 0 2rem 0;
    p {
      text-transform: uppercase;
      color: var(--primary-color);
    }
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
    }
  }
  &__data {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        text-align: justify;
        margin-top: 20px;
      }
      div {
        p {
          strong {
            text-transform: uppercase;
          }
        }
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input,
      textarea {
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        width: 100%;
        color: var(--secondary-color);
        padding-bottom: 0.7rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
        }
      }
      .select {
        width: 100%;
        height: 3rem;
        border: none;
      }
      textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
      button {
        width: 100%;
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: var(--secondary-color);
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}
`;

export default ContactForm;