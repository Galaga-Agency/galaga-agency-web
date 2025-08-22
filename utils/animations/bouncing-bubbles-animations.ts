import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initBoucingBubblesAnimation = () => {
  // Bubble animation - forced to disappear completely
  const bubbles = document.querySelectorAll(".bubble-1, .bubble-2, .bubble-3");

  // Set initial state - completely hidden
  gsap.set(bubbles, { y: 200, opacity: 0 });

  bubbles.forEach((bubble, index) => {
    ScrollTrigger.create({
      trigger: ".bubble-section, .bubble-section-2",
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
      },
    });
  });

  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
};
