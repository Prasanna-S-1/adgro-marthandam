import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// --- EXACT FAQ DATA ---
const faqData = [
  {
    question: "Are the treatments safe and suitable for all skin types?",
    answer: "Yes, all our treatments—from laser hair reduction to chemical peels and Platelet-Rich Plasma are clinically tested, FDA-approved, and customized to suit individual skin and scalp types for maximum safety and effectiveness."
  },
  {
    question: "What Hair Restoration solutions do you provide?",
    answer: "We offer Platelet-Rich Plasma Pro+, Mesotherapy, Oxygen Laser Therapy, FUE hair transplants, cosmetic hair systems, beard & eyebrow transplants, and scalp micropigmentation—designed for both men and women with different levels of hair loss."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can easily book an appointment through our website's booking page, by calling our clinic directly, or via WhatsApp support. Walk-ins are welcome based on slot availability."
  },
  {
    question: "How long do the treatments take and is there any downtime?",
    answer: "Treatment durations vary depending on the service. Most sessions like Platelet-Rich Plasma or Laser Therapy take 30–60 minutes. Non-Invasive procedures have no downtime, while Hair Restoration Services may require 2–5 days of recovery. We always ensure minimal disruption to your routine."
  }
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">
      
      {/* Subtle Brand Watermark Background */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 text-[300px] font-serif font-black text-gray-100 opacity-40 select-none pointer-events-none tracking-tighter leading-none mix-blend-multiply hidden lg:block z-0">
        FAQ
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <div className="w-12 h-[2px] bg-[#B70303]" />
            <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
              Clear Your Doubts
            </span>
            <div className="w-12 h-[2px] bg-[#B70303]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#050505] font-bold tracking-tight">
            Patient <span className="italic text-gray-400 font-light">Inquiries.</span>
          </h2>
        </motion.div>

        {/* --- LUXURY ACCORDION LIST --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col border-t-[2px] border-[#050505]"
        >
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-b border-gray-200 transition-all duration-500 ${
                  isOpen ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] my-4 px-2 md:px-4 rounded-2xl border-transparent' : 'bg-transparent'
                }`}
              >
                {/* Accordion Toggle Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group ${!isOpen && 'px-2 md:px-4'}`}
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif font-bold text-lg md:text-2xl lg:text-3xl pr-6 md:pr-12 transition-colors duration-500 leading-snug ${
                    isOpen ? 'text-[#B70303]' : 'text-[#050505] group-hover:text-[#B70303]'
                  }`}>
                    {faq.question}
                  </span>

                  {/* Elegant Icon Transition */}
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 flex items-center justify-center ${
                    isOpen 
                      ? 'bg-[#B70303] border-[#B70303] text-white shadow-[0_0_15px_rgba(183,3,3,0.3)] rotate-180' 
                      : 'border-gray-300 text-gray-400 group-hover:border-[#050505] group-hover:text-[#050505]'
                  }`}>
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 md:px-4 pb-8 md:pb-10 pt-2">
                        <p className="text-gray-600 font-sans text-base md:text-lg leading-relaxed font-light pl-4 md:pl-6 border-l-[2px] border-[#B70303]/30 italic max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeFAQ;