import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-grid pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold">
              <Star size={16} className="fill-current" />
              <span>Penerimaan Peserta Didik Baru Telah Dibuka</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif">
              Mewujudkan Generasi <span className="text-primary-600">Qur'ani</span> yang Cerdas & Berkarakter
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              SMPIT Qurrata'ayun Kandangan memadukan kurikulum nasional dan nilai-nilai Islam untuk membentuk pemimpin masa depan yang berakhlak mulia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all duration-200 transform hover:-translate-y-1"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a 
                href="#programs" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                Lihat Program
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200 flex justify-center lg:justify-start gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Tahun Pengabdian</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Alumni Hafidz</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">A</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Akreditasi</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
               {/* Using a placeholder that represents students/education */}
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Siswa SMPIT Qurrata'ayun Belajar" 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Kegiatan Belajar Mengajar</p>
                <p className="text-sm text-gray-200">Suasana kelas yang interaktif dan islami</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-accent-100 p-2 rounded-lg text-accent-600">
                  <Star size={24} className="fill-current" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tahfidz Al-Qur'an</p>
                  <p className="text-xs text-gray-500">Program Unggulan Sekolah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;