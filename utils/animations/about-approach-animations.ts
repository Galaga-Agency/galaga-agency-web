import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutApproachAnimations = () => {
  let interval = window.setInterval(() => {
    const title = document.querySelector<HTMLElement>(".about-approach-title");
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".approach-card")
    );
    const quote = document.querySelector<HTMLElement>(".about-approach-quote");

    if (title && cards.length && quote) {
      clearInterval(interval);

      // First, force reset any previous GSAP properties
      cards.forEach((card) => {
        gsap.set(card, { clearProps: "all" });
        const textElements = card.querySelectorAll("h3, p, span, div, *");
        textElements.forEach((el: any) => {
          gsap.set(el, { clearProps: "all" });
        });
      });

      gsap.set([title, quote], { clearProps: "all" });

      // Section title animation
      gsap.fromTo(
        title,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered entrance
      gsap.fromTo(
        cards,
        { opacity: 0, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Individual card element animations
      cards.forEach((card, index) => {
        const icon = card.querySelector(".icon-container");
        const cardTitle = card.querySelector(".approach-card-title");
        const cardDescription = card.querySelector(
          ".approach-card-description"
        );
        const accentDot = card.querySelector(".accent-dot");

        // Icon spin-in animation
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, rotation: 360 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: index * 0.2 + 0.3,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Title slide-in from left
        if (cardTitle) {
          gsap.fromTo(
            cardTitle,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.2 + 0.5,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Description fade-up
        if (cardDescription) {
          gsap.fromTo(
            cardDescription,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.2 + 0.7,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Accent dot pop-in
        if (accentDot) {
          gsap.fromTo(
            accentDot,
            { scale: 0, rotation: 180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              delay: index * 0.2 + 0.9,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Quote elegant entrance
      gsap.fromTo(
        quote,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Quote decorative lines
      const quoteLines = document.querySelectorAll(".quote-line");
      if (quoteLines.length > 0) {
        gsap.fromTo(
          quoteLines,
          { width: 0, opacity: 0 },
          {
            width: "3rem",
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Setup hover animations
      setupApproachCardHovers();

      console.log("Approach animations initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupApproachCardHovers = () => {
  const cards = document.querySelectorAll(".approach-card");

  cards.forEach((card: any) => {
    const glow = card.querySelector(".absolute.inset-0");
    const icon = card.querySelector(".icon-container");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        y: -10,
        ease: "power2.out",
      });

      if (glow) {
        gsap.to(glow, {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        });
      }

      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          rotation: -6,
          scale: 1.1,
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

      if (glow) {
        gsap.to(glow, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out",
        });
      }

      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          rotation: 0,
          scale: 1,
          ease: "power2.out",
        });
      }
    });
  });
};
