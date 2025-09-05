"use client";

import React, { useRef, useEffect, useState } from "react";

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
  onError?: (event?: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
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
  const [showLogo, setShowLogo] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleCanPlay = () => {
    setShowLogo(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setShowLogo(true);
    onError?.();
  };

  const handleLoadStart = () => {
    setShowLogo(true);
    setHasError(false);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height, ...style }}>
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-azul-profundo/80 to-teal/60 z-20">
          <img
            src={logoFallback}
            alt="Loading"
            style={{
              maxWidth: width ? `${width * 0.4}px` : '200px',
              maxHeight: height ? `${height * 0.3}px` : '120px',
              width: 'auto',
              height: 'auto',
              opacity: 0.9
            }}
          />
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          showLogo ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit: 'cover',
          backgroundColor: 'transparent',
        }}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadStart}
      />
    </div>
  );
};

export default CachedVideo;