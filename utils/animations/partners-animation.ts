// utils/partnersAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatePartnersSection = () => {
  // Title dramatic entrance
  gsap.fromTo(
    ".partners-title",
    {
      y: 100,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".partners-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  // Subtitle slide in
  gsap.fromTo(
    ".partners-subtitle",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".partners-subtitle",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  // Partner logos dramatic wave entrance
  gsap.fromTo(
    ".partner-logo",
    {
      y: 120,
      opacity: 0,
      rotationX: -90,
      scale: 0.5,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(2)",
      stagger: {
        amount: 2,
        from: "start",
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: ".partners-container",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    }
  );

  // Flowing connection lines animation
  gsap.fromTo(
    ".connection-line-1, .connection-line-2",
    {
      strokeDasharray: "0 1000",
      opacity: 0,
    },
    {
      strokeDasharray: "1000 0",
      opacity: 1,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".partners-container",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    }
  );
};
