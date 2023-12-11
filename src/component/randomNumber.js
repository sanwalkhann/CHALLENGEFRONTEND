import React, { useState, useEffect } from 'react';

const RandomNumberDisplay = () => {
  const [randomNumber, setRandomNumber] = useState(""); 
  const host = 'https://challenge3-backend.vercel.app'
  
  const fetchRandomNumber = async () => {
    try {
      const response = await fetch(`${host}/api/random`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRandomNumber(data.random_number);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  const updateRandomNumber = () => {
    setRandomNumber((prevNumber) => (prevNumber !== null && prevNumber > 0 ? prevNumber - 1 : null));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRandomNumber();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (randomNumber !== null && randomNumber <= 0) {
      fetchRandomNumber();
    }
  }, [randomNumber]);
  

  const containerStyle = {
    width: '470px',
    height: '550px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50px',
    border: '2px solid',
    backgroundImage:
      'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(169.15deg, rgba(255, 255, 255, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)',
    borderImageSource:
      'linear-gradient(169.15deg, rgba(255, 255, 255, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)',
    boxShadow: '-5px -5px 250px 0px #FFFFFF05 inset',
    background: '#001974',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const numberStyle = {
    width: '270px',
    height: '250px',
    top: '263px',
    left: '485px',
    borderRadius: '50px',
    border: '2px solid',
    backgroundImage:
      'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(169.15deg, rgba(255, 255, 255, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)',
    borderImageSource:
      'linear-gradient(169.15deg, rgba(255, 255, 255, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)',
    boxShadow: '-5px -5px 250px 0px #FFFFFF05 inset',
    fontSize: '54px',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };



  return (
    <div style={containerStyle}>
    <h1 style={numberStyle}>{randomNumber !== null ? randomNumber : 'Loading...'}</h1>  
      </div>
  );
};

export default RandomNumberDisplay;
