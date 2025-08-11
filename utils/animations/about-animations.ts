import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = () => {
  // Bubble animation - forced to disappear completely
  const bubbles = document.querySelectorAll(".value-card-1, .value-card-2, .value-card-3");
     
  // Set initial state - completely hidden
  gsap.set(bubbles, { y: 200, opacity: 0 });
     
  bubbles.forEach((bubble, index) => {
    ScrollTrigger.create({
      trigger: ".homepage-about-section",
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.to(bubble, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(bubble, {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power2.in",
          delay: (2 - index) * 0.2,
        });
      }
    });
  });

  // Section title - SPECIFIC to about section
  gsap.from(".homepage-about-section .section-title", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homepage-about-section .section-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
   
  // Section subtitle - SPECIFIC to about section only
  gsap.from(".homepage-about-section .text-lg", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".homepage-about-section .section-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
   
  // Timeline blocks - SPECIFIC to about section
  gsap.from(".homepage-about-section .grid:nth-of-type(1)", {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homepage-about-section .grid:nth-of-type(1)",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
   
  gsap.from(".homepage-about-section .grid:nth-of-type(2)", {
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homepage-about-section .grid:nth-of-type(2)",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
   
  gsap.from(".homepage-about-section .grid:nth-of-type(3)", {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".homepage-about-section .grid:nth-of-type(3)",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
   
  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
};