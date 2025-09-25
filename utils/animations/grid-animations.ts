import { gsap } from "@/lib/gsapConfig";

interface GridAnimationConfig {
  selector?: string;
  initialRotation?: number;
  finalRotation?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  initialOpacity?: number;
  finalOpacity?: number;
}

let isGridAnimationComplete = false;

export const initHeroGridAnimation = ({
  selector = '[data-animate="hero-grid"]',
  initialRotation = 105,
  finalRotation = 0,
  duration = 2.2,
  delay = 0.8,
  ease = "power2.out",
  initialOpacity = 0,
  finalOpacity = 0.1,
}: GridAnimationConfig = {}) => {
  const gridElement = document.querySelector(selector);
  if (!gridElement) return;

  gsap.set(gridElement, {
    rotationX: initialRotation,
    transformOrigin: "center center",
    opacity: initialOpacity,
  });

  gsap.to(gridElement, {
    rotationX: finalRotation,
    opacity: finalOpacity,
    duration,
    delay,
    ease,
    onComplete: () => {
      isGridAnimationComplete = true;
    },
  });
};
