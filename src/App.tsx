import React from 'react';
import { GradientIcon, LogoSvg, LegacyText, JapaneseText, RedBox, ModernDotText, DescriptionText, WhiteButton, CliffQuestionText, GradientShape, QuestionIcon, HeaderText, SupportStepText, CaseStudyText, ValueText, AboutUsText, ServiceText, GradientHeader, WhiteContainer, ContactTitle, ContactTitleJP, RedIndicator, InputField, LargeInputField, NameLabel, CompanyLabel, ContactContentLabel, PrivacyLabel, PrivacyText, CheckBox, AgreeText, NamePlaceholder, CompanyPlaceholder, ContentPlaceholder, SubmitButton } from './components/main.js';
import { AboutHeaderText, AboutSubtitleText, AlchemyTitleText, AlchemyDescriptionText, AboutWhiteContainer, RotatedRectangle } from './components/body.js';
import { GradientBackground, CircleGradient, ServiceWhiteContainer, ServiceHeaderText, ServiceSubtitleText, ServiceDescriptionText, ServiceBox1, ServiceBox2, ServiceImage1, ServiceImage2, ServiceGradientCard1, ServiceGradientCard2, ServiceTitleText, ServiceConsultingDescription, ServiceSaasTitle, ServiceSaasDescription } from './components/service.js';
import { 
  ValueHeaderText, 
  ValueSubtitleText,
  TriangleGradient,
  ValueImagesContainer
} from './components/value.js';
import { WorksHeaderText, WorksSubtitleText, WorksImagesContainer, WorksCircleGradient } from './components/works.js';
import { ProcessHeaderText, ProcessSubtitleText, ProcessImagesContainer } from './components/process.js';
import { ContactCircleGradient, ContactBackgroundGradient, ContactMaskImage, ContactGroupImage, ContactSecondImage, ContactWhiteFooter, ContactFooterLogo, ContactFooterLinks, ContactFooterCopyright } from './components/contact.js';
import './styles/styles.css';
import './body.css';
import './styles/service.css';
import './styles/value.css';
import './styles/works.css';
import './styles/process.css';
import './styles/contact.css';

function App() {
  const CustomRedIndicator = () => {
    return (
      <div className="red-indicator" 
           style={{ 
             top: '498.73px', 
             left: '892.29px', 
             zIndex: 9999  // 高い z-index
           }}>
        <span className="required-text">必須</span>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="app">
        {/* Header Section */}
        <header className="header-section">
          <div className="header-content">
            <GradientIcon />
            <LogoSvg />
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <LegacyText />
            <JapaneseText />
            <RedBox />
            <ModernDotText />
            <DescriptionText />
            <WhiteButton />
          </div>
        </section>

        {/* Question Section */}
        <section className="question-section">
          <CliffQuestionText />
          <GradientShape />
          <QuestionIcon />
        </section>

        {/* Main Content Section */}
        <section className="main-content-section">
          <HeaderText />
          <SupportStepText />
          <CaseStudyText />
          <ValueText />
          <AboutUsText />
          <ServiceText />
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

        <ServiceWhiteContainer />
        <ServiceHeaderText />
        <ServiceSubtitleText />
        <ServiceDescriptionText />
        <ServiceBox1 />
        <ServiceBox2 />
        <ServiceImage1 />
        <ServiceImage2 />
        <ServiceTitleText />
        <ServiceConsultingDescription />
        <ServiceSaasTitle />
        <ServiceSaasDescription />
        <ServiceGradientCard1 />
        <ServiceGradientCard2 />
        <GradientBackground />
        <CircleGradient />
        <ValueHeaderText />
        <ValueSubtitleText />
        <ValueImagesContainer />
        <TriangleGradient />
        <WorksHeaderText />
        <WorksSubtitleText />
        <WorksImagesContainer />
        <WorksCircleGradient />
        <ProcessHeaderText />
        <ProcessSubtitleText />
        <ProcessImagesContainer />
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
      </div>
    </div>
  );
}

export default App;
