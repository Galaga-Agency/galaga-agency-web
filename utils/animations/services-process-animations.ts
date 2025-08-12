import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesProcessAnimations = () => {
  let interval = window.setInterval(() => {
    const title = document.querySelector<HTMLElement>(".services-process-section .section-title");
    const subtitle = document.querySelector<HTMLElement>(".services-process-section p");
    const circles = [
      document.querySelector<HTMLElement>(".process-circle-1"),
      document.querySelector<HTMLElement>(".process-circle-2"),
      document.querySelector<HTMLElement>(".process-circle-3"),
      document.querySelector<HTMLElement>(".process-circle-4"),
    ].filter(Boolean);

    if (title && subtitle && circles.length) {
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

      gsap.set([title, subtitle], { clearProps: "all" });

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

      // Subtitle animation
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitle,
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
          scale: 0.8,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
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
            y: "-=5",
            duration: 3 + (index * 0.2), // Slightly different duration for each
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5, // Stagger the start of each bounce
          });
          
          // Add a very subtle rotation for more organic movement
          gsap.to(circle, {
            rotation: index % 2 === 0 ? 1 : -1,
            duration: 5 + (index * 0.3),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.6,
          });
        });
      }

      // Setup hover interactions
      setupCircleHovers(circles as HTMLElement[]);

      console.log("Services process animations with bounce initialized successfully");
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
        duration: 0.3,
        scale: 1.02,
        ease: "power2.out",
        overwrite: false,
      });
    });

    circle.addEventListener("mouseleave", () => {
      // Return to normal scale
      gsap.to(circle, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
        overwrite: false,
      });
    });
  });
};