
const GREEN = '#B3C843';

export default function SocialProof() {
  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Vertrouwd door professionals
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Jarenlange samenwerking met projectontwikkelaars en bouwbedrijven
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center transition-all duration-300"
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}80`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
          >
            <div className="text-5xl font-bold mb-2" style={{ color: GREEN }}>27+</div>
            <p className="text-gray-300">Jaar ervaring</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-5xl font-bold text-cyan-400 mb-2">100+</div>
            <p className="text-gray-300">Projecten afgerond</p>
          </div>

          <div
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center transition-all duration-300"
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}80`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
          >
            <div className="text-5xl font-bold mb-2" style={{ color: GREEN }}>1-op-1</div>
            <p className="text-gray-300">Persoonlijk contact</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Klantreviews</h3>
          <p className="text-center text-gray-400 italic">Nog invullen</p>
        </div>
      </div>
    </section>
  );
}
