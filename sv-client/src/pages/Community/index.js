import React from 'react';
import { MessageSquare } from 'lucide-react';

const CommunityChat = ({ t }) => {
  return (
    <div className="min-h-screen pt-24 px-6 flex flex-col items-center justify-center">
      <MessageSquare size={48} className="text-gray-600 mb-6" />
      <h1 className="text-3xl font-bold text-white mb-2">{t?.communityChat || 'Community Chat'}</h1>
      <p className="text-gray-400">
        Connect with other developers. This feature is currently under construction for Day 5.
      </p>
    </div>
  );
};

export default CommunityChat;