const GREEN = '#B3C843';

export default function Intro() {
  const handleNavigate = () => {
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE('/diensten');
    }
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Grafisch ontwerp met persoonlijk contact
        </h2>
        <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
          GraphicNDesign helpt je met professioneel grafisch ontwerp voor jouw merk. Van huisstijl en drukwerk tot webdesign en reclame-uitingen — altijd met korte lijnen en persoonlijke aandacht.
        </p>
        <button
          onClick={handleNavigate}
          className="px-8 py-3 rounded-lg font-semibold text-sm text-black transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm whitespace-nowrap cursor-pointer"
          style={{ backgroundColor: GREEN }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c8df4a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}
        >
          Wat ik voor je kan betekenen
        </button>
      </div>
    </section>
  );
}