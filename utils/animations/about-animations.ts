import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = () => {
  // Main title animation - using the actual class from your HTML
  gsap.from(".section-title", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Main description paragraph animation
  gsap.from(".text-large", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".text-large",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // First block - lightbulb section
  gsap.from(".lightbulb-icon", {
    duration: 0.6,
    scale: 0.5,
    rotation: -15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".lightbulb-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // First block text
  const lightbulbIcon = document.querySelector(".lightbulb-icon");
  let firstH3: Element | null = null;
  let firstP: Element | null = null;

  if (lightbulbIcon) {
    const closestDiv = lightbulbIcon.closest("div");
    if (closestDiv) {
      firstH3 = closestDiv.querySelector("h3");
    }
    const closestGrid = lightbulbIcon.closest(".grid");
    if (closestGrid) {
      firstP = closestGrid.querySelector("p");
    }
  }
  
  if (firstH3) {
    gsap.from(firstH3, {
      duration: 0.6,
      x: -30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".lightbulb-icon",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (firstP) {
    gsap.from(firstP, {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: ".lightbulb-icon",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // Second block - handshake section
  gsap.from(".handshake-icon", {
    duration: 0.6,
    scale: 0.5,
    rotation: 15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".handshake-icon",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Second block text
  let secondH3: Element | null = null;
  let secondP: Element | null = null;
  const handshakeIcon = document.querySelector(".handshake-icon");

  if (handshakeIcon) {
    const closestDiv = handshakeIcon.closest("div");
    if (closestDiv) {
      secondH3 = closestDiv.querySelector("h3");
    }
    const closestGrid = handshakeIcon.closest(".grid");
    if (closestGrid) {
      secondP = closestGrid.querySelector("p");
    }
  }
  
  if (secondH3) {
    gsap.from(secondH3, {
      duration: 0.6,
      x: 30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".handshake-icon",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (secondP) {
    gsap.from(secondP, {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: ".handshake-icon",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // Background chevron image
  const chevronImg = document.querySelector('img[alt="Single Chevron"]');
  if (chevronImg) {
    gsap.from(chevronImg, {
      duration: 1.2,
      scale: 0.8,
      opacity: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: chevronImg,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }

  // Cleanup function
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};