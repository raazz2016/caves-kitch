import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Utensils } from 'lucide-react';

const values = [
  { icon: <Utensils className="w-8 h-8 text-cave-gold" />, title: 'Quality', desc: 'We source only the finest, freshest ingredients for our dishes.' },
  { icon: <ShieldCheck className="w-8 h-8 text-cave-gold" />, title: 'Hygiene', desc: 'Maintaining the highest standards of cleanliness in our kitchen.' },
  { icon: <Heart className="w-8 h-8 text-cave-gold" />, title: 'Taste', desc: 'Crafting unforgettable flavors that linger in your memory.' },
  { icon: <Award className="w-8 h-8 text-cave-gold" />, title: 'Hospitality', desc: 'Treating every guest like family with warm, attentive service.' },
];

const chefs = [
  {
    name: 'Marco Rossi',
    title: 'Executive Chef',
    bio: 'With over 20 years of culinary experience across Europe and the US, Chef Marco brings a passion for authentic, robust flavors to Cave\'s Kitchen.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Elena Silva',
    title: 'Head Pastry Chef',
    bio: 'Elena crafts our exquisite desserts, combining classic techniques with modern twists to create the perfect sweet ending to your meal.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'David Chen',
    title: 'Sous Chef',
    bio: 'David specializes in our signature tacos and wood-fired pizzas, ensuring every dish leaving the kitchen meets our exacting standards.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=600',
  },
];

export function About() {
  return (
    <main className="min-h-screen bg-cave-black pt-40 md:pt-48 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-cave-gold font-serif italic text-xl tracking-widest">Our Heritage</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-cave-cream">The Story of Cave's Kitchen</h1>
              <div className="w-24 h-1 bg-cave-gold rounded-full" />
            </div>
            <div className="space-y-6 text-cave-cream/70 text-lg leading-relaxed font-light">
              <p>
                Founded in the heart of Hartford, Ohio, Cave's Kitchen began as a humble dream to create a space where exceptional food and warm hospitality meet. We envisioned a restaurant that wasn't just about eating, but about experiencing flavors that tell a story.
              </p>
              <p>
                Our journey started with a simple focus: mastering the art of the craft burger and authentic tacos. Over the years, we've expanded our menu to include wood-fired pizzas and exquisite desserts, always staying true to our core philosophy of using fresh, locally-sourced ingredients.
              </p>
              <p>
                Today, Cave's Kitchen stands as a beloved culinary destination, known for its cozy ambiance, generous portions, and a menu that caters to diverse palates. Whether you're here for a casual lunch or a celebratory dinner, we promise an unforgettable dining experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] lg:min-h-[600px] w-full"
          >
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoaahBq7u4wkA8GoAatrEa0oCpbJsw9KHGqYPWjW0y-7BIsgDWKrgiydtR-Abtiw2baKzB8u736_Hejo0NttYw8vDs588lXELIyOHoIiteOIqwuKBVfUZfMi_pt0_XzZSKVhbJC5yES-y1i=w243-h304-n-k-no-nu"
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cave-charcoal border-y border-cave-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cave-gold font-serif italic text-xl tracking-widest">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Core Values</h2>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cave-black p-8 rounded-2xl text-center space-y-6 border border-cave-cream/5 hover:border-cave-gold/20 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-cave-charcoal rounded-full flex items-center justify-center border border-cave-gold/20 shadow-[0_0_15px_rgba(212,167,69,0.1)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-cave-cream">{value.title}</h3>
                <p className="text-cave-cream/60 font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
      <section className="py-24 bg-cave-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cave-gold font-serif italic text-xl tracking-widest">The Masters</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Meet Our Chefs</h2>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group text-center space-y-6"
              >
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-cave-charcoal group-hover:border-cave-gold transition-colors duration-500">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-cave-cream">{chef.name}</h3>
                  <p className="text-cave-gold font-medium tracking-widest uppercase text-sm">{chef.title}</p>
                </div>
                <p className="text-cave-cream/60 font-light leading-relaxed max-w-sm mx-auto">
                  {chef.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
