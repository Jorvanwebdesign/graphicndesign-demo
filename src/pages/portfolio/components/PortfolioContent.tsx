import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Huisstijl Restaurant De Smaak',
    category: 'Huisstijl',
    image: 'https://readdy.ai/api/search-image?query=elegant%20restaurant%20brand%20identity%20design%20with%20logo%20business%20cards%20and%20menu%20mockup%20on%20dark%20wooden%20table%20professional%20photography%20clean%20minimalist%20style&width=600&height=400&seq=portfolio1&orientation=landscape',
    description: 'Complete huisstijl ontwikkeling inclusief logo, visitekaartjes en menukaarten'
  },
  {
    id: 2,
    title: 'Webdesign Boutique Fashion',
    category: 'Webdesign',
    image: 'https://readdy.ai/api/search-image?query=modern%20fashion%20boutique%20website%20design%20mockup%20on%20laptop%20screen%20showing%20elegant%20clothing%20collection%20clean%20white%20background%20professional%20product%20photography&width=600&height=400&seq=portfolio2&orientation=landscape',
    description: 'Moderne webshop met focus op gebruiksvriendelijkheid en conversie'
  },
  {
    id: 3,
    title: 'Drukwerk Evenement Poster',
    category: 'Drukwerk',
    image: 'https://readdy.ai/api/search-image?query=creative%20event%20poster%20design%20mockup%20with%20vibrant%20colors%20and%20bold%20typography%20hanging%20on%20white%20wall%20professional%20print%20design%20showcase&width=600&height=400&seq=portfolio3&orientation=landscape',
    description: 'Opvallende poster serie voor jaarlijks cultuurevenement'
  },
  {
    id: 4,
    title: 'Reclame Campagne Zomeractie',
    category: 'Reclame',
    image: 'https://readdy.ai/api/search-image?query=summer%20advertising%20campaign%20design%20with%20bright%20colors%20social%20media%20posts%20and%20banner%20ads%20mockup%20professional%20marketing%20materials%20showcase&width=600&height=400&seq=portfolio4&orientation=landscape',
    description: 'Multi-channel campagne voor zomer promotie met social media en print'
  },
  {
    id: 5,
    title: 'Illustratie Kinderboek',
    category: 'Illustratie',
    image: 'https://readdy.ai/api/search-image?query=whimsical%20children%20book%20illustration%20with%20colorful%20characters%20and%20playful%20scenes%20open%20book%20mockup%20on%20soft%20background%20professional%20illustration%20showcase&width=600&height=400&seq=portfolio5&orientation=landscape',
    description: 'Kleurrijke illustraties voor educatief kinderboek'
  },
  {
    id: 6,
    title: 'Opmaak Magazine Layout',
    category: 'Opmaak',
    image: 'https://readdy.ai/api/search-image?query=professional%20magazine%20layout%20design%20with%20elegant%20typography%20and%20grid%20system%20open%20spread%20mockup%20on%20white%20background%20editorial%20design%20showcase&width=600&height=400&seq=portfolio6&orientation=landscape',
    description: 'Strakke opmaak voor lifestyle magazine met focus op leesbaarheid'
  },
  {
    id: 7,
    title: 'Huisstijl Tech Startup',
    category: 'Huisstijl',
    image: 'https://readdy.ai/api/search-image?query=modern%20tech%20startup%20brand%20identity%20with%20geometric%20logo%20and%20business%20stationery%20mockup%20on%20dark%20background%20professional%20corporate%20design&width=600&height=400&seq=portfolio7&orientation=landscape',
    description: 'Frisse huisstijl voor innovatieve tech startup'
  },
  {
    id: 8,
    title: 'Drukwerk Visitekaartjes Premium',
    category: 'Drukwerk',
    image: 'https://readdy.ai/api/search-image?query=luxury%20business%20cards%20with%20gold%20foil%20and%20embossed%20details%20stacked%20mockup%20on%20marble%20surface%20premium%20print%20design%20showcase&width=600&height=400&seq=portfolio8&orientation=landscape',
    description: 'Luxe visitekaartjes met goudfolie en reliëf'
  },
  {
    id: 9,
    title: 'Webdesign Portfolio Site',
    category: 'Webdesign',
    image: 'https://readdy.ai/api/search-image?query=creative%20portfolio%20website%20design%20with%20bold%20typography%20and%20image%20gallery%20on%20desktop%20screen%20modern%20web%20design%20showcase%20clean%20interface&width=600&height=400&seq=portfolio9&orientation=landscape',
    description: 'Creatieve portfolio website voor fotograaf'
  },
  {
    id: 10,
    title: 'Reclame Social Media Content',
    category: 'Reclame',
    image: 'https://readdy.ai/api/search-image?query=social%20media%20content%20design%20with%20colorful%20posts%20and%20stories%20mockup%20on%20smartphone%20screens%20modern%20digital%20marketing%20materials%20showcase&width=600&height=400&seq=portfolio10&orientation=landscape',
    description: 'Consistente social media content voor 3 maanden'
  },
  {
    id: 11,
    title: 'Illustratie Bedrijfsmascotte',
    category: 'Illustratie',
    image: 'https://readdy.ai/api/search-image?query=friendly%20company%20mascot%20character%20illustration%20in%20various%20poses%20and%20expressions%20on%20white%20background%20professional%20character%20design%20showcase&width=600&height=400&seq=portfolio11&orientation=landscape',
    description: 'Karaktervolle mascotte voor bedrijfscommunicatie'
  },
  {
    id: 12,
    title: 'Opmaak Jaarverslag',
    category: 'Opmaak',
    image: 'https://readdy.ai/api/search-image?query=corporate%20annual%20report%20layout%20design%20with%20infographics%20and%20data%20visualization%20professional%20document%20mockup%20on%20desk%20clean%20business%20design&width=600&height=400&seq=portfolio12&orientation=landscape',
    description: 'Professioneel jaarverslag met infographics en data visualisatie'
  }
];

const categories = ['Alle', 'Huisstijl', 'Webdesign', 'Drukwerk', 'Reclame', 'Illustratie', 'Opmaak'];

export default function PortfolioContent() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['Dancing_Script'] text-5xl md:text-6xl mb-6 text-[#B3C843]">
            Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Een selectie van mijn recente projecten. Van huisstijl tot webdesign, elk project met passie en precisie uitgevoerd.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#B3C843] text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white/5 aspect-[3/2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-[#B3C843] text-black text-xs font-medium rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-white/5 text-[#B3C843] text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full bg-zinc-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-[#B3C843] text-black text-xs font-medium rounded-full mb-4">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl mb-6">
            Klaar voor jouw project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Laten we samen iets moois maken. Neem contact op voor een vrijblijvende offerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#B3C843] text-black font-semibold rounded-lg hover:bg-[#a0b53a] transition-all hover:shadow-lg hover:shadow-[#B3C843]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              Offerte aanvragen
            </a>
            <a
              href="tel:0031618661695"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}