const services = [
  {
    num: '01',
    title: 'Web Tasarımı',
    desc: 'Markanızı en iyi şekilde yansıtan, dönüşüm odaklı ve mobil uyumlu kurumsal web siteleri tasarlıyoruz.',
    tags: ['UI/UX Tasarım', 'Mobil Uyumlu', 'SEO Hazır'],
  },
  {
    num: '02',
    title: 'Yapay Zeka Otomasyonu',
    desc: 'Tekrarlayan iş süreçlerinizi AI destekli akıllı sistemlerle otomatikleştirin; zamandan ve maliyetten tasarruf edin.',
    tags: ['İş Akışı', 'AI Entegrasyonu', 'Ölçeklenebilir'],
  },
  {
    num: '03',
    title: 'Sistem Entegrasyonları',
    desc: 'CRM, ERP, e-ticaret ve SaaS platformlarınızı tek bir ekosistemde birleştirerek operasyonel bütünlük sağlıyoruz.',
    tags: ['API Entegrasyonu', 'CRM / ERP', 'Gerçek Zamanlı'],
  },
  {
    num: '04',
    title: 'Veri Analitiği',
    desc: 'Gerçek zamanlı raporlama ve görselleştirme araçlarıyla verilerinizi stratejik bir avantaja dönüştürün.',
    tags: ['Dashboard', 'Raporlama', 'BI Araçları'],
  },
  {
    num: '05',
    title: 'Dijital Dönüşüm',
    desc: 'İş süreçlerinizin uçtan uca dijitalleşmesi için kapsamlı strateji, yol haritası ve uygulama desteği sunuyoruz.',
    tags: ['Strateji', 'Danışmanlık', 'Süreç Tasarımı'],
  },
  {
    num: '06',
    title: 'Siber Güvenlik',
    desc: 'Kurumsal altyapınızı, verilerinizi ve dijital varlıklarınızı en güncel güvenlik protokolleriyle koruyoruz.',
    tags: ['Penetrasyon Testi', 'Güvenlik Denetimi', 'KVKK'],
  },
  {
    num: '07',
    title: 'Performans Pazarlama',
    desc: 'Doğru kitleye ulaşan, her lirası optimize edilmiş dijital reklam kampanyalarıyla ölçülebilir büyüme sağlıyoruz.',
    tags: ['Google Ads', 'Meta Ads', 'SEO / SEM'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page header */}
      <div className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Hizmetlerimiz
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            <span className="text-white">İşletmenizi </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Dönüştürün
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            Dijital dünyanın her alanında ihtiyacınız olan çözümleri tek çatı altında sunuyoruz.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card relative group bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-orange-500/30 rounded-2xl p-8 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Faded number watermark */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.04] select-none leading-none">
                {s.num}
              </span>

              {/* Top accent bar */}
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mb-7 group-hover:w-16 transition-all duration-400" />

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm mb-7">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-orange-500/8 text-orange-300/70 border border-orange-500/15 group-hover:border-orange-500/30 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="relative group border border-dashed border-orange-500/20 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-400 flex flex-col items-center justify-center text-center gap-4 cursor-pointer min-h-[220px]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform duration-300">
              +
            </div>
            <p className="text-white/40 group-hover:text-white/70 transition-colors text-sm font-medium">
              Özel ihtiyacınız mı var?<br />
              <span className="text-orange-400">Bize yazın</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
