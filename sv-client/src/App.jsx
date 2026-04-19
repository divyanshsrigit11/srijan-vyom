import React, { useState } from 'react';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { translations } from './data/translations';

import LandingPage from './pages/Landing/index';
import VaultDashboard from './pages/Vault/index';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* GUEST VIEW: Marketing Site */}
      <SignedOut>
        <LandingPage lang={lang} setLang={setLang} t={t} />
      </SignedOut>

      {/* LOGGED-IN VIEW: The Actual Project Vault */}
      <SignedIn>
        <VaultDashboard lang={lang} setLang={setLang} t={t} />
      </SignedIn>
    </main>
  );
}

export default App;