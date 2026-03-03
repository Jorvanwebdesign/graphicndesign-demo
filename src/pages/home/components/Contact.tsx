
import { useState } from 'react';

const GREEN = '#B3C843';

export default function Contact() {
  const [formData, setFormData] = useState({ naam: '', email: '', bericht: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formBody = new URLSearchParams();
      formBody.append('naam', formData.naam);
      formBody.append('email', formData.email);
      formBody.append('bericht', formData.bericht);
      const response = await fetch('https://readdy.ai/api/form/d6j29vpboei3uoqmpsrg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ naam: '', email: '', bericht: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRouteClick = () => {
    const address = encodeURIComponent('Borgeind 1, 5685 DP Best, Nederland');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <>
      {/* CTA Section */}
      <section
        className="py-24 px-4"
        style={{ background: `linear-gradient(135deg, ${GREEN}1a 0%, #22d3ee1a 100%)` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Klaar om te starten?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvend gesprek over jouw project
          </p>

          <form
            id="contact-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6"
          >
            <input
              type="text"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              placeholder="Naam"
              required
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
              onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
              onBlur={e => (e.currentTarget.style.borderColor = '')}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mailadres"
              required
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
              onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
              onBlur={e => (e.currentTarget.style.borderColor = '')}
            />
            <div>
              <textarea
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                placeholder="Vertel over je project..."
                required
                maxLength={500}
                rows={5}
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
                onBlur={e => (e.currentTarget.style.borderColor = '')}
              />
              <p className="text-sm text-gray-500 mt-2 text-right">{formData.bericht.length}/500</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: GREEN }}
              onMouseEnter={e => !isSubmitting && (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
            </button>

            {submitStatus === 'success' && (
              <div className="border px-6 py-4 rounded-lg" style={{ backgroundColor: `${GREEN}33`, borderColor: GREEN, color: GREEN }}>
                Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-4 rounded-lg">
                Er is iets misgegaan. Probeer het opnieuw of neem direct contact op via telefoon of e-mail.
              </div>
            )}
          </form>

          <p className="text-sm text-gray-400 mt-6">Reactie binnen 24 uur op werkdagen</p>
        </div>
      </section>

      {/* Compact Contact Info Block */}
      <section id="contact" className="py-16 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Contact
              </h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold text-white">graphicNDesign</p>
                  <p className="text-sm">Nancy van der Donk</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-map-pin-line mt-0.5 text-lg" style={{ color: GREEN }}></i>
                  <div className="text-sm">
                    <p>Borgeind 1</p>
                    <p>5685 DP Best</p>
                    <p>Nederland</p>
                  </div>
                </div>
                <a
                  href="tel:0031618661695"
                  className="flex items-center gap-2 transition-colors cursor-pointer text-sm text-gray-300"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <i className="ri-phone-line text-lg" style={{ color: GREEN }}></i>
                  <span>0031 6 18 66 16 95</span>
                </a>
                <a
                  href="mailto:nancyvanderdonk@live.nl"
                  className="flex items-center gap-2 transition-colors cursor-pointer text-sm text-gray-300"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <i className="ri-mail-line text-lg" style={{ color: GREEN }}></i>
                  <span>nancyvanderdonk@live.nl</span>
                </a>
                <a
                  href="https://graphicndesign.nl/"
                  className="flex items-center gap-2 transition-colors cursor-pointer text-sm text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <i className="ri-global-line text-lg" style={{ color: GREEN }}></i>
                  <span>graphicndesign.nl</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <img
                src="https://graphicndesign.nl/wp-content/uploads/elementor/thumbs/LogoGND-vrijstaand-met-tekst-voor-zwarte-achtergrond-o100gkaavb5zi7lejz04rmtfwjvw8scjfyslp8en8o.png"
                alt="GraphicNDesign Logo"
                className="w-48 h-auto"
              />
              <button
                onClick={handleRouteClick}
                className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 whitespace-nowrap cursor-pointer flex items-center gap-2 min-h-[48px]"
                aria-label="Open route in Google Maps"
              >
                <i className="ri-map-pin-line text-lg"></i>
                Route
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GraphicNDesign. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-gray-500 italic mt-2">Concept demo ter inspiratie</p>
        </div>
      </footer>
    </>
  );
}
