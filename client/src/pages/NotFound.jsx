import React from 'react';
import { useNavigation } from 'react-router-dom';

export default function NotFound() {
  const history = useNavigation();

  const goHome = () => {
    history.navigate('/');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#343a40',
    },
    button: {
      marginTop: '2rem',
      padding: '0.5rem 1rem',
      fontSize: '1.25rem',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>404 - Page Not Found</div>
      <button style={styles.button} onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}