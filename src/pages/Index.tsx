import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { FeaturedDiveSites } from '@/components/home/FeaturedDiveSites';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CallToAction } from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <FeaturedDiveSites />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  );
};

export default Index;
