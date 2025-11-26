import React from 'react';
import { Target, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
            <img 
              src="https://picsum.photos/600/800?random=2" 
              alt="Kegiatan Siswa SMPIT Qurrata'ayun" 
              className="relative rounded-3xl shadow-lg w-full object-cover h-[500px] z-10"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary-600 max-w-xs hidden sm:block">
              <p className="text-gray-600 italic font-medium">
                "Mendidik dengan Hati, Membina dengan Keteladanan"
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">Profil Sekolah</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif leading-tight">
                Membangun Generasi Emas Berlandaskan Al-Qur'an
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              SMPIT Qurrata'ayun Kandangan adalah lembaga pendidikan tingkat menengah pertama yang berkomitmen menyelenggarakan pendidikan integral berbasis nilai-nilai Islam. Kami memadukan kurikulum nasional dengan kurikulum khas Sekolah Islam Terpadu untuk melahirkan lulusan yang tidak hanya cerdas secara akademik, tetapi juga hafidz Qur'an dan berkarakter pemimpin.
            </p>

            <div className="space-y-6 mt-8">
              {/* Visi */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Compass size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Visi Kami</h4>
                  <p className="text-gray-600">
                    Mencetak generasi Qurani yang cerdas, mandiri, dan berakhlak mulia serta mampu bersaing di era global.
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Misi Utama</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1">
                    <li>Menyelenggarakan pendidikan tahfidz Al-Qur'an yang berkualitas.</li>
                    <li>Membangun budaya sekolah yang islami dan disiplin.</li>
                    <li>Mengembangkan potensi akademik dan minat bakat siswa.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;