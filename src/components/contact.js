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
          問い合わせにあたり当社がお預かりする個人情報については、「<a href="#" style={{ color: '#1976D2', textDecoration: 'underline' }}>個人情報の取り扱いについて</a>」に従い、取り扱います。同意いただける場合は、「同意する」にチェックを入れてください。
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
          <input type="checkbox" id="agree" style={{ marginRight: '8px' }} />
          <label htmlFor="agree" style={{ fontSize: '15px', fontFamily: '"Zen Kaku Gothic New"' }}>同意する</label>
        </div>
      </div>

      <button style={{ 
        width: '278px',
        height: '63px',
        top: '8373px',
        padding: '20px 16px',
        backgroundColor: '#F6835F',
        color: '#FAD4D3',
        border: 'none',
        borderRadius: '80px',
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

// PCコンタクトコンテナ
export const PcContactContainer = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-contact-container"></div>
  );
};

// PC Redインジケーター
export const PcRedIndicator = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-red-indicator" style={{ top, left }}>
      <span className="pc-required-text">必須</span>
    </div>
  );
};

// PC入力フィールド
export const PcInputField = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <input
      type="text"
      className="pc-input-field"
      style={{ top, left }}
      placeholder="山田太郎"
    />
  );
};

// PC大きな入力フィールド
export const PcLargeInputField = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <textarea
      className="pc-large-input-field"
      style={{ top, left }}
      placeholder="こちらにお問い合わせ内容をご記入ください"
    ></textarea>
  );
};

// PC名前ラベル
export const PcNameLabel = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-name-label" style={{ top, left }}>
      お名前
    </div>
  );
};

// PC会社ラベル
export const PcCompanyLabel = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-company-label" style={{ top, left }}>
      会社名
    </div>
  );
};

// PCコンタクト内容ラベル
export const PcContactContentLabel = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-contact-content-label" style={{ top, left }}>
      お問い合わせ内容
    </div>
  );
};

// PCプライバシーラベル
export const PcPrivacyLabel = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-privacy-label" style={{ top, left }}>
      個人情報の取り扱いについて
    </div>
  );
};

// PCプライバシーテキスト
export const PcPrivacyText = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-privacy-text" style={{ top, left }}>
      個人情報保護方針に基づき適切に対応いたします。詳しくは<a href="#" className="pc-privacy-link">プライバシーポリシー</a>をご覧ください。
    </div>
  );
};

// PCチェックボックス
export const PcCheckBox = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-check-box" style={{ top, left }}></div>
  );
};

// PC同意テキスト
export const PcAgreeText = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-agree-text" style={{ top, left }}>
      個人情報の取り扱いに同意する
    </div>
  );
};

// PC名前プレースホルダー
export const PcNamePlaceholder = ({ top, left }) => {
  // プレースホルダーは不要になったためnullを返す
  return null;
};

// PC会社プレースホルダー
export const PcCompanyPlaceholder = ({ top, left }) => {
  // プレースホルダーは不要になったためnullを返す
  return null;
};

// PCコンテンツプレースホルダー
export const PcContentPlaceholder = ({ top, left }) => {
  // プレースホルダーは不要になったためnullを返す
  return null;
};

// PC送信ボタン
export const PcSubmitButton = ({ top, left }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-submit-button" style={{ top, left }}>
      送信する
      <div className="pc-arrow-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27Z" stroke="#FCFCFC" />
          <path d="M16.5303 20.5303C16.2374 20.8232 15.7626 20.8232 15.4697 20.5303C15.1768 20.2374 15.1768 19.7626 15.4697 19.4697L16.5303 20.5303ZM19 16L19.5303 16.5303C19.8232 16.2374 19.8232 15.7626 19.5303 15.4697L19 16ZM15.4697 12.5303C15.7626 12.2374 16.2374 12.2374 16.5303 12.5303C16.8232 12.8232 16.8232 13.2981 16.5303 13.5911L15.4697 12.5303ZM12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14L12 16ZM15.4697 19.4697L18.4697 16.4697L19.5303 17.5303L16.5303 20.5303L15.4697 19.4697ZM18.4697 15.5303L15.4697 12.5303L16.5303 13.5911L19.5303 16.5911L18.4697 15.5303ZM19 15L12 15L12 17L19 17L19 15Z" fill="#FCFCFC" />
        </svg>
      </div>
    </div>
  );
};
