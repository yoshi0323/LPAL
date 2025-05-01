import React from 'react';

// GradientBackground Component
export const GradientBackground = () => {
  return (
    <div className="gradient-background">
      <div className="large-circle-gradient">
        <img 
          src={process.env.PUBLIC_URL + "/image/Ellipse 5.png"} 
          alt="Large Gradient Circle" 
          className="large-circle-image" 
        />
      </div>
    </div>
  );
};

// CircleGradient Component
export const CircleGradient = () => {
  return (
    <div className="circle-gradient">
      <img 
        src={process.env.PUBLIC_URL + "/image/Ellipse%206%20(1).png"} 
        alt="Gradient Circle" 
        className="circle-image" 
        onError={(e) => { 
          console.error("Image failed to load"); 
          e.target.style.backgroundColor = "#E73D26"; // 画像が読み込めない場合の代替表示
        }}
      />
    </div>
  );
};

// LargeCircleGradient Component
export const LargeCircleGradient = () => {
  return (
    <div className="large-circle-gradient">
      <img 
        src={process.env.PUBLIC_URL + "/image/Ellipse 5.png"} 
        alt="Large Gradient Circle" 
        className="large-circle-image" 
      />
    </div>
  );
};

// ServiceWhiteContainer Component
export const ServiceWhiteContainer = () => {
  return (
    <div className="service-white-container"></div>
  );
};

// ServiceHeaderText Component
export const ServiceHeaderText = () => {
  return (
    <div className="service-header-text">Service</div>
  );
};

// ServiceSubtitleText Component
export const ServiceSubtitleText = () => {
  return (
    <div className="service-subtitle-text">サービス内容</div>
  );
};

// ServiceDescriptionText Component
export const ServiceDescriptionText = () => {
  return (
    <div className="service-description-text">
      Alchemyはさまざまな課題に対し、柔軟な解決法を持っています。<br />
      以下は代表的なサポート内容です。
    </div>
  );
};

// ServiceBox1 Component (左側のボックス)
export const ServiceBox1 = () => {
  return (
    <div className="service-box service-box-left"></div>
  );
};

// ServiceBox2 Component (右側のボックス)
export const ServiceBox2 = () => {
  return (
    <div className="service-box service-box-right"></div>
  );
};

// ServiceImage1 Component
export const ServiceImage1 = () => {
  return (
    <div className="service-image-container service-image1-container">
      <img
        src={process.env.PUBLIC_URL + "/image/_レイヤー_1.png"}
        alt="Service Image 1"
        className="service-image service-image1"
        onError={(e) => {
          console.error("Image failed to load");
        }}
      />
    </div>
  );
};

// ServiceImage2 Component
export const ServiceImage2 = () => {
  return (
    <div className="service-image2-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="264" height="182" viewBox="0 0 264 182" fill="none" className="svg-mask">
        <path d="M256 0H8C3.58172 0 0 3.58172 0 8V174C0 178.418 3.58171 182 7.99999 182H256C260.418 182 264 178.418 264 174V8C264 3.58172 260.418 0 256 0Z" fill="url(#paint0_linear_3065_442)"/>
        <defs>
          <linearGradient id="paint0_linear_3065_442" x1="132" y1="0" x2="132" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7422C"/>
            <stop offset="1" stopColor="#F6835F" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
      </svg>
      <img
        src={process.env.PUBLIC_URL + "/image/236f300a4a1f06bb60f0102218f5fd17d13d18d8.png"}
        alt="Service Image 2"
        className="service-image2"
      />
    </div>
  );
};

// ServiceGradientCard1 Component
export const ServiceGradientCard1 = () => {
  return (
    <div className="service-gradient-card service-gradient-card1">
      <svg xmlns="http://www.w3.org/2000/svg" width="264" height="182" viewBox="0 0 264 182" fill="none" className="svg-mask">
        <path d="M256 0H8C3.58172 0 0 3.58172 0 8V174C0 178.418 3.58171 182 7.99999 182H256C260.418 182 264 178.418 264 174V8C264 3.58172 260.418 0 256 0Z" fill="url(#paint0_linear_3065_442)"/>
        <defs>
          <linearGradient id="paint0_linear_3065_442" x1="132" y1="0" x2="132" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7422C"/>
            <stop offset="1" stopColor="#F6835F" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/image/6f7dc4efdc668a9f2da0a0ec4fe2ebea9fae1f28.png"}
          alt="Service Gradient Card 1"
          className="service-gradient-card-image"
        />
      </div>
    </div>
  );
};

// ServiceGradientCard2 Component
export const ServiceGradientCard2 = () => {
  return (
    <div className="service-gradient-card service-gradient-card2">
      <svg xmlns="http://www.w3.org/2000/svg" width="264" height="182" viewBox="0 0 264 182" fill="none" className="svg-mask">
        <path d="M256 0H8C3.58172 0 0 3.58172 0 8V174C0 178.418 3.58171 182 7.99999 182H256C260.418 182 264 178.418 264 174V8C264 3.58172 260.418 0 256 0Z" fill="url(#paint0_linear_3065_442)"/>
        <defs>
          <linearGradient id="paint0_linear_3065_442" x1="132" y1="0" x2="132" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7422C"/>
            <stop offset="1" stopColor="#F6835F" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/image/97873b2a5513a136b464e3fba733f6a13f92df88.png"}
          alt="Service Gradient Card 2"
          className="service-gradient-card-image service-gradient-card-image2"
        />
      </div>
    </div>
  );
};
