import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Underwater diving scene"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8"
          >
            <Waves className="w-4 h-4 text-primary" />
            <span className="font-subheading text-sm font-semibold text-primary">
              {t.badgeText}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {t.heroTitle1}{' '}
            <span className="gradient-text">{t.heroTitle2}</span>{' '}
            {t.heroTitle3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-bold text-lg px-8 py-6 glow-orange"
              >
                {t.bookYourDive}
              </Button>
            </Link>
            <Link to="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-subheading font-semibold text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                {t.exploreCourses}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '10,000+', label: t.divesLogged },
              { value: '2,000+', label: t.certifiedDivers },
              { value: '20+', label: t.diveSitesCount },
              { value: '15+', label: t.yearsExperience },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-accent text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-subheading text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-subheading uppercase tracking-widest">
            {t.scrollToExplore}
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
