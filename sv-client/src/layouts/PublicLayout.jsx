import React from 'react';
import { Globe, Search, BookOpen, User, Menu } from 'lucide-react';
import { SignInButton, SignUpButton } from "@clerk/clerk-react";

const PublicLayout = ({ lang, setLang, t }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">SV</div>
            <span className="text-white font-medium tracking-wide">Srijan Vyom</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{t?.overview || 'Overview'}</a>
            <a href="#docs" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"><BookOpen size={16} /> {t?.docs || 'Docs'}</a>
            <a href="/about" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"><User size={16} /> {t?.aboutMe || 'About Me'}</a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Search size={18} />
            <span className="hidden lg:inline text-sm">{t?.search || 'Search'}</span>
          </button>

          <div className="relative group hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-gray-300 transition-all hover:bg-white/10">
            <Globe size={16} />
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent border-none outline-none cursor-pointer appearance-none pr-4 font-medium">
              <option value="en" className="bg-[#020617]">{t?.eng || 'English'}</option>
              <option value="hi" className="bg-[#020617]">{t?.hin || 'हिन्दी'}</option>
            </select>
            <span className="absolute right-2 pointer-events-none text-[10px] opacity-50">▼</span>
          </div>

          <div className="hidden md:block w-px h-5 bg-white/10"></div>

          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition-colors">{t?.signIn || 'Sign In'}</button>
            </SignInButton>
            <SignUpButton mode="modal" fallbackRedirectUrl="/">
              <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">{t?.getStarted || 'Get Started'}</button>
            </SignUpButton>
          </div>

          <button className="md:hidden text-gray-400 hover:text-white"><Menu size={24} /></button>
        </div>
      </div>
    </nav>
  );
};

export default PublicLayout;