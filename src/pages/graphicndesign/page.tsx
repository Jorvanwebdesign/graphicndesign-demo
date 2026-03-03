import { useEffect } from 'react';
import Navigation from '../home/components/Navigation';
import Footer from './components/Footer';
import AboutContent from './components/AboutContent';
import StickyMobileCTA from '../home/components/StickyMobileCTA';

export default function GraphicNDesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <AboutContent />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}