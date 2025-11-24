import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Terima kasih! Anda telah terdaftar di newsletter kami.");
    e.currentTarget.reset(); 
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <h3 className="text-2xl font-serif font-bold text-white">SMPIT Qurrata'ayun</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Sekolah Islam Terpadu yang berkomitmen melahirkan generasi cerdas, mandiri, dan berakhlak mulia berlandaskan Al-Qur'an dan Sunnah.
             </p>
             <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                  <Youtube size={18} />
                </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">Tautan Cepat</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors bg-transparent border-none cursor-pointer p-0">Tentang Kami</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-emerald-400 transition-colors bg-transparent border-none cursor-pointer p-0">Program Unggulan</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('facilities')} className="hover:text-emerald-400 transition-colors bg-transparent border-none cursor-pointer p-0">Fasilitas</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ppdb')} className="hover:text-emerald-400 transition-colors bg-transparent border-none cursor-pointer p-0">Info PPDB</button>
              </li>
            </ul>
          </div>

           {/* Contact */}
           <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Jl. Ahmad Yani, Kandangan Kota, Kec. Kandangan, Kab. Hulu Sungai Selatan, Kalimantan Selatan 71217</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span>(0517) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span>info@smpitqurrataayun.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">Berlangganan</h4>
            <p className="text-slate-400 text-sm mb-4">Dapatkan informasi terbaru seputar sekolah.</p>
            <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                required
              />
              <button type="submit" className="bg-emerald-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SMPIT Qurrata'ayun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;