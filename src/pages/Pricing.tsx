import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { pricingPackages } from '@/lib/data';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();

  const equipmentRentals = [
    { item: t.maskSnorkel, price: '€10' },
    { item: t.wetsuit, price: '€15' },
    { item: t.bcdRegulator, price: '€20' },
    { item: t.diveComputer, price: '€15' },
    { item: t.finsBoots, price: '€10' },
    { item: t.underwaterCamera, price: '€25' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1920&q=80"
            alt="Scuba diving"
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
              {t.pricing}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.transparentPricing}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.pricingDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`dive-card border overflow-hidden ${pkg.popular ? 'border-primary glow-cyan' : 'border-border'
                  }`}
              >
                {pkg.popular && (
                  <div className="bg-primary px-4 py-2 text-center">
                    <span className="flex items-center justify-center gap-1 text-primary-foreground font-subheading font-semibold text-sm">
                      <Star className="w-4 h-4" />
                      {t.mostPopular}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {language === 'tr' ? pkg.nameTr : pkg.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-6">
                    {language === 'tr' ? pkg.descriptionTr : pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className="font-accent text-4xl text-primary">€{pkg.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{t.perPerson}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {(language === 'tr' ? pkg.featuresTr : pkg.features).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`w-full font-subheading font-semibold ${pkg.popular
                          ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                          : 'bg-secondary hover:bg-secondary/80 text-foreground'
                        }`}
                    >
                      {t.bookNow}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={t.equipment}
            title={t.equipmentRentalSection}
            description={t.equipmentDescription}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {equipmentRentals.map((rental, index) => (
              <motion.div
                key={rental.item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
              >
                <span className="font-body">{rental.item}</span>
                <span className="font-accent text-lg text-primary">{rental.price}{t.perDay}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-6 text-center">{t.importantInformation}</h3>
            <div className="space-y-4 text-muted-foreground font-body text-sm">
              <p>• {t.priceNote1}</p>
              <p>• {t.priceNote2}</p>
              <p>• {t.priceNote3}</p>
              <p>• {t.priceNote4}</p>
              <p>• {t.priceNote5}</p>
              <p>• {t.priceNote6}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
