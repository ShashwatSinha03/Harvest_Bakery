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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-8 py-6",
        isScrolled 
          ? "bg-cream/80 backdrop-blur-md py-4 border-b border-roast/5" 
          : "bg-transparent"
      )}
    >
      <div className="max-width-[1400px] mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif tracking-tight text-roast">
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

        <button className="hidden md:block px-6 py-2 rounded-full border border-roast/20 text-sm font-sans tracking-widest uppercase hover:bg-roast hover:text-cream transition-all duration-300">
          Visit Us
        </button>
      </div>
    </motion.nav>
  );
}
