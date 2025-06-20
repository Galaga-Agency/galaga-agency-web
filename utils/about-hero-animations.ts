import { gsap } from "gsap";

export const initAboutHeroAnimations = () => {
  // Hero title animation
  const tl = gsap.timeline();
  
  tl.from(".about-hero-word-1", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  })
  .from(".about-hero-word-2", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.3")
  .from(".about-hero-subtitle", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  }, "-=0.5");

  // Stats animation with stagger
  gsap.from(".about-hero-stat", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5
  });

  // Floating scroll indicator
  gsap.to(".about-hero-scroll", {
    duration: 2,
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 2
  });

  // Background elements subtle animation
  gsap.to(".about-hero-section .absolute.top-1\\/4", {
    duration: 8,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".about-hero-section .absolute.bottom-1\\/3", {
    duration: 12,
    rotation: -360,
    repeat: -1,
    ease: "none"
  });
};