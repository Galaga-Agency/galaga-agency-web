import { gsap } from "gsap";

interface LoadingTransitionOptions {
  loadingElement: HTMLElement;
  contentElement: HTMLElement;
  onComplete?: () => void;
}

export function initLoadingToContentTransition({
  loadingElement,
  contentElement,
  onComplete,
}: LoadingTransitionOptions) {
  // Find the actual loading screen in the DOM (it's portaled to body)
  const actualLoadingScreen = document.querySelector(
    '[role="status"]'
  ) as HTMLElement;

  if (!actualLoadingScreen) {
    onComplete?.();
    return () => {};
  }

  // Create smooth timeline
  const tl = gsap.timeline({
    onComplete,
  });

  // Set initial state and animate smoothly
  tl.set(actualLoadingScreen, {
    willChange: "transform",
    backfaceVisibility: "hidden",
  })
    .set(contentElement, { visibility: "visible" })
    .to(actualLoadingScreen, {
      y: "-100vh",
      duration: 1.0,
      ease: "power3.inOut",
      force3D: true,
    });

  return () => {
    tl.kill();
  };
}
