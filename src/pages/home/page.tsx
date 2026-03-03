import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import StickyMobileCTA from './components/StickyMobileCTA';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ServicesPreview from './components/ServicesPreview';
import PortfolioPreview from './components/PortfolioPreview';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if splash has been shown
    const hasShownSplash = sessionStorage.getItem('splashShown');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasShownSplash || prefersReducedMotion) {
      setShowContent(true);
    } else {
      // Show content after splash duration + fade out
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <SplashScreen />
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <Hero />
        <Intro />
        <ServicesPreview />
        <PortfolioPreview />
        <CTASection />
        <Contact />
        <Footer />
      </div>
      <StickyMobileCTA />
    </div>
  );
}