// utils/hero-scroll-animation.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHeroScrollAnimation = () => {
  // Kill any existing ScrollTriggers to prevent conflicts
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Hero section scale and fade animation
  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");
  
  if (heroSection && heroContent) {
    // Pin the entire hero section
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      end: "50% top",
      pin: true,
      pinSpacing: false,
    });

    // Only fade the hero-content, NOT the cards
    gsap.to(heroContent, {
      scale: 0.8,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "50% top",
        scrub: 0.5,
      }
    });
  }

  // About section reveal with pin
  const aboutSection = document.querySelector(".about-section");
  const aboutContent = document.querySelector(".about-content");
  
  if (aboutSection && aboutContent) {
    // Pin the about section and reveal content
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top top",
        end: "top 20%", // End earlier for faster animation
        scrub: 3, // More responsive
        pin: ".about-wrapper",
        pinSpacing: true,
        anticipatePin: 1,
      }
    })
    .fromTo(aboutContent, 
      {
        y: 50, 
        opacity: 0,
        scale: 0.98
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 0.8
      }
    );

    // Add parallax effect to about section elements
    const aboutElements = aboutSection.querySelectorAll("[data-speed]");
    aboutElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || "1";
      
      gsap.to(element, {
        y: () => (parseFloat(speed) - 1) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  // Services section fade in
  const servicesSection = document.querySelector(".services-section");
  
  if (servicesSection) {
    gsap.fromTo(servicesSection,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
  }

  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();
};

// Cleanup function
export const cleanupHeroScrollAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};