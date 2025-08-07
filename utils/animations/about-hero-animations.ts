import { gsap } from "gsap";

export const initAboutHeroAnimations = () => {
  const tl = gsap.timeline();

  // Main title words animate up
  tl.to(".about-hero-word-1", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  })
    .to(
      ".about-hero-word-2",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".about-hero-subtitle",
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Scroll indicator fades in
  tl.to('.about-hero-scroll-indicator', {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5");

  // Floating scroll indicator animation
  tl.to('.about-hero-scroll-indicator .scroll-indicator-wrapper', {
    y: 8,
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  }, "+=0.5");

  // Add scroll detection for fade out
  tl.call(() => {
    let hasScrolled = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        
        gsap.to('.about-hero-scroll-indicator', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out"
        });
      }
      
      if (hasScrolled && window.scrollY <= 10) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          hasScrolled = false;
          gsap.to('.about-hero-scroll-indicator', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [], "+=0.3");

  // Return cleanup function
  return () => {
    tl.kill();
  };
};