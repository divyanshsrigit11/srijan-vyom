import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, ShoppingCart, Send, User, Bot } from 'lucide-react';

const Widgets = ({ t }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi Divyansh! How can I help you with your projects today?' }
  ]);
  const scrollRef = useRef(null);

  // auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // add user message
    const userMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    //  simulate bot reply
    setTimeout(() => {
      let botResponse = "That sounds interesting! I'm still learning about Srijan-Vyom, but I can tell you that Divyansh is a great developer.";
      
      // basic keyword logic
      if (inputValue.toLowerCase().includes('spellbound')) {
        botResponse = "SpellBound is a SaaS app that uses the Clipdrop API and React for background removal!";
      } else if (inputValue.toLowerCase().includes('panchayat')) {
        botResponse = "Panchayat Khabar is a news portal built with the .NET stack for local news reporting.";
      }

      setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-[100]">
      
      {/* Order Button */}
      <button 
        onClick={() => alert("🚀 'Order a Project' feature is Upcoming!")}
        className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-bold shadow-xl hover:bg-blue-50 transition-all active:scale-95 border border-white/20"
      >
        <ShoppingCart size={18} />
        <span>{t?.order}</span>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="w-85 bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <h4 className="font-semibold">{t?.chatTitle}</h4>
            </div>
            <X size={20} className="text-white/70 cursor-pointer hover:text-white" onClick={() => setIsChatOpen(false)} />
          </div>
          
          {/* Message Area */}
          <div ref={scrollRef} className="h-72 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-hide bg-[#020617]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#0f172a] flex gap-2 border-t border-white/5">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about a project..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button type="submit" className="p-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-colors">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${isChatOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600 hover:scale-110 shadow-blue-500/20'} text-white`}
      >
        {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default Widgets;