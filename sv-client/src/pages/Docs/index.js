import React from 'react';
import { BookOpen } from 'lucide-react';

const DocsPage = ({ t }) => {
  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white/5 rounded-full border border-white/10">
          <BookOpen size={40} className="text-blue-400" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">{t?.docs || 'Documentation'}</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Learn how to upload projects, connect with developers, and utilize the Gemini AI summarization tools. Content coming soon.
      </p>
    </div>
  );
};

export default DocsPage;