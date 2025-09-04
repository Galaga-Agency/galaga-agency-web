"use client";

import { gsap } from "@/lib/gsapConfig";

let isAnimationRunning = false;

export const initHeroTitleAnimation = () => {
  if (typeof window === "undefined") return () => {};

  // Reset flag and prevent multiple simultaneous animations
  if (isAnimationRunning) {
    isAnimationRunning = false; // Reset it so it can run again
  }

  isAnimationRunning = true;

  const tl = gsap.timeline({
    defaults: { overwrite: "auto" },
    onComplete: () => {
      isAnimationRunning = false;
    },
  });

  // 1) Value proposition container appears
  tl.to(
    ".hero-value-proposition",
    { opacity: 1, duration: 0.8, ease: "power2.out" },
    0
  );

  // 2) Line 1 fades in
  tl.to(
    ".hero-value-text-line1",
    { opacity: 1, duration: 1.0, ease: "power1.out" },
    "+=0.3"
  );

  // 3) Main title
  tl.to(
    ".hero-title",
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    "+=0.4"
  );

  // 4) "Para ti" appears (parallel-ish)
  tl.to(
    ".hero-para-ti",
    { opacity: 1, duration: 0.5, ease: "power2.out" },
    "-=0.2"
  );

  // 5) Line 2 in
  tl.to(
    ".hero-value-text-line2",
    { opacity: 1, duration: 0.8, ease: "power1.out" },
    "+=0.3"
  );

  // Flash effect on line 2
  tl.to(
    ".hero-value-text-line2",
    { opacity: 0.1, duration: 0.25, ease: "power2.inOut" },
    "+=0.1"
  );
  tl.to(
    ".hero-value-text-line2",
    { opacity: 1, duration: 0.3, ease: "power2.out" },
    "+=0.1"
  );

  // 6) Strike-through animation
  tl.to(
    ".hero-strike-line",
    { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" },
    "+=0.2"
  );

  // 7) 3D context for para-ti → contigo roll
  tl.set(".hero-subtitle-container", { perspective: 1000 }, "+=0.1");
  tl.set(".hero-para-ti, .hero-contigo", {
    transformStyle: "preserve-3d",
    transformOrigin: "center center -50px",
  });
  tl.set(".hero-contigo", { rotationY: 90, opacity: 1 });

  // 8) Roll transition
  tl.to(
    ".hero-para-ti",
    {
      rotationY: -90,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "center center -50px",
    },
    "+=0.1"
  );
  tl.to(
    ".hero-contigo",
    {
      rotationY: 0,
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "center center -50px",
    },
    "-=0.4"
  );

  // 9) Dim line 1 slightly
  tl.to(
    ".hero-value-text-line1",
    { color: "rgba(255, 255, 255, 0.4)", duration: 0.5, ease: "power2.out" },
    "+=0.2"
  );

  // 10) CTAs in
  tl.to(
    ".hero-cta-buttons",
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    "-=0.5"
  );

  // 11) Scroll indicator fades in
  tl.to(
    ".scroll-indicator",
    { opacity: 1, duration: 0.5, ease: "power2.out" },
    "-=0.2"
  );

  // 12) Floating indicator loop
  tl.to(
    ".scroll-indicator-wrapper",
    { y: 8, duration: 1.2, ease: "power2.inOut", repeat: -1, yoyo: true },
    "-=0.4"
  );

  // 13) Scroll hide/re-show logic with proper cleanup handles
  let hasScrolled = false;
  let scrollTimeout: number | null = null;
  const handleScroll = () => {
    if (!hasScrolled && window.scrollY > 50) {
      hasScrolled = true;
      gsap.to(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (hasScrolled && window.scrollY <= 10) {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        hasScrolled = false;
        gsap.to(".scroll-indicator", {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }, 800);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    isAnimationRunning = false;
    tl.kill();
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
    }
    window.removeEventListener("scroll", handleScroll);
  };
};
