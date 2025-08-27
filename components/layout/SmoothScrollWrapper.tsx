"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __LENIS__?: Lenis | null;
    __LENIS_RAF__?: number;
  }
}

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    if (window.__LENIS__) return;

    const lenis = new Lenis({
      // Smoother than default:
      lerp: 0.075, // try 0.06 → 0.1 (lower = smoother)
      smoothWheel: true,
      wheelMultiplier: 0.9, // slightly gentler steps
      touchMultiplier: 1.0, // keep touch natural
      // syncTouch: true,    // (optional) makes touch follow smoothing too
      // syncTouchLerp: 0.07 // (optional) if syncTouch is true
    });

    window.__LENIS__ = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      window.__LENIS_RAF__ = requestAnimationFrame(raf);
    };
    window.__LENIS_RAF__ = requestAnimationFrame(raf);

    return () => {
      if (window.__LENIS_RAF__) cancelAnimationFrame(window.__LENIS_RAF__);
      window.__LENIS__?.destroy();
      window.__LENIS__ = null;
    };
  }, []);

  return <>{children}</>;
}
