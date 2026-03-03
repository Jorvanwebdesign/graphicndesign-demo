import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-['Dancing_Script'] text-2xl mb-4 text-white">GraphicNDesign</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creatieve grafische vormgeving met oog voor detail en persoonlijke aanpak.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#B3C843] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/graphicndesign" className="text-gray-400 hover:text-[#B3C843] transition-colors text-sm">
                  GraphicNDesign
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-400 hover:text-[#B3C843] transition-colors text-sm">
                  Wat ik voor je kan betekenen
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#B3C843] transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#B3C843] transition-colors text-sm">
                  Contactgegevens
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:0031618661695" className="text-gray-400 hover:text-[#B3C843] transition-colors flex items-center gap-2">
                  <i className="ri-phone-line text-[#B3C843]"></i>
                  06 18 66 16 95
                </a>
              </li>
              <li>
                <a href="mailto:nancyvanderdonk@live.nl" className="text-gray-400 hover:text-[#B3C843] transition-colors flex items-center gap-2">
                  <i className="ri-mail-line text-[#B3C843]"></i>
                  nancyvanderdonk@live.nl
                </a>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <i className="ri-map-pin-line text-[#B3C843] mt-0.5"></i>
                <span>Haarlem, Nederland</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Volg mij</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#B3C843] hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#B3C843] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#B3C843] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GraphicNDesign. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-600 text-xs mt-2 italic">Concept demo ter inspiratie</p>
        </div>
      </div>
    </footer>
  );
}