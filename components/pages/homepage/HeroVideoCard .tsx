"use client";

import React from "react";
import CachedImage from "@/components/ui/CachedImage";
import CachedVideo from "@/components/ui/CachedVideo";

export const HeroVideoCard = () => {
  return (
    <div
      className="hero-video-card w-92 h-72 shrink-0 relative will-change-transform"
      style={{
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Base Card Container */}
      <div className="absolute -inset-4 bg-gradient-to-br from-azul-profundo via-teal to-negro rounded-3xl shadow-2xl border-2 border-turquesa/30" />

      {/* Main Content */}
      <div
        className="video-content absolute inset-0 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-3xl"
        style={{
          backfaceVisibility: "hidden",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Logo (will fade out once) */}
        <div className="logo-preview absolute inset-0 flex items-center justify-center bg-gradient-to-br from-azul-profundo to-teal">
          <CachedImage
            src="/assets/img/logos/logo-mobile-white.webp"
            alt="Galaga Agency"
            width={300}
            height={300}
            className="w-3/4 h-auto opacity-95 drop-shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "translate3d(0, 0, 0)",
            }}
            priority
          />
        </div>

        {/* Video */}
        <CachedVideo
          src="/assets/videos/galaga-presentation.mp4"
          className="video-element absolute inset-0 w-full h-full"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          style={{
            objectFit: "cover",
            imageRendering: "auto",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
            filter: "contrast(1.05) brightness(1.02)",
            opacity: 0, // GSAP will set to 1 and keep it
          }}
        />
      </div>
    </div>
  );
};
