// Helper function to create slug dari title
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const portfolioData = [
  {
    id: 1,
    title: "Cake.You",
    slug: "cake-you",
    category: "Full Stack",
    description: "Platform e-Bisnis Kueku dengan desain modern, inventory system, dan admin dashboard.",
    shortDesc: "Platform e-Bisnis Kueku dengan desain modern, inventory system, dan admin dashboard.",
    image: "/portfolio/kueku.png",
    tags: ["PHP", "MySQL", "Tailwind CSS"],
    link: "#",
    github: "#",
    year: "2025",
    client: "Surianti Makas",
    budget: "Rp 350,000",
    duration: "1 hari",
    features: [
      "Product listing & filtering dinamis",
      "Shopping cart & checkout process",
      "Order management system",
      "Inventory tracking real-time",
      "Admin dashboard dengan analytics",
      "Mobile responsive design",
      "Performance optimization"
    ],
    technologies: {
      frontend: ["Tailwind CSS", "Redux"],
      backend: ["Node.js", "PHP"],
      database: ["MySQL"],
      tools: ["Nothing"]
    },
    challenges: [
      "Selalu revisi terus dari dosen"
    ],
    solutions: [
      "Solusi terbaikk yang saya lakukan yaitu mengoptimalkan kode agar tetap konsisten"
    ],
    results: [
      "Dosen puas, saya puas, client puas"
    ],
    testimonial: {
      name: "Surianti Makas",
      position: "Mahasiswa SI, UNG angkatan 2023",
      text: "Cake.You adalah platform e-Bisnis Kueku yang saya buat untuk memudahkan saya dalam menjual kueku. Platform ini sangat membantu saya dalam mengelola kueku saya dan memudahkan saya dalam menjual kueku saya. Saya sangat puas dengan hasil kerja JokiWeb.pro dan berharap dapat bekerja sama lagi di masa depan."
    },
    gallery: [
      { type: "screenshot", title: "Homepage" },
      { type: "screenshot", title: "Product Detail" },
      { type: "screenshot", title: "Shopping Cart" },
      { type: "screenshot", title: "Admin Dashboard" }
    ],
    status: "Live",
    liveUrl: "https://ecommercekue.kesug.com/"
  },
  {
    id: 2,
    title: "Angelato Resto",
    slug: "angelato-resto",
    category: "Full Stack",
    description: "Platform e-Bisnis modern dengan desain modern, inventory system, dan admin dashboard.",
    shortDesc: "Platform e-commerce dengan payment gateway dan inventory system",
    image: "/portfolio/angelato.png",
    tags: ["PHP", "Node.js", "MySQL", "Tailwind CSS"],
    link: "#",
    github: "#",
    year: "2025",
    client: "Dita Oktaviani Mbeo",
    budget: "Rp 350,000",
    duration: "1 hari",
    features: [
      "User authentication dengan JWT",
      "Product listing & filtering dinamis",
      "Shopping cart & checkout process",
      "Payment gateway integration (Stripe & Midtrans)",
      "Order management system",
      "Inventory tracking real-time",
      "Admin dashboard dengan analytics",
      "Email notifications otomatis",
      "Mobile responsive design",
      "Performance optimization"
    ],
    technologies: {
      frontend: ["Tailwind CSS", "Redux", "Axios"],
      backend: ["Node.js", "PHP", "Nginx", "Multer"],
      database: ["MongoDB", "Mongoose"],
      tools: ["Stripe API", "Midtrans", "Nodemailer", "Cloudinary"]
    },
    challenges: [
      "Mengoptimalkan performa database untuk jutaan product queries",
      "Implementasi payment gateway multiple currency",
      "Real-time inventory synchronization"
    ],
    solutions: [
      "Database indexing & query optimization",
      "Wrapper API untuk multiple payment providers",
      "WebSocket untuk real-time updates"
    ],
    results: [
      "Peningkatan conversion rate 45%",
      "Response time < 200ms",
      "Mendukung 10,000+ concurrent users",
      "Mobile app downloads 50,000+"
    ],
    testimonial: {
      name: "Dita Oktaviani Mbeo",
      position: "Mahasiswa SI, UNG angkatan 2023",
      text: "Cepat bener pengerjaannya, saya minta joki tugas Sistem informasi E-Commerce request dan briefnya sore eh.. malam jam 12, lansung jadi tanpa kendala, dan gratis hosting lagi😍"
    },
    gallery: [
      { type: "screenshot", title: "Homepage" },
      { type: "screenshot", title: "Product Detail" },
      { type: "screenshot", title: "Shopping Cart" },
      { type: "screenshot", title: "Admin Dashboard" }
    ],
    status: "Live",
    liveUrl: "https://angelato.kesug.com/"
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    slug: "nexus-dashboard",
    category: "Frontend",
    description: "Dashboard analytics dengan real-time data visualization, user management, dan export reports.",
    shortDesc: "Dashboard analytics dengan real-time data visualization",
    image: "/portfolio/nexus.png",
    tags: ["React", "Tailwind", "Chart.js", "Firebase"],
    link: "#",
    github: "#",
    year: "2025",
    client: "Nazly Siti julaiha",
    budget: "Rp 8,500,000",
    duration: "2 jam",
    features: [
      "Real-time data visualization dengan Chart.js",
      "Customizable widgets dashboard",
      "User management & role-based access",
      "Data export (PDF, Excel, CSV)",
      "Advanced filtering & search",
      "Dark/Light theme toggle",
      "Responsive design",
      "Performance metrics tracking",
      "Integration dengan Google Analytics"
    ],
    technologies: {
      frontend: ["React 19", "Tailwind CSS", "Chart.js", "React Query"],
      backend: ["Firebase Realtime Database", "Cloud Functions"],
      tools: ["Framer Motion", "React Hook Form", "Recharts"]
    },
    challenges: [
      "Rendering large datasets tanpa lag",
      "Real-time synchronization data",
      "Complex filtering logic"
    ],
    solutions: [
      "Virtualization untuk large lists",
      "Firebase subscriptions",
      "Advanced state management dengan React Query"
    ],
    results: [
      "Dashboard load time < 1.5 detik",
      "Handle 100,000+ data points smoothly",
      "User engagement naik 60%",
      "98% uptime"
    ],
    testimonial: {
      name: "Siti Nurhaliza",
      position: "Product Manager DataMetrix",
      text: "Interface yang intuitif dan responsif membuat tim kami dapat membuat keputusan bisnis lebih cepat berdasarkan real-time data."
    },
    gallery: [
      { type: "screenshot", title: "Dashboard Overview" },
      { type: "screenshot", title: "Analytics View" },
      { type: "screenshot", title: "User Management" },
      { type: "screenshot", title: "Report Export" }
    ],
    status: "Live",
    liveUrl: "https://nexuskms.vercel.app/"
  },
  {
    id: 4,
    title: "E-QuranKu Mobile App Backend",
    slug: "e-quranku-mobile-app-backend",
    category: "Mobile",
    description: "Baca, dengarkan, dan pelajari Quran dengan fitur lengkap. QuranKu menyediakan konten Quran berkualitas tinggi dengan tafsir dan audio dari qari terbaik di dunia. dibuat oleh Alif Bima Pradana dengan Next JS dan React JS.",
    shortDesc: "REST API untuk aplikasi mobile dengan authentication secure",
    image: "/portfolio/equranku.png",
    tags: ["Next.Js 16", "React.js 19", "Node.js"],
    link: "#",
    github: "#",
    year: "2025",
    client: "Private Mobile App Developer",
    budget: "Free",
    duration: "1 Hari",
    features: [
      "RESTful API architecture",
      "JWT authentication & refresh tokens",
      "Database optimization & indexing",
      "Rate limiting & security headers",
      "Error handling & logging system",
      "Database migration tools",
      "API documentation dengan Swagger",
      "Unit & integration testing",
      "CI/CD pipeline setup",
      "AWS deployment"
    ],
    technologies: {
      backend: ["Next.Js 16", "React.js 19", "Node.js"],
      database: ["Nothing"],
      tools: ["Postman", "Docker", "Kubernetes"]
    },
    challenges: [
      "Database query optimization untuk 1M+ users",
      "Real-time notification system",
      "Secure authentication flow"
    ],
    solutions: [
      "Query analysis & batch processing",
      "WebSocket dengan Socket.io",
      "OAuth2 implementation"
    ],
    results: [
      "API response < 100ms",
      "99.9% uptime",
      "Support 500k+ API calls/day",
      "Zero security vulnerabilities"
    ],
    testimonial: {
      name: "Alif Bima Pradana",
      position: "Full Stack Developer",
      text: "Ini aplikasi Quran yang sangat lengkap dan mudah digunakan. Backend-nya cepat dan andal, sangat membantu dalam pengembangan aplikasi mobile kami. BTW ini gratis karena project pribadi saya."
    },
    gallery: [
      { type: "screenshot", title: "API Architecture" },
      { type: "screenshot", title: "Database Schema" },
      { type: "screenshot", title: "Authentication Flow" },
      { type: "screenshot", title: "Deployment Pipeline" }
    ],
    status: "Live",
    liveUrl: "https://equranku.vercel.app/"
  },
  {
    id: 5,
    title: "Portal Himatika FMIPA UNG",
    slug: "portal-himatika-fmipa-ung",
    category: "Full Stack",
    description: "Portal himatika lengkap dengan event management, member area, dan berita terbaru untuk mahasiswa FMIPA UNG. Himpunan Mahasiswa Matematika. Wadah bagi para pemikir logis, pemecah masalah, dan penjelajah angka untuk berkolaborasi dan berinovasi.",
    shortDesc: "Marketplace lengkap dengan seller dashboard dan wallet system",
    image: "/portfolio/himatika.png",
    tags: ["Nuxt.JS", "Tailwind CSS", "Vue 3", "CMS WordPress"],
    link: "https://himatika-nuxtjs.vercel.app/",
    github: "#",
    year: "2025",
    client: "HIMATIKA FMIPA UNG",
    budget: "Rp 1,000,000",
    duration: "1 Minggu",
    features: [
      "Multi-vendor marketplace",
      "Seller registration & onboarding",
      "Product management system",
      "Advanced search & filtering",
      "Order management (multi-seller)",
      "Dispute resolution system",
      "Integrated digital wallet",
      "Commission management",
      "Analytics & reporting",
      "Marketing tools untuk sellers"
    ],
    technologies: {
      frontend: ["Nuxt.JS", "Tailwind CSS", "Vue 3", "CMS WordPress"],
      backend: ["PHP", "MySql"],
      database: ["MySQL"],
      tools: ["Midtrans", "Firebase Storage", "SendGrid", "Sentry"]
    },
    challenges: [
      "Complex transaction management",
      "Real-time seller notifications",
      "Scalability untuk ribuan sellers"
    ],
    solutions: [
      "Event-driven architecture",
      "Message queue (Bull)",
      "Database sharding strategy"
    ],
    results: [
      "Support 5,000+ active sellers",
      "Transaksi harian 50,000+",
      "Transaction fee revenue 200M+/month",
      "Customer satisfaction 4.8/5"
    ],
    testimonial: {
      name: "Adriyan Pakaya",
      position: "Ketua Umum HIMATIKA Periode 2025/2026",
      text: "Sebelumnya saya ucapkan terima kasih kepada JokiWeb.pro yang telah membantu kami dalam pembuatan portal HIMATIKA FMIPA UNG. Portal ini sangat membantu kami dalam mengelola berbagai kegiatan dan informasi untuk anggota himpunan. Desainnya yang user-friendly dan fitur-fiturnya yang lengkap membuat kami dapat berkomunikasi dan berbagi informasi dengan lebih efektif. Kami sangat puas dengan hasil kerja JokiWeb.pro dan berharap dapat bekerja sama lagi di masa depan."
    },
    gallery: [
      { type: "screenshot", title: "Homepage" },
      { type: "screenshot", title: "Seller Dashboard" },
      { type: "screenshot", title: "Order Management" },
      { type: "screenshot", title: "Analytics" }
    ],
    status: "Live",
    liveUrl: "https://himatika-nuxtjs.vercel.app/"
  },
  {
    id: 6,
    title: "Web Divisi Programming KSL-UNG",
    slug: "web-divisi-programming-ksl-ung",
    category: "Full Stack",
    description: "Website resmi Divisi Programming Komunitas Software Libre Universitas Negeri Gorontalo, menampilkan profil divisi, proyek open source, dan sumber daya pembelajaran untuk anggota komunitas.",
    shortDesc: "Website resmi Divisi Programming KSL-UNG",
    image: "/portfolio/programming.png",
    tags: ["Next.JS", "Tailwind CSS", "React JS", "Supabase"],
    link: "https://kslprogramming2025.vercel.app/",
    github: "#",
    year: "2025",
    client: "PROJECT PRIBADI",
    budget: "Free",
    duration: "2 Hari",
    features: [
      "Multi-vendor marketplace",
      "Seller registration & onboarding",
      "Product management system",
      "Advanced search & filtering",
      "Order management (multi-seller)",
      "Dispute resolution system",
      "Integrated digital wallet",
      "Commission management",
      "Analytics & reporting",
      "Marketing tools untuk sellers"
    ],
    technologies: {
      frontend: ["Next.JS", "Tailwind CSS", "React JS"],
      backend: ["Supabase", "Typescript"],
      database: ["Supabase"],
      tools: ["Nothing"]
    },
    challenges: [
      "Complex transaction management",
      "Real-time seller notifications",
      "Scalability untuk ribuan sellers"
    ],
    solutions: [
      "Event-driven architecture",
      "Message queue (Bull)",
      "Database sharding strategy"
    ],
    results: [
      "Support 5,000+ active sellers",
      "Transaksi harian 50,000+",
      "Transaction fee revenue 200M+/month",
      "Customer satisfaction 4.8/5"
    ],
    testimonial: {
      name: "Alif Bima Pradana",
      position: "Full Stack Developer",
      text: "Ini merupakan website resmi Divisi Programming KSL-UNG yang saya buat untuk mendukung kegiatan komunitas software libre di Universitas Negeri Gorontalo. Website ini menampilkan profil divisi, proyek open source yang sedang dikembangkan, serta sumber daya pembelajaran bagi anggota komunitas. Saya berharap website ini dapat menjadi wadah yang bermanfaat bagi para anggota KSL-UNG dalam berkolaborasi dan berbagi pengetahuan."
    },
    gallery: [
      { type: "screenshot", title: "Homepage" },
      { type: "screenshot", title: "Seller Dashboard" },
      { type: "screenshot", title: "Order Management" },
      { type: "screenshot", title: "Analytics" }
    ],
    status: "Live",
    liveUrl: "https://kslprogramming2025.vercel.app/" 
  },
  // Website Lolondong Squad
  {
    id: 7,
    title: "Lolondong Squad",
    slug: "lolondong-squad",
    category: "Full Stack",
    description: "Website komunitas Lolondong Squad dengan fitur profil anggota, galeri proyek, blog, dan sistem member dashboard yang interaktif.",
    shortDesc: "Website komunitas Lolondong Squad dengan member dashboard",
    image: "/portfolio/lolondong.png",
    tags: ["VUE 3", "Tailwind CSS", "Nuxt.JS"],
    link: "https://lolondongsquad.vercel.app/",
    github: "#",
    year: "2025",
    client: "Lolondong Squad Community",
    budget: "FREE (Project Komunitas)",
    duration: "2 hari",
    features: [
      "Landing page dengan hero section menarik",
      "Profil anggota komunitas lengkap",
      "Galeri proyek showcase",
      "Blog & artikel terbaru",
      "Member dashboard personal",
      "Event management system",
      "Responsive design mobile-first",
      "Dark/Light theme support",
      "SEO optimization",
      "Performance optimization"
    ],
    technologies: {
      frontend: ["Nuxt.JS", "Vue 3", "Tailwind CSS"],
      backend: ["Node.js", "Supabase"],
      database: ["Nothing"],
      tools: ["Vercel Deploy", "GitHub", "Supabase Storage"]
    },
    challenges: [
      "Mendesain UI yang modern dan menarik untuk komunitas",
      "Implementasi member authentication & authorization",
      "Performance optimization untuk multiple pages & routes"
    ],
    solutions: [
      "Menggunakan Vue 3 dengan Nuxt.JS untuk SPA yang cepat",
      "Supabase untuk authentication dan database management",
      "Image optimization dan code splitting"
    ],
    results: [
      "Website load time < 1 detik",
      "Mobile responsiveness 100%",
      "SEO score 95+",
      "Community member engagement meningkat"
    ],
    testimonial: {
      name: "Lolondong Squad Team",
      position: "Community Leader",
      text: "JokiWeb.pro berhasil mewujudkan website komunitas kami dengan desain yang modern dan fitur yang lengkap. Website ini menjadi identitas digital kami dan memudahkan member untuk berinteraksi serta berbagi informasi."
    },
    gallery: [
      { type: "screenshot", title: "Homepage" },
      { type: "screenshot", title: "Member Profile" },
      { type: "screenshot", title: "Project Gallery" },
      { type: "screenshot", title: "Blog Section" }
    ],
    status: "Live",
    liveUrl: "https://lolondongsquad.vercel.app/"
  },
  {
    id: 8,
    title: "Resumegen",
    slug: "resumegen",
    category: "Full Stack",
    description: "Alat pembuat resume otomatis di mana Anda mengikuti template dan memasukkan informasi Anda. Kemampuan untuk membuat, mencetak, dan mengunduh resume Anda secara gratis dalam hitungan menit.",
    shortDesc: "Tool pembuat resume otomatis dengan template siap pakai",
    image: "/portfolio/resumegen.png",
    tags: ["React JS", "Tailwind CSS", "Node.js"],
    link: "https://resumegen-one.vercel.app/",
    github: "#",
    year: "2025",
    client: "Resumegen Project",
    budget: "FREE (Project Open Source)",
    duration: "2 hari",
    features: [
      "Template resume yang dapat disesuaikan",
      "Form input data personal yang user-friendly",
      "Real-time preview resume",
      "Fitur download resume (PDF)",
      "Fitur print langsung dari browser",
      "Multiple template pilihan",
      "Automatic formatting & styling",
      "Mobile responsive design",
      "Save & load resume history",
      "Dark/Light theme toggle"
    ],
    technologies: {
      frontend: ["React JS", "Tailwind CSS", "React PDF", "Framer Motion"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      tools: ["Vercel Deploy", "Stripe (untuk premium features)", "GitHub"]
    },
    challenges: [
      "Implementasi PDF generation yang berkualitas tinggi",
      "Real-time preview sesuai dengan input user",
      "Optimasi performa untuk multiple templates"
    ],
    solutions: [
      "Menggunakan React PDF library untuk generate PDF berkualitas",
      "State management yang efficient dengan React hooks",
      "Template system yang scalable dan maintainable"
    ],
    results: [
      "Load time < 1.5 detik",
      "PDF generation instant tanpa delay",
      "Mobile responsiveness sempurna",
      "User dapat create resume dalam < 5 menit"
    ],
    testimonial: {
      name: "Resumegen Team",
      position: "Product Owner",
      text: "Resumegen berhasil memudahkan ribuan user membuat resume profesional dengan cepat dan gratis. Tool ini telah menjadi solusi populer bagi job seekers yang ingin membuat resume berkualitas tinggi tanpa perlu skill design."
    },
    gallery: [
      { type: "screenshot", title: "Template Selection" },
      { type: "screenshot", title: "Resume Builder" },
      { type: "screenshot", title: "Live Preview" },
      { type: "screenshot", title: "Download/Print" }
    ],
    status: "Live",
    liveUrl: "https://resumegen-one.vercel.app/"
  }

];

// Helper function untuk get portfolio by slug
export const getPortfolioBySlug = (slug) => {
  return portfolioData.find(item => item.slug === slug);
};

// Helper function untuk get all slugs (untuk static generation)
export const getAllPortfolioSlugs = () => {
  return portfolioData.map(item => item.slug);
};
