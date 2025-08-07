import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWhyChooseAnimations = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".why-choose-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Set initial states
  gsap.set(".why-circle-1, .why-circle-2, .why-circle-3", {
    scale: 0,
    opacity: 0
  });

  // Animate circles in sequence
  tl.to(".why-circle-1", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
  })
  .to(".why-circle-2", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
  }, "-=0.4")
  .to(".why-circle-3", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
  }, "-=0.4");

  // Continuous floating animation for circles
  gsap.to(".why-circle-1", {
    y: -10,
    duration: 4,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".why-circle-2", {
    y: -8,
    duration: 5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".why-circle-3", {
    y: -12,
    duration: 6,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  // Return cleanup function
  return () => {
    tl.kill();
  };
};