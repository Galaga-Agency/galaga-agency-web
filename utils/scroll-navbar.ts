import { gsap } from "gsap";

export interface ScrollNavbarConfig {
  element: HTMLElement;
  threshold?: number;
  hideDistance?: number;
}

export function initScrollNavbar({
  element,
  threshold = 100,
  hideDistance = -100
}: ScrollNavbarConfig) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  let isHidden = false;
  let currentAnimation: gsap.core.Tween | null = null;

  const hideNavbar = () => {
    if (isHidden) return;
    
    // Kill any ongoing animation
    if (currentAnimation) currentAnimation.kill();
    
    isHidden = true;
    currentAnimation = gsap.to(element, {
      y: hideDistance,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        currentAnimation = null;
      }
    });
  };

  const showNavbar = () => {
    if (!isHidden) return;
    
    // Kill any ongoing animation
    if (currentAnimation) currentAnimation.kill();
    
    isHidden = false;
    currentAnimation = gsap.to(element, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        currentAnimation = null;
      }
    });
  };

  const updateNavbar = () => {
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);
    
    // Only proceed if there's meaningful scroll movement
    if (scrollDifference < 5) return;
    
    // Don't hide navbar if we're at the top
    if (currentScrollY < threshold) {
      showNavbar();
      lastScrollY = currentScrollY;
      return;
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      hideNavbar();
    } else if (currentScrollY < lastScrollY) {
      showNavbar();
    }
    
    lastScrollY = currentScrollY;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  };

  // Set initial state
  gsap.set(element, { y: 0 });

  // Add scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll);
    if (currentAnimation) currentAnimation.kill();
  };
}