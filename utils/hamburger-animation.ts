import { gsap } from "gsap";

export interface HamburgerAnimationConfig {
  element: HTMLElement;
  isOpen: boolean;
}

export function initHamburgerAnimation({ element, isOpen }: HamburgerAnimationConfig) {
  const hamburgerLines = element.querySelectorAll('.hamburger-line');
  const [line1, line2, line3] = Array.from(hamburgerLines);
  
  // Set initial positions for lines
  gsap.set(line1, { y: 0 });
  gsap.set(line2, { y: 0 });
  gsap.set(line3, { y: 0 });

  // Fun entrance animation (only on first load)
  if (!element.dataset.initialized) {
    gsap.set(element, { scale: 0 });
    gsap.to(element, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      delay: 0.5
    });
    element.dataset.initialized = "true";
  }

  // Transform animation between hamburger and X
  const animateHamburger = (isOpenState: boolean) => {
    if (isOpenState) {
      // Transform to X
      gsap.to(line1, { 
        rotation: 45, 
        y: 8,
        duration: 0.3, 
        ease: "power2.out" 
      });
      gsap.to(line2, { 
        opacity: 0,
        duration: 0.2, 
        ease: "power2.out" 
      });
      gsap.to(line3, { 
        rotation: -45, 
        y: -8,
        duration: 0.3, 
        ease: "power2.out" 
      });
    } else {
      // Transform back to hamburger
      gsap.to(line1, { 
        rotation: 0,
        y: 0,
        duration: 0.3, 
        ease: "power2.out" 
      });
      gsap.to(line2, { 
        opacity: 1,
        duration: 0.2, 
        delay: 0.1,
        ease: "power2.out" 
      });
      gsap.to(line3, { 
        rotation: 0,
        y: 0,
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  // Apply current state
  animateHamburger(isOpen);

  // Store animation function
  (element as any).__animateHamburger = animateHamburger;

  // Add hover effects
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { 
      scale: 1.05, 
      duration: 0.2, 
      ease: "power2.out" 
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { 
      scale: 1, 
      duration: 0.2, 
      ease: "power2.out" 
    });
  });

  // Cleanup function
  return () => {
    gsap.killTweensOf([element, hamburgerLines]);
  };
}