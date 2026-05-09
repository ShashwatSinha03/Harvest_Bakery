"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Coffee, Users } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Artisanal Coffee",
    desc: "Single-origin beans roasted in small batches.",
  },
  {
    icon: Users,
    title: "Cozy Seating",
    desc: "Warm wooden nooks for reading and reflection.",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    desc: "Mon–Fri: 7am–6pm | Sat–Sun: 8am–5pm",
  },
  {
    icon: MapPin,
    title: "Our Location",
    desc: "124 Baker Street, Heritage District.",
  },
];

export default function StoreSection() {
  return (
    <section id="store" className="bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Experience Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 h-[350px] overflow-hidden rounded-[2rem]"
            >
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[234px] overflow-hidden rounded-[2rem]"
            >
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
                alt="Coffee Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="h-[234px] overflow-hidden rounded-[2rem]"
            >
              <img 
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2000&auto=format&fit=crop" 
                alt="Baker Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Store Details */}
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-sm tracking-[0.3em] uppercase block mb-4"
            >
              Visit the Sanctuary
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-serif text-roast mb-12 leading-tight"
            >
              A Home Away<br />
              From Home.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((f, index) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-beige/30 flex items-center justify-center text-gold">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-roast mb-2">{f.title}</h4>
                    <p className="text-roast/60 text-sm font-sans leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 p-8 bg-beige/20 rounded-[2rem] border border-beige/40"
            >
              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 animate-pulse" />
                <p className="text-roast text-sm font-sans leading-relaxed">
                  <span className="font-bold">Pro Tip:</span> Arrive before 9am to catch our signature Sourdough loaves fresh from the oven. They sell out fast.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
