import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "@/assets/AzotLogo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t.scubaCoursesLink, path: '/courses' },
    { name: t.diveSitesLink, path: '/dive-sites' },
    { name: t.ourTeamLink, path: '/instructors' },
    { name: t.pricingLink, path: '/pricing' },
    { name: t.aboutUsLink, path: '/about' },
  ];

  return (
    <footer className="bg-navy-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section Updated with Logo */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo Container */}
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Azot Dalış Merkezi Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-2xl tracking-wider">AZOT</span>
                <span className="text-xs font-subheading text-muted-foreground -mt-1">
                  DALIŞ MERKEZİ
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {t.footerDescription}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href={contactInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.explore}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.certifications}</h4>
            <ul className="space-y-3 text-muted-foreground font-body text-sm">
              <li>CMAS/TSSF 5-Star Dive Center</li>
              <li>SSI Instructor Training Center</li>
              <li>RAID Dive Center</li>
              <li>DAN Partner Facility</li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-accent text-xl text-primary">CMAS</span>
              </div>
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-accent text-xl text-primary">SSI</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-body text-sm">
                  {language === 'tr' ? contactInfo.addressTr : contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 text-sm text-muted-foreground font-body">
              <p>{t.weekdays}: {contactInfo.hours.weekdays}</p>
              <p>{t.weekends}: {contactInfo.hours.weekends}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {currentYear} AZOT Dalış Merkezi. {t.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}