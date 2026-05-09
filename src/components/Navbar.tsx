"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Story", href: "#story" },
  { name: "Store", href: "#store" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-8 py-4 md:py-6",
          isScrolled 
            ? "bg-cream/80 backdrop-blur-md py-3 md:py-4 border-b border-roast/5" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="text-xl md:text-2xl font-serif tracking-tight text-roast">
            Harvest Bakery
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-widest uppercase text-roast/70 hover:text-roast transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 rounded-full border border-roast/20 text-sm font-sans tracking-widest uppercase hover:bg-roast hover:text-cream transition-all duration-300">
              Visit Us
            </button>
            
            <button 
              className="md:hidden text-roast p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-serif tracking-tight text-roast">
                Harvest Bakery
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-roast p-2"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-roast hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-roast/10">
              <p className="text-roast/60 text-sm font-sans mb-8">
                124 Baker Street, Heritage District.<br />
                hello@harvestbakery.com
              </p>
              <button className="w-full py-4 rounded-full bg-roast text-cream text-sm tracking-widest uppercase">
                Visit Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
