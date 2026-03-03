
import { useEffect, useRef, useState } from 'react';

const GREEN = '#B3C843';

const steps = [
  {
    number: '01',
    title: 'Kennismaking',
    description: 'We bespreken jouw wensen, doelgroep en projectdoelen',
    icon: 'ri-chat-3-line',
  },
  {
    number: '02',
    title: 'Concept & Ontwerp',
    description: 'Ik maak een creatief voorstel dat aansluit bij jouw merk',
    icon: 'ri-pencil-ruler-2-line',
  },
  {
    number: '03',
    title: 'Feedback & Aanpassing',
    description: 'Samen verfijnen we het ontwerp tot het perfect is',
    icon: 'ri-refresh-line',
  },
  {
    number: '04',
    title: 'Realisatie',
    description: 'Ik verzorg de technische uitwerking en drukvoorbereiding',
    icon: 'ri-file-check-line',
  },
  {
    number: '05',
    title: 'Oplevering',
    description: 'Je ontvangt het eindproduct in de juiste formaten',
    icon: 'ri-checkbox-circle-line',
  },
];

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
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
    <section ref={sectionRef} className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Werkwijze
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Van eerste gesprek tot eindproduct, alles verloopt via korte en duidelijke communicatielijnen
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5"
            style={{ background: `linear-gradient(to bottom, ${GREEN}, #22d3ee, ${GREEN})` }}
          ></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300"
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
                        className="flex items-center gap-3 mb-3"
                        style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}
                      >
                        <span className="text-4xl font-bold" style={{ color: `${GREEN}33` }}>{step.number}</span>
                        <div
                          className="w-10 h-10 flex items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${GREEN}1a` }}
                        >
                          <i className={`${step.icon} text-xl`} style={{ color: GREEN }}></i>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden md:flex w-4 h-4 rounded-full border-4 border-black z-10 flex-shrink-0"
                    style={{ backgroundColor: GREEN }}
                  ></div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
