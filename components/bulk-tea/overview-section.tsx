'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BulkTeaOverview() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>Bulk Tea Exports by Venture Tea</strong> is the nations premier source for bulk tea exports. We are a wholesale tea supplier from Sri Lanka. We export Pure Ceylon Tea to our clients using the nations largest bulk tea blending machines at our one stop packing factory and warehousing facility. Assisting clients to lower costs, increase efficiency and reduce tea production lead times.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="space-y-6">
              <div className="space-y-4">
                <a 
                  href="tel:+94112567350" 
                  className="flex items-center gap-3 text-lg hover:text-green-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="font-semibold">+94-11-2567350</span>
                </a>
                
                <a 
                  href="tel:+94112567305" 
                  className="flex items-center gap-3 text-lg hover:text-green-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="font-semibold">+94-112-567305</span>
                </a>
              </div>

              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg"
                asChild
              >
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
