"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { videoCacheManager } from "@/utils/video-cache";

interface UseVideoCacheOptions {
  preloadOnMount?: boolean;
  onProgress?: (progress: number) => void;
  onCached?: () => void;
  onError?: (error: Error) => void;
}

interface UseVideoCacheReturn {
  cachedUrl: string | null; // blob:... or original URL
  isLoading: boolean;
  progress: number; // 0..100
  error: Error | null;
  cacheVideo: () => Promise<void>; // stable identity
  clearVideoCache: () => Promise<void>;
  getCacheInfo: () => Promise<{ totalSize: number; videoCount: number }>;
}

export function useVideoCache(
  videoUrl: string,
  options: UseVideoCacheOptions = {}
): UseVideoCacheReturn {
  const { preloadOnMount = false, onProgress, onCached, onError } = options;

  const [cachedUrl, setCachedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  // --- Refs for stability & guards ---
  const abortControllerRef = useRef<AbortController | null>(null);
  const startedRef = useRef(false); // avoid duplicate preload per URL
  const isLoadingRef = useRef(false);
  const mountedRef = useRef(false);
  const currentBlobUrlRef = useRef<string | null>(null);
  const videoUrlRef = useRef(videoUrl);

  // callback refs to avoid function-identity churn
  const onProgressRef = useRef(onProgress);
  const onCachedRef = useRef(onCached);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    videoUrlRef.current = videoUrl;
  }, [videoUrl]);
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);
  useEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);
  useEffect(() => {
    onCachedRef.current = onCached;
  }, [onCached]);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  // ---- Stable cacheVideo (identity never changes) ----
  const cacheVideo = useCallback(async () => {
    const url = videoUrlRef.current;
    if (!url) return;
    if (isLoadingRef.current) return;
    if (!mountedRef.current) return;

    setIsLoading(true);
    setError(null);
    setProgress(0);

    if (abortControllerRef.current) abortControllerRef.current.abort();
    const ac = new AbortController();
    abortControllerRef.current = ac;

    try {
      const resultUrl = await videoCacheManager.cacheVideo(
        url,
        (progressValue) => {
          // emit progress at most when it changes (integer)
          setProgress((prev) => {
            const next = Math.max(0, Math.min(100, Math.floor(progressValue)));
            if (next !== prev) onProgressRef.current?.(progressValue);
            return next === prev ? prev : next;
          });
        }
      );

      if (!ac.signal.aborted) {
        setCachedUrl((prev) => {
          if (prev && prev.startsWith("blob:") && prev !== resultUrl) {
            try {
              URL.revokeObjectURL(prev);
            } catch {}
          }
          // avoid redundant state set
          return prev === resultUrl ? prev : resultUrl;
        });
        onCachedRef.current?.();
      }
    } catch (err) {
      if (!ac.signal.aborted) {
        const e =
          err instanceof Error ? err : new Error("Failed to cache video");
        setError(e);
        onErrorRef.current?.(e);
        setCachedUrl((prev) => {
          if (prev && prev.startsWith("blob:")) {
            try {
              URL.revokeObjectURL(prev);
            } catch {}
          }
          return url;
        });
      }
    } finally {
      if (!ac.signal.aborted) {
        setIsLoading(false);
        setProgress(100);
      }
    }
  }, []); // ← no deps; uses refs

  // mark mounted
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Check existing cache once per (videoUrl, preloadOnMount)
  useEffect(() => {
    if (!videoUrl) return;

    let cancelled = false;
    startedRef.current = false; // reset for new URL

    (async () => {
      try {
        const videoId = btoa(videoUrl).replace(/[^a-zA-Z0-9]/g, "");
        const cached = await videoCacheManager.getCachedVideo(videoId);
        if (cancelled) return;

        if (cached) {
          const newBlobUrl = URL.createObjectURL(cached.data);
          setCachedUrl((prev) => {
            if (prev && prev.startsWith("blob:")) {
              try {
                URL.revokeObjectURL(prev);
              } catch {}
            }
            currentBlobUrlRef.current = newBlobUrl;
            return newBlobUrl;
          });
          setProgress(100);
          return;
        }

        if (preloadOnMount && !startedRef.current) {
          startedRef.current = true;
          await cacheVideo(); // stable function; not in deps
        } else {
          // no preload: just point to network URL (avoid redundant set)
          setCachedUrl((prev) => {
            if (prev && prev.startsWith("blob:")) {
              try {
                URL.revokeObjectURL(prev);
              } catch {}
            }
            return prev === videoUrl ? prev : videoUrl;
          });
        }
      } catch (err) {
        console.error("Error checking cached video:", err);
        setCachedUrl((prev) => {
          if (prev && prev.startsWith("blob:")) {
            try {
              URL.revokeObjectURL(prev);
            } catch {}
          }
          return videoUrl;
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [videoUrl, preloadOnMount]); // ← NOTE: no cacheVideo here

  const clearVideoCache = useCallback(async () => {
    try {
      await videoCacheManager.clearCache();
      setCachedUrl((prev) => {
        if (prev && prev.startsWith("blob:")) {
          try {
            URL.revokeObjectURL(prev);
          } catch {}
        }
        return null;
      });
      setProgress(0);
    } catch (err) {
      console.error("Error clearing video cache:", err);
    }
  }, []);

  const getCacheInfo = useCallback(async () => {
    try {
      const info = await videoCacheManager.getCacheInfo();
      return { totalSize: info.totalSize, videoCount: info.videoCount };
    } catch (err) {
      console.error("Error getting cache info:", err);
      return { totalSize: 0, videoCount: 0 };
    }
  }, []);

  // Abort fetch on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  // Revoke current blob URL on unmount
  useEffect(() => {
    return () => {
      const prev = currentBlobUrlRef.current;
      if (prev && prev.startsWith("blob:")) {
        try {
          URL.revokeObjectURL(prev);
        } catch {}
      }
    };
  }, []);

  return {
    cachedUrl,
    isLoading,
    progress,
    error,
    cacheVideo, // stable
    clearVideoCache,
    getCacheInfo,
  };
}
