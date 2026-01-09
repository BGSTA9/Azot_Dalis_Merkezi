import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Heart, Target, Anchor, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t.passion,
      description: t.passionDesc,
    },
    {
      icon: Target,
      title: t.excellence,
      description: t.excellenceDesc,
    },
    {
      icon: Anchor,
      title: t.safety,
      description: t.safetyDesc,
    },
    {
      icon: Users,
      title: t.community,
      description: t.communityDesc,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt="Dive team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-subheading font-semibold text-sm uppercase tracking-wider mb-6">
              {t.ourStory}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.aboutHeroTitle}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.aboutDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral font-subheading font-semibold text-sm uppercase tracking-wider mb-6">
                {t.ourMission}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {t.aboutMissionTitle}
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>{t.aboutMissionP1}</p>
                <p>{t.aboutMissionP2}</p>
                <p>{t.aboutMissionP3}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=800&q=80"
                  alt="Diver exploring reef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl border border-border">
                <div className="font-accent text-4xl text-primary">15+</div>
                <div className="font-subheading text-sm text-muted-foreground">{t.yearsOfExcellence}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={t.ourValues}
            title={t.whatDrivesUs}
            description={t.valuesSectionDesc}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
                  alt="Marine conservation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 font-subheading font-semibold text-sm uppercase tracking-wider mb-6">
                {t.conservation}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {t.conservationTitle}
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>{t.conservationP1}</p>
                <p>{t.conservationP2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
