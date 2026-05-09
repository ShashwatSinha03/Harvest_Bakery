"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Pastries",
    title: "The Morning Croissant",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    category: "Cakes",
    title: "Heirloom Velvet Cake",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    category: "Brunch",
    title: "Sourdough Avocado",
    price: "$14.00",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    category: "Coffee",
    title: "Slow-Drip Harvest Brew",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-sm tracking-[0.3em] uppercase block mb-4"
            >
              Our Seasonal Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif text-roast"
            >
              Baked with Intention.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-roast/60 max-w-sm font-sans"
          >
            Every item in our menu is a result of years of refinement, sourced from organic local farmers and baked before the first light.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[300px]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-beige/30 min-h-[400px] md:min-h-0",
                item.className
              )}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roast/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </motion.div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-cream/80 text-xs tracking-widest uppercase block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-serif text-cream">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-cream/90 font-sans text-sm tracking-widest">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 rounded-full bg-roast text-cream text-sm tracking-widest uppercase hover:bg-gold transition-all duration-300"
          >
            Download Full Menu
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// Inline helper for tailwind classes (since I can't import cn easily in a standalone write_to_file unless I define it)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
