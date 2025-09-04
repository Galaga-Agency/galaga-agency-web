"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { assetCache, CRITICAL_ASSETS } from "@/utils/asset-cache";
import { gsap } from "gsap";

interface LoadingState {
  document: boolean;
  assets: boolean;
  translations: boolean;
  gsap: boolean;
}

interface UseAppLoadingReturn {
  isLoading: boolean;
  loadingProgress: number;
  isAppReady: boolean;
  cachedVideoUrl: string | null;
}

const HERO_VIDEO_URL = "/assets/videos/galaga-presentation.mp4";

export function useAppLoading(): UseAppLoadingReturn {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    document: false,
    assets: false,
    translations: false,
    gsap: false,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAppReady, setIsAppReady] = useState(false);
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null);

  const progressTween = useRef<gsap.core.Tween | null>(null);
  const currentProgress = useRef(0);
  const scrollLocked = useRef(false);
  const hasLoadedOnce = useRef(false);

  const updateProgress = useCallback((state: LoadingState) => {
    const completed = Object.values(state).filter(Boolean).length;
    const total = Object.keys(state).length;
    const targetProgress = Math.floor((completed / total) * 100);

    if (progressTween.current) progressTween.current.kill();

    progressTween.current = gsap.to(currentProgress, {
      current: targetProgress,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        setLoadingProgress(
          Math.floor((currentProgress.current as unknown as number) ?? 0)
        );
      },
      onComplete: () => {
        if (targetProgress === 100) {
          setTimeout(() => {
            setIsLoading(false);
            if (scrollLocked.current) {
              document.documentElement.style.overflow = "";
              scrollLocked.current = false;
            }
            setTimeout(() => {
              setIsAppReady(true);
              hasLoadedOnce.current = true;
            }, 100);
          }, 600);
        }
      },
    });
  }, []);

  // Lock scroll while loading
  useEffect(() => {
    if (isLoading && !scrollLocked.current) {
      document.documentElement.style.overflow = "hidden";
      scrollLocked.current = true;
    }
  }, [isLoading]);

  // Document ready gate
  useEffect(() => {
    const checkDocument = () => {
      if (document.readyState === "complete") {
        setLoadingState((prev) => {
          if (prev.document) return prev;
          const newState = { ...prev, document: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    if (document.readyState === "complete") {
      checkDocument();
    } else {
      document.addEventListener("readystatechange", checkDocument);
    }
    return () =>
      document.removeEventListener("readystatechange", checkDocument);
  }, [updateProgress]);

  // GSAP gate
  useEffect(() => {
    const checkGSAP = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).gsap &&
        typeof (window as any).gsap.timeline === "function" &&
        typeof (window as any).gsap.to === "function"
      ) {
        setLoadingState((prev) => {
          if (prev.gsap) return prev;
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
      if (checkGSAP()) clearInterval(interval);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setLoadingState((prev) => {
        if (prev.gsap) return prev;
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

  // Assets gate (unified critical assets + hero video)
  useEffect(() => {
    const loadCriticalAssets = async () => {
      try {
        await assetCache.initialize();
        
        const criticalAssets = CRITICAL_ASSETS.filter(
          (a) => a.priority === "critical"
        );

        if (criticalAssets.length === 0) {
          setLoadingState((prev) => {
            if (prev.assets) return prev;
            const newState = { ...prev, assets: true };
            updateProgress(newState);
            return newState;
          });
          return;
        }

        // Load critical assets
        const loadPromises = criticalAssets.map((asset) =>
          assetCache.cacheAsset(asset.path, asset.type, asset.priority, asset.maxSize).catch((err) => {
            console.warn(`Failed to preload ${asset.path}:`, err);
          })
        );

        await Promise.all(loadPromises);

        // Load hero video with early gate flip at 10% progress
        let videoGateTriggered = false;
        
        try {
          const videoUrl = await assetCache.cacheAsset(
            HERO_VIDEO_URL,
            "video",
            "high",
            20 * 1024 * 1024,
            (progress) => {
              if (progress >= 10 && !videoGateTriggered) {
                videoGateTriggered = true;
                setLoadingState((prev) => {
                  if (prev.assets) return prev;
                  const newState = { ...prev, assets: true };
                  updateProgress(newState);
                  return newState;
                });
              }
            }
          );

          setCachedVideoUrl(videoUrl);

          if (!videoGateTriggered) {
            setLoadingState((prev) => {
              if (prev.assets) return prev;
              const newState = { ...prev, assets: true };
              updateProgress(newState);
              return newState;
            });
          }
        } catch (videoError) {
          console.warn("Video caching failed, using original URL:", videoError);
          setCachedVideoUrl(HERO_VIDEO_URL);
          
          if (!videoGateTriggered) {
            setLoadingState((prev) => {
              if (prev.assets) return prev;
              const newState = { ...prev, assets: true };
              updateProgress(newState);
              return newState;
            });
          }
        }

      } catch (err) {
        console.error("Critical asset loading failed:", err);
        setCachedVideoUrl(HERO_VIDEO_URL);
        setLoadingState((prev) => {
          if (prev.assets) return prev;
          const newState = { ...prev, assets: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    loadCriticalAssets();
  }, [updateProgress]);

  // Translations gate (lightweight check)
  useEffect(() => {
    const checkTranslations = () => {
      try {
        const hasTranslationContext = typeof window !== "undefined";
        setLoadingState((prev) => {
          if (prev.translations) return prev;
          const newState = { ...prev, translations: true };
          updateProgress(newState);
          return newState;
        });
      } catch (error) {
        console.warn("Translation check failed:", error);
        setLoadingState((prev) => {
          if (prev.translations) return prev;
          const newState = { ...prev, translations: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    const t = setTimeout(checkTranslations, 200);
    return () => clearTimeout(t);
  }, [updateProgress]);

  // Safety net for slow assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState((prev) => {
        if (prev.assets) return prev;
        const newState = { ...prev, assets: true };
        updateProgress(newState);
        return newState;
      });
      
      if (!cachedVideoUrl) {
        setCachedVideoUrl(HERO_VIDEO_URL);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [updateProgress, cachedVideoUrl]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressTween.current) progressTween.current.kill();
      if (scrollLocked.current) document.documentElement.style.overflow = "";
    };
  }, []);

  return {
    isLoading: hasLoadedOnce.current ? false : isLoading,
    loadingProgress,
    isAppReady: hasLoadedOnce.current ? true : isAppReady,
    cachedVideoUrl,
  };
}

// Simple cached asset hook (replaces useCachedImage)
export function useCachedAsset(mediaPath: string) {
  const [src, setSrc] = useState<string>(mediaPath);
  const [isFromCache, setIsFromCache] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const checkCachedUrl = () => {
      const cachedUrl = assetCache.getCachedAssetUrl(mediaPath);

      if (cachedUrl) {
        setSrc(cachedUrl);
        setIsFromCache(true);
        setIsLoaded(true);
      } else {
        setSrc(mediaPath);
        setIsFromCache(false);
        setIsLoaded(true);
      }
    };

    // Check immediately
    checkCachedUrl();

    // Listen for asset cache events
    const handleAssetCached = (event: CustomEvent) => {
      if (event.detail.path === mediaPath) {
        checkCachedUrl();
      }
    };

    window.addEventListener('assetCached', handleAssetCached as EventListener);

    return () => {
      window.removeEventListener('assetCached', handleAssetCached as EventListener);
    };
  }, [mediaPath]);

  return { src, isFromCache, isLoaded };
}

// Utility hook to check if critical assets are ready
export function useCriticalAssetsReady(): boolean {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const checkReady = () => {
      const initialized = sessionStorage.getItem("galaga_assets_initialized");
      setIsReady(!!initialized);
    };

    checkReady();

    const interval = setInterval(() => {
      if (!isReady) {
        checkReady();
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isReady]);

  return isReady;
}

// Hook for preloading page-specific assets
export function usePageAssets(pageName: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadAssets = useCallback(async () => {
    if (isLoading || isLoaded) return;
    
    setIsLoading(true);
    try {
      await assetCache.preloadPageAssets(pageName);
      setIsLoaded(true);
    } catch (error) {
      console.error(`Failed to preload assets for page ${pageName}:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [pageName, isLoading, isLoaded]);

  useEffect(() => {
    preloadAssets();
  }, [preloadAssets]);

  return { isLoading, isLoaded, preloadAssets };
}