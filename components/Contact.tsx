import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Map } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">SMPIT Qurrata'ayun</h3>
            <p className="text-gray-400 leading-relaxed">
              Mewujudkan pendidikan Islam yang berkualitas, modern, dan terjangkau untuk membangun generasi Rabbani yang unggul di Kalimantan Selatan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/smpit.qurrataayun.kdg/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={20} />
                <span>
                  Jl. Ahmad Yani, Kandangan Kota,<br/>
                  Kec. Kandangan, Kab. Hulu Sungai Selatan,<br/>
                  Kalimantan Selatan 71217
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span>+62 812-3456-7890 (Tata Usaha)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <span>info@smpitqurrataayun.sch.id</span>
              </div>
            </div>
          </div>

          {/* Location Link (No Iframe) */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Lokasi</h4>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 flex flex-col items-center text-center space-y-4">
              <div className="bg-gray-700 p-3 rounded-full">
                 <Map className="text-primary-500" size={32} />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Kunjungi Sekolah Kami</p>
                <p className="text-sm text-gray-400">Dapatkan petunjuk arah langsung ke lokasi sekolah.</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=SMPIT+Qurrata'ayun+Kandangan+67J7%2BMV5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors w-full"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SMPIT Qurrata'ayun Kandangan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;