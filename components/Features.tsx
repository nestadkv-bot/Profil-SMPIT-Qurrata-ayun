import React from 'react';
import { Book, Award, Users, Globe, Brain, Heart, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const programs = [
    {
      icon: <Book className="w-8 h-8 text-emerald-600" />,
      title: "Tahfidz Al-Qur'an",
      desc: "Program unggulan menghafal 5 Juz mutqin dengan metode yang menyenangkan dan efektif bagi remaja."
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-500" />,
      title: "Bilingual School",
      desc: "Pembiasaan bahasa Arab dan Inggris dalam lingkungan sekolah untuk mempersiapkan wawasan global."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "STEM & Robotik",
      desc: "Pengembangan nalar kritis melalui klub sains dan teknologi modern serta kompetisi robotik nasional."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Bina Pribadi Islam",
      desc: "Mentoring pekanan untuk membentuk karakter siswa yang beradab dan berkepribadian Islami."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-2">Program Unggulan</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Mencetak Generasi Unggul</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prog.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{prog.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {prog.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Split Section (Mapped as About Us) */}
        <div id="about" className="mt-24 bg-emerald-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row scroll-mt-24">
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2670&auto=format&fit=crop" 
               alt="Library and study environment"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Kenapa Memilih SMPIT Qurrata'ayun?</h3>
            <div className="space-y-4">
              {[
                "Kurikulum Terpadu (Nasional & Islam)",
                "Tenaga Pendidik Profesional & Hafidz Qur'an",
                "Lingkungan Sekolah yang Aman & Islami",
                "Ekstrakurikuler Beragam & Berprestasi"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-emerald-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;