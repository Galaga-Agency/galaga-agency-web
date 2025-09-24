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

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  return (
    <>
      {!imageLoaded && (
        <div
          className="absolute inset-0 bg-hielo/20 backdrop-blur-xl"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(76,188,197,0.1) 0%, rgba(18,28,48,0.1) 100%)`,
          }}
        />
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
        className={`${className} ${
          isFromCache ? "from-cache" : "from-network"
        } ${
          imageLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-135 rotate-15"
        } transition-all duration-700 ease-out`}
        onLoad={handleLoad}
        onError={onError}
      />
    </>
  );
};

export default CachedImage;
