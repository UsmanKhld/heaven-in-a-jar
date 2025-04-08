import React from 'react';
import './Spotlight.css';
import dubaiChoc from '../../assets/DubaiChocSpotlight.png';

const Spotlight = () => {
  return (
    <div className="spotlight-container">
      <div className="spotlight-content">
        <h2 className="spotlight-title">SPOTLIGHT</h2>
        <div className="spotlight-image-container">
          <img 
            src={dubaiChoc} 
            alt="Dubai Chocolate Spotlight" 
            className="spotlight-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
