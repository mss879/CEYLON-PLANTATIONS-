import PrivateLabelHero from '@/components/private-label/hero-section';
import WhatWeDoSection from '@/components/private-label/what-we-do-section';
import VideoSection from '@/components/private-label/video-section';
import PureCeylonSection from '@/components/private-label/pure-ceylon-section';
import ServicesOffered from '@/components/private-label/services-offered';
import PhotoGallery from '@/components/private-label/photo-gallery';
import PackagingOptions from '@/components/private-label/packaging-options';
import FooterSection from '@/components/footer-section';

export const metadata = {
  title: 'Private Label Tea (OEM) / White Label Tea - Ceylon Plantations Colombo',
  description: 'Make your own brand of tea with our custom tea manufacturing services. Pure Ceylon Tea Manufacturer with private label, OEM, and white label tea services.',
  keywords: 'private label tea, white label tea, OEM tea, custom tea manufacturing, Ceylon tea manufacturer, tea co-packing, tea branding',
};

export default function PrivateLabelPage() {
  return (
    <main>
      <PrivateLabelHero />
      <WhatWeDoSection />
      <VideoSection />
      <PureCeylonSection />
      <ServicesOffered />
      <PhotoGallery />
      <PackagingOptions />
      <FooterSection />
    </main>
  );
}
