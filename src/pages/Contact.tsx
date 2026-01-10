import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { contactInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactSchema = z.object({
    name: z.string().min(2, t.nameValidation).max(100),
    email: z.string().email(t.emailValidation).max(255),
    phone: z.string().optional(),
    subject: z.string().min(5, t.subjectValidation).max(200),
    message: z.string().min(10, t.messageValidation).max(1000),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t.messageSent,
      description: t.messageThankYou,
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt="Contact us"
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
              {t.contactUs}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.letsStartAdventure}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.contactPageDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8">{t.getInTouch}</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold mb-1">{t.location}</h4>
                    <p className="text-muted-foreground font-body">
                      {language === 'tr' ? contactInfo.addressTr : contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold mb-1">{t.phone}</h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-muted-foreground font-body hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold mb-1">WhatsApp</h4>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-body hover:text-accent transition-colors"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold mb-1">{t.emailAddress}</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground font-body hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold mb-1">{t.hours}</h4>
                    <p className="text-muted-foreground font-body">
                      {t.weekdays}: {contactInfo.hours.weekdays}
                    </p>
                    <p className="text-muted-foreground font-body">
                      {t.weekends}: {contactInfo.hours.weekends}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-subheading font-semibold mb-4">{t.followUs}</h4>
                <div className="flex items-center gap-4">
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="dive-card p-8 border border-border">
                <h2 className="font-heading text-2xl font-bold mb-6">{t.sendUsMessage}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-subheading font-semibold text-sm mb-2">
                        {t.yourName} *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="John Doe"
                        className="bg-secondary border-border"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block font-subheading font-semibold text-sm mb-2">
                        {t.emailAddress} *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className="bg-secondary border-border"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-subheading font-semibold text-sm mb-2">
                        {t.phoneNumber}
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+90 5XX XXX XX XX"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="block font-subheading font-semibold text-sm mb-2">
                        {t.subject} *
                      </label>
                      <Input
                        {...register('subject')}
                        placeholder={t.courseInquiry}
                        className="bg-secondary border-border"
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-subheading font-semibold text-sm mb-2">
                      {t.message} *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder={t.messagePlaceholder}
                      rows={6}
                      className="bg-secondary border-border resize-none"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-bold text-lg py-6 glow-orange"
                  >
                    {isSubmitting ? (
                      t.sending
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.sendMessage}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">{t.findUs}</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border"
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

export default Contact;
