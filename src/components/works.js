import React from 'react';
import '../styles/works.css';

// WorksHeaderText Component
export const WorksHeaderText = () => {
  return (
    <div className="works-header-text">Works</div>
  );
};

// WorksSubtitleText Component
export const WorksSubtitleText = () => {
  return (
    <div className="works-subtitle-text">導入事例</div>
  );
};

// WorksImage1 Component
export const WorksImage1 = () => {
  return (
    <div className="works-image-1">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 570 (2).png"} 
        alt="Works Case Study" 
        className="works-image"
      />
    </div>
  );
};

// WorksImage2 Component
export const WorksImage2 = () => {
  return (
    <div className="works-image-2">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 571.png"} 
        alt="Works Case Study 2" 
        className="works-image"
      />
    </div>
  );
};

// WorksImagesContainer Component
export const WorksImagesContainer = () => {
  return (
    <div className="works-images-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 570 (2).png"} 
        alt="Works Case Study 1" 
        className="works-image"
      />
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 571.png"} 
        alt="Works Case Study 2" 
        className="works-image"
      />
    </div>
  );
};

// WorksCircleGradient Component
export const WorksCircleGradient = () => {
  return (
    <div className="works-circle-gradient">
      <svg xmlns="http://www.w3.org/2000/svg" width="480" height="510" viewBox="0 0 480 510" fill="none">
        <path d="M299.987 250.914L516.321 508.336C568.122 454.424 600 381.195 600 300.499C600 134.83 465.682 0.511719 299.987 0.511719C134.292 0.511719 0 134.83 0 300.499C0 381.644 32.2206 455.242 84.5494 509.233L299.987 250.914Z" fill="url(#paint0_linear_3065_215)"/>
        <defs>
          <linearGradient id="paint0_linear_3065_215" x1="299.987" y1="509.233" x2="299.987" y2="0.511719" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ECECEC" stopOpacity="0"/>
            <stop offset="1" stopColor="#E73D26"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
