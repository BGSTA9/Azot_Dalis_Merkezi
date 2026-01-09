import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { Clock, DollarSign, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const courseImages = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  'https://images.unsplash.com/photo-1682687220742-aba19444d5c4?w=800&q=80',
  'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80',
  'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80',
];

const Courses = () => {
  const { t, language } = useLanguage();

  const getLevelTranslation = (level: string) => {
    switch (level) {
      case 'Beginner': return t.beginner;
      case 'Intermediate': return t.intermediate;
      case 'Advanced': return t.advanced;
      case 'Professional': return t.professional;
      default: return level;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=1920&q=80"
            alt="Scuba diving training"
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
              {t.scubaCoursesPage}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.yourJourneyStartsHere}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.coursesPageDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="dive-card border border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={courseImages[index % courseImages.length]}
                      alt={language === 'tr' ? course.nameTr : course.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-subheading font-semibold text-primary">
                        {course.certification}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-subheading font-semibold ${course.level === 'Beginner'
                          ? 'bg-green-500/20 text-green-400'
                          : course.level === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : course.level === 'Advanced'
                              ? 'bg-orange-500/20 text-orange-400'
                              : 'bg-purple-500/20 text-purple-400'
                        }`}>
                        {getLevelTranslation(course.level)}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="font-heading text-2xl font-bold mb-3">
                      {language === 'tr' ? course.nameTr : course.name}
                    </h3>
                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      {language === 'tr' ? course.descriptionTr : course.description}
                    </p>

                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {language === 'tr' ? course.durationTr : course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">€{course.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{course.certification} {t.certification}</span>
                      </div>
                    </div>

                    {(course.prerequisites || course.prerequisitesTr) && (
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="text-primary font-semibold">{t.prerequisites}:</span>{' '}
                        {language === 'tr' ? course.prerequisitesTr : course.prerequisites}
                      </p>
                    )}

                    <div className="mb-6">
                      <h4 className="font-subheading font-semibold text-sm mb-3">{t.whatsIncluded}:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {(language === 'tr' ? course.includesTr : course.includes).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-semibold">
                        {t.bookThisCourse}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            badge={t.notSureWhichCourse}
            title={t.letUsHelpYouChoose}
            description={t.letUsHelpDescription}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-subheading font-bold">
                {t.contactOurTeam}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
