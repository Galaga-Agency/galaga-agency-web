"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCachedAsset } from "@/hooks/useCachedAssets";

interface CachedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  fill,
  className = "",
  sizes = "100vw",
  quality = 90,
  priority = false,
  width,
  height,
  onLoad,
  onError,
}) => {
  const { src: cachedSrc, isFromCache } = useCachedAsset(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  const showLogo = !imageLoaded || imageError;

  return (
    <>
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center bg-azul-profundo/10" style={{ zIndex: 10 }}>
          <img
            src="/assets/img/logos/logo-full-white.webp"
            alt="Galaga Logo"
            className="w-auto h-auto max-w-[200px] max-h-[120px] opacity-80"
          />
        </div>
      )}
             
      <Image
        src={cachedSrc}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        priority={priority || isFromCache}
        sizes={sizes}
        quality={quality}
        className={`${className} ${isFromCache ? "from-cache" : "from-network"} ${showLogo ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

export default CachedImage;