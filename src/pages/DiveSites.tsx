import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { diveSites } from '@/lib/data';
import { Anchor, Fish, Waves, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const siteImages = [
  'https://images.unsplash.com/photo-1682687220742-aba19444d5c4?w=1200&q=80',
  'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80',
  'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1200&q=80',
  'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1200&q=80',
  'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
];

const DiveSites = () => {
  const { t } = useLanguage();

  const getDifficultyTranslation = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return t.beginner;
      case 'Intermediate': return t.intermediate;
      case 'Advanced': return t.advanced;
      default: return difficulty;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920&q=80"
            alt="Underwater dive site"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-subheading font-semibold text-sm uppercase tracking-wider mb-6">
              {t.diveSites}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.discoverParadise}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.diveSitesPageDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dive Sites */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {diveSites.map((site, index) => (
              <motion.div
                key={site.id}
                id={site.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                        <img
                          src={siteImages[index % siteImages.length]}
                          alt={site.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-subheading font-semibold ${site.difficulty === 'Beginner'
                          ? 'bg-green-500/20 text-green-400 backdrop-blur-sm'
                          : site.difficulty === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400 backdrop-blur-sm'
                            : 'bg-red-500/20 text-red-400 backdrop-blur-sm'
                          }`}>
                          {getDifficultyTranslation(site.difficulty)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                      {site.name}
                    </h2>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                      {site.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <Anchor className="w-6 h-6 text-primary" />
                        <div>
                          <div className="font-subheading font-semibold text-sm">{t.depth}</div>
                          <div className="text-muted-foreground text-sm">{site.depth}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <Waves className="w-6 h-6 text-primary" />
                        <div>
                          <div className="font-subheading font-semibold text-sm">{t.level}</div>
                          <div className="text-muted-foreground text-sm">{getDifficultyTranslation(site.difficulty)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-subheading font-semibold text-sm mb-3 flex items-center gap-2">
                        <Camera className="w-4 h-4 text-primary" />
                        {t.highlights}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {site.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-subheading font-semibold text-sm mb-3 flex items-center gap-2">
                        <Fish className="w-4 h-4 text-primary" />
                        {t.marineLife}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {site.marineLife.map((species, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-body"
                          >
                            {species}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={t.locationSection}
            title={t.findUsAegean}
            description={t.findUsAegeanDesc}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 aspect-[16/9] rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.5!2d28.8819!3d40.3753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f7c3c8a7f7d%3A0x8b8b8b8b8b8b8b8b!2sG%C3%BCzelyal%C4%B1%2C%2016950%20Mudanya%2FBursa%2C%20Turkey!5e0!3m2!1sen!2str!4v1640000000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AZOT Diving Center Location"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DiveSites;
