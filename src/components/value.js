import React from 'react';
import '../styles/value.css';

// ValueHeaderText Component
export const ValueHeaderText = () => {
  return (
    <div className="value-header-text">Value</div>
  );
};

// ValueSubtitleText Component
export const ValueSubtitleText = () => {
  return (
    <div className="value-subtitle-text">提供価値</div>
  );
};

// TriangleGradient Component
export const TriangleGradient = () => {
  return (
    <div className="triangle-gradient">
      <svg xmlns="http://www.w3.org/2000/svg" width="592" height="713" viewBox="0 0 592 713" fill="none">
        <path d="M179.999 0.733398L591.073 712.733H-231.074L179.999 0.733398Z" fill="url(#paint0_linear_3065_225)"/>
        <defs>
          <linearGradient id="paint0_linear_3065_225" x1="179.999" y1="0.733398" x2="179.999" y2="708.718" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7422C"/>
            <stop offset="1" stopColor="#E7422C" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// 新しい画像コンポーネント
export const ValueImage1 = () => {
  return (
    <div className="value-image-container value-image-1-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 563 (3).png"} 
        alt="Value 1" 
        className="value-image"
      />
    </div>
  );
};

export const ValueImage2 = () => {
  return (
    <div className="value-image-container value-image-2-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 564 (1).png"} 
        alt="Value 2" 
        className="value-image"
      />
    </div>
  );
};

export const ValueImage3 = () => {
  return (
    <div className="value-image-container value-image-3-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 565.png"} 
        alt="Value 3" 
        className="value-image"
      />
    </div>
  );
};

export const ValueImage4 = () => {
  return (
    <div className="value-image-container value-image-4-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 566.png"} 
        alt="Value 4" 
        className="value-image"
      />
    </div>
  );
};

export const ValueImage5 = () => {
  return (
    <div className="value-image-container value-image-5-container">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 567 (2).png"} 
        alt="Value 5" 
        className="value-image"
      />
    </div>
  );
};

// ValueNumber1 Component
export const ValueNumber1 = () => {
  return (
    <div className="value-number-1">01</div>
  );
};

// ValueTitle1 Component
export const ValueTitle1 = () => {
  return (
    <div className="value-title-1">外注コストの削減</div>
  );
};

// ValueDescription1 Component - 左辺の位置を修正
export const ValueDescription1 = () => {
  const style = {
    width: '526px',
    color: '#343434',
    fontFamily: '"Zen Kaku Gothic New"',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '175%',
    position: 'absolute',
    left: '702px', // 740px から 702px に変更
    top: '2844px',
    zIndex: 10,
  };

  return (
    <div style={style}>
      これまで外部の開発ベンダーに任せていたAI/システム開発を内製化することで、将来的な追加開発・保守コストを大幅に削減できる。 一度社内に開発ノウハウと人材が蓄積されると、新規プロジェクトや他部門への展開など横展開しやすくなる。
    </div>
  );
};

// ValueNumber2 Component
export const ValueNumber2 = () => {
  return (
    <div className="value-number-2">02</div>
  );
};

// ValueTitle2 Component
export const ValueTitle2 = () => {
  return (
    <div className="value-title-2">開発スピード・柔軟性の向上</div>
  );
};

// ValueDescription2 Component
export const ValueDescription2 = () => {
  return (
    <div className="value-description-2">
      自社スタッフが直接開発に携わるため、仕様変更や新しいアイデアへの対応が迅速になる。 社内業務フローを熟知したメンバーが開発することで、要件定義の精度が高まり失敗リスクが下がる。
    </div>
  );
};

// ValueNumber3 Component
export const ValueNumber3 = () => {
  return (
    <div className="value-number-3">03</div>
  );
};

// ValueNumber4 Component
export const ValueNumber4 = () => {
  return (
    <div className="value-number-4">04</div>
  );
};

// ValueNumber5 Component
export const ValueNumber5 = () => {
  return (
    <div className="value-number-5">05</div>
  );
};

// ValueTitle3 Component
export const ValueTitle3 = () => {
  return (
    <div className="value-title-3">人材育成・従業員満足度の向上</div>
  );
};

// ValueTitle4 Component
export const ValueTitle4 = () => {
  return (
    <div className="value-title-4">DX推進・新規事業創出の可能性</div>
  );
};

// ValueTitle5 Component
export const ValueTitle5 = () => {
  return (
    <div className="value-title-5">投資回収（ROI）の目安</div>
  );
};

// ValueDescription3 Component
export const ValueDescription3 = () => {
  return (
    <div className="value-description-3">
      AI・プログラミングなど先端技術のリスキリングは、従業員のキャリアアップにもつながり離職防止効果が期待できる。 モチベーション高く新しいスキルを得る機会を提供することで、企業ブランドや採用力の向上にも寄与。
    </div>
  );
};

// ValueDescription4 Component - 改行を追加
export const ValueDescription4 = () => {
  return (
    <div className="value-description-4">
      AIやシステム開発を自社で回せるようになると、既存事業の効率化だけでなく新規サービスの立ち上げも視野に入る。
      <br />
      企業のデジタルトランスフォーメーション(DX)を加速し、中⻑期的な競争力強化につながる
    </div>
  );
};

// ValueDescription5 Component - 改行を追加
export const ValueDescription5 = () => {
  return (
    <div className="value-description-5">
      たとえば外部への開発依頼で年間数千万円かかっていた分野を、内製化で年間
      <br />
      数百万円レベルに圧縮できるようになるケースも。
      <br />
      研修投資（数百万円規模）＋プロジェクト期間中の人件費を考慮しても、1〜3
      <br />
      年スパンで十分に回収できる可能性が高い。
      <br />
      助成金・補助金を活用すると、初期の研修費・開発費用が大きく軽減され、短
      <br />
      期間での費用対効果がさらに高まる。
    </div>
  );
};

// ValueBackgroundImage Component
export const ValueBackgroundImage = () => {
  return (
    <div className="value-background-image">
      <img 
        src={process.env.PUBLIC_URL + "/image/Frame 3298.png"} 
        alt="Value Background" 
      />
    </div>
  );
};

// ValueSmallNumber1 Component
export const ValueSmallNumber1 = () => {
  return (
    <div className="value-small-number-1" style={{ opacity: 0.3 }}>01</div>
  );
};

// ValueSmallNumber2 Component
export const ValueSmallNumber2 = () => {
  return (
    <div className="value-small-number-2" style={{ opacity: 0.3 }}>02</div>
  );
};

// ValueSmallNumber3 Component
export const ValueSmallNumber3 = () => {
  return (
    <div className="value-small-number-3" style={{ opacity: 0.3 }}>03</div>
  );
};

// ValueSmallNumber4 Component
export const ValueSmallNumber4 = () => {
  return (
    <div className="value-small-number-4" style={{ opacity: 0.3 }}>04</div>
  );
};

// ValueSmallNumber5 Component
export const ValueSmallNumber5 = () => {
  return (
    <div className="value-small-number-5" style={{ opacity: 0.3 }}>05</div>
  );
};

// ValueSmallTitle1 Component
export const ValueSmallTitle1 = () => {
  return (
    <div className="value-small-title-1" style={{ opacity: 0.3 }}>外注コストの削減</div>
  );
};

// ValueSmallTitle2 Component
export const ValueSmallTitle2 = () => {
  return (
    <div className="value-small-title-2" style={{ opacity: 0.3 }}>開発スピード・柔軟性の向上</div>
  );
};

// ValueSmallTitle3 Component
export const ValueSmallTitle3 = () => {
  return (
    <div className="value-small-title-3" style={{ opacity: 0.3 }}>人材育成・従業員満足度の向上</div>
  );
};

// ValueSmallTitle4 Component
export const ValueSmallTitle4 = () => {
  return (
    <div className="value-small-title-4" style={{ opacity: 0.3 }}>DX推進・新規事業創出の可能性</div>
  );
};

// ValueSmallTitle5 Component
export const ValueSmallTitle5 = () => {
  return (
    <div className="value-small-title-5" style={{ opacity: 0.3 }}>投資回収（ROI）の目安</div>
  );
};

// ValueSecondWhiteContainer Component
export const ValueSecondWhiteContainer = () => {
  return <div className="value-second-white-container"></div>;
};

// ValueColorBurnImage Component
export const ValueColorBurnImage = () => {
  return (
    <div className="value-color-burn-image"></div>
  );
};

// ValueImagesContainer Component - アニメーションコンポーネントを使用
export const ValueImagesContainer = () => {
  
  // マウスが画像に入った時の処理
  const handleMouseEnter = (index) => {
    // 対応するスモールナンバーとスモールタイトルのグレーアウトを解除
    const smallNumber = document.querySelector(`.value-small-number-${index}`);
    const smallTitle = document.querySelector(`.value-small-title-${index}`);
    
    if (smallNumber) {
      smallNumber.style.opacity = 1;
      smallNumber.style.transition = 'opacity 0.25s ease';
    }
    
    if (smallTitle) {
      smallTitle.style.opacity = 1;
      smallTitle.style.transition = 'opacity 0.25s ease';
    }
  };
  
  // マウスが画像から出た時の処理
  const handleMouseLeave = (index) => {
    // 対応するスモールナンバーとスモールタイトルをグレーアウト状態に戻す
    const smallNumber = document.querySelector(`.value-small-number-${index}`);
    const smallTitle = document.querySelector(`.value-small-title-${index}`);
    
    if (smallNumber) {
      smallNumber.style.opacity = 0.3;
      smallNumber.style.transition = 'opacity 0.25s ease';
    }
    
    if (smallTitle) {
      smallTitle.style.opacity = 0.3;
      smallTitle.style.transition = 'opacity 0.25s ease';
    }
  };
  
    return (
    <div className="value-images-container">
      <div 
        className="value-image-linked-wrapper" 
        onMouseEnter={() => handleMouseEnter(1)} 
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <img 
          src={process.env.PUBLIC_URL + "/image/Frame 563 (3).png"} 
          alt="Value 1" 
          className="value-image value-image-1 value-image-hover"
        />
      </div>
      
      <div 
        className="value-image-linked-wrapper" 
        onMouseEnter={() => handleMouseEnter(2)} 
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <img 
          src={process.env.PUBLIC_URL + "/image/Frame 564 (1).png"} 
          alt="Value 2" 
          className="value-image value-image-2 value-image-hover"
        />
      </div>
      
      <div 
        className="value-image-linked-wrapper" 
        onMouseEnter={() => handleMouseEnter(3)} 
        onMouseLeave={() => handleMouseLeave(3)}
      >
        <img 
          src={process.env.PUBLIC_URL + "/image/Frame 565.png"} 
          alt="Value 3" 
          className="value-image value-image-3 value-image-hover"
        />
      </div>
      
      <div 
        className="value-image-linked-wrapper" 
        onMouseEnter={() => handleMouseEnter(4)} 
        onMouseLeave={() => handleMouseLeave(4)}
      >
        <img 
          src={process.env.PUBLIC_URL + "/image/Frame 566.png"} 
          alt="Value 4" 
          className="value-image value-image-4 value-image-hover"
        />
      </div>
      
      <div 
        className="value-image-linked-wrapper" 
        onMouseEnter={() => handleMouseEnter(5)} 
        onMouseLeave={() => handleMouseLeave(5)}
      >
        <img 
          src={process.env.PUBLIC_URL + "/image/Frame 567 (2).png"} 
          alt="Value 5" 
          className="value-image value-image-5 value-image-hover"
        />
      </div>
    </div>
  );
};

// モバイル表示用のバリューコンポーネント
export const ValueMobile = () => {
  const mobileValueStyles = {
    container: {
      padding: '0 20px',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
    },
    valueItem: {
      marginBottom: '30px',
      borderLeft: '4px solid #D1342D',
      paddingLeft: '15px',
      position: 'relative',
      background: '#FFFFFF',
      padding: '20px 15px',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    valueNumber: {
      color: '#D1342D',
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '10px',
      lineHeight: '1.5',
    },
    valueTitle: {
      color: '#343434',
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '15px',
      lineHeight: '1.5',
    },
    valueDescription: {
      color: '#343434',
      fontSize: '14px',
      lineHeight: '1.8',
    }
  };

  return (
    <div className="mobile-value-section" style={mobileValueStyles.container}>
      {/* HeaderとSubtitleはスタイル定義済みのコンポーネントを使用し、CSSで位置を調整 */}
      
      {/* モバイル用のメイン画像 */}
      <img 
        src={`${process.env.PUBLIC_URL}/image/main (1).png`}
        alt="Value Mobile" 
        className="mobile-value-image"
      />
      
      <div style={mobileValueStyles.valueItem}>
        <div style={mobileValueStyles.valueNumber}>01</div>
        <div style={mobileValueStyles.valueTitle}>外注コストの削減</div>
        <div style={mobileValueStyles.valueDescription}>
          これまで外部の開発ベンダーに任せていたAI/システム開発を内製化することで、将来的な追加開発・保守コストを大幅に削減できる。 一度社内に開発ノウハウと人材が蓄積されると、新規プロジェクトや他部門への展開など横展開しやすくなる。
        </div>
      </div>
      
      <div style={mobileValueStyles.valueItem}>
        <div style={mobileValueStyles.valueNumber}>02</div>
        <div style={mobileValueStyles.valueTitle}>開発スピード・柔軟性の向上</div>
        <div style={mobileValueStyles.valueDescription}>
          自社スタッフが直接開発に携わるため、仕様変更や新しいアイデアへの対応が迅速になる。 社内業務フローを熟知したメンバーが開発することで、要件定義の精度が高まり失敗リスクが下がる。
        </div>
      </div>
      
      <div style={mobileValueStyles.valueItem}>
        <div style={mobileValueStyles.valueNumber}>03</div>
        <div style={mobileValueStyles.valueTitle}>人材育成・従業員満足度の向上</div>
        <div style={mobileValueStyles.valueDescription}>
          AI導入を通じてデジタルスキルを習得した社員は市場価値が高まり、キャリアの選択肢が広がる。 技術的な課題を自分たちで解決するやりがいと達成感は、人材流出の防止と組織の活性化につながる。
        </div>
      </div>
      
      <div style={mobileValueStyles.valueItem}>
        <div style={mobileValueStyles.valueNumber}>04</div>
        <div style={mobileValueStyles.valueTitle}>DX推進・新規事業創出の可能性</div>
        <div style={mobileValueStyles.valueDescription}>
          一度AI開発の知見を得ると他業務への応用が容易になり、全社的なDX推進を加速する。 蓄積されたAI技術とノウハウを基に、新たな商品・サービス開発を実現し、新規事業創出の可能性が広がる。
        </div>
      </div>
      
      <div style={mobileValueStyles.valueItem}>
        <div style={mobileValueStyles.valueNumber}>05</div>
        <div style={mobileValueStyles.valueTitle}>投資回収（ROI）の目安</div>
        <div style={mobileValueStyles.valueDescription}>
          コンサルティング費用や研修費用は、通常1-2年程度で外注コスト削減分で回収可能。 生産性向上や業務効率化によるコスト削減効果も加味すると、さらに短期間でのROI達成も見込める。
        </div>
      </div>
    </div>
  );
};
