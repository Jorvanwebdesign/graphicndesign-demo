const GREEN = '#B3C843';

export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Klaar om te starten?
        </h2>
        <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
          Neem contact op voor een vrijblijvend gesprek over jouw project.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-10 py-4 rounded-lg font-semibold text-base text-black transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm whitespace-nowrap cursor-pointer"
          style={{ backgroundColor: GREEN }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c8df4a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}
        >
          Offerte aanvragen
        </button>
      </div>
    </section>
  );
}