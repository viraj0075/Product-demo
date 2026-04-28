import { useEffect, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

// Create Context for Lenis
const LenisContext = createContext(null);

/**
 * Custom hook to access the Lenis instance from any component.
 */
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error('useLenis must be used within a SmoothScroll provider');
  }
  return context;
};

/**
 * SmoothScroll Component
 * Integrates Lenis for a premium, high-inertia scrolling experience.
 * Provides the Lenis instance via Context for manual control (e.g., scrollTo).
 */
const SmoothScroll = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Power4 out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    // Synchronize Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000);
      });
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScroll;
