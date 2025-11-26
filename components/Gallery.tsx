import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://picsum.photos/400/300?random=10', title: 'Wisuda Tahfidz' },
    { url: 'https://picsum.photos/400/300?random=11', title: 'Kegiatan Pramuka' },
    { url: 'https://picsum.photos/400/300?random=12', title: 'Laboratorium Komputer' },
    { url: 'https://picsum.photos/400/300?random=13', title: 'Sholat Dhuha Bersama' },
    { url: 'https://picsum.photos/400/300?random=14', title: 'Panahan' },
    { url: 'https://picsum.photos/400/300?random=15', title: 'Kunjungan Edukatif' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Galeri Aktivitas</h2>
            <p className="mt-2 text-gray-600">Dokumentasi kegiatan siswa SMPIT Qurrata'ayun</p>
          </div>
          <a href="https://www.instagram.com/smpit.qurrataayun.kdg/" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 text-primary-600 font-medium hover:text-primary-700 flex items-center">
            Lihat Instagram
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/3] cursor-pointer">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;