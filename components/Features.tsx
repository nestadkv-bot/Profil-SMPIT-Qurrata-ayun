import React from 'react';
import { Book, Heart, Users, Award, PenTool, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const programs = [
    {
      icon: <Book className="w-8 h-8 text-primary-600" />,
      title: "Tahfidz Al-Qur'an",
      description: "Program intensif menghafal Al-Qur'an dengan target hafalan minimal yang terukur dibimbing oleh asatidz bersanad."
    },
    {
      icon: <Award className="w-8 h-8 text-accent-600" />,
      title: "Akademik Unggul",
      description: "Kurikulum Nasional dipadukan dengan kurikulum JSIT untuk mencetak siswa berprestasi dalam sains dan teknologi."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Bina Pribadi Islam",
      description: "Pembinaan karakter (Akhlaq) yang intensif melalui mentoring pekanan dan pembiasaan ibadah harian."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Bahasa Asing",
      description: "Pengembangan kemampuan Bahasa Arab dan Bahasa Inggris aktif melalui hari berbahasa (Language Day)."
    },
    {
      icon: <PenTool className="w-8 h-8 text-purple-500" />,
      title: "Ekstrakurikuler",
      description: "Beragam ekskul pilihan: Panahan, Futsal, Pramuka SIT, KIR, dan Cooking Class untuk mengembangkan bakat."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Parenting School",
      description: "Sinergi antara sekolah dan orang tua melalui seminar parenting berkala untuk menyelaraskan pola asuh."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Program Unggulan</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Membangun Karakter, <br/>Mengukir Prestasi
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Kami menyediakan lingkungan belajar yang holistik untuk mendukung tumbuh kembang anak secara spiritual, intelektual, dan sosial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start"
            >
              <div className="p-3 bg-gray-50 rounded-lg mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;