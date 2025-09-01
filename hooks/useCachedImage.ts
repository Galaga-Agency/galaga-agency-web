"use client";

import { useState, useEffect } from "react";
import { imageCache } from "@/utils/imagePreloader";

export const useCachedImage = (mediaPath: string) => {
  const [src, setSrc] = useState<string>(mediaPath);
  const [isFromCache, setIsFromCache] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const cachedUrl = imageCache.getCachedImageUrl(mediaPath);

    if (cachedUrl) {
      setSrc(cachedUrl);
      setIsFromCache(true);
      setIsLoaded(true);
    } else {
      setSrc(mediaPath);
      setIsFromCache(false);
      setIsLoaded(true); // We'll use the original path
    }
  }, [mediaPath]);

  return { src, isFromCache, isLoaded };
};

export const useCriticalImagesReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const checkReady = () => {
      const initialized = sessionStorage.getItem("galaga_cache_initialized");
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
};
