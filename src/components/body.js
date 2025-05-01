import React from 'react';

// AboutHeaderText Component
export const AboutHeaderText = () => {
  return (
    <div className="about-header-text">About</div>
  );
};

// AboutSubtitleText Component
export const AboutSubtitleText = () => {
  return (
    <div className="about-subtitle-text">私たちについて</div>
  );
};

// AlchemyTitleText Component
export const AlchemyTitleText = () => {
  return (
    <div className="alchemy-title-text">Alchemyとは</div>
  );
};

// AlchemyDescriptionText Component
export const AlchemyDescriptionText = () => {
    return (
      <div className="alchemy-description-text">
        <span className="bold-text">
          AI駆動開発のコンサルティング、開発+AI駆動マネジメン<br />
          トツールなどを提供するアーキテクチャモダナイズサー<br />
          ビスです。
        </span>
        <br />
        お客様の業務に合わせてヒアリングを行いながら、ニー<br />
        ズに合わせて使い方のカスタマイズが可能です。これに<br />
        より、ROIの合う施策の立案が可能に。
      </div>
    );
  };

// AboutWhiteContainer Component
export const AboutWhiteContainer = () => {
  return (
    <div className="about-white-container"></div>
  );
};

// RotatedRectangle Component
export const RotatedRectangle = () => {
  return (
    <div className="rotated-rectangle">
      <img 
        src={process.env.PUBLIC_URL + "/image/logo.png"} 
        alt="logo" 
        className="logo-image" 
      />
    </div>
  );
};