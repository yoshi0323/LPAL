import React, { useState, useEffect, useRef } from 'react';
import '../styles/animation.css';

// テキストタイピングアニメーション用のコンポーネント
export const TypingText = ({ text, className, delay = 0, style = {} }) => {
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
    <div className={className} style={style}>
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

// バリューセクション用の固定表示コンポーネント
export const ValueStickyComponents = () => {
  const [visibilityState, setVisibilityState] = useState('visible');
  const [activeItems, setActiveItems] = useState([false, false, false, false, false]);
  const [imagesInitialized, setImagesInitialized] = useState(false);
  const originalPositionsRef = useRef(null);
  const activeItemsRef = useRef(activeItems);
  const [isInitialized, setIsInitialized] = useState(false);

  // activeItemsが変更されたら参照を更新
  useEffect(() => {
    activeItemsRef.current = activeItems;
  }, [activeItems]);

  // 初期表示の設定
  useEffect(() => {
    const setInitialVisibility = () => {
      const headerElement = document.querySelector('.value-header-text');
      const subtitleElement = document.querySelector('.value-subtitle-text');
      const numberElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-number-${i + 1}`));
      const titleElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-title-${i + 1}`));

      // ヘッダーとサブタイトルの初期表示
      if (headerElement) {
        headerElement.style.cssText = `
          position: absolute;
          left: 180px;
          opacity: 1;
          visibility: visible;
          display: block;
          z-index: 50;
        `;
      }

      if (subtitleElement) {
        subtitleElement.style.cssText = `
          position: absolute;
          left: 180px;
          opacity: 1;
          visibility: visible;
          display: block;
          z-index: 50;
        `;
      }

      // 数字とタイトルの初期表示
      for (let i = 0; i < 5; i++) {
        const numberElement = numberElements[i];
        const titleElement = titleElements[i];

        if (numberElement) {
          numberElement.style.cssText = `
            position: absolute;
            left: 180px;
            opacity: ${activeItemsRef.current[i] ? '1' : '0.3'};
            visibility: visible;
            display: block;
            z-index: 50;
          `;
        }

        if (titleElement) {
          titleElement.style.cssText = `
            position: absolute;
            left: 203px;
            opacity: ${activeItemsRef.current[i] ? '1' : '0.3'};
            visibility: visible;
            display: block;
            z-index: 50;
          `;
        }
      }
    };

    // 即時実行
    setInitialVisibility();

    // DOMContentLoadedとloadイベントでも実行
    document.addEventListener('DOMContentLoaded', setInitialVisibility);
    window.addEventListener('load', setInitialVisibility);

    return () => {
      document.removeEventListener('DOMContentLoaded', setInitialVisibility);
      window.removeEventListener('load', setInitialVisibility);
    };
  }, []);

  // 初期化処理
  useEffect(() => {
    if (isInitialized) return;

    const initialize = () => {
      // 要素の初期位置を保存
      const positions = {
        header: null,
        subtitle: null,
        numbers: [],
        titles: []
      };

      const headerElement = document.querySelector('.value-header-text');
      const subtitleElement = document.querySelector('.value-subtitle-text');

      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        positions.header = {
          top: rect.top + window.scrollY
        };
      }

      if (subtitleElement) {
        const rect = subtitleElement.getBoundingClientRect();
        positions.subtitle = {
          top: rect.top + window.scrollY
        };
      }

      for (let i = 1; i <= 5; i++) {
        const numberElement = document.querySelector(`.value-small-number-${i}`);
        const titleElement = document.querySelector(`.value-small-title-${i}`);

        if (numberElement) {
          const rect = numberElement.getBoundingClientRect();
          positions.numbers[i-1] = {
            top: rect.top + window.scrollY
          };
        }

        if (titleElement) {
          const rect = titleElement.getBoundingClientRect();
          positions.titles[i-1] = {
            top: rect.top + window.scrollY
          };
        }
      }

      originalPositionsRef.current = positions;
      setIsInitialized(true);
    };

    // 初期化を実行
    initialize();
  }, [isInitialized]);

  // スクロール処理
  useEffect(() => {
    if (!isInitialized) return;

    let ticking = false;

    const handleScroll = () => {
      if (window.innerWidth <= 580) return;

      const scrollPosition = window.scrollY;
      const valueStart = 2390;
      
      // ワークスヘッダーの位置を取得
      const worksHeader = document.querySelector('.works-header-text');
      if (!worksHeader) return;
      
      const worksHeaderRect = worksHeader.getBoundingClientRect();
      const worksHeaderTop = worksHeaderRect.top + window.scrollY;
      const valueEnd = worksHeaderTop - 300;

      // 要素を取得
      const headerElement = document.querySelector('.value-header-text');
      const subtitleElement = document.querySelector('.value-subtitle-text');
      const numberElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-number-${i + 1}`));
      const titleElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-title-${i + 1}`));

      const positions = originalPositionsRef.current;
      if (!positions) return;

      // セクション内の場合
      if (scrollPosition >= valueStart && scrollPosition < valueEnd) {
        const scrollDiff = (scrollPosition - valueStart) * 0.7; // スクロール量の半分だけ移動するように修正
        const progress = Math.min((scrollPosition - valueStart) / (valueEnd - valueStart), 1);
        const fadeOutFactor = Math.max(1 - progress, 0.2);

        // ヘッダーとサブタイトルの更新
        if (headerElement && positions.header) {
          headerElement.style.cssText = `
            position: absolute;
            top: ${positions.header.top + scrollDiff}px;
            left: 180px;
            opacity: ${fadeOutFactor};
            visibility: visible;
            display: block;
            z-index: 50;
            transition: opacity 0.3s ease-out;
          `;
        }

        if (subtitleElement && positions.subtitle) {
          subtitleElement.style.cssText = `
            position: absolute;
            top: ${positions.subtitle.top + scrollDiff}px;
            left: 180px;
            opacity: ${fadeOutFactor};
            visibility: visible;
            display: block;
            z-index: 50;
            transition: opacity 0.3s ease-out;
          `;
        }

        // 数字とタイトルの更新
        for (let i = 0; i < 5; i++) {
          const numberElement = numberElements[i];
          const titleElement = titleElements[i];

          if (numberElement && positions.numbers[i]) {
            const opacity = activeItemsRef.current[i] ? fadeOutFactor : Math.min(fadeOutFactor, 0.3);
            numberElement.style.cssText = `
              position: absolute;
              top: ${positions.numbers[i].top + scrollDiff}px;
              left: 180px;
              opacity: ${opacity};
              visibility: visible;
              display: block;
              z-index: 50;
              transition: opacity 0.3s ease-out;
            `;
          }

          if (titleElement && positions.titles[i]) {
            const opacity = activeItemsRef.current[i] ? fadeOutFactor : Math.min(fadeOutFactor, 0.3);
            titleElement.style.cssText = `
              position: absolute;
              top: ${positions.titles[i].top + scrollDiff}px;
              left: 203px;
              opacity: ${opacity};
              visibility: visible;
              display: block;
              z-index: 50;
              transition: opacity 0.3s ease-out;
            `;
          }
        }

        setVisibilityState('visible');
      } else {
        // セクション外では完全に非表示
        const hideElement = (element) => {
          if (element) {
            element.style.cssText = `
              position: absolute;
              opacity: 0;
              visibility: hidden;
              display: none;
              z-index: 50;
              transition: opacity 0.3s ease-out;
            `;
          }
        };

        hideElement(headerElement);
        hideElement(subtitleElement);
        numberElements.forEach(hideElement);
        titleElements.forEach(hideElement);

        setVisibilityState('hidden');
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isInitialized]);

  // 画像要素を表示させる - シンプルな実装
  useEffect(() => {
    // バリュー画像を表示する関数
    const showValueImages = () => {
      // バリューイメージを選択
      const valueImages = document.querySelectorAll('.value-image, .value-image-1, .value-image-2, .value-image-3, .value-image-4, .value-image-5');
      const valueContainers = document.querySelectorAll('.value-image-container, .value-image-1-container, .value-image-2-container, .value-image-3-container, .value-image-4-container, .value-image-5-container');
      
      // イメージにスタイルを適用
      valueImages.forEach(img => {
        if (img) {
          img.style.opacity = '1';
          img.style.visibility = 'visible';
          img.style.display = 'block';
        }
      });
      
      // コンテナにスタイルを適用
      valueContainers.forEach(container => {
        if (container) {
          container.style.opacity = '1';
          container.style.visibility = 'visible';
          container.style.display = 'block';
        }
      });
      
      setImagesInitialized(true);
    };
    
    // 実行
    showValueImages();
    
    // DOMロード完了後にも実行
    if (document.readyState !== 'complete') {
      window.addEventListener('load', showValueImages);
    }
    
    // 遅延実行も追加
    const timeout = setTimeout(showValueImages, 500);
    
    return () => {
      window.removeEventListener('load', showValueImages);
      clearTimeout(timeout);
    };
  }, []);

  // ワークヘッダーの位置を取得
  useEffect(() => {
    const getWorksHeaderPosition = () => {
      // モバイル表示時は処理しない
      if (window.innerWidth <= 580) {
        return;
      }
      
      const worksHeader = document.querySelector('.works-header-text');
      if (worksHeader) {
        const rect = worksHeader.getBoundingClientRect();
        const position = rect.top + window.scrollY - 300; // 300pxほど手前で消え始める
        console.log('ワークヘッダー位置:', position); // デバッグ用
      } else {
        // ワークヘッダーが見つからない場合は、バリューセクションの終了位置を使用
        console.log('ワークヘッダーが見つかりません、デフォルト値を設定');
      }
    };

    // 初期ロード時とリサイズ時に位置を取得
    getWorksHeaderPosition();
    window.addEventListener('resize', getWorksHeaderPosition);
    
    // 複数回試行するための遅延実行
    const timeouts = [
      setTimeout(getWorksHeaderPosition, 500),
      setTimeout(getWorksHeaderPosition, 1000),
      setTimeout(getWorksHeaderPosition, 2000)
    ];
    
    // DOMContentLoaded イベントでも試行
    document.addEventListener('DOMContentLoaded', getWorksHeaderPosition);
    
    return () => {
      window.removeEventListener('resize', getWorksHeaderPosition);
      document.removeEventListener('DOMContentLoaded', getWorksHeaderPosition);
      timeouts.forEach(id => clearTimeout(id));
    };
  }, []);

  // バリューイメージのホバーイベントを設定
  useEffect(() => {
    if (!imagesInitialized) return;

    // マウスホバーイベントを設定する関数
    const setupHoverEvents = () => {
      // 各バリューイメージに対して処理
      for (let i = 1; i <= 5; i++) {
        const imageContainer = document.querySelector(`.value-image-${i}-container`);
        const numberElement = document.querySelector(`.value-small-number-${i}`);
        const titleElement = document.querySelector(`.value-small-title-${i}`);

        if (imageContainer && numberElement && titleElement) {
          // マウスが画像に乗ったときの処理
          imageContainer.addEventListener('mouseenter', () => {
            const newActiveItems = [...activeItemsRef.current];
            newActiveItems[i-1] = true;
            setActiveItems(newActiveItems);
          });

          // マウスが画像から離れたときの処理
          imageContainer.addEventListener('mouseleave', () => {
            const newActiveItems = [...activeItemsRef.current];
            newActiveItems[i-1] = false;
            setActiveItems(newActiveItems);
          });
        }
      }
    };

    setupHoverEvents();
  }, [imagesInitialized]);

  // リサイズ対応処理
  useEffect(() => {
    let resizeTimeout;
    
    const handleResize = () => {
      // デバウンス処理
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // モバイル→PCへの切り替え時の処理
        if (window.innerWidth > 580) {
          // 要素を強制的に再表示
          const headerElement = document.querySelector('.value-header-text');
          const subtitleElement = document.querySelector('.value-subtitle-text');
          const numberElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-number-${i + 1}`));
          const titleElements = Array.from({ length: 5 }, (_, i) => document.querySelector(`.value-small-title-${i + 1}`));
          
          // 要素が存在する場合、表示設定
          if (headerElement) headerElement.style.display = 'block';
          if (subtitleElement) subtitleElement.style.display = 'block';
          
          numberElements.forEach(element => {
            if (element) element.style.display = 'block';
          });
          
          titleElements.forEach(element => {
            if (element) element.style.display = 'block';
          });
          
          // 位置情報を再初期化
          setIsInitialized(false);
        }
      }, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // DOM操作で要素を直接制御するため、Reactのレンダリングは行わない
  return null;
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

// ワークイメージ用のアニメーションコンポーネント
export const WorkImageAnimation = () => {
  const [imagesInitialized, setImagesInitialized] = useState(false);

  useEffect(() => {
    // ワークイメージを取得して初期化
    const initializeWorkImages = () => {
      // 既存のworksImagesContainerを取得
      const container = document.querySelector('.works-images-container');
      if (!container) return;

      // 画像要素を取得
      const images = container.querySelectorAll('.works-image');
      if (images.length < 2) return;

      // 初期状態では非表示に設定
      images[0].classList.add('work-image-animated-1');
      images[1].classList.add('work-image-animated-2');
      
      setImagesInitialized(true);
    };

    // 初期化実行
    initializeWorkImages();
  }, []);

  // Intersection Observerを使って、要素が表示された時にアニメーションを開始
  useEffect(() => {
    if (!imagesInitialized) return;

    const container = document.querySelector('.works-images-container');
    if (!container) return;

    const images = container.querySelectorAll('.works-image');
    if (images.length < 2) return;

    // Intersection Observerの設定
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 画面に表示されたらvisibleクラスを追加して、アニメーションを開始
          images[0].classList.add('visible');
          images[1].classList.add('visible');
          
          // 監視を停止
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // 20%表示されたらトリガー
        rootMargin: '0px 0px -100px 0px' // 少し早めにトリガー
      }
    );

    // コンテナを監視開始
    observer.observe(container);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imagesInitialized]);

  // このコンポーネントは見えない要素として機能します
  return null;
};

// プロセスイメージ用のアニメーションコンポーネント
export const ProcessImageAnimation = () => {
  const [imagesInitialized, setImagesInitialized] = useState(false);

  useEffect(() => {
    // プロセスイメージを取得して初期化
    const initializeProcessImages = () => {
      // プロセスイメージのコンテナを取得
      const container = document.querySelector('.process-images-container');
      if (!container) return;

      // 画像ラッパーを取得
      const imageWrappers = container.querySelectorAll('.process-image-wrapper');
      if (imageWrappers.length < 4) return;

      // 各画像要素を取得
      const images = [];
      imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.process-image');
        if (img) images.push(img);
      });

      if (images.length < 4) return;

      // アニメーション用クラスを追加
      images.forEach((img, index) => {
        img.classList.add('process-image-animated');
        img.classList.add(`process-image-animated-${index + 1}`);
      });
      
      setImagesInitialized(true);
    };

    // 初期化実行
    initializeProcessImages();
  }, []);

  // Intersection Observerを使って、要素が表示された時にアニメーションを開始
  useEffect(() => {
    if (!imagesInitialized) return;

    const container = document.querySelector('.process-images-container');
    if (!container) return;

    // 画像要素を取得
    const images = [];
    const imageWrappers = container.querySelectorAll('.process-image-wrapper');
    imageWrappers.forEach(wrapper => {
      const img = wrapper.querySelector('.process-image');
      if (img) images.push(img);
    });

    if (images.length < 4) return;

    // Intersection Observerの設定
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 画面に表示されたらvisibleクラスを追加して、アニメーションを開始
          images.forEach(img => img.classList.add('visible'));
          
          // 監視を停止
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // 20%表示されたらトリガー
        rootMargin: '0px 0px -100px 0px' // 少し早めにトリガー
      }
    );

    // コンテナを監視開始
    observer.observe(container);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imagesInitialized]);

  // このコンポーネントは見えない要素として機能します
  return null;
};

// コンタクトセクション用のアニメーションを追加するためのコンポーネント
// 位置関係を崩さないようにするため、useEffectでDOM要素に直接クラスを適用
export const AnimateContactElements = () => {
  useEffect(() => {
    // アニメーションを適用する要素のセレクタリスト（要素の位置関係を維持したい順番に定義）
    const selectors = [
      // コンタクトセクション背景/画像要素のみにアニメーションを適用
      '.contact-white-footer',
      '.contact-circle-gradient',
      '.contact-background-gradient',
      '.contact-mask-image',
      '.contact-group-image',
      '.contact-second-image',
      '.contact-footer-logo',
      '.contact-footer-links-container',
      '.contact-footer-copyright'
    ];
    
    // 手動でz-indexを設定
    const zIndexMap = {
      '.contact-white-footer': 1,
      '.contact-circle-gradient': 2,
      '.contact-background-gradient': 3,
      '.contact-mask-image': 4,
      '.contact-group-image': 15,
      '.contact-second-image': 16,
      '.contact-footer-logo': 5,
      '.contact-footer-links-container': 5,
      '.contact-footer-copyright': 5
    };
    
    // モバイル用フォームの設定（アニメーションから除外し、確実に表示）
    const mobileFormElements = document.querySelectorAll('.contact-form-mobile, .contact-mobile-footer');
    mobileFormElements.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.zIndex = element.classList.contains('contact-form-mobile') ? '25' : '30';
        
        // アニメーションクラスがあれば削除
        if (element.classList.contains('fade-in-element')) {
          element.classList.remove('fade-in-element');
        }
        if (element.classList.contains('visible')) {
          element.classList.remove('visible');
        }
      }
    });
    
    // コンタクトフォーム要素からfade-in-elementクラスを削除（もし適用されていれば）
    const formSelectors = [
      '.contact-section .white-container',
      '.contact-title',
      '.contact-title-jp',
      '.contact-form',
      '.contact-form .form-row',
      '.contact-form .form-group',
      '.contact-form .form-row .form-group',
      '.contact-form .submit-button'
    ];
    
    // フォーム要素にz-index 10を設定
    formSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.style.zIndex = '10';
        // fade-in-elementクラスがあれば削除
        if (element.classList.contains('fade-in-element')) {
          element.classList.remove('fade-in-element');
        }
        // visibleクラスが付いていても削除
        if (element.classList.contains('visible')) {
          element.classList.remove('visible');
        }
        // 透明度を確実に1に設定
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
    });
    
    // インターセクションオブザーバーの設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 要素が表示されたらvisibleクラスを追加
            // 遅延は CSS側で .visible の transition-delay で設定
            entry.target.classList.add('visible');
            
            // 一度表示されたら監視を解除
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 要素が10%表示されたらトリガー
        rootMargin: '0px'
      }
    );
    
    // 背景/画像要素にのみアニメーションを適用
    selectors.forEach((selector, index) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // z-indexを明示的に設定
        element.style.zIndex = zIndexMap[selector];
        
        // 既に fade-in-element クラスを持っていない場合のみ追加
        if (!element.classList.contains('fade-in-element')) {
          element.classList.add('fade-in-element');
        }
        observer.observe(element);
      });
    });
    
    // クリーンアップ関数
    return () => {
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          observer.unobserve(element);
        });
      });
    };
  }, []);
  
  return null; // このコンポーネントは何もレンダリングしない
};

// サービスセクション用のアニメーションを追加するためのコンポーネント
export const AnimateServiceElements = () => {
  useEffect(() => {
    // サービスセクションの主要な要素
    const serviceSelectors = [
      '.service-white-container',
      '.service-header-text',
      '.service-subtitle-text',
      '.service-description-text',
      '.service-box-1',
      '.service-box-2',
      '.service-title-text',
      '.service-consulting-description',
      '.service-saas-title',
      '.service-saas-description',
      '.service-image1',
      '.service-image2',
      '.service-gradient-card1',
      '.service-gradient-card2'
    ];
    
    // アニメーション用クラスの追加と遅延設定
    const delayMap = {
      '.service-white-container': '0ms',
      '.service-header-text': '200ms',
      '.service-subtitle-text': '300ms',
      '.service-description-text': '400ms',
      '.service-box-1': '500ms',
      '.service-box-2': '600ms',
      '.service-title-text': '700ms',
      '.service-consulting-description': '800ms',
      '.service-saas-title': '900ms',
      '.service-saas-description': '1000ms',
      '.service-image1': '1100ms',
      '.service-image2': '1200ms',
      '.service-gradient-card1': '1300ms',
      '.service-gradient-card2': '1400ms'
    };
    
    // インターセクションオブザーバーの設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 要素が表示されたら遅延付きでvisibleクラスを追加
            const element = entry.target;
            const selector = serviceSelectors.find(s => element.classList.contains(s.replace('.', '')));
            
            if (selector && delayMap[selector]) {
              element.style.transitionDelay = delayMap[selector];
            }
            
            // visibleクラスを追加してアニメーション開始
            setTimeout(() => {
              element.classList.add('visible');
            }, 100); // 少し遅延させてDOMに反映させる
            
            // 一度表示されたら監視を解除
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 要素が10%表示されたらトリガー
        rootMargin: '0px'
      }
    );
    
    // 各要素にアニメーション用クラスを追加して監視を開始
    serviceSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // fade-in-elementクラスを追加
        if (!element.classList.contains('fade-in-element')) {
          element.classList.add('fade-in-element');
        }
        observer.observe(element);
      });
    });
    
    // リサイズイベントハンドラー
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // モバイル→PCに切り替わった場合
        if (window.innerWidth > 580) {
          // サービスイメージとカードを表示
          const serviceImages = document.querySelectorAll('.service-image1, .service-image2, .service-gradient-card1, .service-gradient-card2');
          serviceImages.forEach(element => {
            if (element) {
              element.style.display = 'block';
              element.style.opacity = '1';
              element.style.visibility = 'visible';
              element.classList.add('visible');
            }
          });
        }
      }, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    // クリーンアップ関数
    return () => {
      serviceSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          observer.unobserve(element);
        });
      });
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  return null; // このコンポーネントは何もレンダリングしない
};
