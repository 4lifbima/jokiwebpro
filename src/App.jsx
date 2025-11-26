import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Zap, 
  Server, 
  Database,
} from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import PortfolioDetail from './components/PortfolioDetail';
import PortfolioAll from './components/PortfolioAll';
import TechStack from './components/TechStack';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle Handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // WhatsApp Handler
  const handleWhatsApp = () => {
    const phoneNumber = '6282291383797';
    const message = 'Halo, saya ingin berkonsultasi tentang jasa pembuatan website Anda.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: "UI/UX & Frontend",
      desc: "Desain modern dengan React, Tailwind, dan animasi smooth.",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Backend & API",
      desc: "Struktur database efisien, integrasi API, dan logic kompleks.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Pengerjaan Kilat",
      desc: "Deadline mepet? Kami handle dengan timeline prioritas.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Hosting & Deploy",
      desc: "Terima beres sampai website online (Vercel, Netlify, cPanel).",
      icon: <Server className="w-6 h-6" />,
    }
  ];

  const pricing = [
    {
      name: "Student Starter",
      price: "Rp 100rb",
      desc: "Perfect untuk tugas kuliah & landing page sederhana.",
      features: ["1 Halaman Responsive", "Source Code Clean", "Gratis Revisi", "Pengerjaan 2-3 Hari", "Tanpa Database"],
      highlight: false
    },
    {
      name: "Professional",
      price: "Rp 750rb",
      desc: "Solusi lengkap untuk skripsi, portofolio, atau bisnis UMKM.",
      features: ["5-8 Halaman", "Frontend + Backend", "Database Integration", "Admin Dashboard", "Deploy ke Server", "Prioritas Support"],
      highlight: true
    },
    {
      name: "Custom Enterprise",
      price: "Hubungi Kami",
      desc: "Sistem kompleks untuk kebutuhan spesifik perusahaan.",
      features: ["Full Stack Development", "Custom Architecture", "High Performance", "Security Hardening", "Maintenance Bulanan", "Unlimited Revisi"],
      highlight: false
    }
  ];

  const stats = [
    { value: "500+", label: "Project Selesai" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "24h", label: "Fastest Delivery" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`} style={{ scrollBehavior: 'smooth' }}>
      
      <Navbar isDark={isDark} scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleTheme={toggleTheme} handleWhatsApp={handleWhatsApp} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Background isDark={isDark} />
              <Hero isDark={isDark} stats={stats} handleWhatsApp={handleWhatsApp} />
              <Services isDark={isDark} services={services} />
              <Portfolio isDark={isDark} />
              <TechStack isDark={isDark} />
              <Pricing isDark={isDark} pricing={pricing} />
              <Testimonials isDark={isDark} />
              <CTA isDark={isDark} handleWhatsApp={handleWhatsApp} />
            </>
          }
        />
        <Route path="/portfolio/:slug" element={<PortfolioDetail isDark={isDark} />} />
        <Route path="/portfolio-all" element={<PortfolioAll isDark={isDark} />} />
      </Routes>

      <Footer isDark={isDark} />

      {/* CSS for custom animations */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;