import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import SchoolAssistant from './components/SchoolAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Admissions />
      </main>
      <Footer />
      <SchoolAssistant />
    </div>
  );
};

export default App;
