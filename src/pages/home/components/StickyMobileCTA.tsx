
import { useState, useEffect } from 'react';

const GREEN = '#B3C843';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div
        className="backdrop-blur-sm px-4 py-3 shadow-lg border-t"
        style={{ backgroundColor: 'rgba(0,0,0,0.95)', borderColor: `${GREEN}33` }}
      >
        <div className="flex gap-3 max-w-md mx-auto">
          <button
            onClick={scrollToContact}
            className="flex-1 text-black font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 active:scale-95 whitespace-nowrap min-h-[48px] flex items-center justify-center"
            style={{ backgroundColor: GREEN }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            aria-label="Scroll naar contact formulier"
          >
            <i className="ri-mail-line mr-2 text-lg"></i>
            Contact
          </button>

          <a
            href="tel:0031618661695"
            className="flex-1 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold py-3.5 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 active:scale-95 whitespace-nowrap min-h-[48px] flex items-center justify-center"
            aria-label="Bel GraphicNDesign"
          >
            <i className="ri-phone-line mr-2 text-lg"></i>
            Bel
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
