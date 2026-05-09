"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream border-t border-roast/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Details */}
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-sm tracking-[0.3em] uppercase block mb-4"
            >
              Reach Out
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-roast mb-12"
            >
              Let's Share<br /> 
              a Moment.
            </motion.h2>

            <div className="space-y-12 mt-20">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-roast/10 flex items-center justify-center text-roast group-hover:bg-roast group-hover:text-cream transition-all duration-500">
                  <Camera size={24} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-roast/40 block mb-1">Follow Us</span>
                  <span className="text-xl font-serif text-roast">@harvestbakery_</span>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-roast/10 flex items-center justify-center text-roast group-hover:bg-roast group-hover:text-cream transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-roast/40 block mb-1">Email Us</span>
                  <span className="text-xl font-serif text-roast">hello@harvestbakery.com</span>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-roast/10 flex items-center justify-center text-roast group-hover:bg-roast group-hover:text-cream transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-roast/40 block mb-1">Call Us</span>
                  <span className="text-xl font-serif text-roast">+1 (555) 234-8901</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-roast p-8 md:p-16 rounded-[3rem] text-cream"
          >
            <h3 className="text-3xl font-serif mb-12">Send an Inquiry</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-cream/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Julian Harvest"
                    className="w-full bg-transparent border-b border-cream/20 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-cream/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="julian@example.com"
                    className="w-full bg-transparent border-b border-cream/20 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-cream/40">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-cream/20 py-4 text-cream focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                  <option className="bg-roast">General Inquiry</option>
                  <option className="bg-roast">Custom Cake Order</option>
                  <option className="bg-roast">Event Catering</option>
                  <option className="bg-roast">Press & Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-cream/40">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-cream/20 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-cream text-roast rounded-full text-sm tracking-widest uppercase font-sans font-bold hover:bg-gold transition-all duration-300 mt-12"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
