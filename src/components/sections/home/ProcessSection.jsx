import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

// --- DATA ARCHITECTURE ---
const processData = [
  {
    id: "hair-process",
    title: "Hair Restoration Process",
    category: "Methodology",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop",
    imagePosition: "left",
    steps: [
      {
        title: "Consultation & Planning",
        description: "Meet our expert for a personalized hair analysis and a bespoke treatment plan tailored strictly to your biological needs."
      },
      {
        title: "Treatment & Recovery",
        description: "Undergo a safe, doctor-led procedure using advanced micro-precision techniques, followed by a seamless recovery phase."
      },
      {
        title: "Growth & Final Results",
        description: "New hair integrates naturally within 3–4 months, culminating in a thicker, fuller, and permanent outcome by month 12."
      }
    ]
  },
  {
    id: "skin-process",
    title: "Skin Treatment Process",
    category: "Protocols",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    imagePosition: "right",
    steps: [
      {
        title: "Clinical Analysis",
        description: "Our dermatological experts evaluate your cellular skin health and recommend a targeted, evidence-based treatment plan."
      },
      {
        title: "Precision Execution",
        description: "Experience a safe, FDA-approved procedure utilizing cutting-edge aesthetics technology with zero downtime."
      },
      {
        title: "Results & Maintenance",
        description: "Witness visible, radiant improvements within weeks, sustained through our ongoing clinical care and maintenance guides."
      }
    ]
  }
];

const ProcessSection = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-white overflow-hidden selection:bg-[#B70303] selection:text-white">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-32 md:gap-40">

        {processData.map((process) => {
          const isImageLeft = process.imagePosition === 'left';

          return (
            <div
              key={process.id}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isImageLeft ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* =========================================
                  IMAGE COLUMN: LUXURY FRAMING
              ========================================= */}
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-square lg:aspect-[4/5] z-10">
                  
                  {/* Architectural Offset Border */}
                  <div className={`absolute inset-0 border-[2px] border-[#B70303]/20 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 ${isImageLeft ? 'translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8' : '-translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8'}`} />

                  {/* Main Image Frame */}
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] md:border-[10px] border-white bg-white">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent opacity-60" />
                  </div>

                  {/* Floating Premium Badge */}
                  <div className={`absolute -bottom-6 ${isImageLeft ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} bg-white/95 backdrop-blur-md p-4 md:p-5 shadow-xl rounded-2xl border border-gray-100 z-20 flex items-center gap-3 group-hover:-translate-y-2 transition-transform duration-500`}>
                     <div className="w-10 h-10 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                       <ShieldCheck size={20} strokeWidth={2} />
                     </div>
                     <div>
                       <p className="text-[#050505] font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-none mb-1">Clinical</p>
                       <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-light">{process.category}</p>
                     </div>
                  </div>

                </div>
              </motion.div>

              {/* =========================================
                  TEXT COLUMN: EDITORIAL TIMELINE
              ========================================= */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">

                {/* Section Title & Accent */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
                    <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                      {process.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif text-[#050505] font-bold leading-[1.1] mb-12 md:mb-16 tracking-tight">
                    {process.title}.
                  </h2>
                </motion.div>

                {/* Unbreakable Flexbox Timeline */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col"
                >
                  {process.steps.map((step, stepIndex) => {
                    const isLast = stepIndex === process.steps.length - 1;
                    
                    return (
                      <motion.div
                        key={stepIndex}
                        variants={stepVariants}
                        className="flex group relative"
                      >
                        {/* 1. The Timeline Node & Line */}
                        <div className="flex flex-col items-center mr-6 md:mr-8 relative z-10">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-[4px] border-gray-200 group-hover:border-[#B70303] group-hover:bg-[#B70303] transition-all duration-500 shadow-sm flex-shrink-0" />
                          {!isLast && (
                            <div className="w-[2px] h-full bg-gray-100 my-2 group-hover:bg-gradient-to-b group-hover:from-[#B70303]/50 group-hover:to-gray-100 transition-all duration-500" />
                          )}
                        </div>

                        {/* 2. The Content Block */}
                        <div className="pb-12 md:pb-16 flex flex-col relative">
                          
                          {/* Ghost Number (Editorial background element) */}
                          <span className="absolute -top-6 -left-4 text-6xl md:text-7xl font-serif font-bold text-gray-50 opacity-50 group-hover:text-[#B70303]/5 transition-colors duration-500 pointer-events-none select-none z-0">
                            0{stepIndex + 1}
                          </span>

                          <h3 className="text-xl md:text-2xl font-serif text-[#050505] font-bold mb-3 group-hover:text-[#B70303] transition-colors duration-300 relative z-10">
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light relative z-10 max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
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