import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Skeleton Loading Component
const PortfolioSkeleton = ({ isDark }) => (
  <div
    className={`rounded-2xl overflow-hidden animate-pulse ${
      isDark ? 'bg-white/5' : 'bg-white/30'
    }`}
  >
    <div className={`h-80 ${isDark ? 'bg-white/10' : 'bg-white/20'}`}></div>
  </div>
);

const PortfolioAll = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  // Scroll to top dan loading effect
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter portfolio items
  const filteredPortfolio = portfolioData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Sticky Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${isDark ? 'bg-[#0a0a0a]/95 border-white/10' : 'bg-gray-50/95 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <Link
            to="/#portfolio"
            className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 ${
              isDark ? 'text-amber-500 hover:text-amber-400' : 'text-amber-600 hover:text-amber-500'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
          <h1 className="text-2xl font-bold">Semua Portfolio</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10' : 'bg-gradient-to-br from-amber-400/20 to-orange-400/20'}`}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Koleksi <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Portfolio</span> Lengkap
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Jelajahi semua project yang telah kami selesaikan untuk klien-klien terkemuka dengan hasil maksimal dan kepuasan tinggi.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className={`relative flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? 'bg-white/10 border border-white/20 focus-within:border-amber-500/50 focus-within:bg-white/15'
                : 'bg-white/40 border border-white/30 focus-within:border-amber-400/50 focus-within:bg-white/60'
            }`}>
              <Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <input
                type="text"
                placeholder="Cari portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent outline-none ${isDark ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-gray-600'}`}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? isDark
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-400/50'
                    : isDark
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-white/40 text-slate-800 hover:bg-white/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Menampilkan {filteredPortfolio.length} dari {portfolioData.length} project
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        {isLoading ? (
          // Skeleton Loading
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <PortfolioSkeleton key={index} isDark={isDark} />
            ))}
          </div>
        ) : filteredPortfolio.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.slug}`}
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
                          ? 'bg-amber-500/20 text-amber-300 group-hover:bg-amber-500/40'
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
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, idx) => (
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
                      {item.tags.length > 3 && (
                        <span className={`text-xs px-2.5 py-1 rounded-lg backdrop-blur-sm ${
                          isDark ? 'bg-white/10 text-gray-200' : 'bg-white/30 text-slate-800'
                        }`}>
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">Tidak ada hasil ditemukan</h3>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Coba ubah filter atau cari dengan keyword yang berbeda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-500/50'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-400/50'
              }`}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className={`border-t ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white/40'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent`}>
                {portfolioData.length}+
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Project Selesai</p>
            </div>
            <div>
              <p className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent`}>
                100%
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Client Puas</p>
            </div>
            <div>
              <p className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent`}>
                5⭐
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Rating Rata-rata</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Punya project spesial?</h3>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Tim kami siap membantu mewujudkan ide Anda menjadi kenyataan dengan solusi teknologi terkini.
        </p>
        <Link
          to="/"
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-400/50 hover:scale-105'
          }`}
        >
          Hubungi Kami Sekarang
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioAll;
