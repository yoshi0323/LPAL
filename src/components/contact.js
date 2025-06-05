import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import '../styles/styles.css';

// モバイル表示の検出用カスタムフック
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1000);
    };
    
    // 初期チェック
    checkScreenSize();
    
    // リサイズ時の処理
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return { isMobile };
};

// ContactCircleGradient Component
export const ContactCircleGradient = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <div className={`contact-circle-gradient ${isMobile ? 'mobile' : ''}`}></div>
  );
};

// ContactBackgroundGradient Component
export const ContactBackgroundGradient = () => {
  const { isMobile } = useIsMobile();
  
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
          height: '1098px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '8289px',
          zIndex: 3
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
  const { isMobile } = useIsMobile();
  
  if (isMobile) {
    return (
      <div 
        className="contact-mask-image mobile force-visible"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg-mask.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          opacity: 1,
          width: '345px',
          height: '1098px',
          position: 'absolute',
          top: '8289px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'block',
          visibility: 'visible',
          flexShrink: 0
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
  const { isMobile } = useIsMobile();
  
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
  const { isMobile } = useIsMobile();
  
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
  const { isMobile } = useIsMobile();
  
  return (
    <div className={`contact-white-footer ${isMobile ? 'mobile' : ''}`}></div>
  );
};

// ContactFooterLogo Component
export const ContactFooterLogo = () => {
  const { isMobile } = useIsMobile();
  
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
  const { isMobile } = useIsMobile();
  
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
  const { isMobile } = useIsMobile();
  
  return (
    <div className={`contact-footer-copyright ${isMobile ? 'mobile' : ''}`}>
      @2025 ReAlice inc.
    </div>
  );
};

// ContactFormMobile Component
export const ContactFormMobile = () => {
  const { isMobile } = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <>
      {/* Contact Title */}
      <div style={{
        position: 'absolute',
        top: '8360px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '375px',
        textAlign: 'center',
        zIndex: 14
      }}>
        <h2 style={{ 
          color: '#fff', 
          textAlign: 'center',
          fontFamily: '"Lexend Deca"',
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '5px'
        }}>Contact</h2>
        <p style={{ 
          color: '#fff', 
          textAlign: 'center',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '15px',
          fontWeight: 700,
          marginTop: 0
        }}>お問い合わせ</p>
      </div>
      
      {/* Form Container */}
      <div style={{
        position: 'absolute',
        top: '8450px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '335px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 15
      }}>
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

        <div style={{ textAlign: 'center' }}>
          <button style={{ 
            width: '200px',
            height: '50px',
            backgroundColor: '#F6835F',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
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
      </div>
    </>
  );
};

// ContactMobileFooter Component
export const ContactMobileFooter = () => {
  const { isMobile } = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div style={{
      position: 'absolute',
      top: '9387px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      width: '375px',
      padding: '40px 24px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      background: 'var(--fcfcfc, #FCFCFC)',
      zIndex: 2
    }}>
      {/* Alchemyテキスト */}
      <div style={{
        color: '#666666',
        fontFamily: '"Lexend Deca"',
        fontSize: '20px',
        fontWeight: 500
      }}>
        Alchemy
      </div>
      
      {/* フッターリンク */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <a href="#" style={{
          color: '#343434',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '14px',
          fontWeight: 400,
          textDecoration: 'none',
          lineHeight: '150%'
        }}>運用会社情報</a>
        <a href="#" style={{
          color: '#343434',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '14px',
          fontWeight: 400,
          textDecoration: 'none',
          lineHeight: '150%'
        }}>プライバシーポリシー</a>
        <a href="#" style={{
          color: '#343434',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '14px',
          fontWeight: 400,
          textDecoration: 'none',
          lineHeight: '150%'
        }}>個人情報の取り扱いについて</a>
      </div>
      
      {/* 著作権表示 */}
      <div style={{
        color: '#C4C4C4',
        fontFamily: '"Zen Kaku Gothic New"',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '150%',
        textAlign: 'center'
      }}>
        @2025 ReAlice inc.
      </div>
    </div>
  );
};

// PCコンタクトコンテナ
export const PcContactContainer = () => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;

  return (
    <div
      className="pc-contact-container"
      style={{
        position: 'absolute',
        width: '800px',
        height: '666px',
        left: '320px',
        right: '320px',
        bottom: '232px',
        borderRadius: '8px',
        zIndex: 20,
        backgroundColor: '#fff'
      }}
    >
      {/* コンタクトタイトル */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '-152px',
          color: '#FFF',
          fontFamily: '"Lexend Deca"',
          fontSize: '48px',
          fontWeight: 700,
          lineHeight: '175%',
          zIndex: 21
        }}
      >
        Contact
      </div>

      {/* 必須バッジとラベルのスタイルを統一 */}
      {/* お名前ラベル */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 21
        }}
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700,
            backgroundColor: '#FFF',
            color: '#D1342D',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          必須
        </span>
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700
          }}
        >
          お名前
        </span>
      </div>

      {/* 企業ラベル */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '64px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 21
        }}
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700,
            backgroundColor: '#FFF',
            color: '#D1342D',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          必須
        </span>
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700
          }}
        >
          企業名
        </span>
      </div>

      {/* お問い合わせ内容ラベル */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '96px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 21
        }}
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700,
            backgroundColor: '#FFF',
            color: '#D1342D',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          必須
        </span>
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700
          }}
        >
          お問い合わせ内容
        </span>
      </div>

      {/* 入力フィールド群 */}
      {/* 名前入力フィールド */}
      <input
        type="text"
        placeholder="山田 太郎"
        style={{
          position: 'absolute',
          left: '0px',
          top: '60px',
          width: '390px',
          height: '50px',
          border: '2px solid #fff',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '16px',
          padding: '15px',
          boxSizing: 'border-box',
          borderRadius: '4px',
          zIndex: 21
        }}
      />

      {/* 企業名入力フィールド */}
      <input
        type="text"
        placeholder="企業名をご入力してください"
        style={{
          position: 'absolute',
          left: '410px',
          top: '60px',
          width: '390px',
          height: '50px',
          border: '2px solid #fff',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '16px',
          padding: '15px',
          boxSizing: 'border-box',
          borderRadius: '4px',
          zIndex: 21
        }}
      />

      {/* お問い合わせ内容テキストエリア */}
      <textarea
        placeholder="こちらにお問い合わせ内容をご記入ください"
        style={{
          position: 'absolute',
          left: '0px',
          top: '124px',
          width: '800px',
          height: '120px',
          border: '2px solid #fff',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '16px',
          padding: '15px',
          boxSizing: 'border-box',
          resize: 'none',
          borderRadius: '4px',
          zIndex: 21
        }}
      />

      {/* プライバシーラベル */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '260px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 21
        }}
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700,
            backgroundColor: '#FFF',
            color: '#D1342D',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          必須
        </span>
        <span
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 700
          }}
        >
          個人情報の取り扱いについての同意
        </span>
      </div>

      {/* プライバシーテキスト */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '292px',
          color: '#FFF',
          fontFamily: '"Zen Kaku Gothic New"',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '150%',
          zIndex: 21
        }}
      >
        問い合わせにあたり当社がお預かりする個人情報については、「<a href="#" style={{ color: '#1976D2', textDecoration: 'underline' }}>個人情報の取り扱いについて</a>」に従い、取り扱います。同意いただける場合は、「同意する」にチェックを入れてください。
      </div>

      {/* チェックボックス */}
      <div
        style={{
          position: 'absolute',
          left: '0px',
          top: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          zIndex: 21
        }}
      >
        <input
          type="checkbox"
          style={{
            width: '24px',
            height: '24px',
            marginRight: '8px'
          }}
        />
        <label
          htmlFor="agree"
          style={{
            color: '#FFF',
            fontFamily: '"Zen Kaku Gothic New"',
            fontSize: '14px',
            fontWeight: 400
          }}
        >
          同意する
        </label>
      </div>

      {/* 送信ボタン */}
      <div
        style={{
          position: 'absolute',
          left: '300px',
          top: '380px',
          textAlign: 'center',
          zIndex: 21
        }}
      >
        <button
          style={{
            width: '200px',
            height: '50px',
            backgroundColor: '#F6835F',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          送信する
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: '8px' }}
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// PC Redインジケーター
export const PcRedIndicator = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-red-indicator" style={{ top, left }}>
      <span className="required-text">必須</span>
    </div>
  );
};

// PC入力フィールド
export const PcInputField = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <input 
      type="text"
      className="pc-input-field"
      style={{ position: 'absolute', top, left }}
    />
  );
};

// PC大型入力フィールド（テキストエリア）
export const PcLargeInputField = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <textarea
      className="pc-large-input-field"
      style={{ position: 'absolute', top, left }}
    ></textarea>
  );
};

// PC名前ラベル
export const PcNameLabel = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-name-label" style={{ position: 'absolute', top, left }}>
      お名前
    </div>
  );
};

// PC企業ラベル
export const PcCompanyLabel = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-company-label" style={{ position: 'absolute', top, left }}>
      企業名
    </div>
  );
};

// PCお問い合わせ内容ラベル
export const PcContactContentLabel = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-contact-content-label" style={{ position: 'absolute', top, left }}>
      お問い合わせ内容
    </div>
  );
};

// PCプライバシーラベル
export const PcPrivacyLabel = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-privacy-label" style={{ position: 'absolute', top, left }}>
      個人情報の取り扱いについての同意
    </div>
  );
};

// PCプライバシーテキスト
export const PcPrivacyText = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-privacy-text" style={{ position: 'absolute', top, left }}>
      問い合わせにあたり当社がお預かりする個人情報については、「<a href="#">個人情報の取り扱いについて</a>」に従い、取り扱います。同意いただける場合は、「同意する」にチェックを入れてください。
    </div>
  );
};

// PCチェックボックス
export const PcCheckBox = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <input 
      type="checkbox"
      className="pc-checkbox"
      style={{ position: 'absolute', top, left }}
    />
  );
};

// PC同意テキスト
export const PcAgreeText = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <div className="pc-agree-text" style={{ position: 'absolute', top, left }}>
      同意する
    </div>
  );
};

// PC名前プレースホルダー
export const PcNamePlaceholder = ({ top, left }) => {
  return (
    <div className="pc-name-placeholder" style={{ position: 'absolute', top, left, pointerEvents: 'none' }}>
      山田 太郎
    </div>
  );
};

// PC企業名プレースホルダー
export const PcCompanyPlaceholder = ({ top, left }) => {
  return (
    <div className="pc-company-placeholder" style={{ position: 'absolute', top, left, pointerEvents: 'none' }}>
      企業名をご入力してください
    </div>
  );
};

// PCお問い合わせ内容プレースホルダー
export const PcContentPlaceholder = ({ top, left }) => {
  return (
    <div className="pc-content-placeholder" style={{ position: 'absolute', top, left, pointerEvents: 'none' }}>
      こちらにお問い合わせ内容をご記入ください
    </div>
  );
};

// PC送信ボタン
export const PcSubmitButton = ({ top, left }) => {
  const { isMobile } = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <button className="pc-submit-button" style={{ position: 'absolute', top, left }}>
      送信する
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
      </svg>
    </button>
  );
};
