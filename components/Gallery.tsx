import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop", // Student group
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2664&auto=format&fit=crop", // Classroom
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop", // Library/Quran
    "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2672&auto=format&fit=crop", // Studying
  ];

  return (
    <section id="facilities" className="py-20 bg-emerald-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-2">Galeri Kegiatan</h2>
              <h3 className="text-3xl font-serif font-bold text-slate-800">Suasana Belajar & Fasilitas</h3>
           </div>
           <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 mt-4 md:mt-0">Lihat Semua Galeri &rarr;</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative rounded-xl overflow-hidden group ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''} h-48 md:h-auto min-h-[200px]`}>
              <img 
                src={img} 
                alt="School Activity" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;