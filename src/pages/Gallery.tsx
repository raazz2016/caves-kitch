import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

const galleryCategories = ['All', 'Food', 'Interior', 'Events'];

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', category: 'Food', alt: 'Burger' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800', category: 'Interior', alt: 'Restaurant Interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800', category: 'Food', alt: 'Tacos' },
  { id: 4, src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800', category: 'Food', alt: 'Pizza' },
  { id: 5, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', category: 'Interior', alt: 'Bar Area' },
  { id: 6, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Events', alt: 'Event Setup' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800', category: 'Food', alt: 'Dessert' },
  { id: 8, src: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaahBq7u4wkA8GoAatrEa0oCpbJsw9KHGqYPWjW0y-7BIsgDWKrgiydtR-Abtiw2baKzB8u736_Hejo0NttYw8vDs588lXELIyOHoIiteOIqwuKBVfUZfMi_pt0_XzZSKVhbJC5yES-y1i=w243-h304-n-k-no-nu', category: 'Interior', alt: 'Dining Area' },
  { id: 9, src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800', category: 'Events', alt: 'Live Music' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-cave-black pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cave-gold font-serif italic text-xl tracking-widest block mb-4">Visual Journey</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-cave-cream mb-6">Our Gallery</h1>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cave-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore the vibrant atmosphere, exquisite dishes, and memorable moments captured at Cave's Kitchen.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-6 py-2 rounded-full font-medium tracking-wide uppercase text-sm transition-all duration-300',
                activeCategory === category
                  ? 'bg-cave-gold text-cave-black shadow-[0_0_15px_rgba(212,167,69,0.4)]'
                  : 'bg-cave-charcoal text-cave-cream/70 hover:bg-cave-charcoal/80 hover:text-cave-gold border border-cave-cream/10'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="absolute inset-0 bg-cave-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-cave-black/40 backdrop-blur-sm">
                  <span className="text-cave-gold font-serif text-xl font-bold tracking-widest uppercase border border-cave-gold px-6 py-2 rounded-full">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cave-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-cave-cream hover:text-cave-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl shadow-black/50 object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
