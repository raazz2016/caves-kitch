import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Star, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const signatureDishes = [
  {
    id: 1,
    name: 'The Caveman Burger',
    description: 'Double beef patty, smoked bacon, cheddar, caramelized onions, house BBQ sauce.',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Volcano Tacos',
    description: 'Three soft shell tacos, slow-cooked pulled pork, spicy slaw, jalapeño crema.',
    price: '$14.50',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Truffle Mushroom Pizza',
    description: 'Wood-fired crust, wild mushrooms, truffle oil, mozzarella, fresh thyme.',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  },
];

const features = [
  { icon: <CheckCircle2 className="w-8 h-8 text-cave-gold" />, title: 'Fresh Ingredients', desc: 'Sourced locally daily for maximum flavor.' },
  { icon: <Star className="w-8 h-8 text-cave-gold" />, title: 'Expert Chefs', desc: 'Culinary masters crafting every dish with passion.' },
  { icon: <Clock className="w-8 h-8 text-cave-gold" />, title: 'Fast Service', desc: 'Hot, fresh food served with a smile.' },
  { icon: <MapPin className="w-8 h-8 text-cave-gold" />, title: 'Cozy Ambiance', desc: 'A warm, inviting atmosphere for any occasion.' },
];

const testimonials = [
  { name: 'Sarah M.', text: 'They give so much meat on the tacos!! so worth the price!', rating: 5 },
  { name: 'John D.', text: 'Great food, great service, great place to hang out.', rating: 5 },
  { name: 'Emily R.', text: 'Tacos were superb, the burger was big and tasty, and excellent pizza.', rating: 5 },
];

export function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=2000"
            alt="Delicious craft burger"
            className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-100 saturate-125 z-0"
            referrerPolicy="no-referrer"
          />
          {/* Darker top/middle gradient, dark bottom for transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-cave-black/80 via-cave-black/50 to-cave-black z-10" />
          {/* Darker Spotlight effect to highlight the burger in the center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,10,0.8)_100%)] z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
          >
            <span className="text-cave-gold font-serif italic text-xl md:text-2xl tracking-widest block">
              Welcome to Cave's Kitchen
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cave-cream leading-tight tracking-tight drop-shadow-2xl">
              Where Every Bite <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cave-gold to-cave-gold-light drop-shadow-lg">
                Tells a Story
              </span>
            </h1>
            <p className="text-lg md:text-xl text-cave-cream/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-xl">
              Experience the finest craft burgers, authentic tacos, and wood-fired pizzas in a premium, cozy ambiance right in the heart of Hartford.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cave-gold text-cave-gold hover:bg-cave-gold hover:text-cave-black rounded-full font-semibold tracking-widest uppercase transition-all duration-300"
              >
                View Our Menu
              </Link>
              <Link
                to="/reservation"
                className="w-full sm:w-auto px-8 py-4 bg-cave-gold text-cave-black hover:bg-cave-gold-light rounded-full font-semibold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,167,69,0.3)] hover:shadow-[0_0_30px_rgba(212,167,69,0.5)]"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-24 bg-cave-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-cave-gold font-serif italic text-xl tracking-widest">Discover</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Our Story</h2>
                <div className="w-24 h-1 bg-cave-gold rounded-full" />
              </div>
              <p className="text-cave-cream/70 text-lg leading-relaxed font-light">
                Nestled in Hartford, OH, Cave's Kitchen started with a simple passion: bringing people together over extraordinary food. We believe in the power of fresh ingredients, bold flavors, and a welcoming atmosphere. From our towering craft burgers to our generously stuffed tacos, every dish is a testament to our culinary dedication.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-cave-gold hover:text-cave-gold-light font-medium tracking-wide uppercase group transition-colors"
              >
                Read Full Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cave-gold/10 rounded-2xl -rotate-3 scale-105 transition-transform hover:rotate-0 duration-500" />
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant Interior"
                className="relative z-10 w-full rounded-2xl shadow-2xl shadow-black/50 object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-cave-charcoal relative border-y border-cave-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cave-gold font-serif italic text-xl tracking-widest">Taste the Magic</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Signature Dishes</h2>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-cave-black rounded-2xl overflow-hidden border border-cave-cream/5 hover:border-cave-gold/30 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                </div>
                <div className="p-8 space-y-4 relative">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-serif font-bold text-cave-cream group-hover:text-cave-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-serif text-cave-gold font-bold">{dish.price}</span>
                  </div>
                  <p className="text-cave-cream/60 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-cave-gold hover:text-cave-gold-light font-medium tracking-wide uppercase group transition-colors"
            >
              Explore Full Menu
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cave-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cave-gold font-serif italic text-xl tracking-widest">Our Promise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Why Choose Us</h2>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cave-charcoal p-8 rounded-2xl text-center space-y-6 border border-cave-cream/5 hover:border-cave-gold/20 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-cave-black rounded-full flex items-center justify-center border border-cave-gold/20 shadow-[0_0_15px_rgba(212,167,69,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-cave-cream">{feature.title}</h3>
                <p className="text-cave-cream/60 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cave-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cave-burgundy/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-cave-gold font-serif italic text-xl tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cave-black p-8 rounded-2xl border border-cave-cream/5 relative"
              >
                <div className="text-6xl text-cave-gold/20 font-serif absolute top-4 right-6">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cave-gold text-cave-gold" />
                  ))}
                </div>
                <p className="text-cave-cream/80 font-light text-lg italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cave-charcoal rounded-full flex items-center justify-center text-cave-gold font-serif font-bold text-xl border border-cave-gold/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-cave-cream">{testimonial.name}</h4>
                    <span className="text-sm text-cave-cream/50">Google Review</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us & Hours */}
      <section className="py-24 bg-cave-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-cave-gold font-serif italic text-xl tracking-widest">Visit Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-cave-cream">Location & Hours</h2>
                <div className="w-24 h-1 bg-cave-gold rounded-full" />
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cave-charcoal rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20">
                    <MapPin className="w-6 h-6 text-cave-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Address</h3>
                    <p className="text-cave-cream/70 font-light leading-relaxed">
                      2 S Main St, Hartford,<br />
                      OH 43013, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cave-charcoal rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20">
                    <Clock className="w-6 h-6 text-cave-gold" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-4">Opening Hours</h3>
                    <ul className="space-y-3 w-full max-w-sm">
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Monday - Thursday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </li>
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Friday - Saturday</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </li>
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Sunday</span>
                        <span>11:00 AM - 9:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cave-charcoal rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20">
                    <Phone className="w-6 h-6 text-cave-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Contact</h3>
                    <p className="text-cave-cream/70 font-light">
                      <a href="tel:+17408935017" className="hover:text-cave-gold transition-colors block mb-1">+1 740-893-5017</a>
                      <a href="mailto:hello@caveskitchen.com" className="hover:text-cave-gold transition-colors block">hello@caveskitchen.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] rounded-2xl overflow-hidden border border-cave-cream/10 shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.231454559869!2d-82.6841121!3d40.2323714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8839d3c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s2%20S%20Main%20St%2C%20Hartford%2C%20OH%2043013%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
