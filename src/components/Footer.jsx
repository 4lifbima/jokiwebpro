import React from 'react';
import { CodeIcon, Smartphone, MessageCircle, Clock } from 'lucide-react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`pt-16 pb-8 border-t ${isDark ? 'bg-[#050505] border-white/5' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-black font-bold text-lg">
              <CodeIcon size={20} className={isDark ? 'text-white' : 'text-black'} />
             </div>
             <span className="font-bold text-xl">JokiWeb.pro</span>
          </div>
          <p className={`max-w-xs text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Partner terbaik untuk kebutuhan development website kamu. Professional, on-time, dan high quality code.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Term of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className={`space-y-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <li className="flex items-center gap-3">
              <Smartphone size={16} className="text-amber-500" />
              +62 822 9138 3797
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-amber-500" />
              alif67916@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-amber-500" />
              24/7 Support
            </li>
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 pt-8 border-t text-center text-xs ${isDark ? 'border-white/5 text-gray-600' : 'border-gray-100 text-gray-400'}`}>
        &copy; 2025 JokiWeb.pro. All rights reserved. Designed with precision.
      </div>
    </footer>
  );
};

export default Footer;
