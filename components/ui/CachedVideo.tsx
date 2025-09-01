"use client";

import React, { useRef, useEffect, useState } from "react";
import { useCachedImage } from "@/hooks/useCachedImage";

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
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Get cached video source
  const { src: cachedVideoSrc, isFromCache: videoFromCache } =
    useCachedImage(src);

  // Get cached poster if provided
  const { src: cachedPoster, isFromCache: posterFromCache } = poster
    ? useCachedImage(poster)
    : { src: undefined, isFromCache: false };

  const handleCanPlay = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    // Try fallback if available and we haven't used it yet
    if (fallbackSrc && cachedVideoSrc !== fallbackSrc) {
      console.warn(
        `Video failed: ${cachedVideoSrc}, trying fallback: ${fallbackSrc}`
      );
      if (videoRef.current) {
        videoRef.current.src = fallbackSrc;
      }
      return;
    }

    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  useEffect(() => {
    if (videoRef.current && cachedVideoSrc) {
      videoRef.current.src = cachedVideoSrc;
    }
  }, [cachedVideoSrc]);

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-100 flex items-center justify-center`}
        style={{ width, height }}
      >
        <div className="text-sm text-red-500">Video failed to load</div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div
          className={`${className} bg-gray-100 animate-pulse flex items-center justify-center absolute inset-0`}
          style={{ width, height }}
        >
          <div className="text-sm text-gray-500">
            {videoFromCache ? "Loading from cache..." : "Loading video..."}
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        src={cachedVideoSrc}
        poster={cachedPoster}
        width={width}
        height={height}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        className={`${className} ${
          videoFromCache ? "from-cache" : "from-network"
        } ${posterFromCache ? "poster-from-cache" : ""} ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={style}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onLoadStart={handleLoadStart}
      />
    </>
  );
};

export default CachedVideo;
