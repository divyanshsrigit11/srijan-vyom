import React from 'react';
import PublicLayout from '../../layouts/PublicLayout';

// Import all the new marketing sections you just created
import LandingHero from './LandingHero';
import TrustShield from './TrustShield';
import UseCases from './UseCases';
import Expertise from './Expertise';
import Promotions from './Promotions';
import FAQ from './FAQ';
import PublicFooter from '../../layouts/PublicFooter';

const LandingPage = ({ lang, setLang, t }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <PublicLayout lang={lang} setLang={setLang} t={t} />
      
      {/* This replaces the temporary placeholder text! */}
      <div className="pt-16"> {/* Offset for the fixed navbar */}
        <LandingHero t={t} />
        <TrustShield t={t} />
        <UseCases t={t} />
        <Expertise t={t} />
        <Promotions t={t} />
        <FAQ t={t} />
      </div>

      <PublicFooter lang={lang} setLang={setLang} t={t} />
    </div>
  );
};

export default LandingPage;