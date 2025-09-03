"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { imageCache, HERO_ASSETS } from "@/utils/imagePreloader";
import { gsap } from "gsap";

interface LoadingState {
  document: boolean;
  images: boolean;
  translations: boolean;
  gsap: boolean;
}

interface UseAppLoadingReturn {
  isLoading: boolean;
  loadingProgress: number;
  isAppReady: boolean;
}

export function useAppLoading(): UseAppLoadingReturn {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    document: false,
    images: false,
    translations: false,
    gsap: false,
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAppReady, setIsAppReady] = useState(false);
  
  // Refs for smooth animations
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const currentProgress = useRef(0);

  const updateProgress = useCallback((state: LoadingState) => {
    const completed = Object.values(state).filter(Boolean).length;
    const total = Object.keys(state).length;
    const targetProgress = Math.floor((completed / total) * 100);
    
    // Kill existing tween
    if (progressTween.current) {
      progressTween.current.kill();
    }
    
    // Smooth animation to new progress value
    progressTween.current = gsap.to(currentProgress, {
      current: targetProgress,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        setLoadingProgress(Math.floor(currentProgress.current));
      },
      onComplete: () => {
        if (targetProgress === 100) {
          // Wait a bit at 100%, then hide loading
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              setIsAppReady(true);
            }, 300);
          }, 1200);
        }
      }
    });
  }, []);

  // Check if document is actually loaded
  useEffect(() => {
    const checkDocument = () => {
      if (document.readyState === 'complete') {
        setLoadingState(prev => {
          const newState = { ...prev, document: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    if (document.readyState === 'complete') {
      checkDocument();
    } else {
      document.addEventListener('readystatechange', checkDocument);
    }

    return () => document.removeEventListener('readystatechange', checkDocument);
  }, [updateProgress]);

  // Check if GSAP is actually loaded and working
  useEffect(() => {
    const checkGSAP = () => {
      if (typeof window !== 'undefined' && 
          window.gsap && 
          typeof window.gsap.timeline === 'function' &&
          typeof window.gsap.to === 'function') {
        setLoadingState(prev => {
          const newState = { ...prev, gsap: true };
          updateProgress(newState);
          return newState;
        });
        return true;
      }
      return false;
    };

    if (checkGSAP()) return;
    
    const interval = setInterval(() => {
      if (checkGSAP()) {
        clearInterval(interval);
      }
    }, 50);
    
    const timeout = setTimeout(() => {
      clearInterval(interval);
      console.warn('GSAP loading timeout');
      setLoadingState(prev => {
        const newState = { ...prev, gsap: true };
        updateProgress(newState);
        return newState;
      });
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [updateProgress]);

  // Use your actual image preloader system
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        // Initialize your advanced image cache
        await imageCache.initialize();
        
        // Get only critical assets that need to be loaded for initial display
        const criticalAssets = HERO_ASSETS.filter(asset => asset.priority === 'critical');
        
        if (criticalAssets.length === 0) {
          setLoadingState(prev => {
            const newState = { ...prev, images: true };
            updateProgress(newState);
            return newState;
          });
          return;
        }

        // Wait for critical images to load
        const loadPromises = criticalAssets
          .filter(asset => asset.type === 'image')
          .map(asset => 
            imageCache.preloadImage(asset.path, asset.priority)
              .catch(error => {
                console.warn(`Failed to preload ${asset.path}:`, error);
              })
          );

        await Promise.all(loadPromises);
        
        setLoadingState(prev => {
          const newState = { ...prev, images: true };
          updateProgress(newState);
          return newState;
        });
        
      } catch (error) {
        console.error('Critical image preloading failed:', error);
        setLoadingState(prev => {
          const newState = { ...prev, images: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    preloadCriticalImages();
  }, [updateProgress]);

  // Check if translations are ready
  useEffect(() => {
    const checkTranslations = () => {
      try {
        const hasTranslationContext = typeof window !== 'undefined';
        
        if (hasTranslationContext) {
          setLoadingState(prev => {
            const newState = { ...prev, translations: true };
            updateProgress(newState);
            return newState;
          });
        } else {
          setTimeout(() => {
            setLoadingState(prev => {
              const newState = { ...prev, translations: true };
              updateProgress(newState);
              return newState;
            });
          }, 1000);
        }
      } catch (error) {
        console.warn('Translation check failed:', error);
        setLoadingState(prev => {
          const newState = { ...prev, translations: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    setTimeout(checkTranslations, 200);
  }, [updateProgress]);

  // Prevent scroll while loading
  useEffect(() => {
    if (isLoading) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [isLoading]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressTween.current) {
        progressTween.current.kill();
      }
    };
  }, []);

  return {
    isLoading,
    loadingProgress,
    isAppReady,
  };
}