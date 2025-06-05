import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GradientIcon, LogoSvg, LegacyText, JapaneseText, RedBox, ModernDotText, DescriptionText, WhiteButton, CliffQuestionText, GradientShape, QuestionIcon, HeaderText, SupportStepText, CaseStudyText, ValueText, AboutUsText, ServiceText, GradientHeader, WhiteContainer, ContactTitle, ContactTitleJP, RedIndicator, InputField, LargeInputField, NameLabel, CompanyLabel, ContactContentLabel, PrivacyLabel, PrivacyText, CheckBox, AgreeText, NamePlaceholder, CompanyPlaceholder, ContentPlaceholder, SubmitButton, ContactButtonMobile, HamburgerMenu } from './components/main.js';
import { AboutHeaderText, AboutSubtitleText, AlchemyTitleText, AlchemyDescriptionText, AboutWhiteContainer, RotatedRectangle } from './components/body.js';
import { GradientBackground, CircleGradient, ServiceWhiteContainer, ServiceHeaderText, ServiceSubtitleText, ServiceDescriptionText, ServiceBox1, ServiceBox2, ServiceImage1, ServiceImage2, ServiceGradientCard1, ServiceGradientCard2, ServiceTitleText, ServiceConsultingDescription, ServiceSaasTitle, ServiceSaasDescription, ServiceMobileImage } from './components/service.js';
import { 
  ValueHeaderText, 
  ValueSubtitleText,
  TriangleGradient,
  ValueImagesContainer,
  ValueSmallNumber1,
  ValueSmallNumber2,
  ValueSmallNumber3,
  ValueSmallNumber4,
  ValueSmallNumber5,
  ValueSmallTitle1,
  ValueSmallTitle2,
  ValueSmallTitle3,
  ValueSmallTitle4,
  ValueSmallTitle5,
  ValueMobile
} from './components/value.js';
import { WorksHeaderText, WorksSubtitleText, WorksImagesContainer, WorksCircleGradient } from './components/works.js';
import { ProcessHeaderText, ProcessSubtitleText, ProcessImagesContainer } from './components/process.js';
import { ContactCircleGradient, ContactBackgroundGradient, ContactMaskImage, ContactGroupImage, ContactSecondImage, ContactWhiteFooter, ContactFooterLogo, ContactFooterLinks, ContactFooterCopyright, ContactFormMobile, ContactMobileFooter } from './components/contact.js';
import { CliffQuestionPopup } from './components/popup.js';
import { TypingText, FadeInOnScroll, CursorTriggerSection, AnimateOnCursor, ValueStickyComponents, WorkImageAnimation, ProcessImageAnimation, AnimateContactElements, AnimateServiceElements } from './components/animation';
import './styles/styles.css';
import './body.css';
import './styles/value.css';
import './styles/works.css';
import './styles/process.css';
import './styles/contact.css';
import './styles/popup.css';
import './styles/animation.css';
import './styles/global.css';
import './styles/service.css';

/* 
 * ===========================================
 * アプリケーション全体構造
 * ===========================================
 * このアプリケーションは、Legacyシステムをモダンなシステムに変換するサービスを提供する
 * サイトのフロントエンドコードです。主に以下のセクションで構成されています：
 * 
 * 1. ヘッダー部分 - ナビゲーションとロゴ
 * 2. ヒーローセクション - メインのキャッチフレーズとCTA
 * 3. 「2025年の崖」問題の説明セクション
 * 4. 会社概要セクション
 * 5. サービス説明セクション
 * 6. 提供価値セクション
 * 7. 導入事例（ワークス）セクション
 * 8. サポートステップ（プロセス）セクション
 * 9. お問い合わせ（コンタクト）セクション
 * 10. フッターセクション
 * 
 * モバイルとPC表示の両方に対応しており、それぞれで異なるレイアウトを提供します。
 * アニメーションはanimation.jsで定義されており、スクロールに応じた要素の表示や
 * インタラクティブな体験を提供します。
 */

// TypeScriptモジュールとして認識されるために必要な空のexport
export {};

// InputFieldコンポーネントの型を定義
interface InputFieldProps {
  left: number;
  type?: string;
}

// InputFieldコンポーネントのラッパー関数
const InputFieldWithType = (props: { left: number, type?: string }) => {
  // @ts-ignore - JavaScriptコンポーネントへの型エラーを抑制
  return <InputField {...props} />;
};

function App() {
  /* 
   * ===========================================
   * 状態変数（State Variables）
   * ===========================================
   */
  // ポップアップの表示状態
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // 各種アニメーションの状態管理
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const [serviceAnimationTriggered, setServiceAnimationTriggered] = useState(false);
  
  // サービスセクションの要素表示状態
  const [showServiceImage1, setShowServiceImage1] = useState(false);
  const [showServiceImage2, setShowServiceImage2] = useState(false);
  const [showGradientCard1, setShowGradientCard1] = useState(false);
  const [showGradientCard2, setShowGradientCard2] = useState(false);
  
  // モバイル表示かどうかの状態
  const [isMobile, setIsMobile] = useState(false);
  
  // アニメーション遅延用の状態
  const [shouldAnimateDelayed, setShouldAnimateDelayed] = useState(false);

  /* 
   * ===========================================
   * イベントハンドラ関数
   * ===========================================
   */
  // ポップアップ開閉の関数
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  /* 
   * ===========================================
   * モバイル表示検出のためのuseEffect
   * ===========================================
   * 画面サイズに基づいてモバイル表示かどうかを判定し、状態を更新します。
   * また、画面サイズが変更された場合のイベントリスナーも設定します。
   */
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 1000px)');
    
    setIsMobile(mobileMediaQuery.matches);
    
    const handleMobileMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    // ブラウザ互換性を考慮したイベントリスナー追加
    if (mobileMediaQuery.addEventListener) {
      mobileMediaQuery.addEventListener('change', handleMobileMediaChange);
    } else {
      mobileMediaQuery.addListener(handleMobileMediaChange);
    }
    
    // クリーンアップ関数
    return () => {
      if (mobileMediaQuery.removeEventListener) {
        mobileMediaQuery.removeEventListener('change', handleMobileMediaChange);
      } else {
        mobileMediaQuery.removeListener(handleMobileMediaChange);
      }
    };
  }, []);
  
  /* 
   * ===========================================
   * コンタクトポップアップのイベントハンドラ設定
   * ===========================================
   * グローバルイベント「openContactPopup」が発火したときに
   * コンタクトフォームのポップアップを表示します。
   */
  useEffect(() => {
    const handleContactPopup = () => {
      // コンタクトポップアップを開く
      openPopup();
    };
    
    window.addEventListener('openContactPopup', handleContactPopup);
    
    return () => {
      window.removeEventListener('openContactPopup', handleContactPopup);
    };
  }, []);

  /* 
   * ===========================================
   * サービスセクションのアニメーション設定
   * ===========================================
   * サービスセクションの要素を順番にアニメーション表示するための関数です。
   * PC表示とモバイル表示で異なるアニメーション挙動を持ちます。
   */
  const triggerServiceAnimation = () => {
    setServiceAnimationTriggered(true);
    
    // PC表示の場合はすぐに表示
    if (window.innerWidth > 1000) {
      setShowServiceImage1(true);
      setShowServiceImage2(true);
      setShowGradientCard1(true);
      setShowGradientCard2(true);
      return;
    }
    
    // モバイル表示の場合はアニメーションを遅延させる
    // イメージとカードの表示を遅延させる
    // 順番に表示されるように時間を調整
    setTimeout(() => {
      setShowServiceImage1(true);
    }, 3500);
    
    setTimeout(() => {
      setShowServiceImage2(true);
    }, 3800);
    
    setTimeout(() => {
      setShowGradientCard1(true);
    }, 4100);
    
    setTimeout(() => {
      setShowGradientCard2(true);
    }, 4400);
  };

  /* 
   * ===========================================
   * カスタムインジケーターコンポーネント
   * ===========================================
   * 「必須」を示す赤いインジケーターを表示するコンポーネント
   */
  const CustomRedIndicator = () => {
    return (
      <div className="red-indicator" 
           style={{ 
             top: '498.73px', 
             left: '892.29px', 
             zIndex: 9999  // 非常に高いz-index
           }}>
        <span className="required-text">必須</span>
      </div>
    );
  };

  /* 
   * ===========================================
   * クリック可能なCTAボタンコンポーネント
   * ===========================================
   * クリックするとポップアップを表示する白いボタン
   */
  const ClickableWhiteButton = () => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log('White button clicked');
      setIsPopupOpen(true);
    };
    
    return (
      <div 
        className="white-button" 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleClick(e as any)}
      ></div>
    );
  };

  /* 
   * ===========================================
   * 「2025年の崖」問題テキストコンポーネント
   * ===========================================
   * クリックするとポップアップで詳細を表示するテキスト
   */
  const ClickableCliffQuestionText = () => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log('Cliff question text clicked');
      setIsPopupOpen(true);
    };
    
    return (
      <div 
        className="cliff-question-text" 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleClick(e as any)}
      >「2025年の崖」問題？</div>
    );
  };

  /* 
   * ===========================================
   * 疑問アイコンコンポーネント
   * ===========================================
   * クリックするとポップアップで詳細を表示するアイコン
   */
  const ClickableQuestionIcon = () => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      console.log('Question icon clicked');
      setIsPopupOpen(true);
    };
    
    return (
      <div 
        className="question-icon" 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleClick(e as any)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <circle cx="16" cy="16.438" r="16" fill="#D1342D"/>
          <path d="M15.735 22.8724C16.1103 22.8724 16.4276 22.7428 16.6867 22.4836C16.9459 22.2244 17.0755 21.9072 17.0755 21.5318C17.0755 21.1565 16.9459 20.8392 16.6867 20.5801C16.4276 20.3209 16.1103 20.1913 15.735 20.1913C15.3596 20.1913 15.0424 20.3209 14.7832 20.5801C14.524 20.8392 14.3944 21.1565 14.3944 21.5318C14.3944 21.9072 14.524 22.2244 14.7832 22.4836C15.0424 22.7428 15.3596 22.8724 15.735 22.8724ZM15.8958 11.8265C16.3427 11.8265 16.7314 11.9695 17.0621 12.2555C17.3927 12.5415 17.5581 12.8989 17.5581 13.3279C17.5581 13.7211 17.4374 14.0696 17.1961 14.3735C16.9548 14.6773 16.6823 14.9633 16.3784 15.2314C15.9673 15.5889 15.6054 15.9821 15.2926 16.4111C14.9798 16.84 14.8234 17.3226 14.8234 17.8588C14.8234 18.1091 14.9172 18.3191 15.1049 18.4889C15.2926 18.6587 15.5115 18.7436 15.7618 18.7436C16.0299 18.7436 16.2578 18.6542 16.4454 18.4755C16.6331 18.2967 16.7538 18.0733 16.8074 17.8052C16.8789 17.4299 17.0397 17.0947 17.29 16.7998C17.5402 16.5049 17.8083 16.2234 18.0943 15.9553C18.5054 15.5621 18.8584 15.1331 19.1533 14.6684C19.4482 14.2037 19.5956 13.6854 19.5956 13.1134C19.5956 12.2019 19.2248 11.4556 18.483 10.8748C17.7413 10.2939 16.8789 10.0034 15.8958 10.0034C15.2166 10.0034 14.5687 10.1464 13.9521 10.4324C13.3354 10.7184 12.8663 11.1563 12.5445 11.7461C12.4194 11.9606 12.3792 12.1885 12.4239 12.4298C12.4686 12.671 12.5892 12.8542 12.7858 12.9794C13.0361 13.1223 13.2952 13.167 13.5633 13.1134C13.8314 13.0598 14.0548 12.9079 14.2336 12.6576C14.4302 12.3895 14.676 12.184 14.9709 12.041C15.2658 11.898 15.5741 11.8265 15.8958 11.8265Z" fill="#FCFCFC"/>
        </svg>
      </div>
    );
  };

  /* 
   * ===========================================
   * タイピングアニメーション付きLegacyテキスト
   * ===========================================
   * ヒーローセクションの「Legacy to」テキストを
   * タイピングアニメーションで表示するコンポーネント
   */
  const AnimatedLegacyText = () => {
    const style = window.innerWidth <= 1000 ? {
      position: 'absolute',
      left: '24px',
      top: '148.13px',
      color: '#D1342D',
      fontFamily: '"Lexend Deca", sans-serif',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '100%',
      zIndex: 10
    } : {};
    
    return (
      <TypingText 
        text="Legacy to" 
        className="legacy-text"
        delay={0}
        style={style}
      />
    );
  };

  /* 
   * ===========================================
   * タイピングアニメーション付きModernテキスト
   * ===========================================
   * ヒーローセクションの「Modern.」テキストを
   * タイピングアニメーションで表示するコンポーネント
   */
  const AnimatedModernDotText = () => {
    const style = window.innerWidth <= 1000 ? {
      position: 'absolute',
      left: '358px',
      top: '148.13px',
      color: '#FCFCFC',
      fontSize: '24px',
      lineHeight: '100%',
      zIndex: 10
    } : {};
    
    return (
      <TypingText 
        text="Modern." 
        className="modern-dot-text"
        delay={1000}
        style={style}
      />
    );
  };

  // FadeInOnScrollコンポーネントを一時的に無効化
  const FadeInOnScrollTemp = ({ children }: { children: React.ReactNode }) => {
    return (
      <div style={{ position: 'relative', zIndex: 'auto' }}>
        {children}
      </div>
    );
  };

  /* 
   * ===========================================
   * 特定の要素へのスクロール関数
   * ===========================================
   * 指定されたセレクターの要素へスムーズにスクロールする関数
   */
  const scrollToElement = (elementSelector: string) => {
    console.log(`Attempting to scroll to: ${elementSelector}`);
    const element = document.querySelector(elementSelector);
    
    if (element) {
      console.log(`Element found: ${elementSelector}`);
      const rect = element.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset;
      window.scrollTo({
        top: absoluteTop - 80,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element not found: ${elementSelector}`);
      // フォールバック - セレクターが見つからない場合はIDを試す
      if (elementSelector.startsWith('.')) {
        const idSelector = elementSelector.substring(1);
        const elementById = document.getElementById(idSelector);
        if (elementById) {
          console.log(`Element found by ID: ${idSelector}`);
          const rect = elementById.getBoundingClientRect();
          const absoluteTop = rect.top + window.pageYOffset;
          window.scrollTo({
            top: absoluteTop - 80,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  /* 
   * ===========================================
   * PC版表示時のサービスアニメーション自動トリガー
   * ===========================================
   * PC版表示の場合、初期ロード時にサービスセクションの
   * アニメーションを自動的に開始します。
   */
  useEffect(() => {
    // PC版の場合は、初期ロード時にサービスアニメーションをトリガー
    if (window.innerWidth > 1000 && !serviceAnimationTriggered) {
      setTimeout(() => {
        triggerServiceAnimation();
      }, 500);
    }
  }, [serviceAnimationTriggered]);

  /* 
   * ===========================================
   * クリック可能なナビゲーションコンポーネント群
   * ===========================================
   * 以下のコンポーネントはヘッダーナビゲーションに配置され、
   * クリックすると対応するセクションに自動スクロールします。
   */

  /* 
   * お問い合わせへスクロールするナビゲーションテキスト
   */
  const ClickableHeaderText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      // スクロール位置を600px下に調整（元の位置 + 600px）
      const scrollPosition = isMobileDevice ? 4800 : 6000; // 元の値4200/5400から600px増加
      
      // お問い合わせセクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableHeaderText - Direct scroll to contact section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="header-text" onClick={handleClick}>
        お問い合わせ
      </div>
    );
  };

  /* 
   * サポートステップへスクロールするナビゲーションテキスト
   */
  const ClickableSupportStepText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      // スクロール位置を600px下に調整（元の位置 + 600px）
      const scrollPosition = isMobileDevice ? 4300 : 5300; // 元の値3700/4700から600px増加
      
      // サポートステップセクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableSupportStepText - Direct scroll to support step section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="support-step-text" onClick={handleClick}>
        サポートステップ
      </div>
    );
  };

  /* 
   * 導入事例へスクロールするナビゲーションテキスト
   */
  const ClickableCaseStudyText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      const scrollPosition = isMobileDevice ? 3300 : 4200; // モバイルとデスクトップで異なる位置
      
      // 導入事例セクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableCaseStudyText - Direct scroll to case study section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="case-study-text" onClick={handleClick}>
        導入事例
      </div>
    );
  };

  /* 
   * 提供価値へスクロールするナビゲーションテキスト
   */
  const ClickableValueText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      const scrollPosition = isMobileDevice ? 1860 : 2833; // モバイルとデスクトップで異なる位置
      
      // 提供価値セクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableValueText - Direct scroll to value section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="value-text" onClick={handleClick}>
        提供価値
      </div>
    );
  };

  /* 
   * 私たちについてへスクロールするナビゲーションテキスト
   */
  const ClickableAboutUsText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      const scrollPosition = isMobileDevice ? 900 : 1100; // モバイルとデスクトップで異なる位置
      
      // 私たちについてセクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableAboutUsText - Direct scroll to about us section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="about-us-text" onClick={handleClick}>
        私たちについて
      </div>
    );
  };

  /* 
   * サービスへスクロールするナビゲーションテキスト
   */
  const ClickableServiceText = () => {
    const handleClick = () => {
      // デバイスによって適切なスクロール位置を計算
      const isMobileDevice = window.innerWidth <= 1000;
      const scrollPosition = isMobileDevice ? 1400 : 1800; // モバイルとデスクトップで異なる位置
      
      // サービスセクションへ直接スクロール
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      console.log(`Clicked ClickableServiceText - Direct scroll to service section (${isMobileDevice ? 'mobile' : 'desktop'}: ${scrollPosition}px)`);
    };
    
    return (
      <div className="service-text" onClick={handleClick}>
        サービス
      </div>
    );
  };

  return (
    /* 
     * ===========================================
     * アプリケーションコンテナ
     * ===========================================
     * 全てのセクションを含むメインのコンテナです。
     * このコンテナ内に各セクションが配置されています。
     */
    <div className="app-container">
      {/* バリューセクションのアニメーション処理 */}
      <ValueStickyComponents />
      
      {/* ワークイメージとプロセスイメージのアニメーション処理 */}
      <WorkImageAnimation />
      <ProcessImageAnimation />
      
      {/* コンタクトセクションのアニメーション処理 */}
      <AnimateContactElements />
      
      {/* サービスセクションのアニメーション処理 */}
      <AnimateServiceElements />

      <div className="app">
        {/* Header Section */}
        <header className="header-section">
          <div className="header-content">
            <GradientIcon />
            <LogoSvg />
            {/* レスポンシブ表示時のハンバーガーメニュー */}
            {isMobile && <HamburgerMenu />}
            {/* 通常のメニュー項目 - レスポンシブ時はCSSで非表示 */}
            <ClickableHeaderText />
            <ClickableSupportStepText />
            <ClickableCaseStudyText />
            <ClickableValueText />
            <ClickableAboutUsText />
            <ClickableServiceText />
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <AnimatedLegacyText />
            <JapaneseText />
            <RedBox />
            <AnimatedModernDotText />
            <DescriptionText />
            <ClickableWhiteButton />
          </div>
        </section>

        {/* Question Section */}
        <section className="question-section">
          <ClickableCliffQuestionText />
          <GradientShape />
          <ClickableQuestionIcon />
        </section>

        {/* Main Content Section */}
        <section className="main-content-section">
          <GradientHeader />
          <AboutHeaderText />
          <AboutSubtitleText />
          <AlchemyTitleText />
          <AlchemyDescriptionText />
          <AboutWhiteContainer />
          <RotatedRectangle />
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <WhiteContainer />
          <ContactTitle />
          <ContactTitleJP />
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <NameLabel />
                <RedIndicator top={209.73} left={892.29} />
                <InputField left={892.29} />
                <NamePlaceholder left={892.29} top={240.23} />
              </div>
              <div className="form-group">
                <CompanyLabel />
                <RedIndicator top={209.73} left={1132.29} />
                <InputFieldWithType left={1132.29} type="company" />
                <CompanyPlaceholder left={1132.29} top={240.23} />
              </div>
            </div>
            <div className="form-group">
              <ContactContentLabel />
              <RedIndicator top={319.73} left={892.29} />
              <LargeInputField />
              <ContentPlaceholder />
            </div>
            <div className="form-group">
              <PrivacyLabel />
              <PrivacyText />
              <CheckBox />
              <AgreeText />
            </div>
            <SubmitButton />
          </div>
          
          {/* Mobile contact button - hidden by default, shown on small screens */}
          <ContactButtonMobile />
        </section>

        {/* Service Section - カーソルトリガー使用 */}
        <CursorTriggerSection className="service-section" onTrigger={() => setServiceAnimationTriggered(true)} style={{ position: 'relative', height: '830px', marginTop: '0px', marginBottom: '200px' }}>
          {/* 背景要素 - 最背面に配置 */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <div className="custom-gradient-wrapper">
              <GradientBackground />
            </div>
            {/* サークルイメージを削除 */}
            {/* <CircleGradient style={{ display: 'none' }} /> */}
          </div>
          
          {/* モバイル用の画像表示はセクションの外に移動 */}
          
          {/* 1. サービス白コンテナ - 最初に表示 (最背面) */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 3, transitionDelay: '0ms' }}
          >
            <ServiceWhiteContainer />
          </div>
          
          {/* 2. サービスヘッダー - 次に表示される重要なテキスト (上部) */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '600ms' }}
          >
            <ServiceHeaderText />
          </div>
          
          {/* 3. サービスサブタイトル (上部) */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '900ms' }}
          >
            <ServiceSubtitleText />
          </div>
          
          {/* 4. サービス説明文 (上部) */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '1200ms' }}
          >
            <ServiceDescriptionText />
          </div>
          
          {/* 5. サービスボックス左 - ゆっくりと左から入る (中央左) */}
          <div 
            className={`slide-left ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '1500ms' }}
          >
            <ServiceBox1 />
          </div>
          
          {/* 6. サービスボックス右 - ゆっくりと右から入る (中央右) */}
          <div 
            className={`slide-right ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '1800ms' }}
          >
            <ServiceBox2 />
          </div>
          
          {/* 7. サービスタイトル (下部テキスト開始) */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '2100ms' }}
          >
            <ServiceTitleText />
          </div>
          
          {/* 8. サービスコンサルティングの説明 */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '2400ms' }}
          >
            <ServiceConsultingDescription />
          </div>
          
          {/* 9. SaaSのタイトル */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '2700ms' }}
          >
            <ServiceSaasTitle />
          </div>
          
          {/* 10. SaaSの説明 */}
          <div 
            className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
            style={{ position: 'relative', zIndex: 10, transitionDelay: '3000ms' }}
          >
            <ServiceSaasDescription />
          </div>
          
          {/* 11. サービスイメージ1 - ボックスの後に表示 */}
          {!isMobile && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15, transitionDelay: '3300ms' }}
            >
              <ServiceImage1 />
            </div>
          )}
          
          {/* 12. サービスイメージ2 */}
          {!isMobile && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15, transitionDelay: '3600ms' }}
            >
              <div className="service-image2-container" style={{ overflow: 'visible', position: 'absolute', width: '264px', height: '182px' }}>
                {/* SVGマスク */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="264" 
                  height="182" 
                  viewBox="0 0 264 182" 
                  fill="none" 
                  className="svg-mask"
                  style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}
                >
                  <path d="M256 0H8C3.58172 0 0 3.58172 0 8V174C0 178.418 3.58171 182 7.99999 182H256C260.418 182 264 178.418 264 174V8C264 3.58172 260.418 0 256 0Z" fill="url(#paint0_linear_3065_442)"/>
                  <defs>
                    <linearGradient id="paint0_linear_3065_442" x1="132" y1="0" x2="132" y2="182" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E7422C"/>
                      <stop offset="1" stopColor="#F6835F" stopOpacity="0.5"/>
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* 画像 */}
                <img
                  src={`${process.env.PUBLIC_URL}/image/236f300a4a1f06bb60f0102218f5fd17d13d18d8.png`}
                  alt="Service Image 2"
                  className="service-image2"
                  style={{ 
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    width: 'calc(100% - 8px)',
                    height: 'calc(100% - 8px)',
                    objectFit: 'cover',
                    objectPosition: 'left center',
                    zIndex: 6,
                    borderRadius: '4px'
                  }}
                  onError={(e) => {
                    console.error("Image failed to load");
                    (e.target as HTMLImageElement).style.backgroundColor = "#D1342D";
                  }}
                />
              </div>
            </div>
          )}
          
          {/* 13. サービスグラディエントカード1 - 最後に表示 (最前面) */}
          {!isMobile && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15 }}
            >
              <ServiceGradientCard1 />
            </div>
          )}
          
          {/* 14. サービスグラディエントカード2 - 最後に表示 (最前面) */}
          {!isMobile && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15 }}
            >
              <ServiceGradientCard2 />
            </div>
          )}
        </CursorTriggerSection>

        {/* モバイルの場合のみ表示するサービス画像を外に出す */}
        {isMobile && <div className="mobile-service-section" style={{ position: 'relative', marginTop: '-200px', marginBottom: '0px' }}>
          <ServiceMobileImage />
        </div>}

        {/* Value Section - 固定表示コンポーネント */}
        <section className="value-section">
          {/* ヘッダーとサブタイトルは常に表示 */}
          <ValueHeaderText />
          <ValueSubtitleText />
          
          {/* モバイル表示時のメイン画像 - モバイル時はこれ以外の要素は非表示 */}
          {isMobile && (
            <div 
              className="value-mobile-main-image"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '2020px',
                width: '100%',
                maxWidth: '335px',
                zIndex: 9999
              }}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/image/main (1).png`} 
                alt="Value Mobile Main"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          )}
          
          {/* PC表示時のみ表示される要素 */}
          <ValueSmallNumber1 />
          <ValueSmallNumber2 />
          <ValueSmallNumber3 />
          <ValueSmallNumber4 />
          <ValueSmallNumber5 />
          <ValueSmallTitle1 />
          <ValueSmallTitle2 />
          <ValueSmallTitle3 />
          <ValueSmallTitle4 />
          <ValueSmallTitle5 />
          <ValueImagesContainer />
          <TriangleGradient />
          
          {/* バリューセクション固定表示要素 - PC表示時のみ適用 */}
          <ValueStickyComponents />
        </section>

        <WorksHeaderText />
        <WorksSubtitleText />
        <WorksImagesContainer />
        <WorksCircleGradient />
        <WorkImageAnimation />
        <ProcessHeaderText />
        <ProcessSubtitleText />
        <ProcessImagesContainer />
        <ProcessImageAnimation />
        <ContactWhiteFooter />
        <ContactBackgroundGradient />
        <ContactMaskImage />
        
        {!isMobile && (
          <>
            {/* Contactタイトル - contact-background-gradientの上辺から80px */}
            <div style={{
              position: 'absolute',
              bottom: 'calc(8vh + 60px + clamp(600px, 68vw, 978px) - 80px - 60px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 16,
              textAlign: 'center'
            }}>
              <div style={{
                color: '#fff',
                fontFamily: '"Lexend Deca", sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '100%',
                marginBottom: '8px'
              }}>
                Contact
              </div>
              <div style={{
                color: '#fff',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '150%'
              }}>
                お問い合わせ
              </div>
            </div>
            
            {/* フォームの白いコンテナ - contact-background-gradientの上辺から232px */}
            <div style={{
              position: 'absolute',
              bottom: 'calc(8vh + 60px + clamp(600px, 68vw, 978px) - 232px - 666px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '666px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              zIndex: 15,
              padding: '40px',
              boxSizing: 'border-box'
            }}>
              {/* お名前ラベルと入力フィールド */}
              <div style={{
                position: 'absolute',
                left: '40px',
                top: '40px',
                zIndex: 20,
                color: '#333',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                <span style={{ 
                  backgroundColor: '#D1342D',
                  color: '#fff',
                  padding: '2px 6px',
                  fontSize: '12px',
                  borderRadius: '2px',
                  marginRight: '8px'
                }}>
                  必須
                </span>
                お名前
              </div>
              <input 
                type="text" 
                placeholder="山田太郎" 
                style={{
                  position: 'absolute',
                  left: '40px',
                  top: '70px',
                  width: '330px',
                  height: '50px',
                  border: '2px solid #ddd',
                  borderRadius: '4px',
                  padding: '15px',
                  fontSize: '16px',
                  fontFamily: '"Zen Kaku Gothic New"',
                  boxSizing: 'border-box'
                }}
              />
              
              {/* 企業名ラベルと入力フィールド */}
              <div style={{
                position: 'absolute',
                left: '410px',
                top: '40px',
                zIndex: 20,
                color: '#333',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                <span style={{ 
                  backgroundColor: '#D1342D',
                  color: '#fff',
                  padding: '2px 6px',
                  fontSize: '12px',
                  borderRadius: '2px',
                  marginRight: '8px'
                }}>
                  必須
                </span>
                企業名
              </div>
              <input 
                type="text" 
                placeholder="企業名を入力してください" 
                style={{
                  position: 'absolute',
                  left: '410px',
                  top: '70px',
                  width: '330px',
                  height: '50px',
                  border: '2px solid #ddd',
                  borderRadius: '4px',
                  padding: '15px',
                  fontSize: '16px',
                  fontFamily: '"Zen Kaku Gothic New"',
                  boxSizing: 'border-box'
                }}
              />
              
              {/* お問い合わせ内容ラベルとテキストエリア */}
              <div style={{
                position: 'absolute',
                left: '40px',
                top: '150px',
                zIndex: 20,
                color: '#333',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                <span style={{ 
                  backgroundColor: '#D1342D',
                  color: '#fff',
                  padding: '2px 6px',
                  fontSize: '12px',
                  borderRadius: '2px',
                  marginRight: '8px'
                }}>
                  必須
                </span>
                お問い合わせ内容
              </div>
              <textarea 
                placeholder="こちらにお問い合わせ内容をご記入ください"
                style={{
                  position: 'absolute',
                  left: '40px',
                  right: '40px',
                  top: '180px',
                  height: '120px',
                  border: '2px solid #ddd',
                  borderRadius: '4px',
                  padding: '15px',
                  fontSize: '16px',
                  fontFamily: '"Zen Kaku Gothic New"',
                  resize: 'none',
                  boxSizing: 'border-box'
                }}
              ></textarea>
              
              {/* 個人情報の取り扱いについてのラベル */}
              <div style={{
                position: 'absolute',
                left: '40px',
                top: '320px',
                zIndex: 20,
                color: '#333',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                <span style={{ 
                  backgroundColor: '#D1342D',
                  color: '#fff',
                  padding: '2px 6px',
                  fontSize: '12px',
                  borderRadius: '2px',
                  marginRight: '8px'
                }}>
                  必須
                </span>
                個人情報の取り扱いについての同意
              </div>
              
              {/* プライバシーテキスト - 普通のテキスト表示 */}
              <div style={{
                position: 'absolute',
                left: '40px',
                right: '40px',
                top: '350px',
                zIndex: 20,
                color: '#333',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '14px',
                lineHeight: '150%'
              }}>
                問い合わせにあたり当社がお預かりする個人情報については、「個人情報の取り扱いについて」に従い、取り扱います。同意いただける場合は、「同意する」にチェックを入れてください。
              </div>
              
              {/* チェックボックス */}
              <div style={{
                position: 'absolute',
                left: '40px',
                top: '420px',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                color: '#333'
              }}>
                <input 
                  type="checkbox" 
                  id="privacy-checkbox" 
                  style={{
                    marginRight: '8px',
                    transform: 'scale(1.2)'
                  }}
                />
                <label htmlFor="privacy-checkbox" style={{
                  fontFamily: '"Zen Kaku Gothic New"',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}>
                  同意する
                </label>
              </div>
              
              {/* 送信ボタン */}
              <button style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '480px',
                width: '200px',
                height: '50px',
                backgroundColor: '#D1342D',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontFamily: '"Zen Kaku Gothic New"',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                送信する
              </button>
            </div>
          </>
        )}
        <ContactFormMobile />
        <ContactCircleGradient />
        <ContactFooterLogo />
        <ContactFooterLinks />
        <ContactFooterCopyright />
        <ContactMobileFooter />
        
        {/* ポップアップコンポーネント - 最前面に配置 */}
        <CliffQuestionPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;