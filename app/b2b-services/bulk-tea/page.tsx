import BulkTeaHero from '@/components/bulk-tea/hero-section';
import BulkTeaIntro from '@/components/bulk-tea/intro-section';
import BulkTeaOverview from '@/components/bulk-tea/overview-section';
import ProductionVideo from '@/components/bulk-tea/production-video';
import BlendingFacility from '@/components/bulk-tea/blending-facility';
import WarehouseGallery from '@/components/bulk-tea/warehouse-gallery';
import FooterSection from '@/components/footer-section';

export const metadata = {
  title: 'Bulk Tea Exports - Wholesale Ceylon Tea Supplier | Venture Tea',
  description: 'Premier wholesale Ceylon tea exporter from Sri Lanka. Large scale bulk tea exports with the nation\'s largest blending facility. Raw, blended, or infused tea for bulk buyers.',
  keywords: 'bulk tea exports, wholesale tea, Ceylon tea supplier, bulk tea blending, wholesale tea exporter, Sri Lanka tea, bulk tea manufacturing',
};

export default function BulkTeaPage() {
  return (
    <main>
      <BulkTeaHero />
      <BulkTeaIntro />
      <BulkTeaOverview />
      <ProductionVideo />
      <BlendingFacility />
      <WarehouseGallery />
      <FooterSection />
    </main>
  );
}
