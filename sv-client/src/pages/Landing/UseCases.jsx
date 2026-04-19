import React from 'react';
import { Sparkles, Layout, Cpu } from 'lucide-react';

const UseCases = ({ t }) => {
  const cases = [
    {
      icon: <Sparkles size={32} className="text-purple-400" />,
      title: "AI & SaaS Applications",
      desc: "Deploy highly accurate, AI-driven solutions like SpellBound. Seamlessly integrate external APIs for advanced image processing and background removal.",
      tag: "ARTIFICIAL INTELLIGENCE"
    },
    {
      icon: <Layout size={32} className="text-blue-400" />,
      title: "Scalable Web Portals",
      desc: "Build robust administrative dashboards and dynamic news platforms like Panchayat Khabar using the robust .NET framework and MERN stack.",
      tag: "WEB DEVELOPMENT"
    },
    {
      icon: <Cpu size={32} className="text-[#00ED64]" />,
      title: "High-Concurrency Backends",
      desc: "Ensure always-on, rapid data delivery. Utilizing Golang to construct backend systems capable of handling massive parallel operations efficiently.",
      tag: "SYSTEMS ARCHITECTURE"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl font-bold text-white">Srijan Vyom use cases</h2>
        <a href="#all" className="hidden sm:flex items-center gap-2 text-[#00ED64] font-semibold hover:underline">
          View all use cases &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, idx) => (
          <div key={idx} className="bg-[#0f172a] border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-colors flex flex-col items-center text-center group">
            <div className="mb-8 p-4 bg-[#020617] rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">{item.icon}</div>
            <span className="text-[11px] font-bold tracking-widest text-[#00ED64] mb-4 bg-[#00ED64]/10 px-3 py-1 rounded-full">{item.tag}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;