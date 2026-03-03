import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GREEN = '#B3C843';
const GREEN_HOVER = '#c8df4a';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/graphicndesign', label: 'GraphicNDesign' },
    { path: '/diensten', label: 'Wat ik voor je kan betekenen' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contactgegevens' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.55)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-white">
              Graphic<span style={{ color: GREEN }}>N</span><span className="text-cyan-400">D</span>esign
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white transition-colors relative cursor-pointer whitespace-nowrap"
                style={{ color: isActive(item.path) ? GREEN : undefined }}
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(item.path) ? GREEN : 'white')}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: GREEN }}></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-black px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: GREEN }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = GREEN_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}
            >
              Offerte aanvragen
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 transition-colors cursor-pointer"
                  style={{ color: isActive(item.path) ? GREEN : undefined }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-left px-4 py-3 text-black font-semibold transition-colors cursor-pointer"
                style={{ backgroundColor: GREEN }}
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}