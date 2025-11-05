"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Christmas Collection – Gold Edition",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-01-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 2,
    name: "Christmas Collection – Red Edition",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-02-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 3,
    name: "Wreath of Winter",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-04-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 4,
    name: "Wreath of Peace",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-05-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 5,
    name: "Nativity Countdown",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-03-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 6,
    name: "The First Noel Calendar",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-07-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 7,
    name: "Christmas Story Book",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-08-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 8,
    name: "Gold Tea House",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-10-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 9,
    name: "White Tea House",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-09-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 10,
    name: "Green Tea House",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-11-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 11,
    name: "Red Tea House",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-12-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 12,
    name: "Christmas Eve Magic",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-13-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 13,
    name: "Winterberry Festive Blend",
    image: "https://venturetea.com/wp-content/uploads/2025/09/christmas-collection-14-300x300.jpg.webp",
    category: "Seasonal Collection",
  },
  {
    id: 14,
    name: "Tarlton Black Tea",
    image: "https://venturetea.com/wp-content/uploads/2025/09/enveloped-tea-collection-02-300x300.jpg.webp",
    category: "Envelope Tea Bag Collection",
  },
  {
    id: 15,
    name: "Tarlton Green Tea",
    image: "https://venturetea.com/wp-content/uploads/2025/09/enveloped-tea-collection-01-300x300.jpg.webp",
    category: "Envelope Tea Bag Collection",
  },
  {
    id: 16,
    name: "Fruit Assortment Tea",
    image: "https://venturetea.com/wp-content/uploads/2025/09/enveloped-tea-collection-03-300x300.jpg.webp",
    category: "Flavour Envelope Tea Bag Collection",
  },
  {
    id: 17,
    name: "Organic English Breakfast Tea",
    image: "https://venturetea.com/wp-content/uploads/2025/09/organic-tea-collection-02-300x300.jpg.webp",
    category: "Organic Tea Collection",
  },
  {
    id: 18,
    name: "Organic Ceylon Sencha Green Tea",
    image: "https://venturetea.com/wp-content/uploads/2025/09/organic-tea-collection-01-300x300.jpg.webp",
    category: "Organic Tea Collection",
  },
  {
    id: 19,
    name: "Peach Rooibos",
    image: "https://venturetea.com/wp-content/uploads/2025/09/pure-herbal-tea-collection-08-300x300.jpg.webp",
    category: "Herbal Tea Collection",
  },
  {
    id: 20,
    name: "New Beginnings",
    image: "https://venturetea.com/wp-content/uploads/2025/09/pure-herbal-tea-collection-07-300x300.jpg.webp",
    category: "Herbal Tea Collection",
  },
];

export default function ProductGrid() {
  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-black font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8">
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
          1
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
          2
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
          3
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
          4
        </button>
        <span className="text-gray-500 px-2">...</span>
        <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
          →
        </button>
      </div>
    </div>
  );
}
