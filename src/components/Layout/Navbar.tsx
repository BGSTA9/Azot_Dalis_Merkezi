import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
// Updated import to match your filename
import logo from "@/assets/AzotLogo.png"; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.courses, path: '/courses' },
    { name: t.diveSites, path: '/dive-sites' },
    { name: t.instructors, path: '/instructors' },
    { name: t.pricing, path: '/pricing' },
    { name: t.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section Updated */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Azot Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-accent text-xl tracking-wider text-foreground leading-none">
                AZOT
              </span>
              <span className="text-[10px] font-subheading text-muted-foreground">
                DALIŞ MERKEZİ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Toggles */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-subheading">
                {t.instructorLogin}
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-semibold glow-orange">
                <Phone className="w-4 h-4 mr-2" />
                {t.bookYourDive}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-lg font-subheading font-semibold transition-colors ${
                        location.pathname === link.path
                          ? 'bg-primary/20 text-primary'
                          : 'text-foreground/80 hover:bg-secondary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 space-y-2"
                >
                  <Link to="/login" className="block">
                    <Button variant="outline" className="w-full font-subheading">
                      {t.instructorLogin}
                    </Button>
                  </Link>
                  <Link to="/contact" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-subheading font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      {t.bookYourDive}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}