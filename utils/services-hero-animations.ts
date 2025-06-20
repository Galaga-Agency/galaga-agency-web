import { gsap } from "gsap";

export const initServicesHeroAnimations = () => {
  // Hero title animation
  const tl = gsap.timeline();
  
  tl.from(".services-hero-word-1", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  })
  .from(".services-hero-word-2", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.3")
  .from(".services-hero-subtitle", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.5");

  // Service areas animation with stagger
  gsap.from(".services-hero-area", {
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5
  });

  // Individual area elements
  gsap.utils.toArray(".services-hero-area").forEach((area: any, index) => {
    // Icon animation
    gsap.from(area.querySelector(".w-16, .w-20"), {
      duration: 0.8,
      scale: 0,
      rotation: 360,
      ease: "back.out(1.7)",
      delay: index * 0.2 + 1.8
    });
  });

  // Floating scroll indicator
  gsap.to(".services-hero-scroll", {
    duration: 2,
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 2.5
  });

  // Background elements animation
  gsap.to(".services-hero-section .absolute.top-1\\/4", {
    duration: 8,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".services-hero-section .absolute.bottom-1\\/3", {
    duration: 12,
    rotation: -360,
    repeat: -1,
    ease: "none"
  });
};