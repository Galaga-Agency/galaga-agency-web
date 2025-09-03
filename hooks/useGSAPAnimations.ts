"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"; // load GSAP once, reuse across routes
import { useAppReady } from "@/hooks/useAppReady";

type AnimationFunction = () => void | (() => void);

interface UseGSAPAnimationsProps {
  animations: AnimationFunction[];
  delay?: number; // 100ms safety buffer
  dependencies?: any[];
}

export const useGSAPAnimations = ({
  animations,
  delay = 100,
  dependencies = [],
}: UseGSAPAnimationsProps) => {
  const isAppReady = useAppReady();

  // Keep the import "warm" in some build modes
  void gsap;

  useGSAP(() => {
    if (!isAppReady) return;

    const cleanupFunctions: Array<() => void> = [];

    const timer = setTimeout(() => {
      animations.forEach((animationFn) => {
        const cleanup = animationFn();
        if (typeof cleanup === "function") cleanupFunctions.push(cleanup);
      });

      // After wiring everything, calibrate once
      try {
        ScrollTrigger.refresh();
      } catch {
        // no-op
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      // Clean up only what we created (no global killAll)
      cleanupFunctions.forEach((fn) => {
        try {
          fn();
        } catch {
          // no-op
        }
      });
    };
  }, [isAppReady, ...dependencies]);
};
