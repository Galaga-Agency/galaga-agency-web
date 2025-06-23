import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutStoryAnimations = () => {
  // Section header animations
  gsap.from(".about-story-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-story-eyebrow",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-story-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-story-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-story-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".about-story-subtitle",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  // Background decorative element
  gsap.from(".about-story-bg", {
    duration: 2,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-story-bg",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none none",
    },
  });

  // Story blocks animation with alternating directions
  gsap.utils.toArray(".story-block").forEach((block: any, index) => {
    const isEven = index % 2 === 0;

    // Main block animation
    gsap.from(block, {
      duration: 1,
      x: isEven ? -100 : 100,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Story block header animation
    gsap.from(block.querySelector(".story-block-header"), {
      duration: 0.8,
      y: 40,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Icon container animation
    gsap.from(block.querySelector(".story-block-icon"), {
      duration: 0.6,
      scale: 0,
      rotation: 180,
      ease: "back.out(1.7)",
      delay: 0.4,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Year animation
    gsap.from(block.querySelector(".story-block-year"), {
      duration: 0.6,
      x: -20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Title animation
    gsap.from(block.querySelector(".story-block-title"), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Description animation
    gsap.from(block.querySelector(".story-block-description"), {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.7,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Image container animation
    gsap.from(block.querySelector(".story-block-image"), {
      duration: 1,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Special animation for the third block - values grid
    if (index === 2) {
      const valuesGrid = block.querySelector(".story-values-grid");
      if (valuesGrid) {
        gsap.from(valuesGrid.querySelectorAll(".story-value"), {
          duration: 0.6,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: valuesGrid,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        // Value text animation
        gsap.from(valuesGrid.querySelectorAll(".story-value-text"), {
          duration: 0.8,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1,
          scrollTrigger: {
            trigger: valuesGrid,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });
      }
    }
  });

  // Setup hover animations for story blocks
  setupStoryBlockHovers();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupStoryBlockHovers = () => {
  gsap.utils.toArray(".story-block").forEach((block: any) => {
    if (!block) return;

    const imageElement = block.querySelector(".story-block-image");
    const iconElement = block.querySelector(".story-block-icon");

    if (imageElement) {
      block.addEventListener("mouseenter", () => {
        gsap.to(imageElement, {
          duration: 0.4,
          scale: 1.05,
          ease: "power2.out",
        });

        if (iconElement) {
          gsap.to(iconElement, {
            duration: 0.3,
            rotation: 5,
            scale: 1.1,
            ease: "power2.out",
          });
        }
      });

      block.addEventListener("mouseleave", () => {
        gsap.to(imageElement, {
          duration: 0.4,
          scale: 1,
          ease: "power2.out",
        });

        if (iconElement) {
          gsap.to(iconElement, {
            duration: 0.3,
            rotation: 0,
            scale: 1,
            ease: "power2.out",
          });
        }
      });
    }
  });

  // Special hover animations for values
  gsap.utils.toArray(".story-value").forEach((value: any) => {
    if (!value) return;

    const valueText = value.querySelector(".story-value-text");

    value.addEventListener("mouseenter", () => {
      gsap.to(value, {
        duration: 0.3,
        scale: 1.05,
        y: -5,
        ease: "power2.out",
      });

      if (valueText) {
        gsap.to(valueText, {
          duration: 0.3,
          scale: 1.1,
          ease: "power2.out",
        });
      }
    });

    value.addEventListener("mouseleave", () => {
      gsap.to(value, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      if (valueText) {
        gsap.to(valueText, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        });
      }
    });
  });
};
