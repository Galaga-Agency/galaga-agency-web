"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { imageCache, CRITICAL_ASSETS } from "@/utils/image-preloader";
import { useVideoCache } from "./useVideoCache";
import { gsap } from "gsap";

interface LoadingState {
  document: boolean;
  images: boolean;
  translations: boolean;
  gsap: boolean;
  video: boolean;
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
    images: false,
    translations: false,
    gsap: false,
    video: false,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAppReady, setIsAppReady] = useState(false);

  // Refs for smooth animations
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
          // small hold at 100 for a nicer feel
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
      // fail-open after 5s
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

  // Images gate (critical only)
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        await imageCache.initialize();
        const criticalAssets = CRITICAL_ASSETS.filter(
          (a) => a.priority === "critical"
        );
        if (!criticalAssets.length) {
          setLoadingState((prev) => {
            if (prev.images) return prev;
            const newState = { ...prev, images: true };
            updateProgress(newState);
            return newState;
          });
          return;
        }

        const loadPromises = criticalAssets
          .filter((a) => a.type === "image")
          .map((a) =>
            imageCache.preloadImage(a.path, a.priority).catch((err) => {
              console.warn(`Failed to preload ${a.path}:`, err);
            })
          );

        await Promise.all(loadPromises);

        setLoadingState((prev) => {
          if (prev.images) return prev;
          const newState = { ...prev, images: true };
          updateProgress(newState);
          return newState;
        });
      } catch (err) {
        console.error("Critical image preloading failed:", err);
        setLoadingState((prev) => {
          if (prev.images) return prev;
          const newState = { ...prev, images: true };
          updateProgress(newState);
          return newState;
        });
      }
    };

    preloadCriticalImages();
  }, [updateProgress]);

  // Translations gate (lightweight check)
  useEffect(() => {
    const checkTranslations = () => {
      try {
        const hasTranslationContext = typeof window !== "undefined";
        // Treat as ready either way; your i18n lib will lazy-load
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

  // ------- VIDEO GATE (decoupled) -------
  const {
    cachedUrl: cachedVideoUrl,
    isLoading: videoLoading,
    progress: videoProgress,
    cacheVideo,
  } = useVideoCache(HERO_VIDEO_URL, {
    onProgress: (p) => {
      // Flip video gate early once we see ≥10% (first chunks)
      if (p >= 10) {
        setLoadingState((prev) => {
          if (prev.video) return prev;
          const newState = { ...prev, video: true };
          updateProgress(newState);
          return newState;
        });
      }
    },
    onCached: () => {
      // Ensure marked if threshold wasn't crossed (fast or unknown size)
      setLoadingState((prev) => {
        if (prev.video) return prev;
        const newState = { ...prev, video: true };
        updateProgress(newState);
        return newState;
      });
    },
    onError: (error) => {
      console.warn("Video caching failed, using original URL:", error);
      // Fail-open: don't block the app
      setLoadingState((prev) => {
        if (prev.video) return prev;
        const newState = { ...prev, video: true };
        updateProgress(newState);
        return newState;
      });
    },
  });

  // Start video caching
  useEffect(() => {
    if (!cachedVideoUrl && !videoLoading) {
      cacheVideo();
    }
  }, [cachedVideoUrl, videoLoading, cacheVideo]);

  // Safety net: if video is slow or content-length missing, unlock after N ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState((prev) => {
        if (prev.video) return prev;
        const newState = { ...prev, video: true };
        updateProgress(newState);
        return newState;
      });
    }, 2500); // tweak to your taste
    return () => clearTimeout(timer);
  }, [updateProgress]);

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
