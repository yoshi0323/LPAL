import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import '../styles/styles.css';

// モバイル表示の検出用カスタムフック
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 580);
    };
    
    // 初期チェック
    checkIsMobile();
    
    // リサイズ時の処理
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

// ContactCircleGradient Component
export const ContactCircleGradient = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`contact-circle-gradient ${isMobile ? 'mobile' : ''}`}></div>
  );
};

// ContactBackgroundGradient Component
export const ContactBackgroundGradient = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div 
        className="contact-background-gradient mobile image-only"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg4.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          opacity: 1,
          width: '375px',
          height: '1098px'
        }}
      ></div>
    );
  }
  
  return (
    <div className="contact-background-gradient"></div>
  );
};

// ContactMaskImage Component
export const ContactMaskImage = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div 
        className="contact-mask-image mobile force-visible"
        style={{
          width: '375px',
          height: '1098px',
          left: 0,
          top: '8289px', // 背景画像と同じ位置に配置
          zIndex: 10, // z-indexを高くして確実に表示
          position: 'absolute',
          opacity: 1,
          display: 'block', // 要素が表示されることを確実に
          visibility: 'visible', // 要素が可視であることを確実に
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg-mask.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
      </div>
    );
  }
  
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
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="contact-group-image mobile">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 534.png"} 
          alt="Contact Group Mobile" 
        />
      </div>
    );
  }
  
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
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="contact-second-image mobile">
        <img 
          src={process.env.PUBLIC_URL + "/image/Group 560 (1).png"} 
          alt="Contact Second Image Mobile" 
        />
      </div>
    );
  }
  
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
  const isMobile = useIsMobile();
  
  return (
    <div className={`contact-white-footer ${isMobile ? 'mobile' : ''}`}></div>
  );
};

// ContactFooterLogo Component
export const ContactFooterLogo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`contact-footer-logo ${isMobile ? 'mobile' : ''}`}>
      <img 
        src={process.env.PUBLIC_URL + "/image/logo (1).png"} 
        alt="Footer Logo" 
      />
    </div>
  );
};

// ContactFooterLinks Component
export const ContactFooterLinks = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`contact-footer-links-container ${isMobile ? 'mobile' : ''}`}>
      <div className={`contact-footer-links ${isMobile ? 'mobile' : ''}`}>
        <a href="#" className="contact-footer-link">運用会社情報</a>
        <a href="#" className="contact-footer-link">プライバシーポリシー</a>
        <a href="#" className="contact-footer-link">個人情報の取り扱いについて</a>
      </div>
    </div>
  );
};

// ContactFooterCopyright Component
export const ContactFooterCopyright = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`contact-footer-copyright ${isMobile ? 'mobile' : ''}`}>
      @2025 ReAlice inc.
    </div>
  );
};

// ContactFormMobile Component
export const ContactFormMobile = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className="contact-form-mobile">
      <h2 style={{ 
        color: '#D1342D', 
        textAlign: 'center',
        fontFamily: '"Lexend Deca"',
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '5px'
      }}>Contact</h2>
      <p style={{ 
        color: '#343434', 
        textAlign: 'center',
        fontFamily: '"Zen Kaku Gothic New"',
        fontSize: '15px',
        fontWeight: 700,
        marginTop: 0,
        marginBottom: '20px'
      }}>お問い合わせ</p>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ 
            backgroundColor: '#D1342D', 
            color: '#FCFCFC', 
            padding: '2px 5px', 
            borderRadius: '2px',
            fontSize: '12px',
            marginRight: '8px',
            fontFamily: '"Zen Kaku Gothic New"'
          }}>必須</div>
          <span style={{ 
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '15px',
            fontWeight: 700
          }}>お名前</span>
        </div>
        <input 
          type="text" 
          placeholder="山田 太郎" 
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #D3D3D3',
            fontSize: '15px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ 
            backgroundColor: '#D1342D', 
            color: '#FCFCFC', 
            padding: '2px 5px', 
            borderRadius: '2px',
            fontSize: '12px',
            marginRight: '8px',
            fontFamily: '"Zen Kaku Gothic New"'
          }}>必須</div>
          <span style={{ 
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '15px',
            fontWeight: 700
          }}>企業名</span>
        </div>
        <input 
          type="text" 
          placeholder="企業名をご入力してください" 
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #D3D3D3',
            fontSize: '15px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ 
            backgroundColor: '#D1342D', 
            color: '#FCFCFC', 
            padding: '2px 5px', 
            borderRadius: '2px',
            fontSize: '12px',
            marginRight: '8px',
            fontFamily: '"Zen Kaku Gothic New"'
          }}>必須</div>
          <span style={{ 
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '15px',
            fontWeight: 700
          }}>お問い合わせ内容</span>
        </div>
        <textarea 
          placeholder="お問い合わせ内容をご入力ください" 
          style={{
            width: '100%',
            height: '120px',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #D3D3D3',
            fontSize: '15px',
            boxSizing: 'border-box',
            resize: 'none'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div style={{ 
            backgroundColor: '#D1342D', 
            color: '#FCFCFC', 
            padding: '2px 5px', 
            borderRadius: '2px',
            fontSize: '12px',
            marginRight: '8px',
            fontFamily: '"Zen Kaku Gothic New"'
          }}>必須</div>
          <span style={{ 
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '15px',
            fontWeight: 700
          }}>個人情報の取り扱いについての同意</span>
        </div>
        <p style={{ 
          fontSize: '14px',
          lineHeight: '1.75',
          marginTop: '5px',
          fontFamily: '"Zen Kaku Gothic New"'
        }}>
          問い合わせにあたり当社がお預かりする個人情報については、「<a href="#" style={{ color: '#1976D2', textDecoration: 'underline' }}>個人情報の取り扱いについて</a>」に従い、取り扱います。
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
          <input type="checkbox" id="agree" style={{ marginRight: '8px' }} />
          <label htmlFor="agree" style={{ fontSize: '15px', fontFamily: '"Zen Kaku Gothic New"' }}>同意する</label>
        </div>
      </div>

      <button style={{ 
        width: '100%',
        padding: '12px',
        backgroundColor: '#F6835F',
        color: '#FCFCFC',
        border: 'none',
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        marginTop: '20px'
      }}>
        送信する
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
          <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
};

// ContactMobileFooter Component
export const ContactMobileFooter = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className="contact-mobile-footer">
      <div className="alchemy-logo-container">
        <img 
          src={process.env.PUBLIC_URL + "/image/logo.png"} 
          alt="Alchemy Logo"
        />
        <div 
          style={{
            color: '#666666',
            fontFamily: '"Lexend Deca"',
            fontSize: '20px',
            fontWeight: 500,
            marginLeft: '8px'
          }}
        >
          Alchemy
        </div>
      </div>
      
      <div>
        <a href="#">運用会社情報</a>
        <a href="#">プライバシーポリシー</a>
        <a href="#">個人情報の取り扱いについて</a>
      </div>
      
      <div className="copyright">
        @2025 ReAlice inc.
      </div>
    </div>
  );
};
