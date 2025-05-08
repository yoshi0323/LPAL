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

// バリューセクション用の固定表示コンポーネント
export const ValueStickyComponents = () => {
  const [visibilityState, setVisibilityState] = useState('hidden'); // 'hidden', 'visible'
  const [activeItems, setActiveItems] = useState([false, false, false, false, false]); // 各アイテムのアクティブ状態
  const observersRef = useRef([]);
  const [imagesInitialized, setImagesInitialized] = useState(false);
  const originalPositionsRef = useRef([]);
  const activeItemsRef = useRef(activeItems); // アクティブ状態を参照として保持

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

  // スクロール位置に基づく表示/非表示
  useEffect(() => {
    // バリューセクションの開始と終了位置を定義（ピクセル単位）
    const valueStart = 2390; // バリューセクションの上端位置
    const valueEnd = 4200;   // バリューセクションの終わりまで伸ばす
    
    // 要素の状態を追跡するフラグ
    let isFixed = false;
    
    // 各要素の初期位置を保存する
    const saveOriginalPositions = () => {
      // ヘッダーとサブタイトル
      const headerElement = document.querySelector('.value-header-text');
      const subtitleElement = document.querySelector('.value-subtitle-text');
      
      if (headerElement && !headerElement.dataset.originalTop) {
        const headerRect = headerElement.getBoundingClientRect();
        headerElement.dataset.originalLeft = headerRect.left + 'px';
        headerElement.dataset.originalTop = (headerRect.top + window.scrollY) + 'px';
        headerElement.dataset.height = headerRect.height + 'px';
      }
      
      if (subtitleElement && !headerElement.dataset.subtitleGap && headerElement) {
        const subtitleRect = subtitleElement.getBoundingClientRect();
        const headerRect = headerElement.getBoundingClientRect();
        
        // ヘッダーとサブタイトルの間隔を計算して保存
        const verticalGap = subtitleRect.top - (headerRect.top + headerRect.height);
        headerElement.dataset.subtitleGap = verticalGap + 'px';
        
        subtitleElement.dataset.originalLeft = subtitleRect.left + 'px';
        subtitleElement.dataset.originalTop = (subtitleRect.top + window.scrollY) + 'px';
        subtitleElement.dataset.height = subtitleRect.height + 'px';
      }
      
      // スモールナンバーとタイトル
      for (let i = 1; i <= 5; i++) {
        const numberElement = document.querySelector(`.value-small-number-${i}`);
        const titleElement = document.querySelector(`.value-small-title-${i}`);
        
        if (numberElement && !numberElement.dataset.originalTop) {
          const numberRect = numberElement.getBoundingClientRect();
          numberElement.dataset.originalLeft = numberRect.left + 'px';
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
            numberElement.dataset.horizontalGap = horizontalGap + 'px';
            
            // タイトルの位置も保存
            titleElement.dataset.originalLeft = titleRect.left + 'px';
            titleElement.dataset.originalTop = (titleRect.top + window.scrollY) + 'px';
            titleElement.dataset.height = titleRect.height + 'px';
          }
        }
      }
    };
    
    // ページロード後に初期位置を保存
    saveOriginalPositions();
    
    // スクロールイベントの節約のために、throttle関数を実装
    const throttle = (func, delay) => {
      let lastCall = 0;
      return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func(...args);
      }
    };
    
    // アイテムのアクティブ状態を更新する関数
    const updateActiveItems = (scrollPosition) => {
      // 新しい activeItems 配列を作成
      const newActiveItems = [...activeItemsRef.current];
      let isChanged = false;
      
      // 各アイテムを評価（スクロール位置だけで判定）
      for (let i = 0; i < 5; i++) {
        // スクロール位置に基づいて判定
        const basePosition = 2700; // ベース位置
        const itemSpacing = 230;   // アイテム間の間隔
        const activeRange = 250;   // アクティブになる範囲
        
        // 特定の範囲内にスクロール位置があればアクティブに
        const shouldBeActive = scrollPosition >= basePosition + (i * itemSpacing) && 
                              scrollPosition < basePosition + (i * itemSpacing) + activeRange;
        
        if (shouldBeActive !== newActiveItems[i]) {
          newActiveItems[i] = shouldBeActive;
          isChanged = true;
        }
      }
      
      // 状態が変更された場合のみ更新
      if (isChanged) {
        setActiveItems([...newActiveItems]);
      }
    };
    
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;

      // 初期位置が保存されていなければ再度試行
      if (!document.querySelector('.value-header-text')?.dataset.originalTop) {
        saveOriginalPositions();
        return; // 初期位置が取得できなければ処理を中断
      }
      
      // アクティブ状態を更新
      updateActiveItems(scrollPosition);

      // セクション内にいるとき
      if (scrollPosition >= valueStart && scrollPosition < valueEnd) {
        if (visibilityState !== 'visible') {
          setVisibilityState('visible');
        }
        
        // 固定表示に切り替える
        const headerElement = document.querySelector('.value-header-text');
        const subtitleElement = document.querySelector('.value-subtitle-text');
        
        // ヘッダーとサブタイトルを固定表示に
        const headerFixedTop = 60; // ヘッダーが固定される時の上端からの距離
        
        if (headerElement && headerElement.dataset.originalTop) {
          const headerOriginalTop = parseInt(headerElement.dataset.originalTop);
          // 現在のビューポート内位置を計算
          const headerCurrentTop = headerOriginalTop - scrollPosition;
          
          // 固定表示条件：元の位置がビューポート上部に達した場合
          if (headerCurrentTop <= headerFixedTop) {
            headerElement.style.position = 'fixed';
            headerElement.style.top = `${headerFixedTop}px`;
            headerElement.style.left = headerElement.dataset.originalLeft;
            headerElement.style.zIndex = '100';
            isFixed = true;
            
            // サブタイトルの固定表示（ヘッダーとの間隔を維持）
            if (subtitleElement && headerElement.dataset.subtitleGap && headerElement.dataset.height) {
              const headerHeight = parseInt(headerElement.dataset.height);
              const subtitleGap = parseInt(headerElement.dataset.subtitleGap);
              const subtitleTop = headerFixedTop + headerHeight + subtitleGap;
              
              subtitleElement.style.position = 'fixed';
              subtitleElement.style.top = `${subtitleTop}px`;
              subtitleElement.style.left = subtitleElement.dataset.originalLeft;
              subtitleElement.style.zIndex = '100';
              
              // 最初のスモールナンバーの固定（サブタイトルとの間隔を維持）
              if (subtitleElement.dataset.numberGap && subtitleElement.dataset.height) {
                const subtitleHeight = parseInt(subtitleElement.dataset.height);
                const numberGap = parseInt(subtitleElement.dataset.numberGap);
                const firstNumberTop = subtitleTop + subtitleHeight + numberGap;
                
                // スモールナンバーとタイトルを固定
                for (let i = 1; i <= 5; i++) {
                  const numberElement = document.querySelector(`.value-small-number-${i}`);
                  const titleElement = document.querySelector(`.value-small-title-${i}`);
                  
                  if (i === 1 && numberElement) {
                    // 最初のスモールナンバー
                    numberElement.style.position = 'fixed';
                    numberElement.style.top = `${firstNumberTop}px`;
                    numberElement.style.left = numberElement.dataset.originalLeft;
                    numberElement.style.zIndex = '100';
                    numberElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
                    
                    // 対応するタイトルも固定
                    if (titleElement) {
                      titleElement.style.position = 'fixed';
                      titleElement.style.top = `${firstNumberTop}px`;
                      titleElement.style.left = titleElement.dataset.originalLeft;
                      titleElement.style.zIndex = '100';
                      titleElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
                    }
                  } else if (i > 1 && numberElement) {
                    // 2番目以降のスモールナンバー
                    const prevNumberElement = document.querySelector(`.value-small-number-${i-1}`);
                    
                    if (prevNumberElement && prevNumberElement.dataset.nextGap && prevNumberElement.dataset.height) {
                      const prevTop = parseInt(prevNumberElement.style.top);
                      const prevHeight = parseInt(prevNumberElement.dataset.height);
                      const nextGap = parseInt(prevNumberElement.dataset.nextGap);
                      const currentTop = prevTop + prevHeight + nextGap;
                      
                      numberElement.style.position = 'fixed';
                      numberElement.style.top = `${currentTop}px`;
                      numberElement.style.left = numberElement.dataset.originalLeft;
                      numberElement.style.zIndex = '100';
                      numberElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
                      
                      // 対応するタイトルも固定
                      if (titleElement) {
                        titleElement.style.position = 'fixed';
                        titleElement.style.top = `${currentTop}px`;
                        titleElement.style.left = titleElement.dataset.originalLeft;
                        titleElement.style.zIndex = '100';
                        titleElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
                      }
                    }
                  }
                }
              }
            }
          } else {
            // まだビューポート内に収まっている場合は通常位置
            headerElement.style.position = '';
            headerElement.style.top = '';
            headerElement.style.left = '';
            headerElement.style.zIndex = '';
            isFixed = false;
            
            if (subtitleElement) {
              subtitleElement.style.position = '';
              subtitleElement.style.top = '';
              subtitleElement.style.left = '';
              subtitleElement.style.zIndex = '';
            }
            
            // スモールナンバーとタイトルも通常位置に戻す
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
        }
        
        // 固定表示されている要素の透明度のみ更新
        if (isFixed) {
          for (let i = 1; i <= 5; i++) {
            const numberElement = document.querySelector(`.value-small-number-${i}`);
            const titleElement = document.querySelector(`.value-small-title-${i}`);
            
            if (numberElement && numberElement.style.position === 'fixed') {
              numberElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
            }
            
            if (titleElement && titleElement.style.position === 'fixed') {
              titleElement.style.opacity = activeItemsRef.current[i-1] ? '1' : '0.3';
            }
          }
        }
      } 
      // セクションを出たとき
      else if (scrollPosition < valueStart || scrollPosition >= valueEnd) {
        if (visibilityState !== 'hidden') {
          setVisibilityState('hidden');
          setActiveItems([false, false, false, false, false]);
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
        }
        
        if (subtitleElement) {
          subtitleElement.style.position = '';
          subtitleElement.style.top = '';
          subtitleElement.style.left = '';
          subtitleElement.style.zIndex = '';
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
    }, 100); // 100ミリ秒ごとに実行を制限

    window.addEventListener('scroll', handleScroll);
    
    // 初期ロード時にもスクロール位置をチェック
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 依存配列を空にして無限ループを防止

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
      '.contact-background-gradient', 
      '.contact-mask-image',
      '.contact-group-image',
      '.contact-second-image',
      '.contact-circle-gradient',
      '.contact-footer-logo',
      '.contact-footer-links-container',
      '.contact-footer-copyright'
    ];
    
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
    
    formSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
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
