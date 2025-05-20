import React, { useState, useEffect } from 'react';

// GradientBackground Component
export const GradientBackground = () => {
  // 画像URLを状態として保存（初期値をnullに設定）
  const [mobileBgUrl, setMobileBgUrl] = useState(null);
  const [desktopBgUrl, setDesktopBgUrl] = useState(null);
  // isMobileの状態を追加
  const [isMobile, setIsMobile] = useState(false);
  
  // メディアクエリの状態を監視する
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    
    // 初期値を設定
    setIsMobile(mediaQuery.matches);
    console.log('Is mobile:', mediaQuery.matches);
    
    // メディアクエリの変更を監視するリスナー
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
      console.log('Is mobile:', e.matches);
    };
    
    // リスナーを追加
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      // 古いブラウザ用のフォールバック
      mediaQuery.addListener(handleMediaChange);
    }
    
    // クリーンアップ関数
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        // 古いブラウザ用のフォールバック
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);
  
  // 画像URL生成のためのuseEffect
  useEffect(() => {
    // 完全URLを生成
    const mobileUrl = `${window.location.origin}${process.env.PUBLIC_URL}/image/bg-mask.png`;
    const desktopUrl = `${window.location.origin}${process.env.PUBLIC_URL}/image/Mask group (1).png`;
    
    // 状態を更新
    setMobileBgUrl(mobileUrl);
    setDesktopBgUrl(desktopUrl);
    
    // デバッグ情報をコンソールに出力
    console.log('Mobile background URL:', mobileUrl);
    console.log('Desktop background URL:', desktopUrl);
  }, []);
  
  return (
    <div className="gradient-background">
      <div className="mask-image-container">
        {isMobile ? 
          // モバイル表示用画像
          (mobileBgUrl && <img 
            src={mobileBgUrl}
            alt="Mobile Background" 
            className="mask-group-image" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              minHeight: '300px',
              objectFit: 'cover', 
              display: 'block',
              position: 'relative'
            }}
            onLoad={() => console.log('Mobile image loaded')}
            onError={() => console.error('Failed to load mobile image')}
          />) : 
          // デスクトップ表示用画像
          (desktopBgUrl && <img 
            src={desktopBgUrl}
            alt="Desktop Background" 
            className="mask-group-image" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              display: 'block',
              position: 'relative'
            }}
            onLoad={() => console.log('Desktop image loaded')}
            onError={() => console.error('Failed to load desktop image')}
          />)
        }
      </div>
    </div>
  );
};

// CircleGradient Component
export const CircleGradient = (props) => {
  return (
    <div className="circle-gradient" style={props.style}>
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
  // モバイル表示用のテキスト（レスポンシブ表示用）
  const mobileText = `Alchemyはさまざまな課題に対し、柔軟な
解決法を持っています。
以下は代表的なサポート内容です。`;
  
  // デスクトップ表示用のテキスト（PC表示用）
  const desktopText = `Alchemyはさまざまな課題に対し、柔軟な解決法を持っています。
以下は代表的なサポート内容です。`;
  
  return (
    <div className="service-description-text">
      {/* レスポンシブ対応 - PCではデスクトップ用テキスト、モバイルではモバイル用テキストを表示 */}
      <div className="desktop-only">{desktopText}</div>
      <div className="mobile-only">{mobileText}</div>
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
  // isMobile状態を追加
  const [isMobile, setIsMobile] = useState(false);
  
  // メディアクエリをチェック
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);
  
  return (
    <div className="service-image-container service-image1-container" 
      style={{
        display: 'flex',
        justifyContent: isMobile ? 'flex-end' : 'flex-start',
        alignItems: 'center',
        margin: isMobile ? '20px 20px 20px auto' : 'initial',
        width: isMobile ? '80%' : '100%',
        maxWidth: isMobile ? '300px' : 'none'
      }}>
      <img
        src={process.env.PUBLIC_URL + "/image/_レイヤー_1.png"}
        alt="Service Image 1"
        className="service-image service-image1"
        style={{
          width: isMobile ? '100%' : 'auto',
          height: isMobile ? 'auto' : '2640px',
          objectFit: 'contain',
          maxWidth: '351px',
          maxHeight: '291px'
        }}
        onError={(e) => {
          console.error("Image failed to load");
        }}
      />
    </div>
  );
};

// ServiceImage2 Component
export const ServiceImage2 = () => {
  // isMobile状態を追加
  const [isMobile, setIsMobile] = useState(false);
  
  // メディアクエリをチェック
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);
  
  return (
    <div className="service-image2-container"
      style={{
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        margin: isMobile ? '20px auto' : 'initial',
        width: isMobile ? '80%' : '100%',
        maxWidth: isMobile ? '300px' : 'none',
        position: 'relative'
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "220" : "264"} height={isMobile ? "150" : "182"} viewBox="0 0 264 182" fill="none" className="svg-mask" style={{position: 'absolute', zIndex: 1}}>
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
        style={{
          width: isMobile ? '100%' : 'auto',
          height: 'auto',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 2
        }}
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

// ServiceTitleText Component
export const ServiceTitleText = () => {
  return (
    <div className="service-title-text">コンサルティング</div>
  );
};

// ServiceConsultingDescription Component
export const ServiceConsultingDescription = () => {
  return (
    <div className="service-consulting-description">
      エンジニア兼コンサルタントが、AI時代の技術と実践知を、貴社の現場に。私たちは、AI駆動開発に強みを持つエンジニアリングと、現場に寄り添うDXコンサルティングを組み合わせたハイブリッドな支援を提供しています。
    </div>
  );
};

// ServiceSaasTitle Component
export const ServiceSaasTitle = () => {
  return (
    <div className="service-saas-title">AlchemySaaS（AI駆動開発ツール）</div>
  );
};

// ServiceSaasDescription Component
export const ServiceSaasDescription = () => {
  return (
    <div className="service-saas-description">
      コーディングの自動化や図の作成などをプロの設計手法を
      学習したAIによりCopilot化できるツールです。
      <br />
      （※オンプレミスにも対応）
    </div>
  );
};

// ServiceMobileImage Component - only for mobile view
export const ServiceMobileImage = () => {
  return (
    <div className="service-mobile-image-container" style={{ 
      position: 'relative',
      top: '-100px',
      width: '279px',
      maxWidth: '100%',
      margin: '0 auto',
      textAlign: 'center',
      padding: '0 0 40px',
      zIndex: 9999
    }}>
      <img
        src={`${process.env.PUBLIC_URL}/image/main.png`}
        alt="Service Mobile View"
        className="service-mobile-image"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '335px',
          margin: '0 auto',
          display: 'block',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};
