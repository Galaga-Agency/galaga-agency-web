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

  // Logo roll down
  tl.to('.hero-logo', {
    opacity: 1,
    duration: 0.1,
    ease: "none"
  }, 0);

  tl.to('.hero-logo-img', {
    rotationX: 0,
    duration: 1.5,
    ease: "power3.out",
    transformOrigin: "center center -100px"
  }, 0.3);

  // Logo fades away
  tl.to('.hero-logo', {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.8");

  // Innovamos slides up
  tl.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }, "+=0.3");

  // Para ti fades in
  tl.to('.hero-para-ti', {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.5");

  // Strike through
  tl.to('.hero-strike-line', {
    opacity: 1,
    scaleX: 1,
    duration: 0.6,
    ease: "power2.out"
  }, "+=0.8");

  // Tube rolling setup (reversed direction)
  tl.set('.hero-subtitle-container', {
    perspective: 1000,
  }, "+=0.5");

  tl.set('.hero-para-ti, .hero-contigo', {
    transformStyle: "preserve-3d",
    transformOrigin: "center center -50px",
  });

  // Set contigo to start from the opposite side (90 instead of -90)
  tl.set('.hero-contigo', {
    rotationY: 90,
    opacity: 1,
  });

  // Roll para ti out to the left (-90), contigo in from the right
  tl.to('.hero-para-ti', {
    rotationY: -90,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    transformOrigin: "center center -50px"
  });

  tl.to('.hero-contigo', {
    rotationY: 0,
    duration: 0.6,
    ease: "power2.inOut",
    transformOrigin: "center center -50px"
  }, "-=0.6");

  // Everything fades out
  tl.to('.hero-title, .hero-contigo', {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "+=1.5");

  // Final logo fades in
  tl.to('.hero-final-logo', {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "+=0.5");
  
  // But keep the CTA text hidden for typewriter
  tl.set('.hero-cta-text', { opacity: 0 }, "-=1");

  // TYPEWRITER ANIMATION RIGHT HERE IN THIS FILE
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
    
    // GSAP cursor blink
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true
    });
    
    // Add text container
    const textSpan = document.createElement('span');
    element.insertBefore(textSpan, cursor);
    
    // Type each letter
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        textSpan.textContent += text[i];
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          gsap.to(cursor, { opacity: 0, duration: 0.3 });
        }, 1000);
      }
    }, 80);
  }, [], "+=0.5");

  // Animate ScrollIndicator (replaces the old scroll-indicator)
  tl.to('.scroll-indicator', {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.3");

  // Floating animation for the entire ScrollIndicator
  tl.to('.scroll-indicator-wrapper', {
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
      // Only fade out once
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        
        gsap.to('.scroll-indicator', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out"
        });
      }
      
      // Optional: Show again if user scrolls back to top after some time
      if (hasScrolled && window.scrollY <= 10) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          hasScrolled = false;
          gsap.to('.scroll-indicator', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        }, 1000);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [], "+=0.3");

  return tl;
};