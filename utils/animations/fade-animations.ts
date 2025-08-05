import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function fadeAnimations() {
  // Animate elements with fade-up class
  gsap.fromTo('.fade-up', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-up',
        start: 'top 80%', // When top of element hits 80% of viewport
        toggleActions: 'play none none none'
      }
    }
  );

  // Animate elements with fade-down class  
  gsap.fromTo('.fade-down',
    { opacity: 0, y: -50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-down',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Animate elements with fade-left class
  gsap.fromTo('.fade-left',
    { opacity: 0, x: -100 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-left',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Animate elements with fade-right class
  gsap.fromTo('.fade-right',
    { opacity: 0, x: 100 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-right',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
}