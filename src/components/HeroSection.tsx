"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-0"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-roast/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop"
          alt="Harvest Bakery Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 text-center text-cream">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block text-sm font-sans tracking-[0.3em] uppercase mb-8 text-cream/80">
            Est. 1923 — Handcrafted with Love
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[1.1] mb-12 px-4 md:px-0">
            Slow mornings.<br />
            Fresh bread.<br />
            Honest coffee.
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-cream text-roast rounded-full text-sm font-sans tracking-widest uppercase transition-colors hover:bg-beige"
            >
              View Menu
            </motion.a>
            <motion.a
              href="#store"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border border-cream text-cream rounded-full text-sm font-sans tracking-widest uppercase transition-all hover:bg-cream hover:text-roast"
            >
              Visit Store
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-cream/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream/60 to-transparent" />
      </motion.div>
    </section>
  );
}
