"use client";
import { useMemo } from "react";
import { imageCache } from "@/utils/imagePreloader";

export function useCachedList(paths: string[]) {
  return useMemo(
    () => paths.map((p) => imageCache.getCachedImageUrl(p) || p),
    [paths]
  );
}
