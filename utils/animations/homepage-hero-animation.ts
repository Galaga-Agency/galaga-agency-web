import { gsap } from "gsap";

export const initHeroTitleAnimation = () => {
  const tl = gsap.timeline();

  // Set up 3D properties for logo
  tl.set(
    ".hero-logo",
    {
      perspective: 1000,
    },
    0
  );

  tl.set(
    ".hero-logo-img",
    {
      transformStyle: "preserve-3d",
      rotationX: -90,
      transformOrigin: "center center -100px",
      backfaceVisibility: "hidden",
    },
    0
  );

  // 1. Logo roll down in center
  tl.to(
    ".hero-logo",
    {
      opacity: 1,
      duration: 0.05,
      ease: "none",
    },
    0
  );

  tl.to(
    ".hero-logo-img",
    {
      rotationX: 0,
      duration: 1.0,
      ease: "power3.out",
      transformOrigin: "center center -100px",
    },
    0.2
  );

  // 2. Logo fades away (slower)
  tl.to(
    ".hero-logo",
    {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "+=0.8"
  );

  // 3. Innovamos appears (slight overlap with logo fade)
  tl.to(
    ".hero-title",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.2"
  );

  // Para ti starts after line 1 settles
  tl.to(
    ".hero-para-ti",
    {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    "+=0.2"
  );

  // 4. Value proposition container appears while Innovamos is animating
  tl.to(
    ".hero-value-proposition",
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    },
    "+=0.1"
  );

  // Strike through comes after para ti
  tl.to(
    ".hero-strike-line",
    {
      opacity: 1,
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "+=0.3"
  );

  // Value prop line 1 appears (slight overlap with container)
  tl.to(
    ".hero-value-text-line1",
    {
      opacity: 1,
      color: "rgba(255, 255, 255, 1)",
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.1"
  );

  // Line 1 fades to white/40 while para ti animates
  tl.to(
    ".hero-value-text-line1",
    {
      color: "rgba(255, 255, 255, 0.4)",
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.1"
  );

  // Set up rolling
  tl.set(
    ".hero-subtitle-container",
    {
      perspective: 1000,
    },
    "+=0.2"
  );

  tl.set(".hero-para-ti, .hero-contigo", {
    transformStyle: "preserve-3d",
    transformOrigin: "center center -50px",
  });

  tl.set(".hero-contigo", {
    rotationY: 90,
    opacity: 1,
  });

  // Roll transition
  tl.to(".hero-para-ti", {
    rotationY: -90,
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    transformOrigin: "center center -50px",
  });

  tl.to(
    ".hero-contigo",
    {
      rotationY: 0,
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "center center -50px",
    },
    "-=0.4"
  );

  // Line 2 flash animation starts after roll settles
  tl.to(
    ".hero-value-text-line2",
    {
      opacity: 1,
      color: "rgba(255, 255, 255, 1)",
      duration: 0.2,
      ease: "power2.out",
    },
    "+=0.3"
  );

  tl.to(
    ".hero-value-text-line2",
    {
      opacity: 0.1,
      duration: 0.25,
      ease: "power2.inOut",
    },
    "+=0.1"
  );

  tl.to(
    ".hero-value-text-line2",
    {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    },
    "+=0.1"
  );

  // CTA buttons appear after line 2 is done
  tl.to(
    ".hero-cta-buttons",
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "+=0.3"
  );

  // ScrollIndicator appears with slight overlap with CTA
  tl.to(
    ".scroll-indicator",
    {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.2"
  );

  // Floating animation for ScrollIndicator starts immediately
  tl.to(
    ".scroll-indicator-wrapper",
    {
      y: 8,
      duration: 1.2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    },
    "-=0.4"
  );

  // Add scroll detection
  tl.call(() => {
    let hasScrolled = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;

        gsap.to(".scroll-indicator", {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      if (hasScrolled && window.scrollY <= 10) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          hasScrolled = false;
          gsap.to(".scroll-indicator", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return tl;
};
