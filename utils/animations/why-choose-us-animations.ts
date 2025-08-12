import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWhyChooseAnimations = () => {
  let interval = window.setInterval(() => {
    const title = document.querySelector<HTMLElement>(".why-choose-section .section-title");
    const intro = document.querySelector<HTMLElement>(".why-choose-section p");
    const circles = [
      document.querySelector<HTMLElement>(".why-circle-1"),
      document.querySelector<HTMLElement>(".why-circle-2"),
      document.querySelector<HTMLElement>(".why-circle-3"),
    ].filter(Boolean);

    if (title && intro && circles.length) {
      clearInterval(interval);

      // Clear any previous GSAP properties
      circles.forEach((circle) => {
        gsap.set(circle, { clearProps: "all" });
        if (circle) {
          const textElements = circle.querySelectorAll("h3, p, span, div, *");
          textElements.forEach((el: any) => {
            gsap.set(el, { clearProps: "all" });
          });
        }
      });

      gsap.set([title, intro], { clearProps: "all" });

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

      // Intro text animation
      gsap.fromTo(
        intro,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: intro,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Circles entrance animation with stagger - bubble and content as one unit
      gsap.fromTo(
        circles,
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
            trigger: circles[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            // Start infinite bounce after entrance animation completes
            startCircleBounce();
          }
        }
      );

      // Function to start infinite bounce
      function startCircleBounce() {
        circles.forEach((circle, index) => {
          // Each circle gets a slightly different timing and amplitude
          gsap.to(circle, {
            y: "-=8",
            duration: 2 + (index * 0.3), // Slightly different duration for each
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.4, // Stagger the start of each bounce
          });
          
          // Add a very subtle rotation for more organic movement
          gsap.to(circle, {
            duration: 3 + (index * 0.2),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5,
          });
        });
      }

      // Setup hover interactions
      setupCircleHovers(circles as HTMLElement[]);

      console.log("Why choose animations with bounce initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};

const setupCircleHovers = (circles: HTMLElement[]) => {
  circles.forEach((circle: HTMLElement) => {
    circle.addEventListener("mouseenter", () => {
      // Temporarily pause the bounce and scale up
      gsap.to(circle, {
        duration: 0.4,
        scale: 1.05,
        ease: "power2.out",
        overwrite: false,
      });
    });

    circle.addEventListener("mouseleave", () => {
      // Return to normal scale
      gsap.to(circle, {
        duration: 0.4,
        scale: 1,
        ease: "power2.out",
        overwrite: false,
      });
    });
  });
};