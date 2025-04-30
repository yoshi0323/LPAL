import React from 'react';
import { GradientIcon, LogoSvg, LegacyText, JapaneseText, RedBox, ModernDotText, DescriptionText, WhiteButton, CliffQuestionText, GradientShape, QuestionIcon, HeaderText, SupportStepText, CaseStudyText, ValueText, AboutUsText, ServiceText, GradientHeader, WhiteContainer, ContactTitle, ContactTitleJP, RedIndicator, InputField, LargeInputField, NameLabel, CompanyLabel, ContactContentLabel, PrivacyLabel, PrivacyText, CheckBox, AgreeText, NamePlaceholder, CompanyPlaceholder } from './components/main.js';
import './styles/styles.css';

function App() {
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
            </div>
            <div className="form-group">
              <PrivacyLabel />
              <PrivacyText />
              <CheckBox />
              <AgreeText />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
