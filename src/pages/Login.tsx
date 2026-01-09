import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Waves, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Login = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const loginSchema = z.object({
    email: z.string().email(t.emailValidation),
    password: z.string().min(6, t.passwordValidation),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t.authRequired,
      description: t.connectBackend,
      variant: 'destructive',
    });

    setIsLoading(false);
  };

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 mb-8">
                <div className="p-2 rounded-full bg-primary/20">
                  <Waves className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-accent text-xl tracking-wider">AZOT</span>
                  <span className="text-xs font-subheading text-muted-foreground -mt-1">
                    DALIŞ MERKEZİ
                  </span>
                </div>
              </Link>
              <h1 className="font-heading text-3xl font-bold mb-2">{t.instructorLogin}</h1>
              <p className="text-muted-foreground font-body">
                {t.accessDiveLogs}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="dive-card p-8 border border-border"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block font-subheading font-semibold text-sm mb-2">
                    {t.emailAddress}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="instructor@azotdiving.com"
                      className="pl-10 bg-secondary border-border"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-subheading font-semibold text-sm mb-2">
                    {t.password}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10 pr-10 bg-secondary border-border"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm text-muted-foreground font-body">{t.rememberMe}</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline font-subheading"
                  >
                    {t.forgotPassword}
                  </a>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-subheading font-bold text-lg py-6"
                >
                  {isLoading ? t.signingIn : t.signIn}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground font-body">
                <p>
                  {t.notInstructor}{' '}
                  <Link to="/contact" className="text-primary hover:underline font-semibold">
                    {t.contact}
                  </Link>{' '}
                  {t.joinTeam}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {t.backToHome}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
