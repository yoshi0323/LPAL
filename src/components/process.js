import React, { useState, useEffect } from 'react';
import '../styles/process.css';

// ProcessHeaderText Component
export const ProcessHeaderText = () => {
  return (
    <div className="process-header-text">Process</div>
  );
};

// ProcessSubtitleText Component
export const ProcessSubtitleText = () => {
  return (
    <div className="process-subtitle-text">サポートステップ</div>
  );
};

// ProcessImagesContainer Component
export const ProcessImagesContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // 画面サイズの監視
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

  return (
    <div className="process-images-container">
      {isMobile ? (
        // モバイル表示用の単一画像
        <div className="process-mobile-image-wrapper">
          <img 
            src={process.env.PUBLIC_URL + "/image/main (3).png"} 
            alt="Process Mobile" 
            className="process-mobile-image"
            onError={(e) => {
              console.error("プロセスモバイル画像の読み込みに失敗しました", e);
              e.target.style.backgroundColor = "#ffdddd";
              e.target.style.width = "100%";
              e.target.style.height = "200px";
              e.target.style.display = "block";
              
              // エラーメッセージを追加
              const errorDiv = document.createElement('div');
              errorDiv.textContent = "画像の読み込みに失敗: " + e.target.src;
              errorDiv.style.color = "red";
              errorDiv.style.padding = "10px";
              e.target.parentNode.appendChild(errorDiv);
            }}
            onLoad={() => console.log("プロセスモバイル画像の読み込みに成功しました")}
          />
        </div>
      ) : (
        // PC表示用の複数画像
        <>
          <div className="process-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + "/image/Group 580.png"} 
              alt="Process Step 1" 
              className="process-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="process-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + "/image/Group 581 (1).png"} 
              alt="Process Step 2" 
              className="process-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="process-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + "/image/Group 582.png"} 
              alt="Process Step 3" 
              className="process-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="process-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + "/image/Group 583.png"} 
              alt="Process Step 4" 
              className="process-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </>
      )}
    </div>
  );
};
