import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { instructors } from '@/lib/data';
import { Award, Globe, Briefcase, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Instructors = () => {
  const { language, t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt="Dive instructors"
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
              {t.ourTeam}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'tr' ? 'Uzman ' : 'Meet Our '}
              <span className="gradient-text">{language === 'tr' ? 'Eğitmenlerimiz' : 'Expert Instructors'}</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.instructorsDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="dive-card border border-border overflow-hidden"
              >
                <div className="p-6">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 rounded-full ${instructor.avatarColor} flex items-center justify-center`}>
                      <User className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-1 text-center">
                    {language === 'tr' ? instructor.roleTr : instructor.role}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm font-body text-muted-foreground">
                      {instructor.languages.join(', ')}
                    </span>
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 text-center">
                    {language === 'tr' ? instructor.bioTr : instructor.bio}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <div className="flex flex-wrap gap-1">
                        {instructor.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-secondary text-xs font-body"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-sm font-body text-muted-foreground">
                          {t.experience}: {language === 'tr' ? instructor.experienceTr : instructor.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={t.joinOurTeam}
            title={t.becomeAnInstructor}
            description={t.joinTeamDescription}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="mailto:careers@azotdiving.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-subheading font-semibold hover:bg-primary/90 transition-colors"
            >
              {t.contactUsAboutOpportunities}
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Instructors;
