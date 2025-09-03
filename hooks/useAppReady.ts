"use client";

import { useState, useEffect } from "react";

export function useAppReady() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const checkAppReady = () => {
      // Check if document is loaded
      if (document.readyState !== 'complete') return false;
      
      // Check if the main content is visible (opacity 1)
      const mainElement = document.querySelector('main');
      if (!mainElement) return false;
      
      const computedStyle = window.getComputedStyle(mainElement);
      return computedStyle.opacity === '1';
    };

    const handleAppReady = () => {
      if (checkAppReady()) {
        // Add a small buffer to ensure everything is settled
        setTimeout(() => {
          setIsAppReady(true);
        }, 200);
      }
    };

    // Check immediately
    if (checkAppReady()) {
      handleAppReady();
      return;
    }

    // Set up observers and listeners
    const observer = new MutationObserver(() => {
      handleAppReady();
    });

    const handleLoad = () => {
      setTimeout(handleAppReady, 100);
    };

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target === document.querySelector('main') && e.propertyName === 'opacity') {
        handleAppReady();
      }
    };

    // Start observing
    if (document.querySelector('main')) {
      observer.observe(document.querySelector('main')!, {
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }

    document.addEventListener('transitionend', handleTransitionEnd);
    window.addEventListener('load', handleLoad);

    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      setIsAppReady(true);
    }, 2000);

    return () => {
      observer.disconnect();
      document.removeEventListener('transitionend', handleTransitionEnd);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return isAppReady;
}