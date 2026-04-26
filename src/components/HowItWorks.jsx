const steps = [
  {
    number: '01',
    title: 'Keşif & Analiz',
    desc: 'İş süreçlerinizi, hedeflerinizi ve mevcut altyapınızı derinlemesine analiz ediyoruz.',
  },
  {
    number: '02',
    title: 'Strateji & Tasarım',
    desc: 'Size özel otomasyon ve dijital dönüşüm yol haritası oluşturuyoruz.',
  },
  {
    number: '03',
    title: 'Geliştirme & Entegrasyon',
    desc: 'Çözümleri hızla hayata geçiriyor, mevcut sistemlerinizle entegre ediyoruz.',
  },
  {
    number: '04',
    title: 'Ölçüm & Optimizasyon',
    desc: 'Sonuçları sürekli izliyor, performansı artırmak için optimize ediyoruz.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-neutral-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Süreç</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 text-orange-100/60 max-w-2xl mx-auto text-lg">
            4 adımda iş süreçlerinizi dönüştürüyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-orange-500/40 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-black bg-gradient-to-br from-orange-500/20 to-transparent bg-clip-text text-transparent border border-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-orange-500/40 text-2xl font-bold">{s.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-orange-100/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
