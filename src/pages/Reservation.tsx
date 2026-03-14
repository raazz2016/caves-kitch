import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, MessageCircle, CheckCircle2 } from 'lucide-react';

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: '',
    time: '',
    seating: 'No Preference',
    occasion: 'None',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const phoneNumber = '17408935017';
  const whatsappMessage = encodeURIComponent(`Hi! I'd like to reserve a table at Cave's Kitchen. Please assist me.`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

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
            <span className="text-cave-gold font-serif italic text-xl tracking-widest block mb-4">Join Us</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-cave-cream mb-6">Book a Table</h1>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cave-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Reserve your spot for an unforgettable dining experience. Choose to book online or contact us directly via WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Online Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 bg-cave-charcoal p-8 md:p-12 rounded-2xl border border-cave-cream/10 shadow-2xl"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-cave-cream">Reservation Confirmed!</h2>
                <p className="text-cave-cream/70 font-light max-w-md">
                  Thank you, {formData.name}. Your table for {formData.guests} on {formData.date} at {formData.time} has been successfully booked. We've sent a confirmation email to {formData.email}.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-transparent border border-cave-gold text-cave-gold hover:bg-cave-gold hover:text-cave-black rounded-full font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Details */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-cave-cream/80 text-sm font-medium tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-cave-cream/80 text-sm font-medium tracking-wide">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="email" className="text-cave-cream/80 text-sm font-medium tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-2 relative">
                    <label htmlFor="guests" className="text-cave-cream/80 text-sm font-medium tracking-wide">Number of Guests *</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cave-cream/50" />
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-cave-black border border-cave-cream/20 rounded-lg pl-12 pr-4 py-3 text-cave-cream appearance-none focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="20+">20+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <label htmlFor="date" className="text-cave-cream/80 text-sm font-medium tracking-wide">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cave-cream/50" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-cave-black border border-cave-cream/20 rounded-lg pl-12 pr-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <label htmlFor="time" className="text-cave-cream/80 text-sm font-medium tracking-wide">Preferred Time *</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cave-cream/50" />
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-cave-black border border-cave-cream/20 rounded-lg pl-12 pr-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="seating" className="text-cave-cream/80 text-sm font-medium tracking-wide">Seating Preference</label>
                    <select
                      id="seating"
                      name="seating"
                      value={formData.seating}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream appearance-none focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                    >
                      <option value="No Preference">No Preference</option>
                      <option value="Indoor">Indoor Dining</option>
                      <option value="Outdoor">Outdoor Patio</option>
                      <option value="Private Dining">Private Dining Room</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="occasion" className="text-cave-cream/80 text-sm font-medium tracking-wide">Special Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream appearance-none focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                    >
                      <option value="None">None</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Business Meeting">Business Meeting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="requests" className="text-cave-cream/80 text-sm font-medium tracking-wide">Special Requests / Dietary Requirements</label>
                    <textarea
                      id="requests"
                      name="requests"
                      rows={4}
                      value={formData.requests}
                      onChange={handleChange}
                      className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors resize-none"
                      placeholder="Let us know if you have any allergies or special requests..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cave-gold text-cave-black hover:bg-cave-gold-light rounded-lg font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,167,69,0.2)] hover:shadow-[0_0_30px_rgba(212,167,69,0.4)]"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>

          {/* WhatsApp / Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="bg-cave-charcoal p-8 rounded-2xl border border-cave-cream/10 shadow-2xl text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/30">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-cave-cream">Book via WhatsApp</h3>
                <p className="text-cave-cream/70 font-light text-sm">
                  Prefer a direct chat? Message us on WhatsApp to reserve your table instantly or ask any questions.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-lg font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Message Us
              </a>
            </div>

            <div className="bg-cave-black p-8 rounded-2xl border border-cave-gold/20 shadow-2xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-cave-gold border-b border-cave-gold/20 pb-4">Reservation Policy</h3>
              <ul className="space-y-4 text-cave-cream/70 font-light text-sm">
                <li className="flex gap-3">
                  <span className="text-cave-gold">•</span>
                  Reservations are held for 15 minutes past the booked time.
                </li>
                <li className="flex gap-3">
                  <span className="text-cave-gold">•</span>
                  For parties larger than 10, please contact us directly via phone or WhatsApp.
                </li>
                <li className="flex gap-3">
                  <span className="text-cave-gold">•</span>
                  A cancellation fee may apply for no-shows or cancellations within 24 hours for large groups.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
