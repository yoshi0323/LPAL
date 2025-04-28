import React from 'react';
import { GradientIcon, LogoSvg, LegacyText, JapaneseText } from './components/main.js';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <GradientIcon />
        <LogoSvg />
        <LegacyText />
        <JapaneseText />
        {/* Additional sections will be added here */}
      </div>
    </div>
  );
}

export default App;
