import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ceylon Plantations Colombo - Premium Ceylon Tea Exporters & Manufacturers',
  description: 'Leading Ceylon Tea exporters and manufacturers in Sri Lanka. Specializing in private label tea, bulk tea exports, and co-packing services. Premium quality Ceylon tea with global certifications.',
  keywords: 'Ceylon tea, Sri Lanka tea, tea exporters, private label tea, bulk tea exports, tea manufacturers, OEM tea, co-packing tea, premium Ceylon tea, tea plantation',
  authors: [{ name: 'Ceylon Plantations Colombo' }],
  creator: 'Ceylon Plantations Colombo',
  publisher: 'Ceylon Plantations Colombo',
  robots: 'index, follow',
  openGraph: {
    title: 'Ceylon Plantations Colombo - Premium Ceylon Tea Exporters',
    description: 'Leading Ceylon Tea exporters and manufacturers in Sri Lanka. Premium quality Ceylon tea with global certifications.',
    url: 'https://ceylonplantationscolombo.com',
    siteName: 'Ceylon Plantations Colombo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ceylon Plantations Colombo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceylon Plantations Colombo - Premium Ceylon Tea Exporters',
    description: 'Leading Ceylon Tea exporters and manufacturers in Sri Lanka. Premium quality Ceylon tea with global certifications.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
