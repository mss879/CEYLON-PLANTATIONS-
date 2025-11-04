"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  {
    id: "001",
    title: "PRIVATE LABEL (OEM) TEA",
    description:
      "Custom tea blending and packaging solutions tailored to your brand specifications. We help you create unique tea products that stand out in the market.",
    categories: [
      "Custom blending",
      "Brand packaging",
      "Recipe development",
      "Quality assurance",
      "Market research",
      "Certification support",
    ],
    categoryCount: "6+",
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "002",
    title: "BULK TEA EXPORTS",
    description:
      "Premium quality tea in bulk quantities for distributors and retailers worldwide. Sourced from the finest tea gardens with complete supply chain management.",
    categories: [
      "Black tea",
      "Green tea",
      "Oolong tea",
      "White tea",
      "Herbal blends",
      "Specialty teas",
    ],
    categoryCount: "6+",
    images: [
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1597318165126-05c3fdf8c187?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563822249366-3efcc6fdd9e2?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "003",
    title: "CO-PACKING TEA",
    description:
      "Comprehensive co-packing services from sourcing to final packaging. We handle the entire production process while you focus on growing your brand.",
    categories: [
      "Tea bag production",
      "Loose leaf packaging",
      "Tin packaging",
      "Pouch packaging",
      "Gift sets",
      "Private labeling",
    ],
    categoryCount: "6+",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=400&h=400&fit=crop",
    ],
  },
];

export default function ServicesSection() {
  const [openService, setOpenService] = useState<string | null>("001");

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-0.5 h-6 bg-white absolute" />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm md:text-base font-semibold tracking-tight"
            >
              What we do
            </motion.p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            >
              Services.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block text-white text-2xl md:text-3xl font-semibold tracking-tight"
            >
              (3)
            </motion.div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const isOpen = openService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-4 group hover:bg-white/5 transition-colors px-4 md:px-6"
                >
                  <div className="flex items-center gap-4 md:gap-8 flex-1">
                    <span
                      className={`text-sm font-semibold tracking-tight transition-opacity ${
                        isOpen ? "text-white opacity-100" : "text-white/40"
                      }`}
                    >
                      ({service.id})
                    </span>
                    <h3
                      className={`text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-left transition-opacity ${
                        isOpen ? "text-white opacity-100" : "text-white/60"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 0 : 270 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-8 md:pb-12">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                          {/* Left Column - Images and Info */}
                          <div className="space-y-6">
                            {/* Images */}
                            <div className="flex gap-3">
                              {service.images.map((image, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className={`relative rounded-xl overflow-hidden ${
                                    idx === 0
                                      ? "w-20 h-20"
                                      : "w-20 h-20 shadow-lg"
                                  }`}
                                  style={{
                                    transform: `translateX(-${idx * 8}px)`,
                                    zIndex: service.images.length - idx,
                                  }}
                                >
                                  <img
                                    src={image}
                                    alt={`${service.title} ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              ))}
                            </div>

                            {/* Service Info */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="space-y-3"
                            >
                              <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                {service.title}
                              </h4>
                              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                {service.description}
                              </p>
                            </motion.div>
                          </div>

                          {/* Right Column - Categories */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                          >
                            <p className="text-white/60 text-sm font-semibold tracking-tight">
                              Categories
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.categories.map((category, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + idx * 0.05 }}
                                  className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-tight"
                                >
                                  {category}
                                </motion.div>
                              ))}
                              <div className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold tracking-tight">
                                {service.categoryCount}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 flex justify-center md:justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-lg tracking-tight overflow-hidden"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -50 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              Get started
            </motion.span>
            <motion.span
              initial={{ x: 50, opacity: 0, position: "absolute" }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              Get started
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
