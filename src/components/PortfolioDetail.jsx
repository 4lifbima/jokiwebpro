import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Users, Zap, TrendingUp, MessageCircle } from 'lucide-react';
import { getPortfolioBySlug, getAllPortfolioSlugs } from '../data/portfolio';

const PortfolioDetail = ({ isDark }) => {
  const { slug } = useParams();
  const portfolio = getPortfolioBySlug(slug);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [slug]);

  if (!portfolio) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>
        <div className="text-center z-10 relative">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Project yang Anda cari tidak ada.
          </p>
          <Link
            to="/#portfolio"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-500/50'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-400/50'
              }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Skeleton Loading Component
  if (isLoading) {
    return (
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>
        {/* Skeleton Navigation */}
        <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${isDark ? 'bg-[#0a0a0a]/95 border-white/10' : 'bg-gray-50/95 border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
            <div className={`h-6 w-24 rounded animate-pulse ${isDark ? 'bg-white/10' : 'bg-gray-300'}`}></div>
            <div className={`h-8 w-48 rounded animate-pulse ${isDark ? 'bg-white/10' : 'bg-gray-300'}`}></div>
            <div className={`h-8 w-20 rounded-full animate-pulse ${isDark ? 'bg-white/10' : 'bg-gray-300'}`}></div>
          </div>
        </nav>

        {/* Skeleton Hero Section */}
        <div className="relative overflow-hidden py-20 md:py-32">
          <div className={`absolute inset-0 animate-pulse ${isDark ? 'bg-white/5' : 'bg-gray-300'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/40 via-black/60 to-[#0a0a0a]' : 'from-white/40 via-white/60 to-white'}`}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className={`h-8 w-32 mb-6 rounded-full animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className={`h-16 w-3/4 mb-4 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className={`h-16 w-1/2 mb-8 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>

            <div className="flex flex-wrap gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-10 w-24 rounded-lg animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              ))}
            </div>

            <div className={`h-14 w-56 rounded-xl animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
          </div>
        </div>

        {/* Skeleton Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
          {/* Skeleton Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                <div className={`w-8 h-8 mb-3 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                <div className={`h-4 w-3/4 mb-2 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                <div className={`h-8 w-1/2 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              </div>
            ))}
          </div>

          {/* Skeleton Features Section */}
          <div className="mb-16">
            <div className={`h-10 w-48 mb-8 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                  <div className={`h-6 w-full rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skeleton Tech Stack Section */}
          <div className="mb-16">
            <div className={`h-10 w-40 mb-8 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                  <div className={`h-6 w-3/4 mb-4 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                  {[1, 2, 3].map((j) => (
                    <div key={j} className={`h-4 w-full mb-2 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Skeleton Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[1, 2].map((i) => (
              <div key={i}>
                <div className={`h-10 w-32 mb-6 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                      <div className={`h-6 w-full rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skeleton Results Section */}
          <div className="mb-16">
            <div className={`h-10 w-56 mb-8 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`p-6 rounded-2xl text-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                  <div className={`h-4 w-24 mx-auto mb-2 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                  <div className={`h-6 w-32 mx-auto rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skeleton Testimonial */}
          <div className={`p-8 md:p-12 rounded-2xl mb-16 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-8 h-8 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              <div className={`h-10 w-48 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            </div>
            <div className={`h-6 w-full mb-3 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-4/5 mb-6 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className={`h-5 w-40 mb-2 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
            <div className={`h-4 w-32 rounded animate-pulse ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
          </div>
        </div>
      </div>
    );
  }

  const allSlugs = getAllPortfolioSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const previousSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${isDark ? 'bg-[#0a0a0a]/95 border-white/10' : 'bg-gray-50/95 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <Link
            to="/#portfolio"
            className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 ${isDark ? 'text-amber-500 hover:text-amber-400' : 'text-amber-600 hover:text-amber-500'
              }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
          <div className={`text-sm px-4 py-2 rounded-full ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-400/30 text-amber-700'}`}>
            {portfolio.status}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/40 via-black/60 to-[#0a0a0a]' : 'from-white/40 via-white/60 to-white'}`}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-sm ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-400/30 text-amber-700'}`}>
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase">{portfolio.category}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {portfolio.title}
          </h1>

          <p className={`text-xl mb-8 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {portfolio.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {portfolio.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-all duration-300 ${isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-white/30 text-slate-900 hover:bg-white/50'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {portfolio.liveUrl && (
            <a
              href={portfolio.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${isDark
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:shadow-amber-400/50 hover:scale-105'
                }`}
            >
              <ExternalLink className="w-5 h-5" />
              Kunjungi Live Project
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <Calendar className={`w-8 h-8 mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
            <h3 className={`text-sm uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tahun Pengerjaan
            </h3>
            <p className="text-2xl font-bold">{portfolio.year}</p>
          </div>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <Users className={`w-8 h-8 mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
            <h3 className={`text-sm uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Klien
            </h3>
            <p className="text-lg font-bold">{portfolio.client}</p>
          </div>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <TrendingUp className={`w-8 h-8 mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
            <h3 className={`text-sm uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Budget
            </h3>
            <p className="text-lg font-bold">{portfolio.budget}</p>
          </div>

          <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <Zap className={`w-8 h-8 mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
            <h3 className={`text-sm uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Durasi
            </h3>
            <p className="text-lg font-bold">{portfolio.duration}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl flex items-start gap-3 transition-all duration-300 ${isDark
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                    : 'bg-white/40 hover:bg-white/60 border border-white/20'
                  }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isDark ? 'bg-amber-500/30 text-amber-400' : 'bg-amber-400/40 text-amber-600'}`}>
                  ✓
                </div>
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(portfolio.technologies).map(([category, techs]) => (
              <div
                key={category}
                className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}
              >
                <h3 className={`text-lg font-bold mb-4 capitalize ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {techs.map((tech, idx) => (
                    <li
                      key={idx}
                      className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tantangan</h2>
            <div className="space-y-4">
              {portfolio.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-400/10 border border-red-400/20'}`}
                >
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Solusi</h2>
            <div className="space-y-4">
              {portfolio.solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-400/10 border border-green-400/20'}`}
                >
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Hasil & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.results.map((result, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl text-center ${isDark ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20' : 'bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30'}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  Achievement
                </p>
                <p className={`text-lg font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className={`p-8 md:p-12 rounded-2xl mb-16 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
          <div className="flex items-start gap-4 mb-6">
            <MessageCircle className={`w-8 h-8 flex-shrink-0 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className="text-3xl font-bold">Testimoni Klien</h2>
          </div>
          <blockquote className={`text-xl italic mb-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            "{portfolio.testimonial.text}"
          </blockquote>
          <div>
            <p className="font-bold text-lg">{portfolio.testimonial.name}</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{portfolio.testimonial.position}</p>
          </div>
        </div>
      </div>

      {/* Navigation Between Portfolios */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousSlug ? (
            <Link
              to={`/portfolio/${previousSlug}`}
              className={`group p-6 rounded-2xl transition-all duration-300 ${isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50'
                  : 'bg-white/40 hover:bg-white/60 border border-white/20 hover:border-amber-400/50'
                }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <ArrowLeft className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
                <span className={`text-sm uppercase tracking-widest font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Project Sebelumnya
                </span>
              </div>
              <h3 className="text-xl font-bold">{getPortfolioBySlug(previousSlug).title}</h3>
            </Link>
          ) : (
            <div></div>
          )}

          {nextSlug ? (
            <Link
              to={`/portfolio/${nextSlug}`}
              className={`group p-6 rounded-2xl transition-all duration-300 text-right ${isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50'
                  : 'bg-white/40 hover:bg-white/60 border border-white/20 hover:border-amber-400/50'
                }`}
            >
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className={`text-sm uppercase tracking-widest font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Project Selanjutnya
                </span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
              </div>
              <h3 className="text-xl font-bold">{getPortfolioBySlug(nextSlug).title}</h3>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
