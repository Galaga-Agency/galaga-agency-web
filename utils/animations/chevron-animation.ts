import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initChevronAnimations() {
  const doubleChevron = document.querySelector(
    'img[alt="Double Chevron"]'
  ) as HTMLImageElement;
  const singleChevron = document.querySelector(
    'img[alt="Single Chevron"]'
  ) as HTMLImageElement;

  if (!doubleChevron || !singleChevron) {
    return;
  }

  // Get screen size for responsive animation values
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;

  // Responsive animation values
  const doubleChevronX = isMobile ? -80 : isTablet ? -120 : -150;
  const doubleChevronY = isMobile ? 80 : isTablet ? 120 : 150;
  const singleChevronX = isMobile ? -60 : isTablet ? -100 : -130;
  const singleChevronY = isMobile ? 60 : isTablet ? 100 : 130;

  // Set initial states - positioned bottom-left, hidden
  gsap.set(doubleChevron, {
    opacity: 0,
    scale: isMobile ? 0.6 : 0.7,
    x: doubleChevronX,
    y: doubleChevronY,
    rotation: -20,
  });

  gsap.set(singleChevron, {
    opacity: 0,
    scale: isMobile ? 0.6 : 0.7,
    x: singleChevronX,
    y: singleChevronY,
    rotation: 25,
  });

  // Create timeline for coordinated animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  // Animate double chevron first - slides to background position
  tl.to(doubleChevron, {
    duration: 1.5,
    x: 0,
    y: 0,
    rotation: 0,
    opacity: isMobile ? 0.3 : 0.2, // More visible on mobile for better contrast
    scale: 1,
    ease: "power3.out",
  })
    // Then animate single chevron with stagger
    .to(
      singleChevron,
      {
        duration: 1.8,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: isMobile ? 0.6 : 0.4, // More visible on mobile
        scale: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );

  // Add subtle continuous animation for visual interest
  gsap.to([doubleChevron, singleChevron], {
    duration: 6,
    rotation: "+=3",
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    stagger: 0.5,
    delay: 2, // Start after entrance animation
  });
}

export function cleanupChevronAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === ".about-section") {
      trigger.kill();
    }
  });

  // Kill any ongoing animations
  gsap.killTweensOf('img[alt="Double Chevron"]');
  gsap.killTweensOf('img[alt="Single Chevron"]');
}
