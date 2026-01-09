import { motion } from 'framer-motion';
import { Shield, Award, Heart, Leaf, Clock, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t.safety,
      description: t.safetyDesc,
    },
    {
      icon: Award,
      title: t.excellence,
      description: t.excellenceDesc,
    },
    {
      icon: Heart,
      title: t.passion,
      description: t.passionDesc,
    },
    {
      icon: Leaf,
      title: t.marineConservation,
      description: t.marineConservationDesc,
    },
    {
      icon: Clock,
      title: t.smallGroups,
      description: t.smallGroupsDesc,
    },
    {
      icon: Globe,
      title: t.qualityEquipment,
      description: t.qualityEquipmentDesc,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge={t.whyChooseTitle}
          title={t.whyChooseTitle}
          description={t.whyChooseDescription}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-card/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
