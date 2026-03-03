const GREEN = '#B3C843';

export default function Footer() {
  const handleNavigate = (path: string) => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE(path);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="text-2xl font-bold text-white mb-4 cursor-pointer">
              Graphic<span style={{ color: GREEN }}>N</span><span className="text-cyan-400">D</span>esign
            </button>
            <p className="text-white/60 text-sm leading-relaxed">
              Professioneel grafisch ontwerp met persoonlijk contact en korte lijnen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Snelle links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate('/')}
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/graphicndesign')}
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  GraphicNDesign
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/diensten')}
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Wat ik voor je kan betekenen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/portfolio')}
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Contactgegevens
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-lg" style={{ color: GREEN }} />
                <a
                  href="tel:0031618661695"
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  +31 6 18 66 16 95
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-lg" style={{ color: GREEN }} />
                <a
                  href="mailto:nancyvanderdonk@live.nl"
                  className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  nancyvanderdonk@live.nl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-lg" style={{ color: GREEN }} />
                <span className="text-white/60 text-sm">
                  Etten-Leur, Nederland
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} GraphicNDesign. Alle rechten voorbehouden.
          </p>
          <p className="text-white/30 text-xs italic">
            Concept demo ter inspiratie
          </p>
        </div>
      </div>
    </footer>
  );
}