import React from 'react';
import '../styles/contact.css';

// ContactCircleGradient Component
export const ContactCircleGradient = () => {
  return (
    <div className="contact-circle-gradient"></div>
  );
};

// ContactBackgroundGradient Component
export const ContactBackgroundGradient = () => {
  return (
    <div className="contact-background-gradient"></div>
  );
};

// ContactMaskImage Component
export const ContactMaskImage = () => {
  return (
    <div className="contact-mask-image">
      <img 
        src={process.env.PUBLIC_URL + "/image/Mask group.png"} 
        alt="Contact Background" 
      />
    </div>
  );
};

// ContactGroupImage Component
export const ContactGroupImage = () => {
  return (
    <div className="contact-group-image">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 534.png"} 
        alt="Contact Group" 
      />
    </div>
  );
};

// ContactSecondImage Component
export const ContactSecondImage = () => {
  return (
    <div className="contact-second-image">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 560 (1).png"} 
        alt="Contact Second Image" 
      />
    </div>
  );
};

// ContactWhiteFooter Component
export const ContactWhiteFooter = () => {
  return (
    <div className="contact-white-footer"></div>
  );
};

// ContactFooterLogo Component
export const ContactFooterLogo = () => {
  return (
    <div className="contact-footer-logo">
      <img 
        src={process.env.PUBLIC_URL + "/image/logo (1).png"} 
        alt="Footer Logo" 
      />
    </div>
  );
};

// ContactFooterLinks Component
export const ContactFooterLinks = () => {
  return (
    <div className="contact-footer-links-container">
      <div className="contact-footer-links">
        <a href="#" className="contact-footer-link">運用会社情報</a>
        <a href="#" className="contact-footer-link">プライバシーポリシー</a>
        <a href="#" className="contact-footer-link">個人情報の取り扱いについて</a>
      </div>
    </div>
  );
};

// ContactFooterCopyright Component
export const ContactFooterCopyright = () => {
  return (
    <div className="contact-footer-copyright">
      @2025 ReAlice inc.
    </div>
  );
};
