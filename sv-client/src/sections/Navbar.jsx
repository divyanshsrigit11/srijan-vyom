import React from 'react';
import { Globe, Github, Linkedin, FileText } from 'lucide-react';

const Navbar = ({ lang, setLang, t }) => { // Receiving these from App.jsx
  const navLinks = [
    { name: 'Linkedin', icon: <Linkedin size={18} />, href: '#' },
    { name: 'Github', icon: <Github size={18} />, href: '#' },
    { name: 'Resume', icon: <FileText size={18} />, href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">
            SV
          </div>
          <span className="text-white font-medium tracking-wide">Srijan Vyom</span>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-8">
          
          {/* Active Language Switcher */}
          <div className="relative group hidden md:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-gray-300 transition-all hover:bg-white/10">
            <Globe size={16} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border-none outline-none cursor-pointer appearance-none pr-4"
            >
              <option value="en" className="bg-[#020617]">English</option>
              <option value="hi" className="bg-[#020617]">हिन्दी</option>
            </select>
            <span className="absolute right-2 pointer-events-none text-[10px] opacity-50">▼</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
              >
                {link.icon}
                {/* We translate the 'Resume' link if that's the name */}
                <span>{link.name === 'Resume' ? t?.resume : link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;