import { gsap } from "gsap";

export const initHeroTitleAnimation = () => {
  const tl = gsap.timeline();

  // Set up 3D properties
  tl.set('.hero-logo', {
    perspective: 1000,
  }, 0);

  tl.set('.hero-logo-img', {
    transformStyle: "preserve-3d",
    rotationX: -90,
    transformOrigin: "center center -100px",
    backfaceVisibility: "hidden",
  }, 0);

  // Logo roll down - FASTER
  tl.to('.hero-logo', {
    opacity: 1,
    duration: 0.05, // Reduced from 0.1
    ease: "none"
  }, 0);

  tl.to('.hero-logo-img', {
    rotationX: 0,
    duration: 1.0, // Sweet spot between 1.5 and 0.8
    ease: "power3.out",
    transformOrigin: "center center -100px"
  }, 0.2);

  // Logo fades away
  tl.to('.hero-logo', {
    opacity: 0,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "power2.out"
  }, "+=0.5");

  // Innovamos slides up
  tl.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 0.8, // Between 1 and 0.6
    ease: "power3.out"
  }, "+=0.2");

  // Para ti fades in
  tl.to('.hero-para-ti', {
    opacity: 1,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "power2.out"
  }, "+=0.3");

  // Strike through
  tl.to('.hero-strike-line', {
    opacity: 1,
    scaleX: 1,
    duration: 0.4, // Between 0.6 and 0.3
    ease: "power2.out"
  }, "+=0.5");

  // Tube rolling setup
  tl.set('.hero-subtitle-container', {
    perspective: 1000,
  }, "+=0.3");

  tl.set('.hero-para-ti, .hero-contigo', {
    transformStyle: "preserve-3d",
    transformOrigin: "center center -50px",
  });

  tl.set('.hero-contigo', {
    rotationY: 90,
    opacity: 1,
  });

  // Roll transition
  tl.to('.hero-para-ti', {
    rotationY: -90,
    opacity: 0,
    duration: 0.4, // Between 0.6 and 0.3
    ease: "power2.inOut",
    transformOrigin: "center center -50px"
  });

  tl.to('.hero-contigo', {
    rotationY: 0,
    duration: 0.4, // Between 0.6 and 0.3
    ease: "power2.inOut",
    transformOrigin: "center center -50px"
  }, "-=0.4");

  // Everything fades out
  tl.to('.hero-title, .hero-contigo', {
    opacity: 0,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "power2.out"
  }, "+=1.0"); // Between 1.5 and 0.6

  // Final logo animation
  tl.to('.hero-final-logo', {
    opacity: 1,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "power2.out"
  }, "+=0.3"); // Between 0.5 and 0.2

  // Set initial states for SVG elements
  tl.set('.logo-icon', {
    scale: 1.5,
    transformOrigin: "center center"
  }, "-=0.4");

  tl.set('.logo-text', {
    opacity: 0,
    y: 20
  }, "-=0.4");

  // Icon scales down
  tl.to('.logo-icon', {
    scale: 1,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "back.out(1.2)"
  }, "+=0.3"); // Between 0.6 and 0.2

  // Text fades in
  tl.to('.logo-text', {
    opacity: 1,
    y: 0,
    duration: 0.6, // Between 0.8 and 0.4
    ease: "power2.out"
  }, "-=0.3");

  // Logo bounce
  tl.to('.hero-final-logo svg', {
    scale: 1.05,
    duration: 0.2, // Between 0.3 and 0.15
    ease: "power2.out",
    yoyo: true,
    repeat: 1
  }, "-=0.15");
  
  // Keep CTA text hidden for typewriter
  tl.set('.hero-cta-text', { opacity: 0 }, "-=0.5");

  // FASTER TYPEWRITER ANIMATION
  tl.call(() => {
    const element = document.querySelector('.hero-cta-text') as HTMLElement;
    if (!element) return;
    
    const text = element.textContent || "";
    element.style.opacity = '1';
    element.innerHTML = '';
    
    // Add cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    element.appendChild(cursor);
    
    // Faster cursor blink
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.4, // Reduced from 0.6
      repeat: -1,
      yoyo: true
    });
    
    // Add text container
    const textSpan = document.createElement('span');
    element.insertBefore(textSpan, cursor);
    
    // Type each letter at a reasonable pace
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        textSpan.textContent += text[i];
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          gsap.to(cursor, { opacity: 0, duration: 0.2 });
        }, 75);
      }
    }, 50); // Sweet spot between 80 and 30 - feels natural but not slow
  }, [], "+=0.1"); // Reduced delay

  // Animate ScrollIndicator - FASTER
  tl.to('.scroll-indicator', {
    opacity: 1,
    duration: 0.4, // Reduced from 0.8
    ease: "power2.out"
  }, "-=0.2");

  // Floating animation for ScrollIndicator
  tl.to('.scroll-indicator-wrapper', {
    y: 8,
    duration: 1.2, // Slightly faster
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  }, "+=0.3");

  // Add scroll detection for fade out
  tl.call(() => {
    let hasScrolled = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        
        gsap.to('.scroll-indicator', {
          opacity: 0,
          y: 20,
          duration: 0.4, // Faster fade out
          ease: "power2.out"
        });
      }
      
      if (hasScrolled && window.scrollY <= 10) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          hasScrolled = false;
          gsap.to('.scroll-indicator', {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster fade in
            ease: "power2.out"
          });
        }, 800); // Reduced timeout
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [], "+=0.2");

  return tl;
};