import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home" >
      <div className="overlay">
        <div className="home-content">
          <h1>Welcome to ANT Travels</h1>
          <p>Explore India with comfort and style</p>
          <a href="#contact" className="btn">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
