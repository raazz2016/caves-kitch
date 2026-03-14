import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cave-charcoal pt-20 pb-10 border-t border-cave-gold/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="https://i.ibb.co/j93hF9h7/Green-and-Brown-Minimalist-Studio-Logo-Design-Template.png" 
                alt="Cave's Kitchen Logo" 
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105 theme-logo-filter"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-cave-cream/70 leading-relaxed font-light">
              Where Every Bite Tells a Story. Experience the finest craft burgers, authentic tacos, and wood-fired pizzas in a premium, cozy ambiance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cave-black flex items-center justify-center text-cave-gold hover:bg-cave-gold hover:text-cave-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cave-black flex items-center justify-center text-cave-gold hover:bg-cave-gold hover:text-cave-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cave-black flex items-center justify-center text-cave-gold hover:bg-cave-gold hover:text-cave-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cave-black flex items-center justify-center text-cave-gold hover:bg-cave-gold hover:text-cave-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-cave-gold tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Gallery', 'About Us', 'Reservation', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-cave-cream/70 hover:text-cave-gold transition-colors font-light"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-cave-gold tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cave-cream/70 font-light">
                <MapPin className="w-5 h-5 text-cave-gold shrink-0 mt-0.5" />
                <span>2 S Main St, Hartford,<br />OH 43013, United States</span>
              </li>
              <li className="flex items-center gap-3 text-cave-cream/70 font-light">
                <Phone className="w-5 h-5 text-cave-gold shrink-0" />
                <a href="tel:+17408935017" className="hover:text-cave-gold transition-colors">+1 740-893-5017</a>
              </li>
              <li className="flex items-center gap-3 text-cave-cream/70 font-light">
                <Mail className="w-5 h-5 text-cave-gold shrink-0" />
                <a href="mailto:hello@caveskitchen.com" className="hover:text-cave-gold transition-colors">hello@caveskitchen.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-cave-gold tracking-wide">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                <span>Mon - Thu</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                <span>Fri - Sat</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                <span>Sunday</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cave-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cave-cream/50 text-sm font-light">
            &copy; {new Date().getFullYear()} Cave's Kitchen. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cave-cream/50 font-light">
            <Link to="/privacy" className="hover:text-cave-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cave-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
