import { gsap } from "gsap";

export interface NavbarAnimationsConfig {
  navElement: HTMLElement;
  mobileMenuElement: HTMLElement | null;
  isMenuOpen: boolean;
}

export function initNavbarAnimations({
  navElement,
  mobileMenuElement,
  isMenuOpen
}: NavbarAnimationsConfig) {
  
  // Timeline for initial navbar animations - ONLY RUN ONCE
  const logoContainer = navElement.querySelector('.logo-container');
  const navLinks = navElement.querySelectorAll('.nav-item');
  const actionItems = navElement.querySelectorAll('.action-item');

  // Only animate if not already initialized
  if (!navElement.dataset.animated) {
    const initTimeline = gsap.timeline();
    
    // Animate logo on load - much gentler
    if (logoContainer) {
      gsap.set(logoContainer, { opacity: 0, y: -10 });
      initTimeline.to(logoContainer, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }

    // Animate desktop nav links with stagger - gentler
    if (navLinks.length > 0) {
      gsap.set(navLinks, { opacity: 0, y: -8 });
      initTimeline.to(navLinks, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.3");
    }

    // Animate desktop actions - gentler
    if (actionItems.length > 0) {
      gsap.set(actionItems, { opacity: 0, y: -8 });
      initTimeline.to(actionItems, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.3");
    }

    // Mark as animated
    navElement.dataset.animated = "true";
  }

  // Mobile menu animations
  if (mobileMenuElement) {
    const backdrop = document.querySelector('.mobile-backdrop');
    const mobileNavItems = mobileMenuElement.querySelectorAll('.mobile-nav-item');
    const mobileHeader = mobileMenuElement.querySelector('.mobile-header');
    const mobileFooter = mobileMenuElement.querySelector('.mobile-footer');
    const mobileLang = mobileMenuElement.querySelector('.mobile-lang');
    const mobileCta = mobileMenuElement.querySelector('.mobile-cta');
    const mobileSocial = mobileMenuElement.querySelector('.mobile-social');

    const animateMobileMenu = (isOpen: boolean) => {
      const tl = gsap.timeline();

      if (isOpen) {
        // Show backdrop - gentler
        if (backdrop) {
          gsap.set(backdrop, { opacity: 0 });
          tl.to(backdrop, { opacity: 1, duration: 0.25, ease: "power2.out" });
        }

        // Slide in menu - gentler
        gsap.set(mobileMenuElement, { x: "100%" });
        tl.to(mobileMenuElement, { x: "0%", duration: 0.3, ease: "power2.out" }, "-=0.1");

        // Animate header - gentler
        if (mobileHeader) {
          gsap.set(mobileHeader, { opacity: 0, y: -10 });
          tl.to(mobileHeader, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.15");
        }

        // Animate nav items with stagger - much gentler
        if (mobileNavItems.length > 0) {
          gsap.set(mobileNavItems, { opacity: 0, x: 15 });
          tl.to(mobileNavItems, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out"
          }, "-=0.15");
        }

        // Animate footer elements - gentler
        if (mobileFooter) {
          gsap.set([mobileLang, mobileCta, mobileSocial], { opacity: 0, y: 10 });
          tl.to([mobileLang, mobileCta, mobileSocial], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out"
          }, "-=0.1");
        }
      } else {
        // Hide menu - faster exit
        tl.to(mobileMenuElement, { x: "100%", duration: 0.25, ease: "power2.in" });
        
        // Hide backdrop
        if (backdrop) {
          tl.to(backdrop, { opacity: 0, duration: 0.15, ease: "power2.out" }, "-=0.1");
        }
      }
    };

    // Apply current state
    animateMobileMenu(isMenuOpen);

    // Store animation function
    (mobileMenuElement as any).__animateMobileMenu = animateMobileMenu;
  }

  // Hover animations for nav links
  const setupHoverAnimations = () => {
    const navLinks = navElement.querySelectorAll('.nav-item');
    navLinks.forEach((link) => {
      const hoverBg = link.querySelector('.hover-bg');
      const activeIndicator = link.querySelector('.active-indicator');
      
      if (hoverBg) {
        link.addEventListener('mouseenter', () => {
          gsap.to(hoverBg, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
        
        link.addEventListener('mouseleave', () => {
          gsap.to(hoverBg, { scale: 0, duration: 0.3, ease: "power2.out" });
        });
      }

      if (activeIndicator) {
        // Much gentler pulse animation for active indicator
        gsap.to(activeIndicator, {
          scaleX: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    });

    // Social links hover - gentler
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.05, duration: 0.2, ease: "power2.out" });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.2, ease: "power2.out" });
      });
    });
  };

  setupHoverAnimations();

  // Logo hover animation - gentler
  if (logoContainer) {
    logoContainer.addEventListener('mouseenter', () => {
      gsap.to(logoContainer, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    });
    
    logoContainer.addEventListener('mouseleave', () => {
      gsap.to(logoContainer, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  }

  // Cleanup function
  return () => {
    const navLinks = navElement.querySelectorAll('.nav-item');
    const actionItems = navElement.querySelectorAll('.action-item');
    const logoContainer = navElement.querySelector('.logo-container');
    
    gsap.killTweensOf([
      logoContainer,
      navLinks,
      actionItems,
      mobileMenuElement,
      '.social-link'
    ]);
  };
}