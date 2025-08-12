import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutApproachAnimations = () => {
  let interval = window.setInterval(() => {
    const title = document.querySelector<HTMLElement>(".about-approach-title");
    const bubbles = [
      document.querySelector<HTMLElement>(".approach-bubble-1"),
      document.querySelector<HTMLElement>(".approach-bubble-2"),
      document.querySelector<HTMLElement>(".approach-bubble-3"),
    ].filter(Boolean);
    const quote = document.querySelector<HTMLElement>(".about-approach-quote");

    if (title && bubbles.length && quote) {
      clearInterval(interval);

      // Clear any previous GSAP properties
      bubbles.forEach((bubble) => {
        gsap.set(bubble, { clearProps: "all" });
        if (bubble) {
          const textElements = bubble.querySelectorAll("h3, p, span, div, *");
          textElements.forEach((el: any) => {
            gsap.set(el, { clearProps: "all" });
          });
        }
      });

      gsap.set([title, quote], { clearProps: "all" });

      // Section title animation
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

      // Bubbles entrance animation with stagger - bubble and content as one unit
      gsap.fromTo(
        bubbles,
        { 
          opacity: 0, 
          scale: 0.6,
          y: 60,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: bubbles[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            // Start infinite bounce after entrance animation completes
            startBubbleBounce();
          }
        }
      );

      // Quote animation
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

      // Function to start infinite bounce
      function startBubbleBounce() {
        bubbles.forEach((bubble, index) => {
          // Each bubble gets a slightly different timing and amplitude
          gsap.to(bubble, {
            y: "-=8",
            duration: 2 + (index * 0.3), // Slightly different duration for each
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.4, // Stagger the start of each bounce
          });
          
          // Add a very subtle rotation for more organic movement
          gsap.to(bubble, {
            duration: 3 + (index * 0.2),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5,
          });
        });
      }

      // Setup hover interactions
      setupBubbleHovers(bubbles as HTMLElement[]);

      console.log("Bubble approach animations with bounce initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupBubbleHovers = (bubbles: HTMLElement[]) => {
  bubbles.forEach((bubble: HTMLElement) => {
    bubble.addEventListener("mouseenter", () => {
      // Temporarily pause the bounce and scale up
      gsap.to(bubble, {
        duration: 0.4,
        scale: 1.05,
        ease: "power2.out",
        overwrite: false,
      });
    });

    bubble.addEventListener("mouseleave", () => {
      // Return to normal scale
      gsap.to(bubble, {
        duration: 0.4,
        scale: 1,
        ease: "power2.out",
        overwrite: false,
      });
    });
  });
};