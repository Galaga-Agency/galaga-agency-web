import { gsap } from "gsap";

// For video hero
export const initVideoHeroAnimations = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".video-hero",
    {
      opacity: 0,
      scale: 1.05,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out",
    }
  );

  return tl;
};

// For fallback hero
export const initFallbackHeroAnimations = () => {
  const tl = gsap.timeline();

  // Innovamos animation
  tl.to('[data-anim="innovamos"]', {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power3.out",
  });

  // For you animation
  tl.to('[data-anim="for-you"]', {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  }, "-=0.3");

  // Strike line animation
  tl.to('[data-anim="strike-line"]', {
    opacity: 1,
    scaleX: 1,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.2");

  // With you animation
  tl.to('[data-anim="with-you"]', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  }, "-=0.2");

  // Geometric elements
  tl.to('.circle-element', {
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: 0.3,
    ease: "power1.out",
  }, "-=1");

  return tl;
};