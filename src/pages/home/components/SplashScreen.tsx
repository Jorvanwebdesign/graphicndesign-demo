
import { useEffect, useState } from 'react';

const GREEN = '#B3C843';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem('splashShown');
    if (hasShownSplash) {
      setShouldRender(false);
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem('splashShown', 'true');
      setShouldRender(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('splashShown', 'true');
      setTimeout(() => setShouldRender(false), 500);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)' }}
    >
      <div className="mb-8 animate-fade-in">
        <img
          src="https://graphicndesign.nl/wp-content/uploads/elementor/thumbs/LogoGND-vrijstaand-met-tekst-voor-zwarte-achtergrond-o100gkaavb5zi7lejz04rmtfwjvw8scjfyslp8en8o.png"
          alt="GraphicNDesign"
          className="w-64 md:w-80 h-auto drop-shadow-2xl"
        />
      </div>

      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${GREEN}, #22d3ee)`,
            animation: 'progress 1.2s ease-out forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in { animation: none; }
        }
      `}</style>
    </div>
  );
}
