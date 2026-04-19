import React from 'react';
import { BrainCircuit, ArrowRight } from 'lucide-react';

const TrustShield = ({ t }) => {
  return (
    <section className="w-full bg-[#0a0f1c] border-y border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Graphic */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
            <div className="relative bg-[#0f172a] border border-white/10 p-12 rounded-[3rem] shadow-xl">
              <BrainCircuit size={120} className="text-[#00ED64]" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            AI Ready
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            As an AI aspirant, I engineered Srijan Vyom to enable seamless integration with modern AI technologies. Harness the power of LangChain.js and Gemini for intelligent PDF summarization and dynamic project insights. Effortlessly extract value from your data.
          </p>
          <a href="#ai-features" className="inline-flex items-center gap-2 text-[#00ED64] font-semibold hover:gap-4 transition-all">
            Build AI-powered apps <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrustShield;