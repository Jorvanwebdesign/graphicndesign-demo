import Navigation from '../home/components/Navigation';
import Footer from '../home/components/Footer';
import StickyMobileCTA from '../home/components/StickyMobileCTA';
import PortfolioContent from './components/PortfolioContent';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <PortfolioContent />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}