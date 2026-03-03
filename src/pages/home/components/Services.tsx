
import { useEffect, useRef, useState } from 'react';

const GREEN = '#B3C843';

const services = [
  {
    icon: 'ri-palette-line',
    title: 'Huisstijl & Branding',
    description: 'Complete merkidentiteit die jouw bedrijf onderscheidt',
    features: ['Logo ontwerp', 'Huisstijlhandboek', 'Kleur & typografie'],
  },
  {
    icon: 'ri-file-text-line',
    title: 'Print & Drukwerk',
    description: 'Professionele gedrukte materialen voor elke gelegenheid',
    features: ['Brochures & magazines', 'Flyers & folders', 'Visitekaartjes'],
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Marketing Materialen',
    description: 'Opvallende communicatiemiddelen die converteren',
    features: ['Advertenties', 'Banners & posters', 'Beursmaterialen'],
  },
  {
    icon: 'ri-building-line',
    title: 'Bouw & Nieuwbouw',
    description: 'Specialisatie in projectontwikkeling en bouwprojecten',
    features: ['Verkoopdocumentatie', 'Plattegronden & tekeningen', 'Bouwborden'],
  },
  {
    icon: 'ri-image-line',
    title: 'Presentaties',
    description: 'Visueel sterke presentatiematerialen',
    features: ['Presentatieborden', 'Omslagmappen', 'Stickers & labels'],
  },
  {
    icon: 'ri-team-line',
    title: 'Samenwerking',
    description: 'Uitgebreid netwerk voor complete oplossingen',
    features: ['Website ontwerp', 'Social media', 'Artist impressions'],
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
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
    <section id="betekenen" ref={sectionRef} className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Wat ik voor je kan betekenen
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Van concept tot eindproduct, ik denk graag met je mee voor de beste oplossing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-500 hover:-translate-y-1 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${GREEN}80`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 30px ${GREEN}1a`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-4 rounded-lg"
                style={{ backgroundColor: `${GREEN}1a` }}
              >
                <i className={`${service.icon} text-2xl`} style={{ color: GREEN }}></i>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <span className="mr-2 mt-0.5" style={{ color: GREEN }}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors inline-flex items-center cursor-pointer"
              >
                Meer info <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
