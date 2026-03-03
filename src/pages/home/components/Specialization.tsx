
import { useEffect, useRef, useState } from 'react';

const GREEN = '#B3C843';

export default function Specialization() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-24 px-4 bg-black">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Specialisatie
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tientallen jaren ervaring in de bouwwereld
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
            <div className="w-12 h-12 flex items-center justify-center mb-4 bg-cyan-400/10 rounded-lg">
              <i className="ri-building-4-line text-2xl text-cyan-400"></i>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Bouw & Projectontwikkeling</h3>
            <p className="text-gray-300 leading-relaxed">
              Inmiddels werk ik al tientallen jaren voor en met diversen projectontwikkelaars en bouwbedrijven en voel me inmiddels helemaal thuis in de bouwwereld. Daardoor ben ik tijdens het gehele proces net die belangrijke extra paar ogen die samen met jullie een project tot een goed einde weet te brengen.
            </p>
          </div>

          <div
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 transition-all duration-300"
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
              <i className="ri-file-list-3-line text-2xl" style={{ color: GREEN }}></i>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Verkoopdocumentatie</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ik verzorg alle verkoopdocumentatie die een nieuwbouwproject kan gebruiken om de woningen goed in de markt te zetten.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Locatiekaartjes', 'Situatietekeningen', 'Sfeerplattegronden', 'Overzichtsplattegronden', 'Schematische overzichtjes', 'Gevels en doorsnedes', 'Verkooptekeningen'].map((item, idx) => (
                <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-lg p-8 text-center border"
          style={{
            background: `linear-gradient(to right, ${GREEN}1a, #22d3ee1a)`,
            borderColor: `${GREEN}4d`,
          }}
        >
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            <strong className="text-white">27+ jaar ervaring</strong> in grafisch ontwerp en specialisatie in de bouwsector maken mij de ideale partner voor jouw nieuwbouwproject
          </p>
        </div>
      </div>
    </section>
  );
}
