import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const phoneNumber = '17408935017';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

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
            <span className="text-cave-gold font-serif italic text-xl tracking-widest block mb-4">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-cave-cream mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-cave-gold rounded-full mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cave-cream/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a question, feedback, or want to host a private event? We'd love to hear from you. Reach out to us using the form below or our contact details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <div className="bg-cave-charcoal p-8 rounded-2xl border border-cave-cream/5 shadow-2xl space-y-8">
              <h2 className="text-3xl font-serif font-bold text-cave-cream border-b border-cave-gold/20 pb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cave-black rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20 group-hover:bg-cave-gold transition-colors">
                    <MapPin className="w-6 h-6 text-cave-gold group-hover:text-cave-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Location</h3>
                    <p className="text-cave-cream/70 font-light leading-relaxed">
                      2 S Main St, Hartford,<br />
                      OH 43013, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cave-black rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20 group-hover:bg-cave-gold transition-colors">
                    <Phone className="w-6 h-6 text-cave-gold group-hover:text-cave-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Phone</h3>
                    <p className="text-cave-cream/70 font-light">
                      <a href="tel:+17408935017" className="hover:text-cave-gold transition-colors block mb-1">+1 740-893-5017</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cave-black rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20 group-hover:bg-cave-gold transition-colors">
                    <Mail className="w-6 h-6 text-cave-gold group-hover:text-cave-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Email</h3>
                    <p className="text-cave-cream/70 font-light">
                      <a href="mailto:hello@caveskitchen.com" className="hover:text-cave-gold transition-colors block">hello@caveskitchen.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cave-black rounded-full flex items-center justify-center shrink-0 border border-cave-gold/20 group-hover:bg-cave-gold transition-colors">
                    <Clock className="w-6 h-6 text-cave-gold group-hover:text-cave-black transition-colors" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-serif font-bold text-cave-cream mb-4">Hours</h3>
                    <ul className="space-y-3 w-full max-w-sm">
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Mon - Thu</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </li>
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Fri - Sat</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </li>
                      <li className="flex justify-between text-cave-cream/70 font-light border-b border-cave-cream/10 pb-2">
                        <span>Sunday</span>
                        <span>11:00 AM - 9:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-cave-black p-8 rounded-2xl border border-cave-gold/20 shadow-2xl flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-cave-cream mb-2">Quick Connect</h3>
                <p className="text-cave-cream/70 font-light text-sm">Need an immediate response? Chat with us.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 shrink-0"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-cave-charcoal p-8 md:p-12 rounded-2xl border border-cave-cream/10 shadow-2xl"
          >
            <h2 className="text-3xl font-serif font-bold text-cave-cream mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12">
                <div className="w-20 h-20 bg-cave-gold/20 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10 text-cave-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-cave-cream">Message Sent!</h3>
                <p className="text-cave-cream/70 font-light">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-cave-cream/80 text-sm font-medium tracking-wide">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-cave-cream/80 text-sm font-medium tracking-wide">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-cave-cream/80 text-sm font-medium tracking-wide">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-cave-cream/80 text-sm font-medium tracking-wide">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-cave-black border border-cave-cream/20 rounded-lg px-4 py-3 text-cave-cream focus:outline-none focus:border-cave-gold focus:ring-1 focus:ring-cave-gold transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-cave-gold text-cave-black hover:bg-cave-gold-light rounded-lg font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,167,69,0.2)] hover:shadow-[0_0_30px_rgba(212,167,69,0.4)] flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 h-[500px] rounded-2xl overflow-hidden border border-cave-cream/10 shadow-2xl"
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
    </main>
  );
}
