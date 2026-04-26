const testimonials = [
  {
    name: 'Ayşe Kaya',
    role: 'CEO',
    company: 'TechStart A.Ş.',
    initials: 'AK',
    gradient: 'from-orange-500 to-red-500',
    text: 'Famu Ajans sayesinde operasyonel maliyetlerimizi %40 düşürdük. Otomasyon süreçleri kusursuz çalışıyor, ekip son derece profesyonel.',
    photo: null,
  },
  {
    name: 'Mehmet Demir',
    role: 'Operasyon Müdürü',
    company: 'LogiPro Lojistik',
    initials: 'MD',
    gradient: 'from-yellow-500 to-orange-500',
    text: 'Entegrasyon projemiz zamanında ve bütçe dahilinde teslim edildi. Beklentilerimizin çok üzerinde bir sonuç elde ettik.',
    photo: null,
  },
  {
    name: 'Zeynep Şahin',
    role: 'Kurucu',
    company: 'DigitalFirst',
    initials: 'ZŞ',
    gradient: 'from-amber-400 to-orange-600',
    text: 'Web sitemiz yeniden tasarlandıktan sonra dönüşüm oranımız 3 katına çıktı. Tasarım kalitesi gerçekten etkileyici.',
    photo: null,
  },
  {
    name: 'Burak Yıldız',
    role: 'Pazarlama Direktörü',
    company: 'MarketHub',
    initials: 'BY',
    gradient: 'from-red-500 to-orange-400',
    text: 'Performans pazarlama kampanyalarımızda ROAS oranımızı 4x artırdılar. Verilere dayalı yaklaşımları fark yaratıyor.',
    photo: null,
  },
  {
    name: 'Selin Arslan',
    role: 'Genel Müdür',
    company: 'RetailMax',
    initials: 'SA',
    gradient: 'from-orange-400 to-yellow-400',
    text: 'E-ticaret altyapımızın tamamen yenilenmesi ile satışlarımız ilk ayda %65 arttı. Kesinlikle tavsiye ediyorum.',
    photo: null,
  },
  {
    name: 'Osman Çelik',
    role: 'CTO',
    company: 'FinTech Solutions',
    initials: 'OÇ',
    gradient: 'from-yellow-500 to-red-400',
    text: 'Güvenlik denetimi ve sistem entegrasyonu konusunda üst düzey bir hizmet aldık. Teknik ekibin bilgi seviyesi etkileyici.',
    photo: null,
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 mx-3 bg-white/[0.04] border border-white/8 hover:border-orange-500/25 rounded-2xl p-6 transition-all duration-300 group">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/65 text-sm leading-relaxed mb-6 line-clamp-4">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Photo or avatar */}
        {t.photo ? (
          <img
            src={t.photo}
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/30"
          />
        ) : (
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-black font-bold text-sm shrink-0 shadow-lg`}>
            {t.initials}
          </div>
        )}
        <div>
          <div className="text-white font-semibold text-sm group-hover:text-orange-300 transition-colors">{t.name}</div>
          <div className="text-white/40 text-xs">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

const row1 = [...testimonials, ...testimonials];
const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page header */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Referanslar
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            <span className="text-white">Müşterilerimiz </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Anlatıyor
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/50 leading-relaxed">
            Birlikte çalıştığımız işletmelerin deneyimleri ve elde ettikleri sonuçlar.
          </p>
        </div>
      </div>

      {/* Animated marquee strips */}
      <div className="marquee-wrapper pb-28 space-y-5 select-none overflow-hidden">
        {/* Row 1 — left */}
        <div className="overflow-hidden py-2">
          <div className="marquee-track">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="overflow-hidden py-2">
          <div className="marquee-track-reverse">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-white/5 bg-white/[0.02] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { val: '150+', label: 'Tamamlanan Proje' },
            { val: '98%', label: 'Müşteri Memnuniyeti' },
            { val: '3x',  label: 'Ortalama Verimlilik' },
            { val: '7/24', label: 'Teknik Destek' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                {s.val}
              </div>
              <div className="text-white/40 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
