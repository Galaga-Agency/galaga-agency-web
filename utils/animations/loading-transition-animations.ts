import { gsap } from "gsap";

interface LoadingTransitionOptions {
  loadingElement: HTMLElement;
  contentElement: HTMLElement;
  onComplete?: () => void;
}

export function initLoadingToContentTransition({
  loadingElement,
  contentElement,
  onComplete
}: LoadingTransitionOptions) {
  gsap.set(contentElement, { opacity: 1 });

  const tl = gsap.timeline({ onComplete });

  tl.to(loadingElement, {
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  return () => {
    tl.kill();
  };
}