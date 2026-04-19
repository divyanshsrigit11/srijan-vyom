import React from 'react';
import { LayoutDashboard, MessageSquare, BookOpen, ShoppingCart, Sparkles, ShieldAlert } from 'lucide-react';

const VaultFooter = ({ t }) => {
  return (
    <footer className="w-full bg-[#0a0f1c] border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-black text-xs">SV</div>
              <span className="text-white font-medium tracking-wide">Srijan Vyom</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your secure developer vault. Manage projects, collaborate, and leverage AI summarization in one place.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">Quick Actions</h4>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <LayoutDashboard size={14} /> Submit New Project
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#00ED64] transition-colors text-sm">
              <ShoppingCart size={14} /> Order Custom Project
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
              <Sparkles size={14} /> Ask Srijan AI
            </a>
          </div>

          {/* Network & Community */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">Network</h4>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <MessageSquare size={14} /> {t?.communityChat || 'Community Chat'}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">My Connections</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Admin Broadcasts</a>
          </div>

          {/* Platform Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">Support</h4>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <BookOpen size={14} /> {t?.docs || 'Documentation'}
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm">
              <ShieldAlert size={14} /> Report an Issue
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            {t?.creationSpace || 'CREATION SPACE'} © 2026 Srijan Vyom
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Secured by Clerk</span>
            <span>•</span>
            <span>MongoDB Atlas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default VaultFooter;