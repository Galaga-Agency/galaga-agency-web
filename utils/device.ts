/**
 * Reliable device detection utilities based on screen size and user agent
 */

export const getWindowDimensions = (): { width: number; height: number } => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  // Check screen width first (most reliable)
  if (width < 768) return true;

  // Check user agent for mobile keywords
  const mobileKeywords = [
    "android",
    "iphone",
    "ipod",
    "blackberry",
    "windows phone",
    "mobile",
    "opera mini",
    "iemobile",
  ];

  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
};

export const isTablet = (): boolean => {
  if (typeof window === "undefined") return false;

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Check for tablet keywords in user agent
  const tabletKeywords = ["ipad", "tablet", "kindle", "playbook", "silk"];
  const hasTabletKeyword = tabletKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  // Enhanced iPad detection (including iPad Pro)
  const isIPad = 
    /macintosh/.test(userAgent) && isTouch ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
    /ipad/.test(userAgent);

  // Aggressive iPad Pro detection for simulators
  const isIPadPro = (
    navigator.platform === 'MacIntel' ||
    /macintosh/.test(userAgent) ||
    userAgent.includes('mac os x')
  ) && (
    width >= 1024 || // iPad Pro sizes
    navigator.maxTouchPoints > 1 ||
    // Simulator fallback - assume large "Mac" screens are iPad Pro
    (width >= 1024 && width <= 1366)
  );

  // Size-based detection for touch devices
  const isTabletSize = width >= 768 && width <= 1024 && isTouch;

  // Large tablet detection (including iPad Pro) - even without proper touch detection
  const isLargeTablet = width >= 1024 && width <= 1366;

  // Force tablet detection for common tablet resolutions
  const commonTabletSizes = [
    1024, 1080, 1112, 1194, 1366 // Common tablet widths
  ];
  const isCommonTabletSize = commonTabletSizes.some(size => 
    Math.abs(width - size) <= 50 // Allow some tolerance
  );

  return hasTabletKeyword || isIPad || isIPadPro || isTabletSize || isLargeTablet || isCommonTabletSize;
};

export const isDesktop = (): boolean => {
  if (typeof window === "undefined") return true;

  // Only desktop if screen is massive (typical desktop monitor)
  return window.innerWidth >= 1440;
};

export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  
  // Everything under 1440px is touch
  return window.innerWidth < 1440;
};

// NEW: Create external store for instant updates
let listeners = new Set<() => void>();
let cachedSnapshot: any = null;

// Cache the server snapshot to avoid infinite loops
const SERVER_SNAPSHOT = {
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isTouchDevice: false,
  windowDimensions: { width: 0, height: 0 },
};

const deviceStore = {
  getSnapshot(): {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouchDevice: boolean;
    windowDimensions: { width: number; height: number };
  } {
    const newSnapshot = {
      isMobile: isMobile(),
      isTablet: isTablet(),
      isDesktop: isDesktop(),
      isTouchDevice: isTouchDevice(),
      windowDimensions: getWindowDimensions(),
    };

    // Only update cache if values actually changed
    if (
      !cachedSnapshot ||
      cachedSnapshot.isMobile !== newSnapshot.isMobile ||
      cachedSnapshot.isTablet !== newSnapshot.isTablet ||
      cachedSnapshot.isDesktop !== newSnapshot.isDesktop ||
      cachedSnapshot.isTouchDevice !== newSnapshot.isTouchDevice ||
      cachedSnapshot.windowDimensions.width !==
        newSnapshot.windowDimensions.width ||
      cachedSnapshot.windowDimensions.height !==
        newSnapshot.windowDimensions.height
    ) {
      cachedSnapshot = newSnapshot;
    }

    return cachedSnapshot;
  },

  getServerSnapshot() {
    // Return cached stable reference
    return SERVER_SNAPSHOT;
  },

  subscribe(listener: () => void) {
    if (typeof window === "undefined") return () => {};

    listeners.add(listener);

    // Add resize listener only once
    if (listeners.size === 1) {
      let timeoutId: NodeJS.Timeout;
      const debouncedUpdate = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          listeners.forEach((l) => l());
        }, 100);
      };

      window.addEventListener("resize", debouncedUpdate);

      // Store cleanup function
      (deviceStore as any)._cleanup = () => {
        window.removeEventListener("resize", debouncedUpdate);
        clearTimeout(timeoutId);
      };
    }

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0 && (deviceStore as any)._cleanup) {
        (deviceStore as any)._cleanup();
      }
    };
  },
};

export { deviceStore };