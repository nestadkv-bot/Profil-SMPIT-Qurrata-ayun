import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-emerald-950">
      {/* Background - Pure CSS & SVG (No External Images to fail loading) */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"></div>
        
        {/* Decorative Blurred Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Islamic Geometric Pattern Overlay (Inline SVG - Always loads) */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl text-white space-y-6 animate-fade-in-up">
          <div className="inline-block bg-amber-500/20 border border-amber-400/50 backdrop-blur-sm px-4 py-1 rounded-full text-amber-300 text-sm font-medium tracking-wide mb-2">
            Penerimaan Peserta Didik Baru 2024/2025 Dibuka
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Membangun Generasi <br />
            <span className="text-amber-400">Cerdas & Berakhlak</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
            SMPIT Qurrata'ayun memadukan kurikulum nasional berkualitas dengan nilai-nilai Islam yang kokoh untuk mencetak pemimpin masa depan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('ppdb')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer"
            >
              Daftar Sekarang
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 rounded-lg font-semibold text-center transition-all cursor-pointer"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
          
          <div className="pt-12 flex gap-8 text-sm text-emerald-200/80 border-t border-white/10 mt-8">
            <div>
              <span className="block text-2xl font-bold text-white">500+</span>
              <span>Siswa Aktif</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">50+</span>
              <span>Guru Berdedikasi</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              <span>Lulusan Tahfidz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;