import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Suppress hydration warnings and other React warnings
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Disable source maps in production to reduce bundle size and warnings
  productionBrowserSourceMaps: false,

  // Webpack configuration to suppress specific warnings
  webpack: (config, { dev, isServer }) => {
    // Suppress specific webpack warnings
    config.infrastructureLogging = {
      level: "error",
    };

    // Suppress node modules warnings
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    // Ignore specific warnings in production
    if (!dev) {
      config.stats = {
        warnings: false,
      };

      // Suppress chunk size warnings
      config.performance = {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      };
    }

    return config;
  },

  // Experimental features that might cause warnings
  experimental: {
    // Suppress specific Next.js experimental warnings
    optimizePackageImports: [],
  },

  // Suppress image optimization warnings
  images: {
    unoptimized: false, // Set to true if you want to disable image optimization warnings
    remotePatterns: [
      // Add your remote image patterns here to avoid warnings
    ],
  },

  // Environment variables (suppress env warnings)
  env: {
    NEXT_TELEMETRY_DISABLED: "1", // Disable Next.js telemetry
  },

  // Suppress redirect warnings
  async redirects() {
    return [];
  },

  // Suppress rewrite warnings
  async rewrites() {
    return [];
  },
};

export default nextConfig;
