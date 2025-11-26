import React from 'react';

const TechStack = ({ isDark }) => {
  return (
    <div className={`py-12 border-y ${isDark ? 'border-white/5 bg-black' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest opacity-50 mb-8">Powered by Modern Tech Stack</p>
        
        {/* Desktop View */}
        <div className="hidden sm:block">
          <img 
            src="https://skillicons.dev/icons?i=astro,react,vue,express,nextjs,nestjs,tailwindcss,nodejs,nuxt,alpinejs,laravel,supabase,firebase,mysql,prisma&theme=dark" 
            alt="Tech Stack Icons" 
            className="mx-auto max-w-4xl w-full"
          />
        </div>

        {/* Mobile View - Adjusted size */}
        <div className="sm:hidden">
          <img 
            src="https://skillicons.dev/icons?i=astro,react,vue,express,nextjs,nestjs,go,tailwindcss,nodejs,nuxt,alpinejs,laravel,supabase,firebase,mysql,prisma&theme=dark&perline=5" 
            alt="Tech Stack Icons" 
            className="mx-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
