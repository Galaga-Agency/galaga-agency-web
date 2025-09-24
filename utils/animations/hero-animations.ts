// /utils/heroAnimations.ts
import gsap from "gsap";

interface HeroAnimationConfig {
  elementRef: React.RefObject<HTMLDivElement>;
  startPosition?: {
    top?: string;
    opacity?: number;
    scale?: number;
  };
  endPosition?: {
    top?: string;
    scale?: number;
    opacity?: number;
  };
  duration?: number;
  delay?: number;
  ease?: string;
}

export const animateHero3DElement = ({
  elementRef,
  startPosition = {
    top: "50%",
    opacity: 0.1,
    scale: 3,
  },
  endPosition = {
    top: "22%",
    scale: 0.5,
    opacity: 1,
  },
  duration = 2,
  delay = 0.8,
  ease = "power3.out",
}: HeroAnimationConfig) => {
  if (!elementRef.current) return;

  gsap.set(elementRef.current, {
    ...startPosition,
    xPercent: -50,
    yPercent: -50,
  });

  gsap.to(elementRef.current, {
    ...endPosition,
    duration,
    delay,
    ease,
  });
};
