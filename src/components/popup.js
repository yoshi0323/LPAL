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

// CliffQuestionPopup Component - 新しい画像を使用
export const CliffQuestionPopup = ({ isOpen, onClose }) => {
  // モバイル表示かどうかを判定
  const [isMobile, setIsMobile] = React.useState(false);

  // 画面サイズの変更を監視
  React.useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth <= 767;
      console.log(`Window width: ${window.innerWidth}, isMobile: ${isMobileView}`);
      setIsMobile(isMobileView);
    };
    
    // 初期チェック
    checkIfMobile();
    
    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', checkIfMobile);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  if (!isOpen) return null;
  
  // 画像のパスを正確に設定
  const popupImagePath = isMobile 
    ? `${process.env.PUBLIC_URL}/image/contents01 (1).png` 
    : `${process.env.PUBLIC_URL}/image/contents01.png`;
  
  console.log(`Current display mode: ${isMobile ? 'Mobile' : 'Desktop'}, Image path: ${popupImagePath}`);
  
  return (
    <div className="popup-container">
      <img 
        src={`${process.env.PUBLIC_URL}/image/Group 592.png`}
        alt="Close popup" 
        className="popup-custom-close-button" 
        onClick={onClose}
      />
      <Popup isOpen={true} onClose={onClose}>
        <div className="popup-images-wrapper">
          <div className="popup-image-container">
            <img 
              src={popupImagePath}
              alt="2025年の崖問題" 
              className="popup-image" 
              style={isMobile ? {
                position: 'absolute',
                top: '40px',
                width: '100%',
                height: 'auto',
                maxWidth: '327px',
                marginTop: 0
              } : {}}
              onError={(e) => {
                console.error("Failed to load image:", e.target.src);
                e.target.src = `${process.env.PUBLIC_URL}/image/contents01.png`; // フォールバック画像
              }}
            />
          </div>
          <div className="popup-bottom-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/image/Group 628.png`}
              alt="Bottom Image" 
              className="popup-bottom-image" 
              style={isMobile ? {
                width: '100%',
                height: 'auto',
                maxWidth: '327px'
              } : {}}
            />
          </div>
        </div>
      </Popup>
    </div>
  );
};
