import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      {/* Subtle glow orb */}
      <div className="glow-orb-gold w-[400px] h-[400px] -bottom-32 -right-32 z-0" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] gradient-line" />
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Clear Your Doubts
            </span>
            <div className="w-10 h-[2px] gradient-line" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark font-bold">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold italic font-light">Questions</span>
          </h2>
        </motion.div>

        {/* --- ACCORDION LIST --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4"
        >
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ${isOpen
                    ? 'bg-brand-red/[0.02] shadow-glass'
                    : 'bg-white hover:shadow-glass border border-gray-100'
                  }`}
              >
                {/* Gradient left border when active */}
                {isOpen && (
                  <div className="absolute top-0 left-0 w-[3px] h-full gradient-line-v rounded-l-xl" />
                )}

                {/* Accordion Toggle Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans font-bold text-base md:text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-red' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>

                  {/* Gradient Rotating Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                      ? 'text-white rotate-45 shadow-glow-red'
                      : 'bg-gray-100 text-brand-dark'
                    }`}
                    style={isOpen ? { background: 'linear-gradient(135deg, var(--color-brand-red), var(--color-brand-gold))' } : {}}
                  >
                    <Plus size={16} />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                        <div className="w-full h-px bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-transparent mb-6" />
                        {faq.answer}
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