import Navigation from '../home/components/Navigation';
import ContactContent from './components/ContactContent';
import Footer from '../home/components/Footer';
import StickyMobileCTA from '../home/components/StickyMobileCTA';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ContactContent />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}