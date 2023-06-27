import React, { useState, useEffect } from 'react';
import imageUrl from 'assets/bodyposter.jpg';

const Promotions = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    padding: '1rem',
    background: '#f5f5f5',
  };

  const imageStyle = {
    width: isSmallScreen ? '80%' : '30%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    margin: isSmallScreen ? '1rem 0' : '0',
  };

  const fullScreenImageStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    zIndex: 1000,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: isImageOpen ? 'block' : 'none',
  };

  const textStyle = {
    fontSize: isSmallScreen ? '2rem' : '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#728b91",
    margin: isSmallScreen ? '1rem 0' : '0',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>Seasonal Specials and Promos</div>
      <img src={imageUrl} alt="Promotion" style={imageStyle} onClick={openImage} />
      {isImageOpen && (
        <>
          <div style={overlayStyle} onClick={closeImage}></div>
          <img src={imageUrl} alt="Promotion Fullscreen" style={fullScreenImageStyle} />
        </>
      )}
    </div>
  );
};

export default Promotions;