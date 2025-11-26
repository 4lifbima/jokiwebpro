import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Portfolio = ({ isDark }) => {
  const portfolioItems = portfolioData.slice(0, 4);

  return (
    <section id="portfolio" className={`py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
            <span className={`text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
              Karya Terbaik Kami
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Portfolio <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Eksklusif</span>
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Koleksi project premium yang telah kami kerjakan untuk klien-klien terkemuka dengan standar kualitas tertinggi.
              </p>
            </div>
            
            <div className={`p-6 rounded-2xl backdrop-blur-sm ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Award Winning
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    Semua project dioptimalkan untuk performa, UX, dan ROI maksimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isDark ? 'hover:shadow-2xl hover:shadow-amber-500/20' : 'hover:shadow-2xl hover:shadow-amber-400/30'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay with smooth gradient */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent group-hover:from-[#0a0a0a]/80 group-hover:via-[#0a0a0a]/40'
                  : 'bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-white/90 group-hover:via-white/40'
              }`}></div>

              {/* Border shine effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                isDark ? 'border border-white/10 group-hover:border-amber-500/50' : 'border border-white/20 group-hover:border-amber-400/50'
              }`}></div>

              {/* Content */}
              <div className={`relative h-80 p-6 flex flex-col justify-between transition-all duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                      isDark
                        ? 'bg-amber-600/20 text-slate-800 group-hover:bg-amber-500/40'
                        : 'bg-amber-400/30 text-amber-700 group-hover:bg-amber-400/50'
                    }`}>
                      {item.category}
                    </span>
                    <div className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? 'bg-white/10 group-hover:bg-amber-500/50'
                        : 'bg-white/20 group-hover:bg-amber-400/50'
                    }`}>
                      <ArrowRight className={`w-5 h-5 transform transition-all duration-300 ${isDark ? 'text-white group-hover:text-white' : 'text-slate-900 group-hover:text-white'} group-hover:translate-x-1 group-hover:-translate-y-1`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom section */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2.5 py-1 rounded-lg backdrop-blur-sm transition-colors duration-300 ${
                          isDark
                            ? 'bg-white/10 text-gray-200 group-hover:bg-white/20'
                            : 'bg-white/30 text-slate-800 group-hover:bg-white/50'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons - visible on hover */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className={`flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/50'
                          : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-400/50'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Detail
                    </Link>
                    <a
                      href={item.github}
                      className={`px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-white/20 text-white hover:bg-white/30'
                          : 'bg-white/40 text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ingin melihat lebih banyak atau punya project spesial?
          </p>
          <Link to="/portfolio-all" className={`px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-400/50 hover:scale-105'
          }`}>
            Lihat Semua Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
