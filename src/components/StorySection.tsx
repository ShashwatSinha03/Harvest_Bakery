"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="py-0 overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Story Text */}
        <div className="w-full md:w-1/2 bg-cream flex items-center justify-center p-8 md:p-24">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-sm tracking-[0.3em] uppercase block mb-8"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-roast leading-tight mb-12"
            >
              Every loaf is baked<br /> 
              <span className="italic">before sunrise.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8 text-roast/70 font-sans leading-relaxed text-lg"
            >
              <p>
                Harvest Bakery began as a small family oven in 1923. For over a century, we have remained committed to the simple philosophy of "Slow Food." 
              </p>
              <p>
                We believe that the best bread takes time. Our sourdough starters have been nurtured for generations, and our grains are milled daily to preserve their organic integrity.
              </p>
              <p>
                Walking into Harvest is like stepping into a slower era. A place where the smell of yeast and roasting coffee beans creates a sanctuary for the morning soul.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex items-center gap-6"
            >
              <div className="w-16 h-[1px] bg-gold" />
              <span className="text-sm tracking-widest uppercase font-serif italic text-roast">
                Founder, Julian Harvest
              </span>
            </motion.div>
          </div>
        </div>

        {/* Story Image */}
        <div className="w-full md:w-1/2 relative min-h-[500px]">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2000&auto=format&fit=crop"
              alt="Baker at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-roast/10" />
          </motion.div>
          
          {/* Subtle Floating Card Overlay */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-12 right-12 bg-cream p-10 rounded-[2rem] shadow-2xl max-w-xs hidden lg:block border border-beige/30"
          >
            <span className="text-gold text-[10px] tracking-widest uppercase block mb-4">Quality Promise</span>
            <p className="text-roast text-sm font-sans italic leading-relaxed">
              "We never use additives or shortcuts. If it doesn't take 24 hours to ferment, it's not a Harvest loaf."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
