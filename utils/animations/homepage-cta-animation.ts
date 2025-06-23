import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initCTAAnimations = () => {
  // Section header animations
  gsap.from(".cta-eyebrow", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-eyebrow",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Individual title lines
  gsap.from(".cta-title-line-1", {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-title-line-2", {
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-subtitle", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".cta-subtitle",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // CTA Card animations
  gsap.from(".cta-card-glow", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-card", {
    duration: 1,
    y: 60,
    scale: 0.9,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".cta-card",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Card badge animation
  gsap.from(".cta-card-badge", {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-card-badge",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Badge icons animation
  gsap.from(".cta-card-icon-left", {
    duration: 0.6,
    rotation: -180,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".cta-card-badge",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-card-icon-right", {
    duration: 0.6,
    rotation: 180,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 0.7,
    scrollTrigger: {
      trigger: ".cta-card-badge",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Card title animation
  gsap.from(".cta-card-title", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.8,
    scrollTrigger: {
      trigger: ".cta-card-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Card description animation
  gsap.from(".cta-card-description", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
      trigger: ".cta-card-description",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Buttons animations
  gsap.from(".cta-primary-wrapper", {
    duration: 0.8,
    x: -30,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1.2,
    scrollTrigger: {
      trigger: ".cta-card-buttons",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-secondary-wrapper", {
    duration: 0.8,
    x: 30,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1.4,
    scrollTrigger: {
      trigger: ".cta-card-buttons",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Primary button glow effect
  gsap.from(".cta-primary-glow", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out",
    delay: 1.3,
    scrollTrigger: {
      trigger: ".cta-primary-wrapper",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Contact section animations
  gsap.from(".cta-contact-bar", {
    duration: 1,
    y: 40,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".cta-contact-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-contact-label", {
    duration: 0.8,
    x: -20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".cta-contact-bar",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-contact-email", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-contact-links",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".cta-contact-linkedin", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: ".cta-contact-links",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Setup hover animations
  setupCTAHoverAnimations();

  // Setup continuous animations
  setupCTAContinuousAnimations();

  // Return cleanup function
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

const setupCTAHoverAnimations = () => {
  // Primary button hover animations
  const primaryWrapper = document.querySelector(".cta-primary-wrapper");
  if (primaryWrapper) {
    primaryWrapper.addEventListener("mouseenter", () => {
      gsap.to(".cta-primary-button", {
        duration: 0.3,
        scale: 1.05,
        y: -3,
        ease: "power2.out",
      });

      gsap.to(".cta-primary-glow", {
        duration: 0.3,
        opacity: 0.8,
        scale: 1.1,
        ease: "power2.out",
      });

      gsap.to(".cta-primary-icon", {
        duration: 0.3,
        rotation: 12,
        scale: 1.1,
        ease: "back.out(1.7)",
      });

      gsap.to(".cta-primary-arrow", {
        duration: 0.3,
        x: 5,
        ease: "power2.out",
      });
    });

    primaryWrapper.addEventListener("mouseleave", () => {
      gsap.to(".cta-primary-button", {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      gsap.to(".cta-primary-glow", {
        duration: 0.3,
        opacity: 0.4,
        scale: 1,
        ease: "power2.out",
      });

      gsap.to(".cta-primary-icon", {
        duration: 0.3,
        rotation: 0,
        scale: 1,
        ease: "back.out(1.7)",
      });

      gsap.to(".cta-primary-arrow", {
        duration: 0.3,
        x: 0,
        ease: "power2.out",
      });
    });
  }

  // Secondary button hover animations
  const secondaryWrapper = document.querySelector(".cta-secondary-wrapper");
  if (secondaryWrapper) {
    secondaryWrapper.addEventListener("mouseenter", () => {
      gsap.to(".cta-secondary-button", {
        duration: 0.3,
        scale: 1.05,
        y: -3,
        ease: "power2.out",
      });

      gsap.to(".cta-secondary-icon", {
        duration: 0.3,
        rotation: 12,
        scale: 1.1,
        ease: "back.out(1.7)",
      });
    });

    secondaryWrapper.addEventListener("mouseleave", () => {
      gsap.to(".cta-secondary-button", {
        duration: 0.3,
        scale: 1,
        y: 0,
        ease: "power2.out",
      });

      gsap.to(".cta-secondary-icon", {
        duration: 0.3,
        rotation: 0,
        scale: 1,
        ease: "back.out(1.7)",
      });
    });
  }

  // Contact email hover animations
  const emailLink = document.querySelector(".cta-contact-email");
  if (emailLink) {
    emailLink.addEventListener("mouseenter", () => {
      gsap.to(".cta-contact-email", {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out",
      });

      gsap.to(".cta-contact-email-icon", {
        duration: 0.3,
        rotation: 12,
        scale: 1.1,
        ease: "back.out(1.7)",
      });
    });

    emailLink.addEventListener("mouseleave", () => {
      gsap.to(".cta-contact-email", {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });

      gsap.to(".cta-contact-email-icon", {
        duration: 0.3,
        rotation: 0,
        scale: 1,
        ease: "back.out(1.7)",
      });
    });
  }

  // Contact LinkedIn hover animations
  const linkedinLink = document.querySelector(".cta-contact-linkedin");
  if (linkedinLink) {
    linkedinLink.addEventListener("mouseenter", () => {
      gsap.to(".cta-contact-linkedin", {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out",
      });

      gsap.to(".cta-contact-linkedin-icon", {
        duration: 0.3,
        rotation: 12,
        scale: 1.1,
        ease: "back.out(1.7)",
      });
    });

    linkedinLink.addEventListener("mouseleave", () => {
      gsap.to(".cta-contact-linkedin", {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });

      gsap.to(".cta-contact-linkedin-icon", {
        duration: 0.3,
        rotation: 0,
        scale: 1,
        ease: "back.out(1.7)",
      });
    });
  }

  // CTA Card hover animation
  const ctaCard = document.querySelector(".cta-card");
  if (ctaCard) {
    ctaCard.addEventListener("mouseenter", () => {
      gsap.to(".cta-card", {
        duration: 0.3,
        y: -5,
        ease: "power2.out",
      });

      gsap.to(".cta-card-glow", {
        duration: 0.3,
        scale: 1.1,
        opacity: 0.6,
        ease: "power2.out",
      });
    });

    ctaCard.addEventListener("mouseleave", () => {
      gsap.to(".cta-card", {
        duration: 0.3,
        y: 0,
        ease: "power2.out",
      });

      gsap.to(".cta-card-glow", {
        duration: 0.3,
        scale: 1,
        opacity: 0.4,
        ease: "power2.out",
      });
    });
  }
};

const setupCTAContinuousAnimations = () => {
  // Title glow effect
  gsap.to(".cta-title-line-2", {
    textShadow: "0 0 30px rgba(20, 184, 166, 0.4)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // Card glow pulsing
  gsap.to(".cta-card-glow", {
    scale: 1.05,
    opacity: 0.6,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // Primary button glow pulsing
  gsap.to(".cta-primary-glow", {
    opacity: 0.8,
    scale: 1.1,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // Badge icons continuous rotation
  gsap.to(".cta-card-icon-left", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".cta-card-icon-right", {
    rotation: -360,
    duration: 12,
    repeat: -1,
    ease: "none"
  });

  // Contact bar subtle float
  gsap.to(".cta-contact-bar", {
    y: -3,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};