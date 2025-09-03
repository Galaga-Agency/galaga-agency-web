"use client";

import { useState, useEffect } from "react";

export function useAppReady() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const checkAppReady = () => {
      return document.body.getAttribute('data-app-ready') === 'true';
    };

    if (checkAppReady()) {
      setIsAppReady(true);
      return;
    }

    // Watch for app ready state changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'data-app-ready' &&
            checkAppReady()) {
          setIsAppReady(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-app-ready']
    });

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      setIsAppReady(true);
      observer.disconnect();
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return isAppReady;
}