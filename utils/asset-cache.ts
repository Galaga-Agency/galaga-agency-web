export interface AssetDefinition {
  path: string;
  page: string;
  priority: "critical" | "high" | "normal";
  format: "webp" | "jpg" | "png" | "mp4" | "webm";
  type: "image" | "video";
  maxSize?: number;
}

export const CRITICAL_ASSETS: AssetDefinition[] = [
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

interface CachedAsset {
  path: string;
  data: string | Blob;
  timestamp: number;
  size: number;
  type: "image" | "video";
  priority: "critical" | "high" | "normal";
}

type CacheStatus = "pending" | "loading" | "loaded" | "error";

class UnifiedAssetCache {
  private static instance: UnifiedAssetCache;
  private memoryCache = new Map<string, string>();
  private statusCache = new Map<string, CacheStatus>();
  private loadingPromises = new Map<string, Promise<void>>();
  private progressCallbacks = new Map<string, (progress: number) => void>();
  private readonly DB_NAME = "galaga-asset-cache";
  private readonly DB_VERSION = 1;
  private readonly ASSETS_STORE_NAME = "assets";
  private readonly MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days
  private abortController: AbortController | null = null;
  private db: IDBDatabase | null = null;

  static getInstance(): UnifiedAssetCache {
    if (!UnifiedAssetCache.instance) {
      UnifiedAssetCache.instance = new UnifiedAssetCache();
    }
    return UnifiedAssetCache.instance;
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.initDatabase();
      this.clearLegacyCache();
      this.setupCleanupHandlers();
    }
  }

  private async initDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains(this.ASSETS_STORE_NAME)) {
          const store = db.createObjectStore(this.ASSETS_STORE_NAME, { keyPath: "path" });
          store.createIndex("timestamp", "timestamp");
          store.createIndex("type", "type");
          store.createIndex("priority", "priority");
        }
      };
    });
  }

  private clearLegacyCache(): void {
    try {
      const keys = Object.keys(localStorage);
      const legacyKeys = keys.filter(key => 
        key.startsWith("galaga_asset_") || key.startsWith("galaga_img_")
      );
      
      legacyKeys.forEach(key => localStorage.removeItem(key));
      if (legacyKeys.length > 0) {
        console.log(`Cleared ${legacyKeys.length} legacy cache entries`);
      }
    } catch (error) {
      console.warn("Failed to clear legacy cache:", error);
    }
  }

  async initialize(): Promise<void> {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem("galaga_assets_initialized")) {
      await this.loadFromDatabase();
      return;
    }

    this.abortController = new AbortController();

    try {
      await this.preloadCriticalAssets();
      sessionStorage.setItem("galaga_assets_initialized", "true");
    } catch (error) {
      console.error("Asset cache initialization failed:", error);
    }
  }

  private async loadFromDatabase(): Promise<void> {
    if (!this.db) await this.initDatabase();

    try {
      const assets = await this.getAllAssets();
      assets.forEach(asset => {
        if (this.isAssetValid(asset)) {
          const url = asset.type === "image" 
            ? asset.data as string 
            : URL.createObjectURL(asset.data as Blob);
          
          this.memoryCache.set(asset.path, url);
          this.statusCache.set(asset.path, "loaded");
        }
      });
    } catch (error) {
      console.warn("Failed to load from database:", error);
    }
  }

  private async getAllAssets(): Promise<CachedAsset[]> {
    if (!this.db) await this.initDatabase();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.ASSETS_STORE_NAME], "readonly");
      const store = transaction.objectStore(this.ASSETS_STORE_NAME);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  private async storeAsset(asset: CachedAsset): Promise<void> {
    if (!this.db) await this.initDatabase();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.ASSETS_STORE_NAME], "readwrite");
      const store = transaction.objectStore(this.ASSETS_STORE_NAME);
      const request = store.put(asset);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  private async getCachedAsset(path: string): Promise<CachedAsset | null> {
    if (!this.db) await this.initDatabase();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.ASSETS_STORE_NAME], "readonly");
      const store = transaction.objectStore(this.ASSETS_STORE_NAME);
      const request = store.get(path);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result;
        if (result && this.isAssetValid(result)) {
          resolve(result);
        } else {
          resolve(null);
        }
      };
    });
  }

  private isAssetValid(asset: CachedAsset): boolean {
    return Date.now() - asset.timestamp < this.MAX_CACHE_AGE;
  }

  async cacheAsset(
    path: string,
    type: "image" | "video",
    priority: "critical" | "high" | "normal" = "normal",
    maxSize?: number,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    if (onProgress) {
      this.progressCallbacks.set(path, onProgress);
    }

    if (this.loadingPromises.has(path)) {
      await this.loadingPromises.get(path)!;
      return this.getCachedAssetUrl(path) || path;
    }

    if (this.statusCache.get(path) === "loaded") {
      const cachedUrl = this.getCachedAssetUrl(path);
      return cachedUrl || path;
    }

    const cached = await this.getCachedAsset(path);
    if (cached) {
      const url = type === "image" 
        ? cached.data as string 
        : URL.createObjectURL(cached.data as Blob);
      
      this.memoryCache.set(path, url);
      this.statusCache.set(path, "loaded");
      return url;
    }

    const loadPromise = type === "image" 
      ? this.loadAndCacheImage(path, priority)
      : this.loadAndCacheVideo(path, priority, maxSize, onProgress);

    this.loadingPromises.set(path, loadPromise);

    try {
      await loadPromise;
      return this.getCachedAssetUrl(path) || path;
    } finally {
      this.loadingPromises.delete(path);
      this.progressCallbacks.delete(path);
    }
  }

  private async loadAndCacheImage(path: string, priority: "critical" | "high" | "normal"): Promise<void> {
    return new Promise((resolve) => {
      if (this.abortController?.signal.aborted) {
        resolve();
        return;
      }

      const img = new Image();
      this.statusCache.set(path, "loading");

      const timeout = priority === "critical" ? 15000 : priority === "high" ? 10000 : 8000;
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
          await this.storeImageAsset(path, img, priority);
          this.statusCache.set(path, "loaded");
        } catch (error) {
          this.statusCache.set(path, "error");
          console.error(`Failed to cache image ${path}:`, error);
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

      img.crossOrigin = "anonymous";
      (img as any).decoding = "async";
      (img as any).loading = priority === "critical" ? "eager" : "lazy";

      img.src = path;
    });
  }

  private async storeImageAsset(
    path: string, 
    img: HTMLImageElement, 
    priority: "critical" | "high" | "normal"
  ): Promise<void> {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Cannot get canvas context");
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("Failed toBlob"))),
        "image/webp",
        0.85
      );
    });

    const base64 = await this.blobToBase64(blob);

    const asset: CachedAsset = {
      path,
      data: base64,
      timestamp: Date.now(),
      size: blob.size,
      type: "image",
      priority
    };

    await this.storeAsset(asset);
    this.memoryCache.set(path, base64);
  }

  private async loadAndCacheVideo(
    path: string,
    priority: "critical" | "high" | "normal",
    maxSize?: number,
    onProgress?: (progress: number) => void
  ): Promise<void> {
    if (this.abortController?.signal.aborted) return;

    this.statusCache.set(path, "loading");

    try {
      const headResponse = await fetch(path, { method: "HEAD" });
      const contentLength = headResponse.headers.get("content-length");
      const videoSize = contentLength ? parseInt(contentLength, 10) : 0;

      if (maxSize && videoSize > maxSize) {
        this.statusCache.set(path, "loaded");
        return;
      }

      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch video: ${response.status}`);
      }

      const total = contentLength ? parseInt(contentLength, 10) : 0;
      let loaded = 0;
      const chunks: Uint8Array[] = [];
      const reader = response.body?.getReader();

      if (!reader) throw new Error("Failed to get response reader");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        loaded += value.length;

        if (total > 0) {
          const progress = (loaded / total) * 100;
          onProgress?.(progress);
          this.progressCallbacks.get(path)?.(progress);
        }
      }

      const videoBlob = new Blob(chunks as any, { type: "video/mp4" });
      
      const asset: CachedAsset = {
        path,
        data: videoBlob,
        timestamp: Date.now(),
        size: videoBlob.size,
        type: "video",
        priority
      };

      await this.storeAsset(asset);
      
      const blobUrl = URL.createObjectURL(videoBlob);
      this.memoryCache.set(path, blobUrl);
      this.statusCache.set(path, "loaded");

    } catch (error) {
      this.statusCache.set(path, "error");
      console.error(`Failed to cache video ${path}:`, error);
    }
  }

  private async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  getCachedAssetUrl(path: string): string | null {
    // First check memory cache
    const memoryUrl = this.memoryCache.get(path);
    if (memoryUrl) {
      return memoryUrl;
    }

    // If not in memory, we need to load from IndexedDB asynchronously
    // This method should be synchronous, so we return null and trigger async load
    this.loadAssetFromDatabase(path);
    return null;
  }

  private async loadAssetFromDatabase(path: string): Promise<void> {
    try {
      const cached = await this.getCachedAsset(path);
      if (cached) {
        const url = cached.type === "image" 
          ? cached.data as string 
          : URL.createObjectURL(cached.data as Blob);
        
        this.memoryCache.set(path, url);
        this.statusCache.set(path, "loaded");
        
        // Trigger a re-render by dispatching a custom event
        window.dispatchEvent(new CustomEvent('assetCached', { detail: { path, url } }));
      }
    } catch (error) {
      console.warn(`Failed to load asset ${path} from database:`, error);
    }
  }

  isAssetReady(path: string): boolean {
    return this.statusCache.get(path) === "loaded";
  }

  async preloadPageAssets(pageName: string): Promise<void> {
    const pageAssets = CRITICAL_ASSETS.filter((a) => a.page === pageName);
    if (pageAssets.length === 0) return;

    const loadOne = (a: AssetDefinition) =>
      this.cacheAsset(a.path, a.type, a.priority, a.maxSize);

    if (pageAssets.length <= 8) {
      await Promise.all(pageAssets.map(loadOne));
      return;
    }

    const first = pageAssets.slice(0, 6);
    const rest = pageAssets.slice(6);

    await Promise.all(first.map(loadOne));

    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb, { timeout: 1500 })
        : setTimeout(cb, 200);

    idle(() => {
      Promise.all(rest.map(loadOne)).catch(console.warn);
    });
  }

  private async preloadCriticalAssets(): Promise<void> {
    const criticalAssets = CRITICAL_ASSETS.filter(asset => asset.priority === "critical");
    const highPriorityAssets = CRITICAL_ASSETS.filter(asset => asset.priority === "high");
    const normalAssets = CRITICAL_ASSETS.filter(asset => asset.priority === "normal");

    try {
      await Promise.all(
        criticalAssets.map(asset => this.cacheAsset(asset.path, asset.type, asset.priority, asset.maxSize))
      );

      Promise.all(
        highPriorityAssets.map(asset => this.cacheAsset(asset.path, asset.type, asset.priority, asset.maxSize))
      ).catch(console.warn);

      setTimeout(() => {
        Promise.all(
          normalAssets.map(asset => this.cacheAsset(asset.path, asset.type, asset.priority, asset.maxSize))
        ).catch(console.warn);
      }, 2000);
    } catch (error) {
      console.error("Critical asset preloading failed:", error);
    }
  }

  private async removeAsset(path: string): Promise<void> {
    if (!this.db) await this.initDatabase();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.ASSETS_STORE_NAME], "readwrite");
      const store = transaction.objectStore(this.ASSETS_STORE_NAME);
      const request = store.delete(path);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.memoryCache.delete(path);
        this.statusCache.delete(path);
        resolve();
      };
    });
  }

  private async cleanupExpiredCache(): Promise<void> {
    if (!this.db) await this.initDatabase();

    try {
      const assets = await this.getAllAssets();
      const expired = assets.filter(asset => !this.isAssetValid(asset));
      
      for (const asset of expired) {
        await this.removeAsset(asset.path);
      }
      
      if (expired.length > 0) {
        console.log(`Cleaned up ${expired.length} expired assets`);
      }
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
    this.progressCallbacks.clear();
  }

  async clearAllCache(): Promise<void> {
    if (!this.db) await this.initDatabase();
    if (!this.db) throw new Error("Failed to initialize database");

    try {
      const transaction = this.db.transaction([this.ASSETS_STORE_NAME], "readwrite");
      const store = transaction.objectStore(this.ASSETS_STORE_NAME);
      
      return new Promise((resolve, reject) => {
        const clearRequest = store.clear();
        clearRequest.onerror = () => reject(clearRequest.error);
        clearRequest.onsuccess = () => {
          this.memoryCache.clear();
          this.statusCache.clear();
          this.progressCallbacks.clear();
          sessionStorage.removeItem("galaga_assets_initialized");
          resolve();
        };
      });
    } catch (error) {
      console.error("Failed to clear cache:", error);
      throw error;
    }
  }
}

export const assetCache = UnifiedAssetCache.getInstance();

export const initializeAssetCache = () => assetCache.initialize();
export const getCachedAsset = (path: string) => assetCache.getCachedAssetUrl(path);
export const isAssetReady = (path: string) => assetCache.isAssetReady(path);
export const preloadPageAssets = (page: string) => assetCache.preloadPageAssets(page);
export const cacheAsset = (path: string, type: "image" | "video", priority?: "critical" | "high" | "normal", maxSize?: number, onProgress?: (progress: number) => void) => 
  assetCache.cacheAsset(path, type, priority, maxSize, onProgress);
export const clearCache = () => assetCache.clearAllCache();