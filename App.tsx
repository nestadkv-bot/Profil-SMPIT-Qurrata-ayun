import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <div className="bg-primary-600 py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Mari Bergabung Bersama Keluarga Besar Kami</h2>
             <p className="text-xl mb-8 text-primary-100">Siapkan putra-putri Anda menjadi generasi penghafal Al-Qur'an yang cerdas dan berakhlak mulia.</p>
             <a 
               href="#contact"
               className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
             >
               Informasi PPDB
             </a>
          </div>
        </div>
        <Gallery />
      </main>
      <Contact />
      <AIAssistant />
    </div>
  );
}

export default App;