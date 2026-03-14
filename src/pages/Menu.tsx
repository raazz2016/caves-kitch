import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Leaf, Flame, WheatOff } from 'lucide-react';

const menuCategories = [
  'All',
  'Starters',
  'Burgers',
  'Tacos',
  'Pizza',
  'Desserts',
  'Beverages'
];

const menuItems = [
  {
    id: 1,
    name: 'Crispy Calamari',
    description: 'Lightly dusted calamari rings, served with house-made lemon garlic aioli.',
    price: '$12.00',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400',
    tags: []
  },
  {
    id: 2,
    name: 'Truffle Fries',
    description: 'Hand-cut fries tossed in truffle oil, parmesan, and fresh parsley.',
    price: '$8.50',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400',
    tags: ['vegetarian']
  },
  {
    id: 3,
    name: 'The Caveman Burger',
    description: 'Double beef patty, smoked bacon, cheddar, caramelized onions, house BBQ sauce.',
    price: '$16.99',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400',
    tags: []
  },
  {
    id: 4,
    name: 'Spicy Inferno Burger',
    description: 'Beef patty, pepper jack, jalapeños, habanero aioli, brioche bun.',
    price: '$15.50',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1594212691516-b6982e5d370f?auto=format&fit=crop&q=80&w=400',
    tags: ['spicy']
  },
  {
    id: 5,
    name: 'Volcano Tacos',
    description: 'Three soft shell tacos, slow-cooked pulled pork, spicy slaw, jalapeño crema.',
    price: '$14.50',
    category: 'Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400',
    tags: ['spicy']
  },
  {
    id: 6,
    name: 'Baja Fish Tacos',
    description: 'Beer-battered cod, pico de gallo, shredded cabbage, lime crema.',
    price: '$15.00',
    category: 'Tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=400',
    tags: []
  },
  {
    id: 7,
    name: 'Truffle Mushroom Pizza',
    description: 'Wood-fired crust, wild mushrooms, truffle oil, mozzarella, fresh thyme.',
    price: '$18.00',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400',
    tags: ['vegetarian']
  },
  {
    id: 8,
    name: 'Classic Margherita',
    description: 'San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil.',
    price: '$15.00',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400',
    tags: ['vegetarian']
  },
  {
    id: 9,
    name: 'Molten Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey center, served with vanilla bean ice cream.',
    price: '$9.00',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400',
    tags: ['vegetarian']
  },
  {
    id: 10,
    name: 'Craft Beer Flight',
    description: 'Selection of 4 local craft beers on tap.',
    price: '$12.00',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=400',
    tags: []
  }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

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
            <span className="text-cave-gold font-serif italic text-xl tracking-widest block mb-4">Discover Our</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-cave-cream mb-6">Culinary Menu</h1>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cave-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From our towering craft burgers to our generously stuffed tacos and wood-fired pizzas, every dish is crafted with passion and the finest ingredients.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {menuCategories.map((category) => (
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

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12 text-sm text-cave-cream/60 font-light">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-green-500" /> Vegetarian
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-500" /> Spicy
          </div>
          <div className="flex items-center gap-2">
            <WheatOff className="w-4 h-4 text-yellow-500" /> Gluten-Free
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex gap-6 bg-cave-charcoal p-6 rounded-2xl border border-cave-cream/5 hover:border-cave-gold/30 transition-colors group"
              >
                <div className="w-32 h-32 shrink-0 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl font-serif font-bold text-cave-cream group-hover:text-cave-gold transition-colors flex items-center gap-2">
                      {item.name}
                      {item.tags.includes('vegetarian') && <Leaf className="w-4 h-4 text-green-500" />}
                      {item.tags.includes('spicy') && <Flame className="w-4 h-4 text-red-500" />}
                      {item.tags.includes('gf') && <WheatOff className="w-4 h-4 text-yellow-500" />}
                    </h3>
                    <span className="text-lg font-serif text-cave-gold font-bold shrink-0">{item.price}</span>
                  </div>
                  <div className="w-full border-b border-dashed border-cave-cream/10 my-3" />
                  <p className="text-cave-cream/60 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
