import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cave-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://i.ibb.co/j93hF9h7/Green-and-Brown-Minimalist-Studio-Logo-Design-Template.png" 
            alt="Cave's Kitchen Logo" 
            className="h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105 theme-logo-filter"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-widest uppercase transition-colors hover:text-cave-gold relative group',
                location.pathname === link.path ? 'text-cave-gold' : 'text-cave-cream/80'
              )}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1.5 left-0 h-[2px] bg-cave-gold transition-all duration-300',
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
          <Link
            to="/reservation"
            className="bg-cave-gold hover:bg-cave-gold-light text-cave-black px-6 py-2.5 rounded-full font-semibold tracking-wide transition-all hover:shadow-[0_0_15px_rgba(212,167,69,0.4)]"
          >
            Reserve a Table
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cave-cream hover:text-cave-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 bg-cave-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              'text-2xl font-serif tracking-widest uppercase transition-colors hover:text-cave-gold',
              location.pathname === link.path ? 'text-cave-gold' : 'text-cave-cream'
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/reservation"
          className="bg-cave-gold text-cave-black px-8 py-3 rounded-full font-semibold tracking-widest uppercase mt-4"
        >
          Reserve a Table
        </Link>
      </div>
    </header>
  );
}
