'use client';

export default function PackingServices() {
  const services = [
    {
      image: "https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-1-768x433.jpg.webp",
      title: "Co-Labeling",
      description: "All products sourced by Venture Tea are certified for Export quality and food safety standards."
    },
    {
      image: "https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-2-768x433.jpg.webp",
      title: "Co-Packing",
      description: "This is where we will use your products and to fill packaging designed for your brand and business. You can have our factory produce your goods for collection or direct export."
    },
    {
      image: "https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-30-768x432.jpg.webp",
      title: "Co-Manufacturing",
      description: "This is where we will take over the complete manufacturing process to deliver your blend of tea. This process is similar to the Private Label / White Label services we provide."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Tea Packing Factory
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700">
            Ceylon Tea Co-Packing centre in Colombo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
