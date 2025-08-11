import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCTAAnimations = () => {
  // Wait for DOM to be ready
  setTimeout(() => {
    // Hero title
    gsap.from(".cta-title", {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Subtitle - find it explicitly
    const subtitle = document.querySelector(".cta-subtitle");
    if (subtitle) {
      gsap.fromTo(subtitle,
        { y: 20, opacity: 0 },
        {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      console.error("Subtitle not found!");
    }
  }, 100);

  // Buttons
  gsap.from(".cta-card-buttons", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-card-buttons",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};