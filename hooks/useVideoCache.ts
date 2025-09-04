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
  const startedRef = useRef(false); // prevent duplicate preload
  const isLoadingRef = useRef(false); // read current loading w/o re-render loops
  const mountedRef = useRef(false);
  const currentBlobUrlRef = useRef<string | null>(null);
  const videoUrlRef = useRef(videoUrl);

  // Keep refs up to date
  useEffect(() => {
    videoUrlRef.current = videoUrl;
  }, [videoUrl]);
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  // ---- Stable cacheVideo (identity never changes) ----
  const cacheVideo = useCallback(async () => {
    const url = videoUrlRef.current;
    if (!url) return;
    if (isLoadingRef.current) return; // already loading
    if (!mountedRef.current) return;

    setIsLoading(true);
    setError(null);
    setProgress(0);

    // Cancel any previous request
    if (abortControllerRef.current) abortControllerRef.current.abort();
    const ac = new AbortController();
    abortControllerRef.current = ac;

    try {
      const cachedUrlOrOriginal = await videoCacheManager.cacheVideo(
        url,
        (progressValue) => {
          // Don't spam setState with identical values
          setProgress((prev) => {
            const next = Math.max(0, Math.min(100, Math.floor(progressValue)));
            return next === prev ? prev : next;
          });
          onProgress?.(progressValue);
        }
      );

      if (!ac.signal.aborted) {
        // If we are switching to a new blob URL, revoke prior one to avoid GPU/memory leak
        setCachedUrl((prev) => {
          if (
            prev &&
            prev.startsWith("blob:") &&
            prev !== cachedUrlOrOriginal
          ) {
            try {
              URL.revokeObjectURL(prev);
            } catch {}
          }
          return cachedUrlOrOriginal;
        });
        onCached?.();
      }
    } catch (err) {
      if (!ac.signal.aborted) {
        const e =
          err instanceof Error ? err : new Error("Failed to cache video");
        setError(e);
        onError?.(e);
        // Fail-open: use original URL
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
  }, [onCached, onError, onProgress]); // these are usually stable; ok if they change

  // Initialize / check cache once per (videoUrl, preloadOnMount)
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

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
          // Create blob URL ONCE for this cached blob
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
          await cacheVideo();
        } else {
          // No preload: just point to the network URL
          setCachedUrl((prev) => {
            if (prev && prev.startsWith("blob:")) {
              try {
                URL.revokeObjectURL(prev);
              } catch {}
            }
            return videoUrl;
          });
        }
      } catch (err) {
        console.error("Error checking cached video:", err);
        // Fall back to original URL; don't loop
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
  }, [videoUrl, preloadOnMount, cacheVideo]);

  // Exposed helpers (stable enough)
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

  // Cleanup on unmount / URL change
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  useEffect(() => {
    return () => {
      // Revoke the current blob URL when unmounting/changing
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
    cacheVideo,
    clearVideoCache,
    getCacheInfo,
  };
}
