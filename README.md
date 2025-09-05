# GALAGA AGENCY WEB

# Table of Contents

- [Tech Stack](#tech-stack)
- [Internationalization (i18n)](#internationalization-i18n)
- [Caching System](#caching-system)
- [EmailJS Access](#emailjs-access)

# Tech stack:

- Next.JS 15
- Tailwind CSS v4 (be careful, it's v4, which means new syntaxis, no more config file, all in global.css)
- Typescript
- Famer Motion (only used in the homepage hero animation, I couldn´t get things to work nicely with gsap only foir this specific use-case)
- GSAP

# Internationalization (i18n)

This documentation explains the translation system implemented in our Next.js application, providing bilingual support for Spanish (es) and English (en).

## Overview

Our i18n system is built with:

- **Framework**: Next.js 15 with App Router
- **Languages**: Spanish (primary) and English
- **Structure**: File-based routing with locale segments
- **Translation Files**: JSON-based translations stored in `/locales`
- **State Management**: React Context for translation state

## File Structure

```
app/
├── [locale]/               # Dynamic locale routing
│   ├── about-us/          # English routes
│   ├── casos-de-exito/    # Spanish routes
│   ├── contact/           # English routes
│   ├── contacto/          # Spanish routes
│   ├── services/          # English routes
│   ├── servicios/         # Spanish routes
│   ├── sobre-nosotros/    # Spanish routes
│   ├── use-cases/         # English routes
│   ├── layout.tsx         # Locale layout with TranslationProvider
│   └── page.tsx           # Homepage
locales/
├── en.json               # English translations
└── es.json               # Spanish translations
hooks/
└── useTranslation.tsx    # Translation context and hook
utils/
└── routeTranslations.ts  # Route mapping configuration
```

## Translation Files Structure

Both `en.json` and `es.json` follow identical structure organized by page and section:

json

```
{
  "nav": {
    "home": "Home / Inicio",
    "about": "About / Quiénes somos",
    "services": "Services / Servicios",
    "contact": "Contact / Contacto"
  },
  "homepage": {
    "hero-section": {
      "title": "Page title",
      "subtitle": "Page subtitle"
    },
    "about-section": {
      "eyebrow": "Section eyebrow",
      "mainTitle": "Section title"
    }
  },
  "about-page": {
    "hero-section": { /* ... */ }
  },
  "services-page": {
    "overview-section": { /* ... */ }
  }
}
```

### Key Organization Principles:

1.  **Page-by-page structure** - Each page has its own top-level key
2.  **Section-based nesting** - Content grouped by page sections
3.  **Identical key structure** - Both language files mirror each other exactly
4.  **Reusable blocks** - Common elements like `portfolio` and `featured-projects`

## Route Configuration

### Route Translations (`utils/routeTranslations.ts`)

typescript

```
export const routeTranslations = {
  es: {
    "about-us": "sobre-nosotros",
    services: "servicios",
    "use-cases": "casos-de-exito",
    contact: "contacto",
  },
  en: {
    "about-us": "about-us",
    services: "services",
    "use-cases": "use-cases",
    contact: "contact",
  },
};

// Bidirectional route mapping for language switching
export const routeMapping = {
  // Spanish to English
  "sobre-nosotros": "about-us",
  servicios: "services",
  "casos-de-exito": "use-cases",
  contacto: "contact",

  // English to Spanish
  "about-us": "sobre-nosotros",
  services: "servicios",
  "use-cases": "casos-de-exito",
  contact: "contacto",
};

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;
export type Language = (typeof locales)[number];
```

### URL Structure

- **Spanish**: `/es/sobre-nosotros`, `/es/servicios`, `/es/casos-de-exito`
- **English**: `/en/about-us`, `/en/services`, `/en/use-cases`
- **Root redirect**: `/` defaults to `/es` (Spanish)

## Translation Hook (`useTranslation`)

### Core Features

- **Context-based**: Uses React Context for global state
- **Automatic loading**: Dynamically imports translation files
- **URL synchronization**: Language state syncs with URL locale
- **Persistence**: Saves language preference to localStorage
- **Route translation**: Handles URL changes when switching languages

### Hook API

typescript

```
const { t, language, changeLanguage, toggleLanguage } = useTranslation();

// Translation function - supports nested keys
const title = t('homepage.hero-section.title');
const navHome = t('nav.home');

// Current language ('es' | 'en')
console.log(language);

// Change language programmatically
changeLanguage('en');

// Toggle between Spanish/English
toggleLanguage();
```

### Translation Function (`t`)

The `t()` function supports dot notation for nested keys:

- `t('nav.home')` → accesses `nav.home` in translation file
- `t('homepage.hero-section.title')` → accesses nested structure
- Returns the key itself if translation not found (fallback)

## Implementation in Components

### Layout Setup (`app/[locale]/layout.tsx`)

typescript

```
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <TranslationProvider>
      <Navbar />
      {children}
      <Footer />
    </TranslationProvider>
  );
}
```

### Component Usage

typescript

```
'use client';
import { useTranslation } from '@/hooks/useTranslation';

export default function MyComponent() {
  const { t, language, toggleLanguage } = useTranslation();

  return (
    <section>
      <h1>{t('homepage.hero-section.title')}</h1>
      <p>{t('homepage.hero-section.subtitle')}</p>

      <button onClick={toggleLanguage}>
        {language === 'es' ? 'English' : 'Español'}
      </button>
    </section>
  );
}
```

## Language Switching Logic

### URL-Based Language Detection

1.  **URL parsing**: Extracts locale from first URL segment (`/es/`, `/en/`)
2.  **Route mapping**: Uses `routeMapping` to translate routes between languages
3.  **State sync**: Updates internal language state to match URL
4.  **Fallback**: Defaults to Spanish for invalid or missing locales

### Language Change Process

1.  **Route translation**: Maps current route to target language equivalent
2.  **URL update**: Uses `window.history.replaceState()` for seamless navigation
3.  **State update**: Updates language state and loads new translations
4.  **Persistence**: Saves preference to localStorage

### Example Language Switch

```
Current: /es/sobre-nosotros (Spanish)
Switch to English: /en/about-us (English)

Current: /en/services (English)
Switch to Spanish: /es/servicios (Spanish)
```

## Best Practices

### Adding New Translations

1.  **Add to both files**: Always update both `en.json` and `es.json`
2.  **Maintain structure**: Keep identical key structure across languages
3.  **Use descriptive keys**: Use clear, hierarchical key names
4.  **Test both languages**: Verify translations work in both locales

### Adding New Routes

1.  **Update route translations**: Add to `routeTranslations` object
2.  **Add bidirectional mapping**: Update `routeMapping` for both directions
3.  **Create locale folders**: Add route folders under `app/[locale]/`
4.  **Test navigation**: Verify language switching works on new routes

### Translation Key Naming

- Use kebab-case for consistency: `hero-section`, `about-section`
- Group by page and section: `homepage.hero-section.title`
- Keep keys descriptive but concise
- Maintain alphabetical order when possible

This system provides a robust, scalable solution for bilingual content management while maintaining clean URLs and seamless user experience across language switches.

<br><br><br><br><br><br>

---

# EmailJS Access

Usuario: thomas@galagaagency.com
Contraseña: Galaga2024\*

<br><br><br><br><br><br>

---

# Caching System

A comprehensive caching solution for images (localStorage) and videos (IndexedDB) to optimize loading performance and user experience.

## Overview

The caching system consists of two main parts:

- **Image Caching**: Uses localStorage with WebP compression for images
- **Video Caching**: Uses IndexedDB for large video files (100MB+)

## File Structure

```
utils/
├── image-preloader.ts     # Advanced image cache with localStorage
└── video-cache.ts         # IndexedDB video cache manager

hooks/
├── useAppLoading.ts       # Main loading orchestration
├── useVideoCache.ts       # Video caching hook
└── useCachedImage.ts      # Image cache hook

components/
├── ui/
│   └── CachedVideo.tsx    # Video component with caching
└── dev/
    └── VideoCacheManager.tsx # Debug component (dev only)
```

## Image Caching System

### Configuration (`utils/image-preloader.ts`)

Images are defined in `HERO_ASSETS` array with priority levels:

```typescript
export const HERO_ASSETS: HeroAsset[] = [
  {
    path: "/assets/img/logos/logo-full-white.webp",
    page: "home",
    priority: "critical", // critical | high | normal
    format: "webp",
    type: "image",
  },
  // ... more assets
];
```

### Features

- **Smart Compression**: Converts images to WebP format with 85% quality
- **Priority Loading**: Critical → High → Normal priority assets
- **Cache Management**: Auto-cleanup of expired/old entries
- **Memory + Storage**: Dual-layer caching (memory + localStorage)
- **Size Limits**: 100MB total cache, 50MB for videos
- **Batch Loading**: Intelligent batching for large asset lists

### Usage

```typescript
// Initialize cache
await imageCache.initialize();

// Preload specific images
await imageCache.preloadImage("/path/to/image.jpg", "high");

// Get cached image URL
const cachedUrl = imageCache.getCachedImageUrl("/path/to/image.jpg");

// Check if ready
const isReady = imageCache.isImageReady("/path/to/image.jpg");

// Preload page-specific assets
await imageCache.preloadPageAssets("home");
```

## Video Caching System

### Core Manager (`utils/video-cache.ts`)

IndexedDB-based caching for large video files:

```typescript
class VideoCacheManager {
  private dbName = "galaga-video-cache";
  private storeName = "videos";
  // Handles 100MB+ files with no localStorage size limits
}
```

### Features

- **IndexedDB Storage**: Handles large files without localStorage limits
- **Progress Tracking**: Real-time download progress
- **Cache Validation**: 7-day expiration with size management
- **Blob URLs**: Efficient serving of cached videos
- **Error Handling**: Graceful fallback to original URLs

### Video Cache Hook (`hooks/useVideoCache.ts`)

```typescript
const {
  cachedUrl, // Blob URL or null
  isLoading, // Cache loading state
  progress, // Download progress (0-100)
  error, // Cache errors
  cacheVideo, // Manual cache trigger
  clearVideoCache, // Clear specific video
  getCacheInfo, // Cache statistics
} = useVideoCache(videoUrl, {
  preloadOnMount: true,
  onProgress: (progress) => console.log(`${progress}%`),
  onCached: () => console.log("Video cached!"),
  onError: (error) => console.error("Cache failed:", error),
});
```

## Loading Orchestration System

### Main Loading Hook (`hooks/useAppLoading.ts`)

The `useAppLoading` hook orchestrates all caching and initialization processes while displaying a loading screen to users:

```typescript
const {
  isLoading, // Global loading state
  loadingProgress, // Combined progress (0-100)
  isAppReady, // App ready state
  cachedVideoUrl, // Hero video cache URL
} = useAppLoading();
```

### Loading Sequence & States

The hook manages 5 concurrent loading states:

```typescript
interface LoadingState {
  document: boolean; // DOM ready state
  images: boolean; // Critical image preloading
  translations: boolean; // i18n initialization
  gsap: boolean; // Animation library check
  video: boolean; // Hero video caching (IndexedDB)
}
```

**Loading Flow**:

1. **Loading Screen Appears**: User sees animated loading component
2. **Parallel Execution**: All 5 processes run simultaneously
3. **Progress Updates**: Real-time progress calculation with GSAP smooth animations
4. **Completion**: When all states are `true`, `isAppReady` becomes `true`
5. **App Launch**: Loading screen fades out, main app appears

### Critical Integration Points

**Loading Component Integration**:

```typescript
// LoadingWrapper.tsx
const { isLoading, loadingProgress, isAppReady } = useAppLoading();

// Shows loading screen until all caching is complete
{
  showLoading && <LoadingScreen progress={loadingProgress} />;
}

// Main app content hidden until ready
<div style={{ opacity: isAppReady ? 1 : 0 }}>{children}</div>;
```

**Progress Calculation**:

```typescript
// Real-time progress from all loading states
const completed = Object.values(loadingState).filter(Boolean).length;
const targetProgress = Math.floor((completed / 5) * 100);

// Smooth GSAP animation to new progress
gsap.to(currentProgress, {
  current: targetProgress,
  duration: 0.8,
  ease: "power2.out",
});
```

**State Management**:

- Each loading process updates its specific state when complete
- Progress bar smoothly animates to reflect completion percentage
- App remains uninteractive until `isAppReady: true`
- Prevents premature user interaction during asset loading

## Component Usage

### CachedVideo Component

```typescript
import CachedVideo from "@/components/ui/CachedVideo";

<CachedVideo
  src="/assets/videos/galaga-compressed.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
  onLoad={() => console.log("Video loaded")}
  onError={() => console.log("Video failed")}
  fallbackSrc="/assets/videos/fallback.mp4"
/>;
```

**Key Features**:

- Auto-detects cached videos via `useVideoCache`
- Fallback support for failed loads
- Loading states with cache indicators
- No duplicate caching (respects existing cache)

### Development Tools

Debug component for cache management (dev only):

```typescript
import VideoCacheManager from "@/components/dev/VideoCacheManager";

// Shows in development:
// - Cache statistics
// - Individual video management
// - Clear cache functionality
// - Storage usage info
```

## Cache Strategy

### Image Loading Priority

```
Critical Assets (blocking)
├── Logo images
├── Hero backgrounds
├── Above-fold content
│
High Priority (non-blocking)
├── Service images
├── Feature graphics
├── Interactive elements
│
Normal Priority (lazy)
└── Below-fold content
```

### Video Loading Strategy

```
Hero Video (during loading screen)
├── Check IndexedDB cache
├── Download if not cached (with progress)
├── Store as blob in IndexedDB
└── Serve via blob URL instantly on future visits

Other Videos (on-demand)
├── Check cache first
├── Cache on first play
└── Serve from cache thereafter
```

## Cache Management

### Automatic Cleanup

- **Expiration**: 7-day cache lifetime
- **Size Management**: LRU eviction when approaching limits
- **Invalid Entries**: Auto-removal of corrupted cache data
- **Memory Cleanup**: Blob URL revocation to prevent leaks

### Manual Management

```typescript
// Clear all image cache
imageCache.clearAllCache();

// Clear video cache
await videoCacheManager.clearCache();

// Get cache info
const info = await videoCacheManager.getCacheInfo();
console.log(`${info.videoCount} videos, ${formatSize(info.totalSize)}`);
```

## Performance Benefits

### First Visit

- Critical images: Preloaded during loading screen
- Hero video: Cached during loading (background download)
- Progressive loading: Critical → High → Normal priority

### Subsequent Visits

- Images: Instant load from localStorage (WebP compressed)
- Hero video: Instant load from IndexedDB (no network request)
- App ready: ~80% faster load times

### Storage Efficiency

- **Images**: WebP compression (~40% smaller than PNG/JPG)
- **Videos**: Raw file caching with size limits
- **Smart Cleanup**: Automatic old/large file removal
- **Memory Management**: Dual-layer caching strategy

## Browser Support

- **localStorage**: All modern browsers
- **IndexedDB**: All modern browsers
- **WebP**: 95%+ browser support
- **Blob URLs**: Universal support
- **Service Worker**: Optional enhancement (not required)

## Error Handling

The system gracefully handles:

- Storage quota exceeded
- Network failures
- Corrupted cache data
- Unsupported file formats
- IndexedDB unavailable

All failures fall back to original URLs with console warnings.

## Development Commands

```bash
# Clear all browser cache
localStorage.clear();
indexedDB.deleteDatabase('galaga-video-cache');

# Check cache status
console.log(imageCache.getCacheInfo());
videoCacheManager.getCacheInfo().then(console.log);

# Force refresh cache
sessionStorage.removeItem('galaga_cache_initialized');
location.reload();
```
