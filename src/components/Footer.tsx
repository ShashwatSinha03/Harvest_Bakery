"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream pt-32 pb-12 border-t border-roast/5">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-[18vw] md:text-[15vw] font-serif text-roast/5 leading-none tracking-tighter select-none mb-[-2vw]">
            Harvest
          </h2>
          <p className="text-gold text-sm tracking-[0.4em] uppercase">
            Baked daily with intention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-t border-roast/10 pt-12">
          <div className="text-left hidden md:block">
            <span className="text-roast/40 text-[10px] tracking-widest uppercase">Location</span>
            <p className="text-roast text-sm mt-2">124 Baker Street, Heritage District.</p>
          </div>

          <div className="flex justify-center gap-8">
            {["Home", "Menu", "Story", "Store", "FAQ", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-roast/60 text-[10px] tracking-widest uppercase hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-right hidden md:block">
            <span className="text-roast/40 text-[10px] tracking-widest uppercase">Contact</span>
            <p className="text-roast text-sm mt-2">hello@harvestbakery.com</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-roast/30">
          <span>© {currentYear} Harvest Bakery. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
