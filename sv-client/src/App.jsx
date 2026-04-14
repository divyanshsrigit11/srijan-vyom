import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import Footer from './sections/Footer';
import Widgets from './components/Widgets';
import React, { useState } from 'react';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'
  const t = translations[lang]; // shortcut for current language object

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <Hero t={t} />
      <ProjectGrid t={t} />
      <Footer t={t} />
      <Widgets t={t} />
    </main>
  );
}

export default App;