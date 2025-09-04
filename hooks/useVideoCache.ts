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
  cachedUrl: string | null;
  isLoading: boolean;
  progress: number;
  error: Error | null;
  cacheVideo: () => Promise<void>;
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
  const abortController = useRef<AbortController | null>(null);

  const cacheVideo = useCallback(async () => {
    if (isLoading || !videoUrl) return;

    setIsLoading(true);
    setError(null);
    setProgress(0);

    // Cancel any previous request
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();

    try {
      const url = await videoCacheManager.cacheVideo(
        videoUrl,
        (progressValue) => {
          setProgress(progressValue);
          onProgress?.(progressValue);
        }
      );

      if (!abortController.current.signal.aborted) {
        setCachedUrl(url);
        onCached?.();
      }
    } catch (err) {
      if (!abortController.current.signal.aborted) {
        const error =
          err instanceof Error ? err : new Error("Failed to cache video");
        setError(error);
        onError?.(error);
        // Set original URL as fallback
        setCachedUrl(videoUrl);
      }
    } finally {
      if (!abortController.current.signal.aborted) {
        setIsLoading(false);
        setProgress(100);
      }
    }
  }, [videoUrl, isLoading, onProgress, onCached, onError]);

  const clearVideoCache = useCallback(async () => {
    try {
      await videoCacheManager.clearCache();
      setCachedUrl(null);
    } catch (err) {
      console.error("Error clearing video cache:", err);
    }
  }, []);

  const getCacheInfo = useCallback(async () => {
    try {
      const info = await videoCacheManager.getCacheInfo();
      return {
        totalSize: info.totalSize,
        videoCount: info.videoCount,
      };
    } catch (err) {
      console.error("Error getting cache info:", err);
      return { totalSize: 0, videoCount: 0 };
    }
  }, []);

  // Check for existing cached video on mount
  useEffect(() => {
    if (!videoUrl) return;

    const checkExistingCache = async () => {
      try {
        const videoId = btoa(videoUrl).replace(/[^a-zA-Z0-9]/g, "");
        const cached = await videoCacheManager.getCachedVideo(videoId);

        if (cached) {
          const url = URL.createObjectURL(cached.data);
          setCachedUrl(url);
          setProgress(100);
        } else if (preloadOnMount) {
          await cacheVideo();
        }
      } catch (err) {
        console.error("Error checking cached video:", err);
        if (preloadOnMount) {
          setCachedUrl(videoUrl); // Fallback to original URL
        }
      }
    };

    checkExistingCache();
  }, [videoUrl, preloadOnMount, cacheVideo]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
      // Clean up blob URLs to prevent memory leaks
      if (cachedUrl && cachedUrl.startsWith("blob:")) {
        URL.revokeObjectURL(cachedUrl);
      }
    };
  }, [cachedUrl]);

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
