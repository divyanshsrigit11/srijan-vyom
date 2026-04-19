import React, { useState } from 'react';
import { Search, Bell, MessageSquare, Users, BookOpen, Globe, Settings } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";

const VaultNavbar = ({ lang, setLang, t }) => {
  const [showNotif, setShowNotif] = useState(false);
  const [notifTab, setNotifTab] = useState('connections'); // 'connections' or 'admin'

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: Logo & App Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black">SV</div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2 transition">
              <BookOpen size={16} /> {t?.docs || 'Docs'}
            </button>
            <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2 transition">
              <MessageSquare size={16} /> {t?.communityChat || 'Community Chat'}
            </button>
            <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2 transition">
              <Users size={16} /> {t?.connections || 'Connections'}
            </button>
          </div>
        </div>

        {/* RIGHT: Tools & Profile */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-sm text-gray-400">
             <Search size={14} />
             <input type="text" placeholder={`${t?.search || 'Search'}...`} className="bg-transparent outline-none w-32" />
          </div>

          {/* Language Switcher (Fixed) */}
          <div className="flex items-center gap-1 text-sm text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <Globe size={14} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white outline-none cursor-pointer pr-1"
            >
              <option value="en" className="bg-[#020617]">EN</option>
              <option value="hi" className="bg-[#020617]">HI</option>
            </select>
          </div>

          {/* Notification Bell & Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowNotif(!showNotif)}
              className={`relative p-1.5 rounded-full transition-colors ${showNotif ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
            >
               <Bell size={20} />
               <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border border-[#020617]"></span>
            </button>

            {/* The Notification Panel */}
            {showNotif && (
              <div className="absolute top-12 right-0 w-80 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2">
                {/* Tabs */}
                <div className="flex border-b border-white/10">
                  <button 
                    onClick={() => setNotifTab('connections')} 
                    className={`flex-1 py-3 text-xs tracking-wider uppercase font-bold transition-colors ${notifTab === 'connections' ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    Connections
                  </button>
                  <button 
                    onClick={() => setNotifTab('admin')} 
                    className={`flex-1 py-3 text-xs tracking-wider uppercase font-bold transition-colors ${notifTab === 'admin' ? 'bg-blue-600/10 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    Broadcasts
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-4 h-64 overflow-y-auto bg-[#020617]/50">
                  {notifTab === 'connections' ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-xs text-gray-400 text-center mt-10">No new connection activity.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <h4 className="text-sm font-bold text-blue-400 mb-1">System Update</h4>
                        <p className="text-xs text-gray-300 leading-relaxed">Welcome to Srijan Vyom! The AI summarizer is currently online.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-white/10 mx-1"></div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default VaultNavbar;