import React from 'react';
import { Calendar, CreditCard, FileText } from 'lucide-react';

const Admissions: React.FC = () => {
  const handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Terima kasih atas minat Anda!\n\nSaat ini sistem pendaftaran online sedang dalam pemeliharaan.\n\nSilakan gunakan fitur 'Tanya AI' di pojok kanan bawah untuk bantuan pendaftaran langsung atau kunjungi sekretariat kami.");
  };

  return (
    <section id="ppdb" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Bergabunglah Bersama Keluarga Besar Qurrata'ayun</h2>
            <p className="text-emerald-100 text-lg mb-10">
              Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 telah dibuka. Kuota terbatas!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <Calendar className="text-amber-400 mb-4 w-8 h-8" />
                <h4 className="font-bold text-lg mb-2">Gelombang 1</h4>
                <p className="text-sm text-emerald-100">1 Oktober - 31 Desember 2023</p>
                <p className="text-xs text-emerald-200 mt-2">*Diskon uang pangkal 20%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                 <FileText className="text-amber-400 mb-4 w-8 h-8" />
                 <h4 className="font-bold text-lg mb-2">Syarat Dokumen</h4>
                 <ul className="text-sm text-emerald-100 list-disc list-inside">
                   <li>NISN & Raport SD</li>
                   <li>Akte Kelahiran</li>
                   <li>Kartu Keluarga</li>
                   <li>Pas Foto 3x4</li>
                 </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <CreditCard className="text-amber-400 mb-4 w-8 h-8" />
                <h4 className="font-bold text-lg mb-2">Biaya</h4>
                <p className="text-sm text-emerald-100">Formulir: Rp 350.000</p>
                <p className="text-sm text-emerald-100 mt-1">Biaya Masuk: Hubungi Kami</p>
              </div>
            </div>

            <button 
              type="button"
              onClick={handleRegistration}
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-600 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Daftar Sekarang via Online
            </button>
            <p className="mt-4 text-sm text-emerald-300">Butuh bantuan? Gunakan fitur Tanya AI di pojok kanan bawah.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;