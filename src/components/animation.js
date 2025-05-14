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
  const [visibilityState, setVisibilityState] = useState('hidden'); // 'hidden', 'visible'
  const [activeItems, setActiveItems] = useState([false, false, false, false, false]); // 各アイテムのアクティブ状態
  const observersRef = useRef([]);
  const [imagesInitialized, setImagesInitialized] = useState(false);
  const originalPositionsRef = useRef([]);
  const activeItemsRef = useRef(activeItems); // アクティブ状態を参照として保持
  const [worksHeaderPosition, setWorksHeaderPosition] = useState(null); // ワークヘッダーの位置

  // activeItemsが変更されたら参照を更新
  useEffect(() => {
    activeItemsRef.current = activeItems;
  }, [activeItems]);

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
        setWorksHeaderPosition(position);
        console.log('ワークヘッダー位置:', position); // デバッグ用
      } else {
        // ワークヘッダーが見つからない場合は、バリューセクションの終了位置を使用
        setWorksHeaderPosition(4000); // デフォルト値
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

  // モバイル/デスクトップの切り替え時に要素をリセット
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 580;
      
      // モバイル表示に切り替わった時、固定された要素をリセット
      if (isMobileView) {
        const headerElement = document.querySelector('.value-header-text');
        const subtitleElement = document.querySelector('.value-subtitle-text');
        
        if (headerElement) {
          headerElement.style.position = '';
          headerElement.style.top = '';
          headerElement.style.left = '';
          headerElement.style.zIndex = '';
          headerElement.style.opacity = '';
        }
        
        if (subtitleElement) {
          subtitleElement.style.position = '';
          subtitleElement.style.top = '';
          subtitleElement.style.left = '';
          subtitleElement.style.zIndex = '';
          subtitleElement.style.opacity = '';
        }
        
        for (let i = 1; i <= 5; i++) {
          const numberElement = document.querySelector(`.value-small-number-${i}`);
          const titleElement = document.querySelector(`.value-small-title-${i}`);
          
          if (numberElement) {
            numberElement.style.position = '';
            numberElement.style.top = '';
            numberElement.style.left = '';
            numberElement.style.zIndex = '';
            numberElement.style.opacity = '';
          }
          
          if (titleElement) {
            titleElement.style.position = '';
            titleElement.style.top = '';
            titleElement.style.left = '';
            titleElement.style.zIndex = '';
            titleElement.style.opacity = '';
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    // 初期ロード時にも一度実行
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
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

  // スクロール位置に基づく表示/非表示
  useEffect(() => {
    // バリューセクションの開始と終了位置を定義（ピクセル単位）
    const valueStart = 2390; // バリューセクションの上端位置
    const valueEnd = worksHeaderPosition || 4200; // ワークヘッダー位置か、なければデフォルト値
    
    // 要素の状態を追跡するフラグ
    let isFixed = false;
    
    // モバイル表示の場合は何もしない
    if (window.innerWidth <= 580) {
      return;
    }
    
    // 各要素の初期位置を保存する
    const saveOriginalPositions = () => {
      // モバイル表示の場合は何もしない
      if (window.innerWidth <= 580) {
        return;
      }
      
      // ヘッダーとサブタイトル
      const headerElement = document.querySelector('.value-header-text');
      const subtitleElement = document.querySelector('.value-subtitle-text');
      
      if (headerElement && !headerElement.dataset.originalTop) {
        const headerRect = headerElement.getBoundingClientRect();
        // 位置を計算する際にwindow.scrollX（水平スクロール位置）を考慮
        headerElement.dataset.originalLeft = (headerRect.left + window.scrollX) + 'px';
        headerElement.dataset.originalTop = (headerRect.top + window.scrollY) + 'px';
        headerElement.dataset.height = headerRect.height + 'px';
      }
      
      if (subtitleElement && !headerElement.dataset.subtitleGap && headerElement) {
        const subtitleRect = subtitleElement.getBoundingClientRect();
        const headerRect = headerElement.getBoundingClientRect();
        
        // ヘッダーとサブタイトルの間隔を計算して保存
        const verticalGap = subtitleRect.top - (headerRect.top + headerRect.height);
        headerElement.dataset.subtitleGap = verticalGap + 'px';
        
        // 位置を計算する際にwindow.scrollX（水平スクロール位置）を考慮
        subtitleElement.dataset.originalLeft = (subtitleRect.left + window.scrollX) + 'px';
        subtitleElement.dataset.originalTop = (subtitleRect.top + window.scrollY) + 'px';
        subtitleElement.dataset.height = subtitleRect.height + 'px';
      }
      
      // スモールナンバーとタイトル
      for (let i = 1; i <= 5; i++) {
        const numberElement = document.querySelector(`.value-small-number-${i}`);
        const titleElement = document.querySelector(`.value-small-title-${i}`);
        
        if (numberElement && !numberElement.dataset.originalTop) {
          const numberRect = numberElement.getBoundingClientRect();
          // 位置を計算する際にwindow.scrollX（水平スクロール位置）を考慮
          numberElement.dataset.originalLeft = (numberRect.left + window.scrollX) + 'px';
          numberElement.dataset.originalTop = (numberRect.top + window.scrollY) + 'px';
          numberElement.dataset.height = numberRect.height + 'px';
          
          // 最初のスモールナンバーとサブタイトルの間隔を計算して保存
          if (i === 1 && subtitleElement && !subtitleElement.dataset.numberGap) {
            const subtitleRect = subtitleElement.getBoundingClientRect();
            const verticalGap = numberRect.top - (subtitleRect.top + subtitleRect.height);
            subtitleElement.dataset.numberGap = verticalGap + 'px';
          }
          
          // 前のスモールナンバーとの間隔を計算して保存
          if (i > 1) {
            const prevNumberElement = document.querySelector(`.value-small-number-${i-1}`);
            if (prevNumberElement) {
              const prevRect = prevNumberElement.getBoundingClientRect();
              const verticalGap = numberRect.top - (prevRect.top + prevRect.height);
              prevNumberElement.dataset.nextGap = verticalGap + 'px';
            }
          }
          
          // スモールナンバーとスモールタイトルの水平方向の差を保存
          if (titleElement) {
            const titleRect = titleElement.getBoundingClientRect();
            const horizontalGap = titleRect.left - numberRect.right;
            numberElement.dataset.titleGap = horizontalGap + 'px';
          }
        }
      }
      
      // いくつかのコンソール出力でデバッグ
      // console.log('ヘッダー初期位置:', headerElement?.dataset.originalTop);
      // console.log('サブタイトル初期位置:', subtitleElement?.dataset.originalTop);
    };

    // 初期位置を保存
    saveOriginalPositions();
    
    // スクロールハンドラの頻度を制限する関数
    const throttle = (func, delay) => {
      let lastCall = 0;
      return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func(...args);
      };
    };
    
    // スクロールイベントのハンドラ
    const handleScroll = throttle(() => {
      // モバイル表示時は処理しない
      if (window.innerWidth <= 580) {
        return;
      }

      // スクロール位置を取得
      const scrollPosition = window.scrollY;
      
      // バリューセクション内の場合
      if (scrollPosition >= valueStart && scrollPosition < valueEnd) {
        const progress = (scrollPosition - valueStart) / (valueEnd - valueStart);
        const fadeOutFactor = 1 - progress; // 進行に応じて徐々に消える係数
        
        if (visibilityState !== 'visible') {
          setVisibilityState('visible');
        }
        
        // 要素の位置を固定
        const headerElement = document.querySelector('.value-header-text');
        const subtitleElement = document.querySelector('.value-subtitle-text');
        
        // ヘッダー要素を固定
        if (headerElement) {
          // 元の位置に戻す（必要に応じて位置を修正）
            headerElement.style.position = 'fixed';
          headerElement.style.top = '100px'; // 固定位置（画面上部から100px）
          headerElement.style.left = '180px'; // 固定位置（左端から180px）
          headerElement.style.zIndex = '50';
          headerElement.style.opacity = fadeOutFactor.toString();
        }
        
        // サブタイトル要素を固定
        if (subtitleElement) {
          // 元の位置に戻す（必要に応じて位置を修正）
              subtitleElement.style.position = 'fixed';
          subtitleElement.style.top = '170px'; // 固定位置（画面上部から170px）
          subtitleElement.style.left = '180px'; // 固定位置（左端から180px）
          subtitleElement.style.zIndex = '50';
          subtitleElement.style.opacity = fadeOutFactor.toString();
        }
                
        // 各スモールナンバーとタイトルも固定
                for (let i = 1; i <= 5; i++) {
                  const numberElement = document.querySelector(`.value-small-number-${i}`);
                  const titleElement = document.querySelector(`.value-small-title-${i}`);
                  
          // 固定位置のY座標を計算（最初のナンバーは240px、以降は45pxずつ下）
          const topPosition = 240 + (i - 1) * 45;
          
          if (numberElement) {
                      numberElement.style.position = 'fixed';
            numberElement.style.top = `${topPosition}px`;
            numberElement.style.left = '180px';
            numberElement.style.zIndex = '50';
            
            // アクティブ状態に基づいて不透明度を設定（カーソルホバー時のみアクティブ）
            if (numberElement.style.position === 'fixed') {
                        // アクティブ状態とフェードアウト係数を組み合わせる（カーソルホバー時のみアクティブ）
              numberElement.style.opacity = activeItemsRef.current[i-1] ? fadeOutFactor : (0.3 * fadeOutFactor);
            }
              }
              
              if (titleElement) {
            titleElement.style.position = 'fixed';
            titleElement.style.top = `${topPosition}px`;
            titleElement.style.left = '203px';
            titleElement.style.zIndex = '50';
            
            if (titleElement.style.position === 'fixed') {
              // アクティブ状態とフェードアウト係数を組み合わせる（カーソルホバー時のみアクティブ）
              titleElement.style.opacity = activeItemsRef.current[i-1] ? fadeOutFactor : (0.3 * fadeOutFactor);
            }
          }
        }
      } 
      // セクションを出たとき
      else if (scrollPosition < valueStart || scrollPosition >= valueEnd) {
        if (visibilityState !== 'hidden') {
          setVisibilityState('hidden');
          // アクティブ状態のリセットは行わない - カーソルホバーで制御するため
        }
        
        // すべての要素を元の位置に戻す
        isFixed = false;
        
        const headerElement = document.querySelector('.value-header-text');
        const subtitleElement = document.querySelector('.value-subtitle-text');
        
        if (headerElement) {
          headerElement.style.position = '';
          headerElement.style.top = '';
          headerElement.style.left = '';
          headerElement.style.zIndex = '';
          headerElement.style.opacity = '';
        }
        
        if (subtitleElement) {
          subtitleElement.style.position = '';
          subtitleElement.style.top = '';
          subtitleElement.style.left = '';
          subtitleElement.style.zIndex = '';
          subtitleElement.style.opacity = '';
        }
        
        for (let i = 1; i <= 5; i++) {
          const numberElement = document.querySelector(`.value-small-number-${i}`);
          const titleElement = document.querySelector(`.value-small-title-${i}`);
          
          if (numberElement) {
            numberElement.style.position = '';
            numberElement.style.top = '';
            numberElement.style.left = '';
            numberElement.style.zIndex = '';
            // アクティブ状態に基づいて不透明度を設定（カーソルホバー時のみアクティブ）
            numberElement.style.opacity = activeItemsRef.current[i-1] ? 1 : 0.3;
          }
          
          if (titleElement) {
            titleElement.style.position = '';
            titleElement.style.top = '';
            titleElement.style.left = '';
            titleElement.style.zIndex = '';
            // アクティブ状態に基づいて不透明度を設定（カーソルホバー時のみアクティブ）
            titleElement.style.opacity = activeItemsRef.current[i-1] ? 1 : 0.3;
          }
        }
      }
    }, 100); // 100ミリ秒ごとに実行を制限

    window.addEventListener('scroll', handleScroll);
    
    // 初期ロード時にもスクロール位置をチェック
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [worksHeaderPosition]); // ワークヘッダー位置が変わったときにエフェクトを再実行

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
    
    // クリーンアップ関数
    return () => {
      serviceSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          observer.unobserve(element);
        });
      });
    };
  }, []);
  
  return null; // このコンポーネントは何もレンダリングしない
};
