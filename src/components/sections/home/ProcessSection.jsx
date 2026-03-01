import React from 'react';
import { motion } from 'framer-motion';

// --- DATA ARCHITECTURE ---
const processData = [
  {
    id: "hair-process",
    title: "Hair Restoration Process",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop",
    imagePosition: "left",
    steps: [
      {
        title: "Consultation & Planning",
        description: "Meet our expert for a personalized hair analysis and a treatment plan tailored to your needs."
      },
      {
        title: "Treatment & Recovery",
        description: "Undergo a safe, doctor-led procedure using advanced techniques, followed by a short recovery with simple aftercare."
      },
      {
        title: "Hair Growth & Final Results",
        description: "New hair starts growing naturally in 3–4 months, with a thicker, fuller, and permanent outcome by 12–18 months."
      }
    ]
  },
  {
    id: "skin-process",
    title: "Skin Treatment Process",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    imagePosition: "right",
    steps: [
      {
        title: "Consultation & Analysis",
        description: "Our expert evaluates your skin concerns and recommends a personalized treatment plan."
      },
      {
        title: "Treatment & Recovery",
        description: "Undergo a safe, dermatologist-approved procedure, followed by mild healing and simple aftercare."
      },
      {
        title: "Results & Maintenance",
        description: "Visible improvement in 2–4 weeks, with long-term glow achieved through ongoing care and maintenance."
      }
    ]
  }
];

const ProcessSection = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-24 lg:gap-40">

        {processData.map((process, index) => {
          const isImageLeft = process.imagePosition === 'left';

          return (
            <div
              key={process.id}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isImageLeft ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* --- IMAGE COLUMN --- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: isImageLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative w-[90%] md:w-[80%] lg:w-[90%] mx-auto aspect-square lg:aspect-[4/3] z-10">
                  {/* Glassmorphic offset background */}
                  <div className="absolute top-8 -left-8 md:-left-12 w-full h-full bg-white/60 backdrop-blur-sm rounded-2xl z-0 transition-transform duration-700 hover:-translate-x-2 hover:translate-y-2 border border-white/40 shadow-glass" />

                  {/* Main Image */}
                  <img
                    src={process.image}
                    alt={process.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-elevated z-10"
                  />
                </div>
              </motion.div>

              {/* --- TEXT COLUMN WITH STAGGERED STEPS --- */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">

                {/* Section Title & Gradient Divider */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold leading-tight mb-6">
                    {process.title}
                  </h2>
                  <div className="w-16 h-[3px] gradient-line mb-12 rounded-full" />
                </motion.div>

                {/* Staggered Process Steps with vertical connector */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col gap-10 relative"
                >
                  {/* Vertical Gradient Connector Line */}
                  <div className="absolute left-[9px] top-4 bottom-4 w-[2px] gradient-line-v opacity-20 rounded-full" />

                  {process.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      variants={stepVariants}
                      className="flex items-start gap-6 group relative"
                    >
                      {/* Gradient Ring Indicator */}
                      <div className="mt-1 flex-shrink-0 relative">
                        <div className="w-[18px] h-[18px] rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 z-10 relative"
                          style={{ border: '4px solid transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, var(--color-brand-red), var(--color-brand-gold))', backgroundOrigin: 'border-box', backgroundClip: 'content-box, border-box' }}
                        />
                        {/* Glow halo on hover */}
                        <div className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ boxShadow: '0 0 12px rgba(211, 47, 47, 0.3)' }}
                        />
                      </div>

                      {/* Step Text */}
                      <div className="flex flex-col">
                        <h3 className="text-xl font-serif text-brand-dark font-bold mb-2 group-hover:text-brand-red transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ProcessSection;