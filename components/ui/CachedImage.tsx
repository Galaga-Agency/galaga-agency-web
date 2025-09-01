"use client";

import React from "react";
import Image from "next/image";
import { useCachedImage } from "@/hooks/useCachedImage";

interface CachedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Enhanced Image component that uses cached images when available
 * Falls back to Next.js Image for non-cached images
 */
const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "100vw",
  quality = 90,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
}) => {
  const { src: cachedSrc, isFromCache, isLoaded } = useCachedImage(src);

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <Image
      src={cachedSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority || isFromCache} // Prioritize cached images
      className={`${className} ${isFromCache ? "from-cache" : "from-network"}`}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default CachedImage;
