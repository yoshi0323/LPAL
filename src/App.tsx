import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GradientIcon, LogoSvg, LegacyText, JapaneseText, RedBox, ModernDotText, DescriptionText, WhiteButton, CliffQuestionText, GradientShape, QuestionIcon, HeaderText, SupportStepText, CaseStudyText, ValueText, AboutUsText, ServiceText, GradientHeader, WhiteContainer, ContactTitle, ContactTitleJP, RedIndicator, InputField, LargeInputField, NameLabel, CompanyLabel, ContactContentLabel, PrivacyLabel, PrivacyText, CheckBox, AgreeText, NamePlaceholder, CompanyPlaceholder, ContentPlaceholder, SubmitButton } from './components/main.js';
import { AboutHeaderText, AboutSubtitleText, AlchemyTitleText, AlchemyDescriptionText, AboutWhiteContainer, RotatedRectangle } from './components/body.js';
import { GradientBackground, CircleGradient, ServiceWhiteContainer, ServiceHeaderText, ServiceSubtitleText, ServiceDescriptionText, ServiceBox1, ServiceBox2, ServiceImage1, ServiceImage2, ServiceGradientCard1, ServiceGradientCard2, ServiceTitleText, ServiceConsultingDescription, ServiceSaasTitle, ServiceSaasDescription } from './components/service.js';
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
  ValueSmallTitle5
} from './components/value.js';
import { WorksHeaderText, WorksSubtitleText, WorksImagesContainer, WorksCircleGradient } from './components/works.js';
import { ProcessHeaderText, ProcessSubtitleText, ProcessImagesContainer } from './components/process.js';
import { ContactCircleGradient, ContactBackgroundGradient, ContactMaskImage, ContactGroupImage, ContactSecondImage, ContactWhiteFooter, ContactFooterLogo, ContactFooterLinks, ContactFooterCopyright } from './components/contact.js';
import { CliffQuestionPopup } from './components/popup.js';
import { TypingText, FadeInOnScroll, CursorTriggerSection, AnimateOnCursor, ValueStickyComponents, WorkImageAnimation, ProcessImageAnimation, AnimateContactElements, AnimateServiceElements } from './components/animation';
import './styles/styles.css';
import './body.css';
import './styles/service.css';
import './styles/value.css';
import './styles/works.css';
import './styles/process.css';
import './styles/contact.css';
import './styles/popup.css';
import './styles/animation.css';

function App() {
  // ポップアップの表示状態を管理するためのステート
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // サービスセクションのアニメーションステート
  const [serviceAnimationTriggered, setServiceAnimationTriggered] = useState(false);
  // イメージとカードの表示ステート
  const [showServiceImage1, setShowServiceImage1] = useState(false);
  const [showServiceImage2, setShowServiceImage2] = useState(false);
  const [showGradientCard1, setShowGradientCard1] = useState(false);
  const [showGradientCard2, setShowGradientCard2] = useState(false);

  // ポップアップ開閉の関数
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // サービスセクションのアニメーショントリガー
  const triggerServiceAnimation = () => {
    setServiceAnimationTriggered(true);
    
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

  // クリック可能な要素にイベントハンドラを追加するための関数コンポーネント
  const ClickableWhiteButton = () => {
    return (
      <div className="white-button" onClick={openPopup}></div>
    );
  };

  const ClickableCliffQuestionText = () => {
    return (
      <div className="cliff-question-text" onClick={openPopup}>「2025年の崖」問題？</div>
    );
  };

  const ClickableQuestionIcon = () => {
    return (
      <div className="question-icon" onClick={openPopup}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <circle cx="16" cy="16.438" r="16" fill="#D1342D"/>
          <path d="M15.735 22.8724C16.1103 22.8724 16.4276 22.7428 16.6867 22.4836C16.9459 22.2244 17.0755 21.9072 17.0755 21.5318C17.0755 21.1565 16.9459 20.8392 16.6867 20.5801C16.4276 20.3209 16.1103 20.1913 15.735 20.1913C15.3596 20.1913 15.0424 20.3209 14.7832 20.5801C14.524 20.8392 14.3944 21.1565 14.3944 21.5318C14.3944 21.9072 14.524 22.2244 14.7832 22.4836C15.0424 22.7428 15.3596 22.8724 15.735 22.8724ZM15.8958 11.8265C16.3427 11.8265 16.7314 11.9695 17.0621 12.2555C17.3927 12.5415 17.5581 12.8989 17.5581 13.3279C17.5581 13.7211 17.4374 14.0696 17.1961 14.3735C16.9548 14.6773 16.6823 14.9633 16.3784 15.2314C15.9673 15.5889 15.6054 15.9821 15.2926 16.4111C14.9798 16.84 14.8234 17.3226 14.8234 17.8588C14.8234 18.1091 14.9172 18.3191 15.1049 18.4889C15.2926 18.6587 15.5115 18.7436 15.7618 18.7436C16.0299 18.7436 16.2578 18.6542 16.4454 18.4755C16.6331 18.2967 16.7538 18.0733 16.8074 17.8052C16.8789 17.4299 17.0397 17.0947 17.29 16.7998C17.5402 16.5049 17.8083 16.2234 18.0943 15.9553C18.5054 15.5621 18.8584 15.1331 19.1533 14.6684C19.4482 14.2037 19.5956 13.6854 19.5956 13.1134C19.5956 12.2019 19.2248 11.4556 18.483 10.8748C17.7413 10.2939 16.8789 10.0034 15.8958 10.0034C15.2166 10.0034 14.5687 10.1464 13.9521 10.4324C13.3354 10.7184 12.8663 11.1563 12.5445 11.7461C12.4194 11.9606 12.3792 12.1885 12.4239 12.4298C12.4686 12.671 12.5892 12.8542 12.7858 12.9794C13.0361 13.1223 13.2952 13.167 13.5633 13.1134C13.8314 13.0598 14.0548 12.9079 14.2336 12.6576C14.4302 12.3895 14.676 12.184 14.9709 12.041C15.2658 11.898 15.5741 11.8265 15.8958 11.8265Z" fill="#FCFCFC"/>
        </svg>
      </div>
    );
  };

  const AnimatedLegacyText = () => {
    return (
      <TypingText 
        text="Legacy to" 
        className="legacy-text"
        delay={0}
      />
    );
  };

  const AnimatedModernDotText = () => {
    return (
      <TypingText 
        text="Modern." 
        className="modern-dot-text"
        delay={1000}
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

  // 特定の要素へスクロールする関数
  const scrollToElement = (elementSelector: string) => {
    const element = document.querySelector(elementSelector);
    if (element) {
      const rect = element.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset;
      window.scrollTo({
        top: absoluteTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // クリック可能なナビゲーションコンポーネント
  const ClickableHeaderText = () => {
    return (
      <div className="header-text" onClick={() => scrollToElement('.contact-group-image')}>
        お問い合わせ
      </div>
    );
  };

  const ClickableSupportStepText = () => {
    return (
      <div className="support-step-text" onClick={() => scrollToElement('.process-header-text')}>
        サポートステップ
      </div>
    );
  };

  const ClickableCaseStudyText = () => {
    return (
      <div className="case-study-text" onClick={() => scrollToElement('.works-header-text')}>
        導入事例
      </div>
    );
  };

  const ClickableValueText = () => {
    return (
      <div className="value-text" onClick={() => scrollToElement('.value-header-text')}>
        提供価値
      </div>
    );
  };

  const ClickableAboutUsText = () => {
    return (
      <div className="about-us-text" onClick={() => scrollToElement('.about-header-text')}>
        私たちについて
      </div>
    );
  };

  const ClickableServiceText = () => {
    return (
      <div className="service-text" onClick={() => scrollToElement('.service-header-text')}>
        サービス
      </div>
    );
  };

  return (
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
                <InputField left={1132.29} />
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
        </section>

        {/* Service Section - カーソルトリガー使用 */}
        <CursorTriggerSection onTrigger={triggerServiceAnimation} className="service-section" style={{ position: 'relative', zIndex: 5 }}>
          {/* 背景要素 - 最背面に配置 */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <div className="custom-gradient-wrapper">
              <GradientBackground />
            </div>
            {/* サークルイメージを削除 */}
            {/* <CircleGradient style={{ display: 'none' }} /> */}
          </div>
          
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
          {showServiceImage1 && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15, transitionDelay: '3300ms' }}
            >
              <ServiceImage1 />
            </div>
          )}
          
          {/* 12. サービスイメージ2 */}
          {showServiceImage2 && (
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
          {showGradientCard1 && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15 }}
            >
              <ServiceGradientCard1 />
            </div>
          )}
          
          {/* 14. サービスグラディエントカード2 - 最後に表示 (最前面) */}
          {showGradientCard2 && (
            <div 
              className={`fade-in-element ${serviceAnimationTriggered ? 'visible' : ''}`}
              style={{ position: 'relative', zIndex: 15 }}
            >
              <ServiceGradientCard2 />
            </div>
          )}
        </CursorTriggerSection>

        {/* Value Section - 固定表示コンポーネント */}
        <section className="value-section">
          <ValueHeaderText />
          <ValueSubtitleText />
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
          
          {/* バリューセクション固定表示要素 */}
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
        <ContactGroupImage />
        <ContactSecondImage />
        <ContactCircleGradient />
        <ContactFooterLogo />
        <ContactFooterLinks />
        <ContactFooterCopyright />
        <CustomRedIndicator />
        
        {/* ポップアップコンポーネント */}
        <CliffQuestionPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;