const GREEN = '#B3C843';

const SERVICES = [
  {
    icon: 'ri-palette-line',
    title: 'Huisstijl',
    description: 'Een sterke visuele identiteit die jouw merk onderscheidt.',
  },
  {
    icon: 'ri-printer-line',
    title: 'Drukwerk',
    description: 'Van visitekaartjes tot brochures — professioneel en opvallend.',
  },
  {
    icon: 'ri-global-line',
    title: 'Webdesign',
    description: 'Moderne websites die jouw verhaal vertellen.',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Reclame',
    description: 'Opvallende campagnes die je doelgroep bereiken.',
  },
];

export default function ServicesPreview() {
  const handleNavigate = () => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE('/diensten');
    }
  };

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Wat ik voor je kan betekenen
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Professionele grafische diensten voor jouw merk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${GREEN}20` }}
              >
                <i className={`${service.icon} text-2xl`} style={{ color: GREEN }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
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
            Bekijk alle diensten
          </button>
        </div>
      </div>
    </section>
  );
}