import React, { useEffect, useRef, useState } from 'react';
import '../styles/works.css';

// WorksHeaderText Component
export const WorksHeaderText = () => {
  return (
    <div className="works-header-text">Works</div>
  );
};

// WorksSubtitleText Component
export const WorksSubtitleText = () => {
  return (
    <div className="works-subtitle-text">導入事例</div>
  );
};

// WorksImage1 Component
export const WorksImage1 = () => {
  return (
    <div className="works-image-1">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 570 (2).png"} 
        alt="Works Case Study" 
        className="works-image"
      />
    </div>
  );
};

// WorksImage2 Component
export const WorksImage2 = () => {
  return (
    <div className="works-image-2">
      <img 
        src={process.env.PUBLIC_URL + "/image/Group 571.png"} 
        alt="Works Case Study 2" 
        className="works-image"
      />
    </div>
  );
};

// WorksImagesContainer Component - アニメーション対応版
export const WorksImagesContainer = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  // 画面サイズの監視
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    
    // 初期チェック
    checkIsMobile();
    
    // リサイズ時の処理
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // コンポーネントマウント時に一度だけアニメーション準備
  useEffect(() => {
    if (animationTriggered || isMobile) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [animationTriggered, isMobile]);

  return (
    <div className="works-images-container" ref={containerRef}>
      {isMobile ? (
        // モバイル表示用の単一画像 - main (2).png に変更
        <img 
          src={process.env.PUBLIC_URL + "/image/main (2).png"} 
          alt="Works Mobile Content" 
          className="works-mobile-full-image"
          onError={(e) => {
            console.error("モバイル画像の読み込みに失敗しました", e);
            // 失敗時に背景色を赤くして表示
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
          onLoad={() => console.log("モバイル画像の読み込みに成功しました: main (2).png")}
        />
      ) : (
        // PC表示用の既存画像 - アニメーションステートに基づいてクラスを適用
        <>
          <img 
            src={process.env.PUBLIC_URL + "/image/Group 570 (2).png"} 
            alt="Works Case Study 1" 
            className={`works-image ${animationTriggered ? 'animate-work-image-1' : ''}`}
            style={{ opacity: animationTriggered ? 1 : 0 }}
          />
          <img 
            src={process.env.PUBLIC_URL + "/image/Group 571.png"} 
            alt="Works Case Study 2" 
            className={`works-image ${animationTriggered ? 'animate-work-image-2' : ''}`}
            style={{ opacity: animationTriggered ? 1 : 0 }}
          />
        </>
      )}
    </div>
  );
};

// WorksCircleGradient Component
export const WorksCircleGradient = () => {
  // isMobile状態を確認（window.innerWidthが1000px以下ならモバイル表示）
  const isMobile = window.innerWidth <= 1000;
  
  // モバイル表示とPC表示で少し異なるSVGを表示
  return (
    <div className="works-circle-gradient">
      {isMobile ? (
        // モバイル用のSVG - サイズを調整し、表示を確実に
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="254" viewBox="0 0 480 510" fill="none" style={{display: 'block'}}>
          <path d="M299.987 250.914L516.321 508.336C568.122 454.424 600 381.195 600 300.499C600 134.83 465.682 0.511719 299.987 0.511719C134.292 0.511719 0 134.83 0 300.499C0 381.644 32.2206 455.242 84.5494 509.233L299.987 250.914Z" fill="url(#paint0_linear_3065_215)"/>
          <defs>
            <linearGradient id="paint0_linear_3065_215" x1="299.987" y1="509.233" x2="299.987" y2="0.511719" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECECEC" stopOpacity="0"/>
              <stop offset="1" stopColor="#E73D26"/>
            </linearGradient>
          </defs>
        </svg>
      ) : (
        // PC用の既存SVG
        <svg xmlns="http://www.w3.org/2000/svg" width="480" height="510" viewBox="0 0 480 510" fill="none">
          <path d="M299.987 250.914L516.321 508.336C568.122 454.424 600 381.195 600 300.499C600 134.83 465.682 0.511719 299.987 0.511719C134.292 0.511719 0 134.83 0 300.499C0 381.644 32.2206 455.242 84.5494 509.233L299.987 250.914Z" fill="url(#paint0_linear_3065_215)"/>
          <defs>
            <linearGradient id="paint0_linear_3065_215" x1="299.987" y1="509.233" x2="299.987" y2="0.511719" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECECEC" stopOpacity="0"/>
              <stop offset="1" stopColor="#E73D26"/>
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};
