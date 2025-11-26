import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = ({ isDark, pricing }) => {
  // WhatsApp function with package details
  const handleWhatsApp = (tier) => {
    const phoneNumber = '6282291383797'; // Format: country code + number without +

    // Create formatted message with package details
    const features = tier.features.map((feature, idx) => `${idx + 1}. ${feature}`).join('\n');

    const message = `Halo JokiWeb.pro! 👋

Saya tertarik dengan paket *${tier.name}* 

📦 *Detail Paket:*
💰 Harga: ${tier.price}
📝 Deskripsi: ${tier.desc}

✅ *Benefit yang didapat:*
${features}

Mohon informasi lebih lanjut. Terima kasih! 🙏`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investasi Transparan</h2>
          <p className={`max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Pilih paket yang sesuai dengan kebutuhan project dan budget kamu. Tanpa biaya tersembunyi.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricing.map((tier, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 ${tier.highlight ? (isDark ? 'bg-[#151515] border-amber-500 shadow-2xl shadow-amber-900/20 scale-105 z-10' : 'bg-white border-amber-400 shadow-2xl shadow-amber-200/50 scale-105 z-10') : (isDark ? 'bg-[#0f0f0f] border-white/5 hover:border-white/10' : 'bg-gray-50 border-gray-200 hover:border-gray-300')}`}>

              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-4xl font-bold ${tier.highlight ? 'text-amber-500' : (isDark ? 'text-white' : 'text-gray-900')}`}>{tier.price}</span>
              </div>
              <p className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{tier.desc}</p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <div className={`p-1 rounded-full ${tier.highlight ? 'bg-amber-500/20 text-amber-500' : 'bg-gray-500/20 text-gray-500'}`}>
                      <CheckCircle size={12} />
                    </div>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsApp(tier)}
                className={`w-full py-3 rounded-xl font-bold transition-all ${tier.highlight ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20' : (isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900')}`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
