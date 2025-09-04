interface CachedVideo {
  id: string;
  url: string;
  data: Blob;
  timestamp: number;
  size: number;
}

class VideoCacheManager {
  private dbName = "galaga-video-cache";
  private dbVersion = 1;
  private storeName = "videos";
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: "id" });
          store.createIndex("url", "url", { unique: true });
          store.createIndex("timestamp", "timestamp");
        }
      };
    });
  }

  async cacheVideo(
    url: string,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    if (!this.db) await this.init();

    const videoId = this.generateVideoId(url);

    // Check if video is already cached
    const cached = await this.getCachedVideo(videoId);
    if (cached) {
      return URL.createObjectURL(cached.data);
    }

    try {
      // Download video with progress tracking
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed to fetch video: ${response.statusText}`);

      const contentLength = response.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      let loaded = 0;

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to get response reader");

      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        loaded += value.length;

        if (total > 0 && onProgress) {
          onProgress((loaded / total) * 100);
        }
      }

      // Create blob from chunks
      const videoBlob = new Blob(chunks as any, { type: "video/mp4" });

      // Store in IndexedDB
      const cachedVideo: CachedVideo = {
        id: videoId,
        url,
        data: videoBlob,
        timestamp: Date.now(),
        size: videoBlob.size,
      };

      await this.storeVideo(cachedVideo);

      return URL.createObjectURL(videoBlob);
    } catch (error) {
      console.error("Error caching video:", error);
      // Return original URL as fallback
      return url;
    }
  }

  async getCachedVideo(videoId: string): Promise<CachedVideo | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.get(videoId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result;
        if (result && this.isVideoValid(result)) {
          resolve(result);
        } else {
          resolve(null);
        }
      };
    });
  }

  private async storeVideo(video: CachedVideo): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.put(video);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  private generateVideoId(url: string): string {
    return btoa(url).replace(/[^a-zA-Z0-9]/g, "");
  }

  private isVideoValid(
    video: CachedVideo,
    maxAge: number = 7 * 24 * 60 * 60 * 1000
  ): boolean {
    // Check if video is not older than maxAge (default 7 days)
    return Date.now() - video.timestamp < maxAge;
  }

  async getCacheInfo(): Promise<{
    totalSize: number;
    videoCount: number;
    videos: Array<{ id: string; url: string; size: number; timestamp: number }>;
  }> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const videos = request.result;
        const totalSize = videos.reduce((sum, video) => sum + video.size, 0);
        const videoInfo = videos.map((v) => ({
          id: v.id,
          url: v.url,
          size: v.size,
          timestamp: v.timestamp,
        }));

        resolve({
          totalSize,
          videoCount: videos.length,
          videos: videoInfo,
        });
      };
    });
  }

  async clearCache(): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async deleteVideo(videoId: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(videoId);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}

export const videoCacheManager = new VideoCacheManager();
