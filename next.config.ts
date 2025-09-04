import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during production builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Code optimization settings
  compiler: {
    // Remove console.log statements in production builds
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,

  // Webpack configuration to suppress build warnings
  webpack: (config, { dev, isServer }) => {
    // Only show error-level infrastructure logs
    config.infrastructureLogging = {
      level: "error",
    };

    // Preserve existing resolve aliases
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    // Production-only optimizations
    if (!dev) {
      // Hide webpack warnings in production
      config.stats = {
        warnings: false,
      };

      // Increase bundle size limits to prevent warnings
      config.performance = {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      };
    }

    return config;
  },

  // Experimental Next.js features
  experimental: {
    // Package import optimizations
    optimizePackageImports: [],
  },

  // Image optimization settings
  images: {
    unoptimized: false,
    remotePatterns: [],
  },

  // Environment variables
  env: {
    // Disable Next.js telemetry data collection
    NEXT_TELEMETRY_DISABLED: "1",
  },

  // Custom headers for video files
  async headers() {
    return [
      {
        source: '/assets/videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
      {
        source: '/:path*.(mp4|webm|ogg|avi|mov)',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },

  // URL redirects - handles old or missing routes
  async redirects() {
    return [
      {
        // Redirect /terms to homepage (fixes 404 issue)
        source: "/terms",
        destination: "/",
        permanent: false,
      },
    ];
  },

  // URL rewrites - currently empty but available for future use
  async rewrites() {
    return [];
  },
};

export default nextConfig;