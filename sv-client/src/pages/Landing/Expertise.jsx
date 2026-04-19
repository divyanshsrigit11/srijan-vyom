import React from 'react';
import { Terminal, Database, CodeSquare } from 'lucide-react';

const Expertise = ({ t }) => {
  return (
    <section className="w-full bg-[#0a0f1c] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Learning hub</h2>
          <p className="text-gray-400 text-lg">Quick and easy resources to understand the tech stack behind the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Terminal size={32} className="text-white mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Start with MERN</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Follow the foundational architecture used to build the responsive client and resilient Express server for this vault.</p>
            <a href="#guide" className="text-[#00ED64] font-semibold flex items-center gap-2">Access the guide &gt;</a>
          </div>
          <div>
            <Database size={32} className="text-[#00ED64] mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Boost your MongoDB skills</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Explore MongoDB Atlas fundamentals, from storing dynamic project references to managing Clerk authentication data.</p>
            <a href="#learn" className="text-[#00ED64] font-semibold flex items-center gap-2">Start learning &gt;</a>
          </div>
          <div>
            <CodeSquare size={32} className="text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Incorporate Go & .NET</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Learn how secondary technologies are integrated to handle specific high-performance tasks and administrative portals.</p>
            <a href="#whitepaper" className="text-[#00ED64] font-semibold flex items-center gap-2">Read the whitepaper &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;