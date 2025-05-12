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
    // モバイル・タブレット向けのテキスト（レスポンシブ表示用）
    const mobileText = (
      <>
        <span className="bold-text">
          AI駆動開発のコンサルティング、開発+AI駆動マ<br />
          ネジメントツールなどを提供するアーキテクチャ<br />
          モダナイズサービスです。
        </span>
        <br />
        お客様の業務に合わせてヒアリングを行いなが<br />
        ら、ニーズに合わせて使い方のカスタマイズが<br />
        可能です。これにより、ROIの合う施策の立案が<br />
        可能に。
      </>
    );
    
    // デスクトップ向けのテキスト（PC表示用）
    const desktopText = (
      <>
        <span className="bold-text">
          AI駆動開発のコンサルティング、開発+AI駆動マネジメン<br />
          トツールなどを提供するアーキテクチャモダナイズサー<br />
          ビスです。
        </span>
        <br />
        お客様の業務に合わせてヒアリングを行いながら、ニー<br />
        ズに合わせて使い方のカスタマイズが可能です。これに<br />
        より、ROIの合う施策の立案が可能に。
      </>
    );
    
    return (
      <div className="alchemy-description-text">
        {/* レスポンシブ対応 - PCではデスクトップ用テキスト、モバイル・タブレットではモバイル用テキストを表示 */}
        <div className="desktop-only">{desktopText}</div>
        <div className="mobile-only">{mobileText}</div>
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