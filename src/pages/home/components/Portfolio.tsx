
import { useEffect, useRef, useState } from 'react';

const GREEN = '#B3C843';

const portfolioItems = [
  {
    image: 'https://readdy.ai/api/search-image?query=modern%20professional%20brochure%20design%20layout%20with%20clean%20typography%20and%20elegant%20color%20scheme%2C%20minimalist%20graphic%20design%20portfolio%20piece%20showcasing%20corporate%20identity%20materials%20on%20white%20background%2C%20high%20quality%20print%20design%20mockup&width=600&height=800&seq=gnd-portfolio-1&orientation=portrait',
    title: 'Brochure Design',
    type: 'Print & Drukwerk',
    tag: 'Corporate',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=elegant%20logo%20design%20and%20brand%20identity%20system%20with%20business%20cards%20and%20stationery%20mockup%2C%20professional%20corporate%20branding%20materials%20displayed%20on%20clean%20white%20surface%2C%20modern%20minimalist%20design%20aesthetic&width=800&height=600&seq=gnd-portfolio-2&orientation=landscape',
    title: 'Huisstijl Ontwikkeling',
    type: 'Branding',
    tag: 'Identiteit',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=architectural%20floor%20plan%20and%20construction%20project%20documentation%20with%20technical%20drawings%2C%20professional%20real%20estate%20development%20marketing%20materials%2C%20clean%20blueprint%20style%20design%20on%20white%20background&width=600&height=800&seq=gnd-portfolio-3&orientation=portrait',
    title: 'Nieuwbouwproject',
    type: 'Bouw & Ontwikkeling',
    tag: 'Verkoopdocumentatie',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=creative%20magazine%20layout%20design%20with%20modern%20typography%20and%20professional%20photography%2C%20editorial%20design%20spread%20showing%20clean%20grid%20system%2C%20high%20quality%20print%20publication%20mockup&width=800&height=600&seq=gnd-portfolio-4&orientation=landscape',
    title: 'Magazine Layout',
    type: 'Redactioneel',
    tag: 'Editorial',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=professional%20marketing%20poster%20and%20banner%20design%20with%20bold%20typography%2C%20eye%20catching%20advertising%20materials%20for%20business%20promotion%2C%20modern%20graphic%20design%20with%20strong%20visual%20hierarchy&width=600&height=800&seq=gnd-portfolio-5&orientation=portrait',
    title: 'Marketing Campagne',
    type: 'Advertenties',
    tag: 'Promotie',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=construction%20site%20signage%20and%20building%20project%20board%20design%2C%20professional%20real%20estate%20development%20marketing%20board%20with%20architectural%20visualization%2C%20large%20format%20outdoor%20advertising%20mockup&width=800&height=600&seq=gnd-portfolio-6&orientation=landscape',
    title: 'Bouwbord & Signage',
    type: 'Buitenreclame',
    tag: 'Projectontwikkeling',
  },
];

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            portfolioItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Een selectie van recent werk voor diverse opdrachtgevers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all duration-500 cursor-pointer ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedItem(index)}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}80`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-semibold mb-2">{item.tag}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.type}</p>
              </div>

              <div className="p-4 bg-gray-900">
                <span className="text-cyan-400 text-xs font-semibold">{item.tag}</span>
                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center font-semibold transition-colors cursor-pointer"
            style={{ color: GREEN }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Bekijk meer werk <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>

      {selectedItem !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl w-12 h-12 flex items-center justify-center cursor-pointer transition-colors"
            style={{}}
            onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
            onClick={() => setSelectedItem(null)}
          >
            <i className="ri-close-line"></i>
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={portfolioItems[selectedItem].image}
              alt={portfolioItems[selectedItem].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-6">
              <span className="text-cyan-400 text-sm font-semibold">{portfolioItems[selectedItem].tag}</span>
              <h3 className="text-2xl font-semibold text-white mt-2">{portfolioItems[selectedItem].title}</h3>
              <p className="text-gray-300 mt-1">{portfolioItems[selectedItem].type}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
