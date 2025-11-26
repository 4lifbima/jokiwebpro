import React from 'react';
import { Star, UserIcon } from 'lucide-react';

const Testimonials = ({ isDark }) => {
  const testimonials = [
    {
      id: 1,
      text: "Gila sih 1 hari lansung jadi, dan cepet banget. Kemarin request revisi dikit di bagian database, sore lansung FIX. Codingannya juga rapi banget gampang dipelajari.",
      name: "Surianti Makas",
      position: "Mahasiswa SI, UNG angkatan 2023",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      text: "Cepet bener pengerjaannya, saya minta joki tugas Sistem informasi perpustakaan Laravel cuma 1 hari lansung jadi tanpa revisi dari dosen saya pak Bait Syaifullah",
      name: "Rehan Efendi Saputra",
      position: "Mahasiswa PTI, UNG angkatan 2023",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      id: 3,
      text: "Saya minta joki tugas Sistem informasi E-Commerce request dan briefnya sore eh.. malam jam 12, lansung jadi tanpa kendala, dan gratis hosting lagi😍",
      name: "Dita Oktaviani Mbeo",
      position: "Mahasiswa SI, UNG angkatan 2023",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="testimonials" className={`py-24 border-t ${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trusted by Developers</h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Apa kata mereka tentang service kami.</p>
          </div>
          <div className="flex gap-2">
            <div className="flex text-amber-500"><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /></div>
            <span className="font-bold">4.9/5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`p-6 rounded-2xl border ${isDark ? 'bg-[#151515] border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <p className={`text-sm mb-6 leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient}`}>
                  <UserIcon size={28} className="text-white font-black text-xl mx-auto mt-2.5" />
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
