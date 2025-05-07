import React from 'react';
import '../styles/popup.css';

// Popup Component
export const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
            <circle cx="32" cy="32.7334" r="32" fill="#343434"/>
            <rect x="39.7773" y="23.5409" width="2" height="24" transform="rotate(45 39.7773 23.5409)" fill="#FCFCFC"/>
            <rect x="41.1914" y="40.5115" width="2" height="24" transform="rotate(135 41.1914 40.5115)" fill="#FCFCFC"/>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

// CliffQuestionPopup Component - 下部に画像を追加
export const CliffQuestionPopup = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup-image-container">
        <img 
          src="/image/contents01.png" 
          alt="2025年の崖問題" 
          className="popup-image" 
        />
      </div>
      <div className="popup-bottom-image-container">
        <img 
          src="/image/Group 628.png" 
          alt="Bottom Image" 
          className="popup-bottom-image" 
        />
      </div>
    </Popup>
  );
};
