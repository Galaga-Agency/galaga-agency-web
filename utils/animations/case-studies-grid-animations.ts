import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initCaseStudiesGridAnimations = () => {
  let interval = window.setInterval(() => {
    const eyebrow = document.querySelector<HTMLElement>(".case-studies-grid-eyebrow");
    const title = document.querySelector<HTMLElement>(".case-studies-grid-title");
    const subtitle = document.querySelector<HTMLElement>(".case-studies-grid-subtitle");
    const cards = document.querySelectorAll<HTMLElement>(".case-study-bento-item");

    if (eyebrow && title && subtitle && cards.length) {
      clearInterval(interval);

      // Clear any previous GSAP properties
      [eyebrow, title, subtitle].forEach(el => {
        gsap.set(el, { clearProps: "all" });
      });

      cards.forEach(card => {
        gsap.set(card, { clearProps: "all" });
      });

      // Header animations
      gsap.fromTo(
        eyebrow,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eyebrow,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: subtitle,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered entrance animation
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6 + (index * 0.1),
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Setup card hover interactions
      setupCardHovers(cards);

      console.log("Case studies grid animations initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupCardHovers = (cards: NodeListOf<HTMLElement>) => {
  cards.forEach((card: HTMLElement) => {
    const cardElement = card.querySelector<HTMLElement>(".case-study-card");
    
    if (cardElement) {
      cardElement.addEventListener("mouseenter", () => {
        gsap.to(cardElement, {
          duration: 0.3,
          y: -4,
          ease: "power2.out",
        });
      });

      cardElement.addEventListener("mouseleave", () => {
        gsap.to(cardElement, {
          duration: 0.3,
          y: 0,
          ease: "power2.out",
        });
      });
    }
  });
};