import { useShaderBackground } from '../hooks/useShaderBackground';

export default function Hero({ navigate }) {
  const canvasRef = useShaderBackground();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{ background: 'black' }}
      />

      {/* Bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-[1]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-fade-in-up delay-200">
            Famu Ajans
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up delay-400">
            ve Otomasyon
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto mt-8 text-xl md:text-2xl text-white/75 font-light leading-relaxed animate-fade-in-up delay-600">
            İşletmenize ve iş akışlarınıza özel Web Tasarımları ve Otomasyon Çözümleri
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 animate-fade-in-up delay-800">
            <button
              onClick={() => navigate('contact')}
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-black text-xl tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40"
            >
              Ücretsiz Başlayın
            </button>
            <button
              onClick={() => navigate('services')}
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border-2 border-orange-400/40 hover:border-orange-400/80 text-orange-100 rounded-full font-black text-xl tracking-tight transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Özellikleri Keşfedin
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-7 h-11 border-2 border-orange-400/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-orange-400/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
