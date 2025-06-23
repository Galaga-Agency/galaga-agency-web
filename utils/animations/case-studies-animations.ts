import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAnimationManager } from "@/utils/animations/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

// Case Studies Hero Animations
export const initCaseStudiesHeroAnimations = () => {
  const manager = createAnimationManager();

  // Create timeline for title words animation
  const tl = gsap.timeline();

  // Animate the title words from their initial hidden state
  tl.to(".case-studies-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".case-studies-hero-word-2", 
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".case-studies-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Stats animation - animate from their initial hidden state
  gsap.to(".case-studies-hero-stat", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  // Individual stat elements (these don't have initial hidden state, so we use FROM)
  gsap.utils.toArray(".case-studies-hero-stat").forEach((stat: any, index) => {
    // Stat value animation
    gsap.fromTo(stat.querySelector(".case-studies-hero-stat-value"), 
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "back.out(1.7)",
        delay: index * 0.2 + 1.8,
      }
    );

    // Stat label animation  
    gsap.fromTo(stat.querySelector(".case-studies-hero-stat-label"),
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: index * 0.2 + 2,
      }
    );
  });

  // Background elements animation (these don't have initial hidden state)
  gsap.fromTo(".case-studies-hero-bg-1", 
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      duration: 3,
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      delay: 0.5,
    }
  );

  gsap.fromTo(".case-studies-hero-bg-2",
    {
      scale: 0.8, 
      opacity: 0,
    },
    {
      duration: 3.5,
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      delay: 1,
    }
  );

  gsap.fromTo(".case-studies-hero-bg-3",
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      duration: 4,
      scale: 1,
      opacity: 1,
      ease: "power2.out", 
      delay: 1.5,
    }
  );

  // Return cleanup function
  return manager.cleanup;
};

// Setup hover animations for case study cards
const setupCaseStudyCardHovers = () => {
  gsap.utils.toArray(".case-study-grid-card").forEach((card: any) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out",
      });

      // Glow effect
      const glowElement = card.querySelector(".case-study-grid-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        });
      }

      // Image scale
      const imageElement = card.querySelector(".case-study-grid-image");
      if (imageElement) {
        gsap.to(imageElement, {
          duration: 0.4,
          scale: 1.1,
          ease: "power2.out",
        });
      }

      // Arrow animation
      const arrowElement = card.querySelector(".case-study-grid-arrow");
      if (arrowElement) {
        gsap.to(arrowElement, {
          duration: 0.3,
          scale: 1.1,
          rotation: 5,
          ease: "power2.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      // Remove glow
      const glowElement = card.querySelector(".case-study-grid-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out",
        });
      }

      // Reset image scale
      const imageElement = card.querySelector(".case-study-grid-image");
      if (imageElement) {
        gsap.to(imageElement, {
          duration: 0.4,
          scale: 1,
          ease: "power2.out",
        });
      }

      // Reset arrow
      const arrowElement = card.querySelector(".case-study-grid-arrow");
      if (arrowElement) {
        gsap.to(arrowElement, {
          duration: 0.3,
          scale: 1,
          rotation: 0,
          ease: "power2.out",
        });
      }
    });
  });
};

// Setup hover animations for category cards
const setupCategoryCardHovers = () => {
  gsap.utils.toArray(".category-card").forEach((card: any) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out",
      });

      const glowElement = card.querySelector(".category-card-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        });
      }

      const iconElement = card.querySelector(".category-card-icon");
      if (iconElement) {
        gsap.to(iconElement, {
          duration: 0.3,
          rotation: -3,
          scale: 1.1,
          ease: "power2.out",
        });
      }

      const accentElement = card.querySelector(".category-card-accent");
      if (accentElement) {
        gsap.to(accentElement, {
          duration: 0.3,
          scale: 1.5,
          ease: "power2.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      const glowElement = card.querySelector(".category-card-glow");
      if (glowElement) {
        gsap.to(glowElement, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out",
        });
      }

      const iconElement = card.querySelector(".category-card-icon");
      if (iconElement) {
        gsap.to(iconElement, {
          duration: 0.3,
          rotation: 0,
          scale: 1,
          ease: "power2.out",
        });
      }

      const accentElement = card.querySelector(".category-card-accent");
      if (accentElement) {
        gsap.to(accentElement, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        });
      }
    });
  });
};