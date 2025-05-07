import React, { useState, useEffect, useRef } from 'react';
import '../styles/animation.css';

// テキストタイピングアニメーション用のコンポーネント
export const TypingText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // 遅延後にアニメーションを開始
    const delayTimeout = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!startAnimation) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, 100); // タイピング速度
      return () => clearTimeout(timeout);
    } else {
      // テキスト完成後にカーソルを点滅
      const cursorTimeout = setTimeout(() => {
        setShowCursor(prev => !prev);
      }, 500); // カーソル点滅速度
      return () => clearTimeout(cursorTimeout);
    }
  }, [displayText, text, startAnimation]);

  return (
    <div className={className}>
      {displayText}
      {showCursor && startAnimation && <span className="typing-cursor"></span>}
    </div>
  );
};

// スクロールアニメーション用のコンポーネント
export const FadeInOnScroll = ({ children, className = '', delay = 0, animation = 'fade' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // アニメーションタイプを選択する関数
  const getAnimationClass = (type) => {
    switch (type) {
      case 'slide-left':
        return 'slide-left';
      case 'slide-right':
        return 'slide-right';
      case 'zoom':
        return 'zoom-in';
      case 'fade':
      default:
        return 'fade-in-element';
    }
  };

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
  const animationClass = getAnimationClass(animation);

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

// カーソルがセクションに入った時にアニメーションをトリガーするコンポーネント
export const AnimateOnCursor = ({ children, className = '', delay = 0, animation = 'fade', containerClassName = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // アニメーションタイプを選択する関数
  const getAnimationClass = (type) => {
    switch (type) {
      case 'slide-left':
        return 'slide-left';
      case 'slide-right':
        return 'slide-right';
      case 'zoom':
        return 'zoom-in';
      case 'fade':
      default:
        return 'fade-in-element';
    }
  };

  // マウスが入った時にアニメーションをトリガー
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  // スクロールで要素が表示されたら準備状態にする（自動的にアニメーションを開始しない）
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ここでは表示状態を変更せず、マウス侵入を待つ
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : {};
  const animationClass = getAnimationClass(animation);

  return (
    <div 
      ref={containerRef}
      className={`animation-container ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
    >
      <div 
        className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

// セクション全体をカーソル侵入でアニメーションさせるコンテナ
export const CursorTriggerSection = ({ children, className = '', onTrigger = () => {}, style = {} }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseEnter = () => {
    if (!isTriggered) {
      setIsTriggered(true);
      onTrigger();
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`cursor-trigger-section ${className}`}
      onMouseEnter={handleMouseEnter}
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
