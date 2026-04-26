import { useState } from 'react';

const contactInfo = [
  { icon: '✉', label: 'E-posta', value: 'info@famuajans.com' },
  { icon: '☎', label: 'Telefon', value: '+90 (532) 000 00 00' },
  { icon: '⌖', label: 'Adres', value: 'İstanbul, Türkiye' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle  = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit  = (e) => {
    e.preventDefault();
    // TODO: backend / e-posta servisine bağlayın
    setSent(true);
    setForm({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Page header */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-orange-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            İletişim
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            <span className="text-white">Projenizi </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Konuşalım
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/50 leading-relaxed">
            İşletmenize özel çözüm için ücretsiz danışmanlık görüşmesi ayarlayalım.
          </p>
        </div>
      </div>

      {/* Split layout */}
      <div className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Left — info panel */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Neden Famu Ajans?</h2>
            <p className="text-white/50 leading-relaxed text-sm">
              İlk görüşmeden itibaren projenize özgün bir yaklaşım geliştiriyor, şeffaf iletişim ve zamanında teslimat garantisi sunuyoruz.
            </p>
          </div>

          {/* Contact items */}
          <div className="space-y-4">
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/6 bg-white/[0.03]"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-base shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs font-medium mb-0.5">{c.label}</div>
                  <div className="text-white text-sm font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="space-y-3">
            {[
              'Ücretsiz ilk danışmanlık görüşmesi',
              '48 saat içinde dönüş garantisi',
              'Gizlilik sözleşmesi imzalanır',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                <span className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-400 text-xs shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="text-center py-20 rounded-2xl border border-white/8 bg-white/[0.03]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-black text-2xl mx-auto mb-5">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Mesajınız Alındı!</h3>
              <p className="text-white/50 text-sm mb-6">En kısa sürede size dönüş yapacağız.</p>
              <button
                onClick={() => setSent(false)}
                className="px-6 py-2.5 border border-orange-500/30 text-orange-300 rounded-full text-sm hover:bg-orange-500/10 transition-colors"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="space-y-4 p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Ad Soyad" name="name" value={form.name} onChange={handle} placeholder="Ahmet Yılmaz" required />
                <Field label="E-posta" name="email" type="email" value={form.email} onChange={handle} placeholder="ahmet@sirket.com" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Şirket" name="company" value={form.company} onChange={handle} placeholder="Şirket adınız" />
                <Field label="Konu" name="subject" value={form.subject} onChange={handle} placeholder="Nasıl yardımcı olabiliriz?" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Mesajınız *</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-orange-500/40 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-black text-base tracking-tight hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
              >
                Mesaj Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
        {label} {required && '*'}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/10 focus:border-orange-500/40 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-colors"
      />
    </div>
  );
}
