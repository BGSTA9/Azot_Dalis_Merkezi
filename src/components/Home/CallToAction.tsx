import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

export function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1920&q=80"
          alt="Scuba diving underwater"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-subheading font-semibold text-sm uppercase tracking-wider mb-6"
          >
            {t.startAdventure}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-bold mb-6"
          >
            {t.ctaTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-foreground/80 mb-8 leading-relaxed"
          >
            {t.ctaDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-bold text-lg px-8 glow-orange"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.bookYourDive}
              </Button>
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-subheading font-semibold text-lg px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
