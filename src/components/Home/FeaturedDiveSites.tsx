import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { diveSites } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

const featuredSites = diveSites.slice(0, 3);

const cardImages = [
  'https://images.unsplash.com/photo-1682687220742-aba19444d5c4?w=800&q=80',
  'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80',
  'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80',
];

export function FeaturedDiveSites() {
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
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={t.diveSites}
          title={t.featuredSitesTitle}
          description={t.featuredSitesDescription}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {featuredSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/dive-sites#${site.id}`}>
                <div className="dive-card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cardImages[index]}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-subheading font-semibold ${site.difficulty === 'Beginner'
                          ? 'bg-green-500/20 text-green-400'
                          : site.difficulty === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                        {getDifficultyTranslation(site.difficulty)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2">{site.name}</h3>
                    <p className="text-muted-foreground font-body text-sm line-clamp-2 mb-4">
                      {site.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Anchor className="w-4 h-4 text-primary" />
                        <span>{site.depth}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fish className="w-4 h-4 text-primary" />
                        <span>{site.marineLife.length} {t.marineLife.toLowerCase()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/dive-sites">
            <Button variant="outline" size="lg" className="font-subheading font-semibold">
              {t.viewAllSites}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
