import React from 'react';
import { Code, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const SearchLine = ({ isDark }) => (
  <div className={`w-1/2 h-1 rounded ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>
);

const Hero = ({ isDark, stats, handleWhatsApp }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Hero Content */}
        <div className="relative z-10 space-y-8">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${isDark ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Available for New Projects
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Web Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600">
              Premium & Cepat.
            </span>
          </h1>
          
          <p className={`text-lg max-w-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Jasa pembuatan website profesional, tugas kuliah IT, hingga sistem skripsi kompleks. Code rapi, performa tinggi, dan jaminan revisi sampai tuntas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleWhatsApp} className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group">
              Mulai Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={handleWhatsApp} className={`px-8 py-4 rounded-xl font-semibold border transition-all flex items-center justify-center gap-2 ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-gray-200 hover:bg-gray-100 text-slate-800'}`}>
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </button>
          </div>
        </div>

        {/* Hero Visual - 3D CSS Dashboard */}
        <div className="relative z-10 lg:h-[600px] flex items-center justify-center perspective-1000">
          {/* The 3D Container */}
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto h-full transition-transform duration-700 hover:scale-[1.02]" style={{ transform: 'rotateY(-12deg) rotateX(5deg)' }}>
            
            {/* Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-3xl rounded-full"></div>

            {/* Main Window - The "Editor" */}
            <div className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border shadow-2xl transition-colors ${isDark ? 'bg-[#151515] border-white/10 shadow-black/50' : 'bg-white border-gray-200 shadow-xl'}`}>
              
              {/* Window Header */}
              <div className={`h-10 px-4 flex items-center gap-2 border-b ${isDark ? 'bg-[#1a1a1a] border-white/5' : 'bg-gray-100 border-gray-200'}`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className={`ml-4 text-xs font-mono opacity-50 ${isDark ? 'text-white' : 'text-black'}`}>project-final-build.tsx</div>
              </div>

              {/* Window Content Split */}
              <div className="flex h-full">
                {/* Sidebar */}
                <div className={`w-16 border-r flex flex-col items-center py-4 gap-4 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                  <Code className="w-5 h-5 text-amber-500 opacity-80" />
                  <SearchLine isDark={isDark} />
                  <SearchLine isDark={isDark} />
                </div>
                
                {/* Code Area */}
                <div className="flex-1 p-6 font-mono text-xs space-y-2 opacity-80">
                  <div className="flex gap-2">
                    <span className="text-purple-400">import</span>
                    <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>React</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400">'react'</span>;
                  </div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-blue-400">const</span>
                    <span className="text-yellow-400">App</span>
                    <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>= () =&gt; {'{'}</span>
                  </div>
                  <div className="pl-4 flex gap-2">
                    <span className="text-purple-400">return</span>
                    <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>(</span>
                  </div>
                  <div className="pl-8 space-y-1">
                    <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded text-amber-500 w-3/4">
                      {'<PremiumHeader />'}
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded text-blue-400 w-full">
                      {'<HeroSection animate={true} />'}
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 p-3 rounded text-green-400 w-1/2">
                      {'<ServicesGrid />'}
                    </div>
                  </div>
                  <div className="pl-4">
                    <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>);</span>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Floating Element 1 - Status */}
              <div className={`absolute bottom-8 right-8 p-4 rounded-xl border shadow-lg flex items-center gap-3 animate-bounce-slow ${isDark ? 'bg-[#1a1a1a] border-green-500/30' : 'bg-white border-green-200'}`}>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Build Success</div>
                  <div className="text-[10px] text-gray-500">Deployed in 2.4s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
