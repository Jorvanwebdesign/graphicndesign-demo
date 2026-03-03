
import { useEffect, useRef, useState } from 'react';

const GREEN = '#B3C843';

export default function About() {
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
    <section id="graphicndesign" ref={sectionRef} className="py-24 px-4 bg-gray-950">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl mb-4 text-white">
          Graphic<span style={{ color: GREEN }}>N</span><span className="text-cyan-400">D</span>esign
        </h2>

        <h3
          className="text-3xl md:text-4xl mb-12 text-cyan-400"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Gevoel voor sfeer, oog voor detail
        </h3>

        <div className="text-base md:text-lg leading-relaxed space-y-8 text-gray-300">
          <div
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 transition-all duration-300"
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}4d`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
          >
            <p className="max-w-3xl mx-auto">
              Als enthousiast grafisch en creatief vormgeefster en dtp-ster in hart en nieren denk ik graag met je mee hoe we met de meest geschikte middelen de <strong className="text-white">juiste doelgroep</strong> kunnen bereiken.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-cyan-400/30 transition-all duration-300">
            <p className="max-w-3xl mx-auto">
              Werken met GRAPHIC<span style={{ color: GREEN }}>N</span><span className="text-cyan-400">D</span>ESIGN betekent werken met <strong className="text-white">korte en duidelijke communicatielijnen</strong>. Of je nu inhoudelijke of technische vragen hebt of vragen over mogelijkheden, levertijden, planning of gewoon even wat door wilt nemen, het maakt niet uit, al het contact loopt via mij. Vanaf het eerste gesprek tot aan het eindproduct. Dat betekent kort schakelen en dat is een <strong className="text-white">groot voordeel</strong>.
            </p>
          </div>

          <div className="pt-8">
            <h4
              className="text-3xl md:text-4xl mb-4 text-white"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              <span style={{ color: GREEN }}>N</span>ancy van der <span className="text-cyan-400">D</span>onk
            </h4>
            <p className="text-gray-400 mb-6">Grafisch vormgever • DTP specialist • 27+ jaar ervaring</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="tel:0031618661695"
                className="flex items-center gap-2 transition-colors cursor-pointer text-gray-300"
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                <i className="ri-phone-line" style={{ color: GREEN }}></i>
                <span>06 18 66 16 95</span>
              </a>
              <a
                href="mailto:nancyvanderdonk@live.nl"
                className="flex items-center gap-2 transition-colors cursor-pointer text-gray-300"
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                <i className="ri-mail-line" style={{ color: GREEN }}></i>
                <span>nancyvanderdonk@live.nl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
