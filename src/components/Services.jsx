import React from 'react';

const Services = ({ isDark, services }) => {
  return (
    <section id="services" className={`py-24 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solusi Digital Lengkap</h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Kami menangani sisi teknis yang rumit, Anda fokus pada hasil dan konten.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group ${isDark ? 'bg-[#0f0f0f] border-white/5 hover:border-amber-500/50' : 'bg-white border-gray-200 hover:border-amber-400/50 hover:shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${isDark ? 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black' : 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
