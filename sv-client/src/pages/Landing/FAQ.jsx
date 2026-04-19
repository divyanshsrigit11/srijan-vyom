import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ t }) => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What is the Srijan Vyom vault?", a: "It is a dynamic portfolio and project management system designed to showcase development work while integrating powerful AI summarization tools." },
    { q: "How does the AI integration work?", a: "We utilize LangChain.js and the Gemini API. When you upload a project PDF, the backend extracts the text, sends it to Gemini for context, and returns a concise summary." },
    { q: "Do I need an account to view projects?", a: "Guests can view the landing page and basic layouts, but to access detailed project views, download source code, or chat with the AI, a free account is required." },
    { q: "Is the platform secure?", a: "Yes. Authentication is handled entirely by Clerk, and all data is securely stored on MongoDB Atlas with proper access control rules." },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-widest">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/10 pb-4">
            <button 
              className="w-full flex justify-between items-center py-4 text-left text-lg md:text-xl font-medium text-white hover:text-[#00ED64] transition-colors"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.q}
              {openIdx === idx ? <Minus className="text-[#00ED64]" /> : <Plus className="text-[#00ED64]" />}
            </button>
            {openIdx === idx && (
              <p className="text-gray-400 pb-4 leading-relaxed animate-in fade-in slide-in-from-top-2">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;