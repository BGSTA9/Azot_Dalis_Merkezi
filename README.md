# 🌊 AZOT Dalış Merkezi

A modern, responsive website for AZOT Dive Center located in Mudanya, Bursa, Turkey. Built with React, TypeScript, and Tailwind CSS.

![AZOT Diving Center](https://images.unsplash.com/photo-1682687220742-aba19444d5c4?w=1200&q=80)

## 🔗 Live Demo

**[https://azot-dalis-merkezi-preview.netlify.app](https://azot-dalis-merkezi-preview.netlify.app)**

## ✨ Features

- 🌐 **Bilingual Support** - Turkish (default) and English with easy language toggle
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Dark theme with smooth animations using Framer Motion
- 📧 **Contact Form** - Ready for backend integration
- 🗺️ **Google Maps** - Embedded location map
- 🏊 **Course Catalog** - CMAS/TSSF, SSI, and RAID certifications
- 👥 **Team Showcase** - Instructor profiles with certifications
- 💰 **Pricing Tables** - Transparent pricing with equipment rentals

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, featured dive sites, CTA |
| About | `/about` | Story, mission, values, conservation |
| Courses | `/courses` | All diving courses with details |
| Dive Sites | `/dive-sites` | Local dive spots with info |
| Instructors | `/instructors` | Team profiles |
| Pricing | `/pricing` | Packages and equipment rental |
| Contact | `/contact` | Contact form and information |
| Login | `/login` | Instructor portal (UI ready) |

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Routing:** React Router v6
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/BGSTA9/Azot_Dalis_Merkezi.git

# Navigate to project directory
cd Azot_Dalis_Merkezi

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/          # Homepage components
│   ├── layout/        # Navbar, Footer, Layout
│   └── ui/            # shadcn/ui components
├── contexts/
│   └── LanguageContext.tsx  # i18n translations
├── hooks/             # Custom React hooks
├── lib/
│   └── data.ts        # Static data (courses, instructors, etc.)
├── pages/             # Route pages
└── App.tsx            # Main app with routing
```

## 🌍 Internationalization

The website supports Turkish and English. Translations are managed in `src/contexts/LanguageContext.tsx`.

```tsx
// Usage in components
const { t, language, setLanguage } = useLanguage();

// Access translations
<h1>{t.aboutHeroTitle}</h1>

// For data with Turkish fields
{language === 'tr' ? course.nameTr : course.name}
```

## 🚢 Deployment

Currently deployed on Netlify. To deploy your own:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

## 📍 Contact Information

**AZOT Dalış Cankurtaran Eğitim Merkezi**  
Üstünel Apartmanı, Güzelyalı, Güzelyalı Yalı  
5. Sk. No 3, 16950 Mudanya/Bursa, Turkey

## 📝 License

This project is proprietary software for AZOT Dive Center.

---

<p align="center">
  Built with ❤️ for underwater adventures
  Created by <a href="https://github.com/BGSTA9">BGSTA9</a>
  Süheyl SANATİ
</p>
