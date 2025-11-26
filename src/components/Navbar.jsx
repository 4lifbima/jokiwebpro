import React from 'react';
import { ArrowRight, Moon, Sun, Menu, X, CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDark, scrolled, isMenuOpen, setIsMenuOpen, toggleTheme, handleWhatsApp }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDark ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10' : 'bg-white/80 backdrop-blur-md border-b border-gray-200') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-amber-500/20">
            <CodeIcon size={25} className={isDark ? 'text-white' : 'text-black'} />
          </div>
          <span className="font-bold text-xl tracking-tight">JokiWeb<span className="text-amber-500">.pro</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-amber-500 transition-colors">Reviews</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 text-amber-400' : 'bg-gray-100 hover:bg-gray-200 text-amber-600'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={handleWhatsApp} className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-transform active:scale-95 flex items-center gap-2 text-sm border border-transparent shadow-lg shadow-white/5">
            <span>Konsultasi</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute w-full p-6 border-b ${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}>
          <div className="flex flex-col gap-4">
            <a href="#services" className="py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#pricing" className="py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 py-2 text-amber-500 font-medium"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />} Switch Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
