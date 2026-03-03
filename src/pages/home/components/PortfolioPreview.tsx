const GREEN = '#B3C843';

const PROJECTS = [
  {
    title: 'Huisstijl Nieuwbouwproject',
    category: 'Huisstijl',
    image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20brand%20identity%20design%20with%20clean%20logo%20business%20cards%20and%20stationery%20on%20white%20background%20professional%20corporate%20branding%20materials%20flat%20lay%20photography%20style&width=600&height=400&seq=gnd-portfolio-1&orientation=landscape',
  },
  {
    title: 'Drukwerk Brochure',
    category: 'Drukwerk',
    image: 'https://readdy.ai/api/search-image?query=elegant%20printed%20brochure%20design%20mockup%20with%20clean%20layout%20professional%20typography%20on%20white%20background%20modern%20marketing%20materials%20flat%20lay%20photography%20style&width=600&height=400&seq=gnd-portfolio-2&orientation=landscape',
  },
  {
    title: 'Website Design',
    category: 'Web',
    image: 'https://readdy.ai/api/search-image?query=modern%20website%20design%20mockup%20on%20laptop%20screen%20clean%20user%20interface%20professional%20web%20layout%20on%20white%20background%20minimalist%20digital%20design%20flat%20photography%20style&width=600&height=400&seq=gnd-portfolio-3&orientation=landscape',
  },
  {
    title: 'Reclamecampagne',
    category: 'Reclame',
    image: 'https://readdy.ai/api/search-image?query=creative%20advertising%20campaign%20design%20with%20billboard%20poster%20mockup%20professional%20marketing%20materials%20on%20white%20background%20modern%20promotional%20graphics%20flat%20photography%20style&width=600&height=400&seq=gnd-portfolio-4&orientation=landscape',
  },
  {
    title: 'Logo Ontwerp',
    category: 'Huisstijl',
    image: 'https://readdy.ai/api/search-image?query=professional%20logo%20design%20presentation%20with%20multiple%20variations%20clean%20brand%20mark%20on%20white%20background%20modern%20corporate%20identity%20flat%20lay%20photography%20style&width=600&height=400&seq=gnd-portfolio-5&orientation=landscape',
  },
  {
    title: 'Verpakking Design',
    category: 'Drukwerk',
    image: 'https://readdy.ai/api/search-image?query=elegant%20product%20packaging%20design%20mockup%20with%20clean%20labels%20professional%20box%20design%20on%20white%20background%20modern%20branding%20materials%20flat%20photography%20style&width=600&height=400&seq=gnd-portfolio-6&orientation=landscape',
  },
];

export default function PortfolioPreview() {
  const handleNavigate = () => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE('/portfolio');
    }
  };

  return (
    <section id="portfolio-preview" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Recent werk
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Een selectie van mijn projecten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-zinc-900 cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: GREEN }}
                >
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleNavigate}
            className="px-8 py-3 rounded-lg font-semibold text-sm text-black transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: GREEN }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c8df4a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}
          >
            Bekijk volledig portfolio
          </button>
        </div>
      </div>
    </section>
  );
}