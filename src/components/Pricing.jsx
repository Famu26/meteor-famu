const plans = [
  {
    name: 'Starter',
    price: '4.990',
    period: '/ay',
    desc: 'Küçük işletmeler için ideal başlangıç paketi.',
    features: [
      '3 otomasyon süreci',
      '2 sistem entegrasyonu',
      'Temel analitik paneli',
      'E-posta desteği',
      'Aylık 1 danışmanlık görüşmesi',
    ],
    cta: 'Başlayın',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '12.990',
    period: '/ay',
    desc: 'Büyüyen işletmeler için kapsamlı çözüm.',
    features: [
      'Sınırsız otomasyon süreci',
      '10 sistem entegrasyonu',
      'Gelişmiş analitik & raporlama',
      '7/24 öncelikli destek',
      'Haftalık danışmanlık görüşmesi',
      'Özel AI modelleri',
    ],
    cta: 'En Popüler',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Özel',
    period: '',
    desc: 'Kurumsal şirketler için özelleştirilmiş çözüm.',
    features: [
      "Her şey Pro'da dahil",
      'Sınırsız entegrasyon',
      'Yerinde kurulum & eğitim',
      'Özel SLA garantisi',
      'Dedicated hesap yöneticisi',
      'Kaynak kodu erişimi',
    ],
    cta: 'Teklif Alın',
    highlight: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="bg-neutral-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Fiyatlar</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Şeffaf Fiyatlandırma</h2>
          <p className="mt-4 text-orange-100/60 max-w-2xl mx-auto text-lg">
            Gizli ücret yok. İhtiyacınıza göre plan seçin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                p.highlight
                  ? 'border-orange-500/60 bg-gradient-to-b from-orange-500/15 to-orange-500/5 scale-105 shadow-2xl shadow-orange-500/10'
                  : 'border-orange-500/10 bg-orange-500/5 hover:border-orange-500/30'
              }`}
            >
              {p.highlight && (
                <div className="mb-4 inline-block px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  En Popüler
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-orange-100/60 text-sm mb-6">{p.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">{p.price === 'Özel' ? '' : '₺'}{p.price}</span>
                <span className="text-orange-100/50 text-sm">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-orange-100/70 text-sm">
                    <span className="text-orange-400 mt-0.5 shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                  p.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:shadow-lg hover:shadow-orange-500/30'
                    : 'border border-orange-500/30 text-orange-300 hover:bg-orange-500/10'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
