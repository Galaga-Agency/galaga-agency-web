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

// Global singleton to prevent multiple initializations
let globalHasInitialized = false;
let globalIsAppReady = false;
let globalCachedVideoUrl: string | null = null;

export function useAppLoading(): UseAppLoadingReturn {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    document: false,
    assets: false,
    translations: false,
    gsap: false,
  });

  const [isLoading, setIsLoading] = useState(!globalHasInitialized);
  const [loadingProgress, setLoadingProgress] = useState(globalHasInitialized ? 100 : 0);
  const [isAppReady, setIsAppReady] = useState(globalIsAppReady);
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(globalCachedVideoUrl);

  const progressTween = useRef<gsap.core.Tween | null>(null);
  const currentProgress = useRef(globalHasInitialized ? 100 : 0);
  const scrollLocked = useRef(false);
  const hasLoadedOnce = useRef(globalHasInitialized);

  // If already initialized globally, return ready state immediately
  useEffect(() => {
    if (globalHasInitialized) {
      setIsLoading(false);
      setLoadingProgress(100);
      setIsAppReady(true);
      setLoadingState({
        document: true,
        assets: true,
        translations: true,
        gsap: true,
      });
      return;
    }
  }, []);

  const updateProgress = useCallback((state: LoadingState) => {
    if (globalHasInitialized) return;

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
            globalHasInitialized = true;
            globalIsAppReady = true;
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
    if (isLoading && !scrollLocked.current && !globalHasInitialized) {
      document.documentElement.style.overflow = "hidden";
      scrollLocked.current = true;
    }
  }, [isLoading]);

  // Document ready gate
  useEffect(() => {
    if (globalHasInitialized) return;

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
    if (globalHasInitialized) return;

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

  // Assets gate
  useEffect(() => {
    if (globalHasInitialized) return;

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

        const loadPromises = criticalAssets.map((asset) =>
          assetCache.cacheAsset(asset.path, asset.type, asset.priority, asset.maxSize).catch((err) => {
            console.warn(`Failed to preload ${asset.path}:`, err);
          })
        );

        await Promise.all(loadPromises);

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
          globalCachedVideoUrl = videoUrl;

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
          globalCachedVideoUrl = HERO_VIDEO_URL;
          
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
        globalCachedVideoUrl = HERO_VIDEO_URL;
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

  // Translations gate
  useEffect(() => {
    if (globalHasInitialized) return;

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
    if (globalHasInitialized) return;

    const timer = setTimeout(() => {
      setLoadingState((prev) => {
        if (prev.assets) return prev;
        const newState = { ...prev, assets: true };
        updateProgress(newState);
        return newState;
      });
      
      if (!cachedVideoUrl) {
        setCachedVideoUrl(HERO_VIDEO_URL);
        globalCachedVideoUrl = HERO_VIDEO_URL;
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
    isLoading: globalHasInitialized ? false : isLoading,
    loadingProgress: globalHasInitialized ? 100 : loadingProgress,
    isAppReady: globalHasInitialized ? true : isAppReady,
    cachedVideoUrl: globalCachedVideoUrl || cachedVideoUrl,
  };
}