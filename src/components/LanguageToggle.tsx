import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="font-subheading font-semibold text-xs px-2 min-w-[40px]"
      aria-label="Toggle language"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </Button>
  );
}
