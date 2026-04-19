import React from 'react';
import { SignUpButton } from "@clerk/clerk-react";
import { ArrowRight, Database, Server, Code2 } from 'lucide-react';

const LandingHero = ({ t }) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left z-10">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          The Srijan Vyom <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ED64] to-blue-500">
            Developer Vault
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
          The most effective way to showcase projects. Enjoy unmatched AI summarization, secure file storage, and community connections while eliminating portfolio complexity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <SignUpButton mode="modal">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#00ED64] hover:bg-[#00ED64]/90 text-black font-bold rounded-lg transition-colors">
              {t?.getStarted || 'Get Started'}
            </button>
          </SignUpButton>
          <a href="#docs" className="w-full sm:w-auto px-8 py-3.5 text-white font-medium flex items-center justify-center gap-2 hover:text-[#00ED64] transition-colors">
            Explore Docs <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Right Graphic (Abstract Tech Illustration) */}
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="relative bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl grid grid-cols-2 gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
           <div className="bg-[#020617] h-32 rounded-2xl border border-white/5 flex items-center justify-center text-[#00ED64]"><Database size={40} /></div>
           <div className="bg-[#020617] h-32 rounded-2xl border border-white/5 flex items-center justify-center text-blue-400"><Code2 size={40} /></div>
           <div className="bg-[#020617] h-32 rounded-2xl border border-white/5 flex items-center justify-center text-purple-400 col-span-2"><Server size={40} /></div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;