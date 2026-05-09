"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you take brunch reservations?",
    answer: "We operate on a walk-in basis for brunch to keep the atmosphere casual and flowing. However, for groups of 6 or more, please call us 24 hours in advance.",
  },
  {
    question: "Can I order custom cakes for events?",
    answer: "Absolutely. Our pastry chefs love creating bespoke cakes for your special moments. We require at least 72 hours notice for custom orders.",
  },
  {
    question: "Are your ingredients organic?",
    answer: "Yes, 100%. We source our flour from local heritage mills and our dairy from organic farms within a 50-mile radius.",
  },
  {
    question: "Do you offer delivery services?",
    answer: "We focus on the in-store experience, but we do offer local delivery for large orders and catering events through our private courier.",
  },
  {
    question: "What are your peak brunch hours?",
    answer: "Peak hours are typically between 10am and 1pm on weekends. If you prefer a quieter experience, we recommend visiting on weekday mornings.",
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border-b border-roast/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-serif text-roast group-hover:text-gold transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-gold"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-roast/60 font-sans leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-cream">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase block mb-4">Common Enquiries</span>
            <h2 className="text-5xl md:text-6xl font-serif text-roast">Curiosities.</h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
