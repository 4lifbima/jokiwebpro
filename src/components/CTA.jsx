import React from 'react';
import { Smartphone } from 'lucide-react';

const CTA = ({ isDark, handleWhatsApp }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden relative">
        <div className={`absolute inset-0 ${isDark ? 'bg-[#1a1a1a]' : 'bg-slate-900'}`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20"></div>
        
        <div className="relative z-10 py-16 px-8 md:px-16 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
            Siap Mengerjakan Web Impianmu Hari Ini?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Konsultasi gratis, tanpa komitmen. Diskusikan ide atau kebutuhan tugasmu sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2">
              <Smartphone size={20} />
              Chat via WhatsApp
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/10">
              Lihat Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
