const year = new Date().getFullYear();

export default function Footer({ navigate }) {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <button
          onClick={() => navigate('home')}
          className="text-xl font-black tracking-tight"
        >
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Famu</span>
          <span className="text-white/60"> Ajans</span>
        </button>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/35">
          {[
            { label: 'Hizmetler',  page: 'services' },
            { label: 'Referanslar', page: 'testimonials' },
            { label: 'İletişim',   page: 'contact' },
          ].map((l) => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className="hover:text-orange-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <p className="text-white/25 text-sm">
          &copy; {year} Famu Ajans ve Otomasyon
        </p>
      </div>
    </footer>
  );
}
