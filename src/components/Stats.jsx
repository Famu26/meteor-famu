const stats = [
  { value: '150+', label: 'Başarılı Proje' },
  { value: '98%', label: 'Müşteri Memnuniyeti' },
  { value: '3x', label: 'Ortalama Verimlilik Artışı' },
  { value: '7/24', label: 'Teknik Destek' },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-yellow-500 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl font-black text-black mb-2">{s.value}</div>
            <div className="text-black/70 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
