"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  initPageTransition,
} from "@/utils/animations/page-transition-animation";

export interface BubbleTransitionConfig {
  color?: string;
  duration?: number;
  exitDuration?: number;
}

export function useBubbleTransition(config: BubbleTransitionConfig = {}) {
  const router = useRouter();
  const transitionRef = useRef<{
    overlay: HTMLElement;
    clickX: number;
    clickY: number;
    cleanup: () => void;
  } | null>(null);

  const navigateWithBubble = useCallback(
    (href: string, event: React.MouseEvent<HTMLElement>) => {
      // Prevent default navigation
      event.preventDefault();

      // Get click coordinates relative to viewport
      const rect = event.currentTarget.getBoundingClientRect();
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.top + rect.height / 2;

      // Start transition
      const transition = initPageTransition({
        clickX,
        clickY,
        color: config.color,
        duration: config.duration,
        onComplete: () => {
          // Navigate to new page
          if (href.startsWith("http")) {
            window.location.href = href;
          } else {
            router.push(href);
          }
        },
      });

      // Store transition data for potential exit animation
      transitionRef.current = {
        overlay: transition.overlay!,
        clickX,
        clickY,
        cleanup: transition.cleanup,
      };
    },
    [router, config]
  );

  return {
    navigateWithBubble,
  };
}
