import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Compass, Users, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { useLanguage } from '@/contexts/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      title: t.scubaCourses,
      description: t.scubaCoursesDesc,
      link: '/courses',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Compass,
      title: t.dailyDiving,
      description: t.dailyDivingDesc,
      link: '/dive-sites',
      color: 'text-cyan-light',
      bgColor: 'bg-cyan-light/10',
    },
    {
      icon: Users,
      title: t.expertInstructors,
      description: t.expertInstructorsDesc,
      link: '/instructors',
      color: 'text-coral',
      bgColor: 'bg-coral/10',
    },
    {
      icon: MapPin,
      title: t.privateTours,
      description: t.privateToursDesc,
      link: '/dive-sites',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={t.servicesTitle}
          title={t.servicesTitle}
          description={t.servicesDescription}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link to={service.link} className="block h-full">
                <div className="dive-card h-full p-8 border border-border hover:border-primary/50 group">
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-subheading font-semibold text-sm group-hover:gap-4 transition-all">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
