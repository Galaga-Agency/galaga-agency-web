"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import { useAppLoading } from "@/hooks/useAppLoading";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type AnimationFunction = () => void | (() => void);

interface UseGSAPAnimationsProps {
  animations: AnimationFunction[];
  delay?: number;
  dependencies?: any[];
}

// Global flag to track if app has ever been ready
let globalAppHasBeenReady = false;

export const useGSAPAnimations = ({
  animations,
  delay = 100,
  dependencies = [],
}: UseGSAPAnimationsProps) => {
  const { isAppReady } = useAppLoading();
  const pathname = usePathname();

  void gsap;

  // Track global app ready state
  useEffect(() => {
    if (isAppReady) {
      globalAppHasBeenReady = true;
    }
  }, [isAppReady]);

  useGSAP(() => {
    const shouldRun = globalAppHasBeenReady || isAppReady;
    if (!shouldRun) return;

    const timer = setTimeout(() => {
      animations.forEach((animationFn) => {
        try {
          animationFn();
        } catch (error) {
          console.error("Animation failed:", error);
        }
      });

      setTimeout(() => {
        try {
          ScrollTrigger.refresh();
        } catch (error) {
          console.error("ScrollTrigger refresh failed:", error);
        }
      }, 100);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [isAppReady, pathname, ...dependencies]);
};
