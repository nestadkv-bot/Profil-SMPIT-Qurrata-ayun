import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const navItems = [
  { label: 'Beranda', id: 'home' },
  { label: 'Tentang Kami', id: 'about' },
  { label: 'Program', id: 'programs' },
  { label: 'Fasilitas', id: 'facilities' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="bg-emerald-700 text-white p-2 rounded-lg group-hover:bg-emerald-600 transition-colors">
            <BookOpen size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              SMPIT Qurrata'ayun
            </span>
            <span className={`text-xs ${scrolled ? 'text-emerald-600' : 'text-emerald-100'}`}>
              Sekolah Islam Terpadu
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium text-sm hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer focus:outline-none ${
                scrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('ppdb')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Daftar PPDB
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
             <X size={28} className={scrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
             <Menu size={28} className={scrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 font-medium hover:text-emerald-600 text-left py-2 border-b border-slate-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('ppdb')}
              className="bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors w-full"
            >
              Daftar PPDB Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;