import CoPackingHero from '@/components/co-packing/hero-section';
import CoPackingIntro from '@/components/co-packing/intro-section';
import BusinessPartner from '@/components/co-packing/business-partner';
import BenefitsGrid from '@/components/co-packing/benefits-grid';
import PackingServices from '@/components/co-packing/packing-services';
import FooterSection from '@/components/footer-section';

export const metadata = {
  title: 'Co-Packing Tea Services - Contract Tea Packaging | Venture Tea',
  description: 'Premier co-packing and contract tea packaging services in Sri Lanka. Co-labeling, co-packing, and co-manufacturing solutions for tea, herbal, and wellness brands.',
  keywords: 'co-packing tea, contract tea packaging, tea co-manufacturing, tea co-labeling, Ceylon tea co-packing, contract packaging Sri Lanka',
};

export default function CoPackingPage() {
  return (
    <main>
      <CoPackingHero />
      <CoPackingIntro />
      <BusinessPartner />
      <BenefitsGrid />
      <PackingServices />
      <FooterSection />
    </main>
  );
}
