import React from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const Footer = ({t}) => {
  const socials = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Globe size={20} />, href: "#" },
  ];

  return (
    <footer className="w-full py-10 mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-8">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Copyright / Project Name */}
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          © 2026 SrijanVyom — {t?.creationSpace}, {t?.craftedBy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;