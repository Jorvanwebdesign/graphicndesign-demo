
import { useEffect, useState, useRef } from 'react';

const TRUST_ITEMS = [
  { icon: 'ri-palette-line', label: 'Huisstijl' },
  { icon: 'ri-printer-line', label: 'Drukwerk' },
  { icon: 'ri-global-line', label: 'Web' },
  { icon: 'ri-megaphone-line', label: 'Reclame' },
];

const GREEN = '#B3C843';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Subtle drifting light sweep — desktop only, respects reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let tick = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gx = canvas.width / 2 + Math.sin(tick * 0.35) * canvas.width * 0.15;
      const gy = canvas.height / 2 + Math.cos(tick * 0.22) * canvas.height * 0.10;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, canvas.width * 0.50);
      grad.addColorStop(0, 'rgba(179,200,67,0.06)');
      grad.addColorStop(0.5, 'rgba(0,188,212,0.03)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gx2 = canvas.width / 2 + Math.cos(tick * 0.28 + 1.5) * canvas.width * 0.18;
      const gy2 = canvas.height / 2 + Math.sin(tick * 0.18 + 0.8) * canvas.height * 0.12;
      const grad2 = ctx.createRadialGradient(gx2, gy2, 0, gx2, gy2, canvas.width * 0.35);
      grad2.addColorStop(0, 'rgba(0,188,212,0.04)');
      grad2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      tick += 0.007;
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] md:h-[80vh] flex items-center justify-center px-4 overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://graphicndesign.nl/wp-content/uploads/2020/01/Achtergrond-GND-website-scaled.jpg)',
        }}
      />

      {/* Base dark overlay — slightly deeper for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/42 to-black/65" />

      {/* Radial spotlight behind logo — soft, not harsh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 42%, rgba(179,200,67,0.07) 0%, rgba(0,188,212,0.04) 45%, transparent 72%)',
        }}
      />

      {/* Film grain overlay — pure CSS, zero JS cost */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Animated canvas drift */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo — 10-15% smaller, positioned higher */}
        <div className="mb-6 flex justify-center">
          <div
            style={{
              filter:
                'drop-shadow(0 0 22px rgba(179,200,67,0.28)) drop-shadow(0 6px 28px rgba(0,0,0,0.65))',
            }}
          >
            <img
              src="https://graphicndesign.nl/wp-content/uploads/elementor/thumbs/LogoGND-vrijstaand-met-tekst-voor-zwarte-achtergrond-o100gkaavb5zi7lejz04rmtfwjvw8scjfyslp8en8o.png"
              alt="GraphicNDesign Logo"
              className="w-44 md:w-56 h-auto"
            />
          </div>
        </div>

        {/* Headline — handwritten, slightly smaller, clean spacing */}
        <h1
          className="text-3xl md:text-[2.6rem] mb-3 text-white drop-shadow-lg leading-snug"
          style={{
            fontFamily: 'Dancing Script, cursive',
            letterSpacing: '0.025em',
            lineHeight: 1.22,
          }}
        >
          Gevoel voor sfeer, oog voor detail
        </h1>

        {/* Subtext — compact, max-width, softer */}
        <p className="text-sm md:text-base text-white/80 mb-7 max-w-md mx-auto leading-relaxed drop-shadow-md">
          Professioneel grafisch ontwerp voor jouw merk. Van huisstijl tot complete
          nieuwbouwprojecten.
        </p>

        {/* CTA Buttons — identical height, padding, radius */}
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center mb-7 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 rounded-lg font-semibold text-sm text-black transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm whitespace-nowrap w-full sm:w-auto cursor-pointer"
            style={{ backgroundColor: GREEN, height: '46px' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c8df4a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}
          >
            Neem contact op
          </button>
          <button
            onClick={() => scrollToSection('portfolio-preview')}
            className="px-7 rounded-lg font-semibold text-sm text-white/85 bg-transparent transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm whitespace-nowrap w-full sm:w-auto cursor-pointer"
            style={{
              height: '46px',
              border: '1px solid rgba(255,255,255,0.45)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,188,212,0.75)';
              e.currentTarget.style.color = '#00BCD4';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
            }}
          >
            Bekijk portfolio
          </button>
        </div>

        {/* Trust bar — subtle divider above, softer text */}
        <div className="w-full">
          <div className="w-24 h-px mx-auto mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className={`${item.icon} text-sm`} style={{ color: GREEN }} />
                </span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}
                >
                  {item.label}
                </span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span className="hidden sm:inline text-white/20 ml-1.5 text-xs">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <i className="ri-arrow-down-line text-lg text-white" />
      </div>
    </section>
  );
}