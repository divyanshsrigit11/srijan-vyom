import React from 'react';
import { Globe, Github, Linkedin, Twitter } from 'lucide-react';

const PublicFooter = ({ lang, setLang, t }) => {
  return (
    <footer className="w-full bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">
                SV
              </div>
              <span className="text-white font-medium tracking-wide">Srijan Vyom</span>
            </div>
            
            {/* Language Selector matching MongoDB style */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Globe size={16} />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent border-none outline-none cursor-pointer appearance-none font-medium"
              >
                <option value="en" className="bg-[#020617]">English</option>
                <option value="hi" className="bg-[#020617]">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">About Developer</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Divyansh Srivastava</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Resume & CV</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub Profile</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a>
          </div>

          {/* Platform Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Platform</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Developer Vault</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AI Project Summarization</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Community Chat</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Data Connections</a>
          </div>

          {/* Tech Stack Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Tech Stack</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">MERN Architecture</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">LangChain.js & Gemini</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Golang Services</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">MongoDB Atlas</a>
          </div>

          {/* Legal / Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Support</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Admin</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Report an Issue</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Srijan Vyom. {t?.craftedBy || 'Crafted By Divyansh'}.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PublicFooter;