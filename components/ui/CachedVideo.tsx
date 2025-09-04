"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assetCache } from "@/utils/asset-cache";

interface CachedVideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  preload?: "none" | "metadata" | "auto";
  fallbackSrc?: string;
  logoFallback?: string;
}

const CachedVideo: React.FC<CachedVideoProps> = ({
  src,
  poster,
  width,
  height,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true,
  className = "",
  style,
  onLoad,
  onError,
  preload = "metadata",
  fallbackSrc,
  logoFallback = "/assets/img/logos/logo-full-white.webp",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [cachedUrl, setCachedUrl] = useState<string | null>(null);
  const [cacheLoading, setCacheLoading] = useState<boolean>(false);
  const [showFallback, setShowFallback] = useState<boolean>(true);

  // Try to get cached video URL on mount
  useEffect(() => {
    const getCachedVideo = async () => {
      setCacheLoading(true);

      try {
        const cached = assetCache.getCachedAssetUrl(src);
        if (cached) {
          setCachedUrl(cached);
          setCacheLoading(false);
          return;
        }

        const resultUrl = await assetCache.cacheAsset(
          src,
          "video",
          "normal",
          undefined,
          (progress) => {
            // Video is loading, but we keep showing fallback until ready
          }
        );

        setCachedUrl(resultUrl);
      } catch (error) {
        console.warn("Failed to cache video:", error);
        setCachedUrl(src);
      } finally {
        setCacheLoading(false);
      }
    };

    getCachedVideo();
  }, [src]);

  const videoSrc = cachedUrl || src;
  const isFromCache = cachedUrl !== null && cachedUrl !== src && cachedUrl.startsWith('blob:');

  const handleCanPlay = () => {
    setIsLoading(false);
    setShowFallback(false);
    onLoad?.();
  };

  const handleError = () => {
    if (fallbackSrc && videoSrc !== fallbackSrc) {
      console.warn(
        `Video failed: ${videoSrc}, trying fallback: ${fallbackSrc}`
      );
      if (videoRef.current) {
        videoRef.current.src = fallbackSrc;
      }
      return;
    }

    setHasError(true);
    setIsLoading(false);
    setShowFallback(true);
    onError?.();
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setShowFallback(true);
    setHasError(false);
  };

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    <div className={`relative ${className}`} style={{ width, height, ...style }}>
      {/* Company logo fallback - shown while loading or on error */}
      {(showFallback || isLoading || cacheLoading || hasError) && (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ 
            zIndex: 10
          }}
        >
          <img
            src={logoFallback}
            alt="Company Logo"
            style={{
              maxWidth: width ? `${width * 0.4}px` : '200px',
              maxHeight: height ? `${height * 0.3}px` : '120px',
              width: 'auto',
              height: 'auto',
              opacity: 0.8
            }}
          />
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        width={width}
        height={height}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        className={`${
          isFromCache ? "from-cache" : "from-network"
        } ${showFallback || isLoading || cacheLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onLoadStart={handleLoadStart}
      />
    </div>
  );
};

export default CachedVideo;