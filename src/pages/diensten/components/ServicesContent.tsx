import { Link } from 'react-router-dom';

export default function ServicesContent() {
  const services = [
    {
      icon: 'ri-palette-line',
      title: 'Huisstijl',
      description: 'Een sterke visuele identiteit die jouw merk onderscheidt en herkenbaarheid creëert.',
      features: [
        'Logo ontwerp en varianten',
        'Kleurenpalet en typografie',
        'Huisstijlhandboek',
        'Visitekaartjes en briefpapier',
        'Digitale templates',
      ],
    },
    {
      icon: 'ri-printer-line',
      title: 'Drukwerk',
      description: 'Professioneel drukwerk dat indruk maakt, van visitekaartjes tot brochures.',
      features: [
        'Visitekaartjes',
        'Flyers en folders',
        'Brochures en catalogi',
        'Posters en banners',
        'Verpakkingsontwerp',
      ],
    },
    {
      icon: 'ri-computer-line',
      title: 'Webdesign',
      description: 'Moderne en gebruiksvriendelijke websites die jouw merk online tot leven brengen.',
      features: [
        'Responsive webdesign',
        'UI/UX ontwerp',
        'Landing pages',
        'Webshop design',
        'Social media graphics',
      ],
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Reclame',
      description: 'Opvallende reclame-uitingen die jouw boodschap effectief overbrengen.',
      features: [
        'Advertenties print en online',
        'Social media campagnes',
        'Banners en displays',
        'Promotiemateriaal',
        'Event branding',
      ],
    },
    {
      icon: 'ri-image-edit-line',
      title: 'Illustratie',
      description: 'Unieke illustraties en grafische elementen die jouw verhaal visueel vertellen.',
      features: [
        'Custom illustraties',
        'Iconen en pictogrammen',
        'Infographics',
        'Karakterontwerp',
        'Patroonontwerp',
      ],
    },
    {
      icon: 'ri-layout-line',
      title: 'Opmaak',
      description: 'Professionele opmaak voor al jouw publicaties en documenten.',
      features: [
        'Magazine en tijdschrift layout',
        'Boek opmaak',
        'Rapporten en whitepapers',
        'Presentaties',
        'Nieuwsbrieven',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Dancing_Script'] text-5xl md:text-6xl mb-6 text-white">
            Wat ik voor je kan betekenen
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Van complete huisstijlen tot specifieke ontwerpopdrachten. 
            Ontdek hoe ik jouw merk visueel kan versterken.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-[#B3C843] transition-all hover:shadow-lg hover:shadow-[#B3C843]/10"
              >
                <div className="w-14 h-14 bg-[#B3C843] rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-black`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                      <i className="ri-check-line text-[#B3C843] text-lg mt-0.5 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Hoe werkt het?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Kennismaking',
                description: 'We bespreken jouw wensen, doelen en budget.',
              },
              {
                step: '02',
                title: 'Offerte',
                description: 'Je ontvangt een duidelijke offerte met planning.',
              },
              {
                step: '03',
                title: 'Ontwerp',
                description: 'Ik ga aan de slag en houd je op de hoogte.',
              },
              {
                step: '04',
                title: 'Oplevering',
                description: 'Je ontvangt de bestanden en eventuele bronbestanden.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#B3C843] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Klaar om te starten?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Vraag een vrijblijvende offerte aan of neem contact op voor meer informatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-[#B3C843] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#a0b53a] transition-all hover:shadow-lg hover:shadow-[#B3C843]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Offerte aanvragen
            </Link>
            <a
              href="tel:0031618661695"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}