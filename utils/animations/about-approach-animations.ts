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

      // Clear any previous GSAP properties
      cards.forEach((card) => {
        gsap.set(card, { clearProps: "all" });
        const textElements = card.querySelectorAll("h3, p, span, div, *");
        textElements.forEach((el: any) => {
          gsap.set(el, { clearProps: "all" });
        });
      });

      gsap.set([title, quote], { clearProps: "all" });

      // Section title animation - more subtle
      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards subtle entrance
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Individual card element animations - much more subtle
      cards.forEach((card, index) => {
        const icon = card.querySelector(".icon-container");
        const cardTitle = card.querySelector(".approach-card-title");
        const cardDescription = card.querySelector(".approach-card-description");

        // Icon gentle scale-in
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              delay: index * 0.15 + 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Title subtle fade-in
        if (cardTitle) {
          gsap.fromTo(
            cardTitle,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: index * 0.15 + 0.3,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Description gentle fade-up
        if (cardDescription) {
          gsap.fromTo(
            cardDescription,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: index * 0.15 + 0.4,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Quote subtle entrance
      gsap.fromTo(
        quote,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Quote decorative lines - subtle
      const quoteLines = document.querySelectorAll(".quote-line");
      if (quoteLines.length > 0) {
        gsap.fromTo(
          quoteLines,
          { width: 0, opacity: 0 },
          {
            width: "3rem",
            opacity: 0.6,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Setup subtle hover animations
      setupSubtleCardHovers();

      console.log("Subtle approach animations initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupSubtleCardHovers = () => {
  const cards = document.querySelectorAll(".approach-card");

  cards.forEach((card: any) => {
    const icon = card.querySelector(".icon-container");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,
        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1.05,
          ease: "power2.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        });
      }
    });
  });
};