import React from 'react';
import VaultNavbar from '../../layouts/VaultNavbar';
import WelcomeHero from './WelcomeHero';
import ProjectGrid from './ProjectGrid';
import Widgets from '../../components/Widgets';
import VaultFooter from '../../layouts/VaultFooter';

const VaultDashboard = ({ lang, setLang, t }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <VaultNavbar lang={lang} setLang={setLang} t={t} />
      
      <WelcomeHero t={t} />
      <ProjectGrid t={t} />
      
      <VaultFooter t={t} />
      <Widgets t={t} />
    </div>
  );
};

export default VaultDashboard;