import { useEffect } from 'react';
import Navigation from '../home/components/Navigation';
import Footer from '../graphicndesign/components/Footer';
import ServicesContent from './components/ServicesContent';
import StickyMobileCTA from '../home/components/StickyMobileCTA';

export default function DienstenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <ServicesContent />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}