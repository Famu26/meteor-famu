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
          ? 'bg-black/85 backdrop-blur-md border-b border-orange-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="text-xl font-black tracking-tight"
        >
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Famu
          </span>
          <span className="text-white/80"> Ajans</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`text-sm font-medium transition-colors duration-200 ${
                page === l.page
                  ? 'text-orange-400'
                  : 'text-white/60 hover:text-orange-300'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go('contact')}
          className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
        >
          İletişime Geç
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-orange-300 p-2 flex flex-col gap-1.5"
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/97 backdrop-blur-md border-t border-orange-500/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`text-left text-base font-medium transition-colors ${
                page === l.page ? 'text-orange-400' : 'text-white/70 hover:text-orange-300'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black rounded-full font-bold"
          >
            İletişime Geç
          </button>
        </div>
      )}
    </nav>
  );
}
