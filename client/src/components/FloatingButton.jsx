import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const Button = styled.button`
position: fixed;
bottom: 40px;
left: 40px;
background-color: var(--secondary-color);
padding: 1rem;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Popup = styled.div`
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 100px;
  left: 20px;
  color: white;
  font-family: "Poppins", sans-serif;

  /* Animation */
  animation: slide-in 1s ease;
  animation-fill-mode: forwards;

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Text = styled.p`
  margin: 0;
`;

const FloatingWhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowPopup(true), 10000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.location.href = 'https://wa.me/+27847501407';
  };

  useEffect(() => {
    let timeoutId;
    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [showPopup]);

  return (
    <div style={{ position: 'fixed', bottom: '0', left: '0', padding: '20px' }}>
      <Button onClick={handleClick}>
        <FaWhatsapp />
      </Button>
      {showPopup && (
        <Popup>
          <Text>Chat with us on WhatsApp!</Text>
        </Popup>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;