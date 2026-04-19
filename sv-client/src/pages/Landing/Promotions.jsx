import React from 'react';
import { SignUpButton } from "@clerk/clerk-react";
import { Check } from 'lucide-react';

const Promotions = ({ t }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-[#022b1a] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center border border-[#00ED64]/20 relative">
        {/* Left Side */}
        <div className="flex-1 p-12 md:p-20 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get started with <br/> Srijan Vyom today
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-md">
            Get started in seconds. Securely log in to explore the complete feature set, interact with the AI, and connect with the community.
          </p>
          <div className="flex items-center gap-6">
            <SignUpButton mode="modal">
               <button className="px-8 py-3.5 bg-[#00ED64] hover:bg-[#00ED64]/90 text-black font-bold rounded-lg transition-colors">
                 Try Free
               </button>
            </SignUpButton>
            <a href="#contact" className="text-white hover:text-[#00ED64] font-semibold flex items-center gap-2 transition-colors">
              Contact Admin &gt;
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-[#001e12] h-full w-full p-12 md:p-20 relative z-10">
          <p className="text-[#00ED64] text-xs font-bold tracking-widest uppercase mb-8">Register today, start building:</p>
          <ul className="space-y-6">
            {['Secure Clerk Authentication', 'AI-powered project summarization', 'Direct GitHub and media integrations', 'Access to community connections'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-xl text-white font-medium">
                <Check className="text-[#00ED64]" size={28} /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Background graphic element */}
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[#00ED64] rounded-tl-full blur-[120px] opacity-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Promotions;