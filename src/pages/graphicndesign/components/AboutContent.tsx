import { Link } from 'react-router-dom';

export default function AboutContent() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Dancing_Script'] text-5xl md:text-6xl mb-6 text-white">
            GraphicNDesign
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Creatieve grafische vormgeving met oog voor detail en een persoonlijke aanpak. 
            Van concept tot eindproduct, ik help je merk visueel tot leven te brengen.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Over GraphicNDesign
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  GraphicNDesign staat voor creatieve en professionele grafische vormgeving. 
                  Met jarenlange ervaring in de branche help ik bedrijven en particulieren 
                  met het creëren van visuele identiteiten die impact maken.
                </p>
                <p>
                  Of het nu gaat om een complete huisstijl, drukwerk, webdesign of reclame-uitingen, 
                  ik werk nauw samen met mijn klanten om hun visie werkelijkheid te maken.
                </p>
                <p>
                  Mijn aanpak is persoonlijk en resultaatgericht. Ik luister naar jouw wensen, 
                  denk mee over de beste oplossingen en lever werk af waar je trots op kunt zijn.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-800">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20graphic%20designer%20workspace%20with%20modern%20computer%20setup%20creative%20studio%20environment%20clean%20minimalist%20design%20tools%20and%20sketches%20natural%20lighting%20inspiring%20atmosphere%20high%20quality%20professional%20photography&width=600&height=600&seq=gnd-about-workspace&orientation=squarish"
                  alt="GraphicNDesign workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B3C843] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Mijn Aanpak
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-[#B3C843] transition-colors">
              <div className="w-12 h-12 bg-[#B3C843] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Luisteren & Begrijpen</h3>
              <p className="text-gray-300 leading-relaxed">
                Elk project begint met een goed gesprek. Ik neem de tijd om jouw wensen, 
                doelen en merkidentiteit te begrijpen.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-[#B3C843] transition-colors">
              <div className="w-12 h-12 bg-[#B3C843] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-pencil-ruler-2-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Ontwerpen & Creëren</h3>
              <p className="text-gray-300 leading-relaxed">
                Met creativiteit en vakmanschap werk ik aan ontwerpen die niet alleen mooi zijn, 
                maar ook effectief communiceren.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-[#B3C843] transition-colors">
              <div className="w-12 h-12 bg-[#B3C843] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-checkbox-circle-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Leveren & Ondersteunen</h3>
              <p className="text-gray-300 leading-relaxed">
                Je ontvangt professionele bestanden, klaar voor gebruik. En natuurlijk blijf ik 
                beschikbaar voor vragen en aanpassingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Tools & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Adobe Illustrator', icon: 'ri-pen-nib-line' },
              { name: 'Adobe Photoshop', icon: 'ri-image-edit-line' },
              { name: 'Adobe InDesign', icon: 'ri-layout-line' },
              { name: 'Branding', icon: 'ri-palette-line' },
              { name: 'Print Design', icon: 'ri-printer-line' },
              { name: 'Web Design', icon: 'ri-computer-line' },
              { name: 'Logo Design', icon: 'ri-shape-line' },
              { name: 'Typography', icon: 'ri-text' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-black p-6 rounded-xl border border-zinc-800 text-center hover:border-[#B3C843] transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <i className={`${skill.icon} text-3xl text-[#B3C843]`}></i>
                </div>
                <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Klaar om samen te werken?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Neem contact op en vertel me over jouw project. Ik help je graag verder.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#B3C843] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#a0b53a] transition-all hover:shadow-lg hover:shadow-[#B3C843]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}