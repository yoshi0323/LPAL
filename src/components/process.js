import React from 'react';
import '../styles/process.css';

// ProcessHeaderText Component
export const ProcessHeaderText = () => {
  return (
    <div className="process-header-text">Process</div>
  );
};

// ProcessSubtitleText Component
export const ProcessSubtitleText = () => {
  return (
    <div className="process-subtitle-text">サポートステップ</div>
  );
};

// ProcessImagesContainer Component
export const ProcessImagesContainer = () => {
  return (
    <div className="process-images-container">
      <div className="process-image-wrapper">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 580.png"} 
          alt="Process Step 1" 
          className="process-image"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="process-image-wrapper">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 581 (1).png"} 
          alt="Process Step 2" 
          className="process-image"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="process-image-wrapper">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 582.png"} 
          alt="Process Step 3" 
          className="process-image"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="process-image-wrapper">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 583.png"} 
          alt="Process Step 4" 
          className="process-image"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
    </div>
  );
};
