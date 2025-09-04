"use client";

export interface HeroAsset {
  path: string;
  page: string;
  priority: "critical" | "high" | "normal";
  format: "webp" | "jpg" | "png" | "mp4" | "webm";
  type: "image" | "video";
  maxSize?: number; // Max size in bytes for caching (videos only)
}

export const CRITICAL_ASSETS: HeroAsset[] = [
  {
    path: "/assets/img/sobre-nosotros-page/hero.png",
    page: "about-us",
    priority: "critical",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/contacto/hero.webp",
    page: "contact",
    priority: "critical",
    format: "webp",
    type: "image",
  },
  {
    path: "/assets/img/casos-de-exito/hero.png",
    page: "use-cases",
    priority: "critical",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/legal-pages/privacy.webp",
    page: "privacy-policy",
    priority: "critical",
    format: "webp",
    type: "image",
  },
  {
    path: "/assets/img/legal-pages/terms.webp",
    page: "terms-and-conditions",
    priority: "critical",
    format: "webp",
    type: "image",
  },
  {
    path: "/assets/img/servicios/gaming.png",
    page: "immersive-marketing",
    priority: "critical",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/logos/logo-full-white.webp",
    page: "home",
    priority: "critical",
    format: "webp",
    type: "image",
  },
  {
    path: "/assets/img/logos/logo-mobile-white.webp",
    page: "home",
    priority: "critical",
    format: "webp",
    type: "image",
  },
  {
    path: "/assets/videos/galaga-presentation.mp4",
    page: "home",
    priority: "high",
    format: "mp4",
    type: "video",
    maxSize: 20 * 1024 * 1024,
  },
  {
    path: "/assets/img/features/automatizacion.jpg",
    page: "services",
    priority: "high",
    format: "jpg",
    type: "image",
  },
  {
    path: "/assets/img/features/base.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/canary-islands-games.jpg",
    page: "services",
    priority: "high",
    format: "jpg",
    type: "image",
  },
  {
    path: "/assets/img/features/cloud-collab.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/consultoria.jpg",
    page: "services",
    priority: "high",
    format: "jpg",
    type: "image",
  },
  {
    path: "/assets/img/features/crm-erp.jpg",
    page: "services",
    priority: "high",
    format: "jpg",
    type: "image",
  },
  {
    path: "/assets/img/features/crm.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/dos-x-dos-grupo-imagen-web.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/dynamic-furniture.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/gaming.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/innovacion.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/interactive-corners.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
  {
    path: "/assets/img/features/subvenciones.png",
    page: "services",
    priority: "high",
    format: "png",
    type: "image",
  },
];

type CacheStatus = "pending" | "loading" | "loaded" | "error" | "expired";

interface CacheEntry {
  data: string;
  timestamp: number;
  path: string;
  size: number;
}

class AdvancedImageCache {
  private static instance: AdvancedImageCache;
  private memoryCache = new Map<string, string>();
  private statusCache = new Map<string, CacheStatus>();
  private loadingPromises = new Map<string, Promise<void>>();
  private readonly CACHE_PREFIX = "galaga_img_";
  private readonly MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days
  private readonly MAX_CACHE_SIZE = 100 * 1024 * 1024; // 100MB total
  private readonly MAX_VIDEO_CACHE_SIZE = 50 * 1024 * 1024; // 50MB for videos
  private abortController: AbortController | null = null;

  static getInstance(): AdvancedImageCache {
    if (!AdvancedImageCache.instance) {
      AdvancedImageCache.instance = new AdvancedImageCache();
    }
    return AdvancedImageCache.instance;
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.cleanupExpiredCache();
      this.setupCleanupHandlers();
    }
  }

  async initialize(): Promise<void> {
    if (typeof window === "undefined") {
      return;
    }

    if (sessionStorage.getItem("galaga_cache_initialized")) {
      this.loadFromMemory();
      return;
    }

    this.abortController = new AbortController();

    try {
      await this.preloadCriticalAssets();
      sessionStorage.setItem("galaga_cache_initialized", "true");
    } catch (error) {
      console.error("Cache initialization failed:", error);
    }
  }

  private loadFromMemory(): void {
    CRITICAL_ASSETS.forEach((asset) => {
      const cached = this.getFromLocalStorage(asset.path);
      if (cached) {
        this.memoryCache.set(asset.path, cached);
        this.statusCache.set(asset.path, "loaded");
      }
    });
  }

  private async preloadCriticalAssets(): Promise<void> {
    const criticalImages = CRITICAL_ASSETS.filter(
      (asset) => asset.priority === "critical" && asset.type === "image"
    );
    const criticalVideos = CRITICAL_ASSETS.filter(
      (asset) => asset.priority === "critical" && asset.type === "video"
    );
    const highPriorityAssets = CRITICAL_ASSETS.filter(
      (asset) => asset.priority === "high"
    );
    const normalAssets = CRITICAL_ASSETS.filter(
      (asset) => asset.priority === "normal"
    );

    try {
      // Load critical images first (blocking)
      await Promise.all(
        criticalImages.map((asset) =>
          this.preloadImage(asset.path, asset.priority)
        )
      );

      // Load critical videos (non-blocking)
      Promise.all(
        criticalVideos.map((asset) =>
          this.preloadVideo(asset.path, asset.priority, asset.maxSize)
        )
      ).catch(console.warn);

      // Load high priority assets
      Promise.all(
        highPriorityAssets.map((asset) =>
          asset.type === "image"
            ? this.preloadImage(asset.path, asset.priority)
            : this.preloadVideo(asset.path, asset.priority, asset.maxSize)
        )
      ).catch(console.warn);

      // Load normal priority assets later
      setTimeout(() => {
        Promise.all(
          normalAssets.map((asset) =>
            asset.type === "image"
              ? this.preloadImage(asset.path, asset.priority)
              : this.preloadVideo(asset.path, asset.priority, asset.maxSize)
          )
        ).catch(console.warn);
      }, 2000);
    } catch (error) {
      console.error("Critical asset preloading failed:", error);
    }
  }

  async preloadImage(
    path: string,
    priority: "critical" | "high" | "normal" = "normal"
  ): Promise<void> {
    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path)!;
    }

    if (this.statusCache.get(path) === "loaded") {
      return Promise.resolve();
    }

    const cached = this.getFromLocalStorage(path);
    if (cached) {
      this.memoryCache.set(path, cached);
      this.statusCache.set(path, "loaded");
      return Promise.resolve();
    }

    const loadPromise = this.loadAndCacheImage(path, priority);
    this.loadingPromises.set(path, loadPromise);

    try {
      await loadPromise;
    } finally {
      this.loadingPromises.delete(path);
    }
  }

  async preloadVideo(
    path: string,
    priority: "critical" | "high" | "normal" = "normal",
    maxSize?: number
  ): Promise<void> {
    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path)!;
    }

    if (this.statusCache.get(path) === "loaded") {
      return Promise.resolve();
    }

    const cached = this.getFromLocalStorage(path);
    if (cached) {
      this.memoryCache.set(path, cached);
      this.statusCache.set(path, "loaded");
      return Promise.resolve();
    }

    const loadPromise = this.loadAndCacheVideo(path, priority, maxSize);
    this.loadingPromises.set(path, loadPromise);

    try {
      await loadPromise;
    } finally {
      this.loadingPromises.delete(path);
    }
  }

  private async loadAndCacheImage(
    path: string,
    priority: "critical" | "high" | "normal"
  ): Promise<void> {
    return new Promise((resolve) => {
      if (this.abortController?.signal.aborted) {
        resolve();
        return;
      }

      const img = new Image();
      this.statusCache.set(path, "loading");

      const timeout =
        priority === "critical" ? 15000 : priority === "high" ? 10000 : 8000;
      const timeoutId = setTimeout(() => {
        this.statusCache.set(path, "error");
        resolve();
      }, timeout);

      const cleanup = () => {
        clearTimeout(timeoutId);
        this.abortController?.signal.removeEventListener("abort", handleAbort);
      };

      const handleLoad = async () => {
        try {
          await this.storeImage(path, img);
          this.statusCache.set(path, "loaded");
        } catch (error) {
          this.statusCache.set(path, "error");
          console.error(`❌ Failed to cache image ${path}:`, error);
        }
        cleanup();
        resolve();
      };

      const handleError = () => {
        this.statusCache.set(path, "error");
        cleanup();
        resolve();
      };

      const handleAbort = () => {
        img.src = "";
        cleanup();
        resolve();
      };

      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);
      this.abortController?.signal.addEventListener("abort", handleAbort);

      if (priority === "critical") {
        (img as any).fetchPriority = "high";
      }

      img.crossOrigin = "anonymous"; // allows canvas toBlob if assets ever move to CDN
      (img as any).decoding = "async";
      (img as any).loading = priority === "critical" ? "eager" : "lazy";

      img.src = path;
    });
  }

  private async loadAndCacheVideo(
    path: string,
    priority: "critical" | "high" | "normal",
    maxSize?: number
  ): Promise<void> {
    return new Promise(async (resolve) => {
      if (this.abortController?.signal.aborted) {
        resolve();
        return;
      }

      this.statusCache.set(path, "loading");

      try {
        const headResponse = await fetch(path, { method: "HEAD" });
        const contentLength = headResponse.headers.get("content-length");
        const videoSize = contentLength ? parseInt(contentLength, 10) : 0;

        if (maxSize && videoSize > maxSize) {
          this.statusCache.set(path, "loaded");
          resolve();
          return;
        }

        const currentVideoSize = this.getCurrentVideoCacheSize();
        if (currentVideoSize + videoSize > this.MAX_VIDEO_CACHE_SIZE) {
          this.statusCache.set(path, "loaded");
          resolve();
          return;
        }

        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to fetch video: ${response.status}`);
        }

        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result as string;
          const cacheData: CacheEntry = {
            data: base64,
            timestamp: Date.now(),
            path: path,
            size: base64.length,
          };

          this.memoryCache.set(path, base64);
          this.storeInLocalStorage(path, cacheData);
          this.statusCache.set(path, "loaded");
          resolve();
        };

        reader.onerror = () => {
          this.statusCache.set(path, "error");
          console.error(`Failed to read video blob for ${path}`);
          resolve();
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        this.statusCache.set(path, "error");
        console.error(`Failed to cache video ${path}:`, error);
        resolve();
      }
    });
  }

  private async storeImage(path: string, img: HTMLImageElement): Promise<void> {
    const hasOffscreen = typeof OffscreenCanvas !== "undefined";
    const hasCreateImageBitmap = typeof createImageBitmap === "function";

    // Draw image → Blob (prefer off-thread when possible)
    const toBlobFromImage = async (): Promise<Blob> => {
      if (hasOffscreen && hasCreateImageBitmap) {
        // Off-thread decode + render
        const bmp = await createImageBitmap(img);
        const off = new OffscreenCanvas(bmp.width, bmp.height);
        const ctx = off.getContext("2d")!;
        ctx.drawImage(bmp, 0, 0);

        // OffscreenCanvas has convertToBlob (not toBlob)
        if ("convertToBlob" in off) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (off as any).convertToBlob({
            type: "image/webp",
            quality: 0.85,
          });
        }

        // Fallback: copy to a regular canvas and use toBlob there
        const canvas = document.createElement("canvas");
        const c2d = canvas.getContext("2d")!;
        canvas.width = bmp.width;
        canvas.height = bmp.height;
        c2d.drawImage(bmp, 0, 0);
        return await new Promise<Blob>((res, rej) =>
          canvas.toBlob(
            (b) => (b ? res(b) : rej(new Error("Failed toBlob"))),
            "image/webp",
            0.85
          )
        );
      }

      // No Offscreen/bitmap: use regular canvas
      const canvas = document.createElement("canvas");
      const c2d = canvas.getContext("2d");
      if (!c2d) throw new Error("Cannot get canvas context");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      c2d.drawImage(img, 0, 0);
      return await new Promise<Blob>((res, rej) =>
        canvas.toBlob(
          (b) => (b ? res(b) : rej(new Error("Failed toBlob"))),
          "image/webp",
          0.85
        )
      );
    };

    const blob = await toBlobFromImage();

    // Store as base64 in localStorage + memory
    const reader = new FileReader();
    await new Promise<void>((resolve, reject) => {
      reader.onload = () => {
        const base64 = reader.result as string;
        const cacheData: CacheEntry = {
          data: base64,
          timestamp: Date.now(),
          path,
          size: base64.length,
        };
        this.memoryCache.set(path, base64);
        this.storeInLocalStorage(path, cacheData);
        resolve();
      };
      reader.onerror = () => reject(new Error("FileReader error"));
      reader.readAsDataURL(blob);
    });
  }

  private storeInLocalStorage(path: string, cacheData: CacheEntry): void {
    try {
      const cacheKey = this.CACHE_PREFIX + btoa(path);
      this.manageStorageSpace(cacheData.size);
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      if (error instanceof DOMException && error.code === 22) {
        this.clearOldestEntries();
        try {
          localStorage.setItem(
            this.CACHE_PREFIX + btoa(path),
            JSON.stringify(cacheData)
          );
        } catch {
          console.warn("Unable to cache due to storage constraints:", path);
        }
      } else {
        console.warn("Failed to cache:", path, error);
      }
    }
  }

  private manageStorageSpace(newItemSize: number): void {
    try {
      const entries = this.getAllCacheEntries();
      let totalSize = entries.reduce((sum, entry) => sum + entry.size, 0);

      if (totalSize + newItemSize > this.MAX_CACHE_SIZE) {
        entries.sort((a, b) => a.timestamp - b.timestamp);

        for (const entry of entries) {
          if (totalSize + newItemSize <= this.MAX_CACHE_SIZE) break;
          this.removeFromCache(entry.path);
          totalSize -= entry.size;
        }
      }
    } catch (error) {
      console.warn("Cache management failed:", error);
    }
  }

  private getAllCacheEntries(): CacheEntry[] {
    const entries: CacheEntry[] = [];

    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter((key) => key.startsWith(this.CACHE_PREFIX));

      for (const key of cacheKeys) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || "{}");
          if (data.timestamp && data.path && data.size) {
            entries.push(data);
          }
        } catch {
          localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.warn("Failed to get cache entries:", error);
    }

    return entries;
  }

  private removeFromCache(path: string): void {
    try {
      const cacheKey = this.CACHE_PREFIX + btoa(path);
      localStorage.removeItem(cacheKey);
      this.memoryCache.delete(path);
      this.statusCache.delete(path);
    } catch (error) {
      console.warn(`Failed to remove ${path} from cache:`, error);
    }
  }

  private clearOldestEntries(): void {
    const entries = this.getAllCacheEntries();
    entries.sort((a, b) => a.timestamp - b.timestamp);

    const toRemove = Math.ceil(entries.length * 0.25);
    for (let i = 0; i < toRemove && i < entries.length; i++) {
      this.removeFromCache(entries[i].path);
    }
  }

  private getFromLocalStorage(path: string): string | null {
    try {
      const cacheKey = this.CACHE_PREFIX + btoa(path);
      const cached = localStorage.getItem(cacheKey);

      if (!cached) return null;

      const data: CacheEntry = JSON.parse(cached);

      if (Date.now() - data.timestamp > this.MAX_CACHE_AGE) {
        this.removeFromCache(path);
        return null;
      }

      return data.data;
    } catch (error) {
      console.warn(`Failed to retrieve cached image ${path}:`, error);
      return null;
    }
  }

  getCachedImageUrl(path: string): string | null {
    if (this.memoryCache.has(path)) {
      return this.memoryCache.get(path)!;
    }

    const cached = this.getFromLocalStorage(path);
    if (cached) {
      this.memoryCache.set(path, cached);
      this.statusCache.set(path, "loaded");
      return cached;
    }

    return null;
  }

  isImageReady(path: string): boolean {
    return this.statusCache.get(path) === "loaded";
  }

  // imagePreloader.ts
  async preloadPageAssets(pageName: string): Promise<void> {
    const pageAssets = CRITICAL_ASSETS.filter((a) => a.page === pageName);
    if (pageAssets.length === 0) return;

    const loadOne = (a: HeroAsset) =>
      a.type === "image"
        ? this.preloadImage(a.path, a.priority)
        : this.preloadVideo(a.path, a.priority, a.maxSize);

    // small pages: fire normally
    if (pageAssets.length <= 8) {
      await Promise.all(pageAssets.map(loadOne));
      return;
    }

    // big pages (like Services): batch
    const first = pageAssets.slice(0, 6);
    const rest = pageAssets.slice(6);

    await Promise.all(first.map(loadOne));

    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb, { timeout: 1500 })
        : setTimeout(cb, 200);

    idle(() => {
      // don’t block UI; fire and forget
      Promise.all(rest.map(loadOne)).catch(console.warn);
    });
  }

  private getCurrentVideoCacheSize(): number {
    let totalSize = 0;

    try {
      const videoAssets = CRITICAL_ASSETS.filter(
        (asset) => asset.type === "video"
      );

      for (const asset of videoAssets) {
        const cacheKey = this.CACHE_PREFIX + btoa(asset.path);
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          try {
            const data: CacheEntry = JSON.parse(cached);
            totalSize += data.size;
          } catch {
            localStorage.removeItem(cacheKey);
          }
        }
      }
    } catch (error) {
      console.warn("Failed to calculate video cache size:", error);
    }

    return totalSize;
  }

  private cleanupExpiredCache(): void {
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter((key) => key.startsWith(this.CACHE_PREFIX));

      cacheKeys.forEach((key) => {
        try {
          const data = JSON.parse(localStorage.getItem(key) || "{}");
          if (Date.now() - data.timestamp > this.MAX_CACHE_AGE) {
            localStorage.removeItem(key);
          }
        } catch {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn("Cache cleanup failed:", error);
    }
  }

  private setupCleanupHandlers(): void {
    window.addEventListener("beforeunload", () => {
      this.cleanup();
    });

    const cleanupInterval = setInterval(() => {
      this.cleanupExpiredCache();
    }, 30 * 60 * 1000);

    window.addEventListener("beforeunload", () => {
      clearInterval(cleanupInterval);
    });
  }

  cleanup(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    this.loadingPromises.clear();
  }

  clearAllCache(): void {
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter((key) => key.startsWith(this.CACHE_PREFIX));

      cacheKeys.forEach((key) => localStorage.removeItem(key));

      this.memoryCache.clear();
      this.statusCache.clear();
      sessionStorage.removeItem("galaga_cache_initialized");
    } catch (error) {
      console.error("Failed to clear cache:", error);
    }
  }
}

// Export singleton instance
export const imageCache = AdvancedImageCache.getInstance();

// Export utility functions
export const initializeImageCache = () => imageCache.initialize();
export const getCachedImage = (path: string) =>
  imageCache.getCachedImageUrl(path);
export const isImageReady = (path: string) => imageCache.isImageReady(path);
export const preloadPageAssets = (page: string) =>
  imageCache.preloadPageAssets(page);
export const clearCache = () => imageCache.clearAllCache();
