import { useState, useEffect } from 'react';

const links = [
  { label: 'Hizmetler',  page: 'services' },
  { label: 'Referanslar', page: 'testimonials' },
  { label: 'İletişim',   page: 'contact' },
];

export default function Navbar({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p) => { navigate(p); setOpen(false); };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || page !== 'home'
          ? 'bg-black/90 backdrop-blur-md border-b border-orange-500/20 py-2'
          : 'bg-gradient-to-b from-black/70 to-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center">
          <img
            src="/famu-logo.svg"
            alt="FAMU Ajans"
            className="h-14 w-auto object-contain"
            style={{ maxWidth: '180px' }}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`relative text-sm font-semibold tracking-wide uppercase transition-colors duration-200 group ${
                page === l.page ? 'text-orange-400' : 'text-white/80 hover:text-orange-300'
              }`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 ${
                page === l.page ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={() => go('contact')}
          className="hidden md:block px-5 py-2.5 rounded-full text-sm font-bold text-white tracking-wide transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(234,88,12,0.85), rgba(202,138,4,0.85))',
            boxShadow: '0 0 18px 4px rgba(234,88,12,0.45), 0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          Daha fazla bilgi için bizi arayın
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-orange-400 p-2 flex flex-col gap-1.5"
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/97 backdrop-blur-md border-t border-orange-500/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`text-left text-base font-semibold uppercase tracking-wide transition-colors ${
                page === l.page ? 'text-orange-400' : 'text-white/80 hover:text-orange-300'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="mt-2 px-6 py-3 rounded-full font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(234,88,12,0.9), rgba(202,138,4,0.9))',
              boxShadow: '0 0 18px 4px rgba(234,88,12,0.4)',
            }}
          >
            Daha fazla bilgi için bizi arayın
          </button>
        </div>
      )}
    </nav>
  );
}
