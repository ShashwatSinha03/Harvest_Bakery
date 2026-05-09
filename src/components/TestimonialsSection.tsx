"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The air here smells like childhood memories and warm butter. It's my favorite morning ritual.",
    author: "Elena Rossi",
    role: "Food Journalist",
  },
  {
    quote: "Finally, a bakery that understands the rhythm of bread. The sourdough is transformative.",
    author: "Marcello D.",
    role: "Local Architect",
  },
  {
    quote: "A sanctuary of calm in a busy city. The coffee is as honest as the people who serve it.",
    author: "Sarah Jenkins",
    role: "Artist",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-roast py-32 overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-gold/60 text-sm tracking-[0.3em] uppercase block mb-4">Voices of Harvest</span>
          <h2 className="text-4xl md:text-6xl font-serif text-cream">Quiet Appreciation.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-gold mb-8">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif text-cream/90 leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <cite className="not-italic block text-cream text-sm tracking-widest uppercase mb-1">
                  {t.author}
                </cite>
                <span className="text-gold/60 text-[10px] tracking-widest uppercase">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
