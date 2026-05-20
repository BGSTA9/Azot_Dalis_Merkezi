# 🌊 AZOT Dalış Merkezi

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

Local tunneling `http://localhost:8080`

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

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ for underwater adventures
  Created by <a href="https://github.com/BGSTA9">BGSTA9</a>
  Süheyl SANATİ
</p>
