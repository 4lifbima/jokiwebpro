# 🚀 JokiWeb.pro - Professional Web Development Services

> Jasa pembuatan website profesional dengan teknologi terkini dan kualitas terbaik

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vite,react,tailwind&theme=light" />
  </a>
</p>

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Instalasi](#instalasi)
- [Struktur Folder](#struktur-folder)
- [Routes & Pages](#routes--pages)
- [Komponen Utama](#komponen-utama)
- [Data Portfolio](#data-portfolio)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Contact & Support](#contact--support)

---

## 📖 Tentang Proyek

**JokiWeb.pro** adalah website portofolio dan landing page profesional untuk layanan jasa pembuatan website. Website ini menampilkan:

- ✨ Portofolio lengkap dengan 7 project showcase
- 🎯 Layanan yang ditawarkan (UI/UX, Backend, API, Hosting & Deploy)
- 💰 Paket pricing yang fleksibel (Student Starter, Professional, Enterprise)
- ⭐ Testimonial dari klien-klien puas
- 🔧 Tech stack showcase dengan skill icons
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark/Light mode toggle
- 🔗 Routing system dengan React Router untuk navigasi smooth

---

## ✨ Fitur Utama

### 🏠 Homepage
- **Hero Section** dengan CTA buttons dan statistik project
- **Services Section** menampilkan 4 layanan utama
- **Portfolio Section** showcase 4 project terbaik
- **Tech Stack** dengan skill icons dari skillicons.dev
- **Pricing** dengan 3 paket berbeda
- **Testimonials** dari klien-klien puas
- **Call-to-Action** section dengan WhatsApp integration

### 📁 Portfolio Pages
- **Portfolio List** (`/portfolio-all`) - Tampilkan semua 7 project
- **Portfolio Detail** (`/portfolio/:slug`) - Detail lengkap setiap project
- **Search & Filter** - Cari portfolio berdasarkan kategori & keyword
- **Loading Skeleton** - UX experience yang lebih baik
- **Navigation** - Navigasi antar portfolio items

### 🎨 Design Features
- **Dark/Light Theme** - Toggle theme yang smooth
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Hover effects dan transitions
- **Gradient Backgrounds** - Modern visual design
- **WhatsApp Integration** - Direct messaging ke nomor bisnis

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool & dev server
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

### Styling & Icons
- **Tailwind CSS** - Responsive design
- **Lucide React Icons** - UI icons
- **skillicons.dev** - Tech stack icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 📦 Instalasi

### Prerequisites
- Node.js >= 18.0.0
- npm atau yarn

### Setup Project

```bash
# Clone repository
git clone https://github.com/4lifbima/jokiwebpro.git
cd jokiwebpro

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview

# Lint code
npm run lint
```

---

## 📁 Struktur Folder

```
jokiwebpro/
├── public/
│   └── portfolio/                 # Portfolio images
│       ├── angelato.png
│       ├── nexus.png
│       ├── himatika.png
│       ├── programming.png
│       ├── lolondong.png
│       └── resumegen.png
├── src/
│   ├── components/               # React components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Background.jsx       # Gradient orbs
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Services.jsx         # Services grid
│   │   ├── Portfolio.jsx        # Portfolio showcase (4 items)
│   │   ├── PortfolioAll.jsx     # All portfolio page
│   │   ├── PortfolioDetail.jsx  # Detail portfolio page
│   │   ├── TechStack.jsx        # Tech stack display
│   │   ├── Pricing.jsx          # Pricing tiers
│   │   ├── Testimonials.jsx     # Client reviews
│   │   ├── CTA.jsx              # Call-to-action
│   │   └── Footer.jsx           # Footer
│   ├── data/
│   │   └── portfolio.js         # Portfolio data & helpers
│   ├── App.jsx                  # Main app component & routes
│   ├── main.jsx                 # Entry point dengan Router
│   ├── index.css                # Global styles
│   └── App.css                  # App styles
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

---

## 🗺️ Routes & Pages

| Route | Component | Deskripsi |
|-------|-----------|-----------|
| `/` | HomePage | Homepage dengan semua sections |
| `/portfolio-all` | PortfolioAll | Halaman semua portfolio |
| `/portfolio/:slug` | PortfolioDetail | Detail portfolio individual |

### Available Slugs
```
- e-commerce-platform
- nexus-dashboard
- himatika-nuxtjs
- web-divisi-programming-ksl-ung
- lolondong-squad
- resumegen
```

---

## 🧩 Komponen Utama

### Navbar Component
```jsx
<Navbar 
  isDark={isDark}
  scrolled={scrolled}
  isMenuOpen={isMenuOpen}
  setIsMenuOpen={setIsMenuOpen}
  toggleTheme={toggleTheme}
  handleWhatsApp={handleWhatsApp}
/>
```
**Fitur:**
- Fixed navigation dengan scroll detection
- Mobile hamburger menu
- Dark/Light theme toggle
- WhatsApp consultation button

### Portfolio Components
- **Portfolio.jsx** - Tampilkan 4 portfolio terbaik di homepage
- **PortfolioAll.jsx** - Tampilkan semua 7 portfolio dengan search & filter
- **PortfolioDetail.jsx** - Detail lengkap setiap portfolio

### CTA & Conversion
- WhatsApp integration dengan nomor: `+62 822 9138 3797`
- Multiple CTA buttons di berbagai sections

---

## 💾 Data Portfolio

Portfolio data disimpan di `src/data/portfolio.js` dengan struktur lengkap termasuk:
- Project details (title, description, client, budget, duration)
- Technology stack (frontend, backend, database, tools)
- Challenges & solutions
- Results & achievements
- Client testimonials

### Helper Functions
```javascript
// Get portfolio by slug
getPortfolioBySlug(slug) -> Portfolio | undefined

// Get all slugs untuk routing
getAllPortfolioSlugs() -> string[]

// Create slug dari title
createSlug(title) -> string
```

---

## 🎨 Theme System

Website mendukung dark mode & light mode dengan state management:

```javascript
const [isDark, setIsDark] = useState(true);

const toggleTheme = () => {
  setIsDark(!isDark);
};
```

Semua komponen menerima prop `isDark` untuk conditional styling dengan Tailwind classes.

---

## 🚀 Development

### Development Server
```bash
npm run dev
```
Server akan running di `http://localhost:5173`

### ESLint
```bash
npm run lint
```

### Debugging Tips
1. Buka DevTools (F12)
2. Check Console untuk errors
3. Use React DevTools extension
4. Check Network tab untuk image loading

---

## 🏗️ Build & Deploy

### Build Production
```bash
npm run build
```
Output akan di folder `dist/`

### Deploy ke Vercel
```bash
npm i -g vercel
vercel
```

### Deploy ke Netlify
```bash
npm run build
# Deploy folder dist/ ke Netlify
```

---

## 📱 Responsive Design

Website fully responsive dengan Tailwind breakpoints:
- **Mobile** (< 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

---

## 🔗 WhatsApp Integration

Nomor: +62 822 9138 3797
Pesan Default: "Halo, saya ingin berkonsultasi tentang jasa pembuatan website Anda."

---

## 📊 Portfolio Showcase

Website menampilkan 7 portfolio project yang dapat di-filter berdasarkan kategori dan di-search dengan keyword.

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📧 Contact & Support

- **Email:** alif67916@gmail.com
- **WhatsApp:** +62 822 9138 3797

---

## 📄 License

Project ini menggunakan **MIT License**

---

## 👨‍💻 Author

**Alif Bima Pradana**
- Full Stack Developer
- Email: alif67916@gmail.com
- WhatsApp: +62 822 9138 3797

---

**Dibuat dengan ❤️ oleh Alif Bima Pradana**

*Last Updated: November 27, 2025*
