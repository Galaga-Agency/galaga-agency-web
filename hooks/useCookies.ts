// hooks/useCookies.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { CookieConsent } from '@/types/cookies';

const COOKIE_NAME = 'cookie_consent';

function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof window === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
}

function getCookie(name: string): string | null {
  if (typeof window === 'undefined') return null;
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function useCookies() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const savedConsent = getCookie(COOKIE_NAME);
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent) as CookieConsent;
        setConsent(parsed);
        setShowBanner(false);
        loadScripts(parsed);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, [isClient]);

  const loadScripts = (consent: CookieConsent) => {
    if (typeof window === 'undefined') return;
    
    // Google Analytics
    if (consent.analytics && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }

    // Facebook Pixel
    if (consent.marketing && !window.fbq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'FACEBOOK_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  };

  const saveConsent = useCallback((newConsent: Omit<CookieConsent, 'timestamp'>) => {
    const consentData: CookieConsent = {
      ...newConsent,
      timestamp: Date.now()
    };
    setCookie(COOKIE_NAME, JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
    loadScripts(consentData);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  }, [saveConsent]);

  const hasConsent = useCallback((type: keyof Omit<CookieConsent, 'timestamp'>): boolean => {
    return consent ? consent[type] : false;
  }, [consent]);

  return {
    consent,
    showBanner,
    acceptAll,
    rejectAll,
    saveConsent,
    hasConsent,
    setShowBanner
  };
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}