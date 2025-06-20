import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutStoryAnimations = () => {
  // Section title animation
  gsap.from(".about-story-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-story-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Story blocks animation with alternating directions
  gsap.utils.toArray(".story-block").forEach((block: any, index) => {
    const isEven = index % 2 === 0;
    
    // Main block animation
    gsap.from(block, {
      duration: 1,
      x: isEven ? -100 : 100,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Individual elements within each block
    gsap.from(block.querySelectorAll("h3"), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(block.querySelectorAll("p"), {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Icon containers animation
    gsap.from(block.querySelectorAll(".w-16, .w-20"), {
      duration: 0.6,
      scale: 0,
      rotation: 180,
      ease: "back.out(1.7)",
      delay: 0.4,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Visual cards animation
    gsap.from(block.querySelectorAll(".aspect-video"), {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: block,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Values grid animation (for the third story block)
  gsap.from(".grid.grid-cols-1.md\\:grid-cols-3 > div", {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".grid.grid-cols-1.md\\:grid-cols-3",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
};