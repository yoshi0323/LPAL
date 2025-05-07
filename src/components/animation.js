import React, { useState, useEffect, useRef } from 'react';
import '../styles/animation.css';

// タイピングアニメーション用のコンポーネント
export const TypingText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    let intervalId = null;
    let currentIndex = 0;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTypingComplete(true);
          setShowCursor(false);
        }
      }, 100);
    };

    // 初期化
    setDisplayText('');
    setIsTypingComplete(false);
    setShowCursor(true);

    // 遅延後にタイピングを開始
    timeoutId = setTimeout(startTyping, delay);

    // クリーンアップ
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <div className={className}>
      {displayText}
      {showCursor && !isTypingComplete && <span className="typing-cursor">|</span>}
    </div>
  );
};

// スクロールアニメーション用のコンポーネント
export const FadeInOnScroll = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // 要素が10%表示されたらアニメーション開始
        rootMargin: '0px' // ビューポートの端で判定
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={elementRef}
      className={`fade-in-element ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

// FadeInOnScrollコンポーネントを一時的に無効化
export const FadeInOnScrollTemp = ({ children }) => {
  return (
    <div style={{ position: 'relative', zIndex: 'auto' }}>
      {children}
    </div>
  );
};
