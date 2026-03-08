import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

// --- 1. IMPORT YOUR LOCAL IMAGES HERE ---
import hairImg from '../../../assets/hairrest.jpeg';
import skinImg from '../../../assets/skinrest.jpg';

// --- DATA ARCHITECTURE ---
const processData = [
  {
    id: "hair-process",
    title: "Hair Restoration Process",
    category: "Methodology",
    image: hairImg,
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
    image: skinImg,
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
  // --- ULTRA-PREMIUM ANIMATION PHYSICS (MOBILE SAFE) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // Switched to Vertical slide for guaranteed mobile rendering
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full py-20 md:py-32 bg-white overflow-hidden selection:bg-[#B70303] selection:text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col gap-24 md:gap-40">

        {processData.map((process, index) => {
          const isImageLeft = process.imagePosition === 'left';
          // Alternate the animation direction based on image position
          const imageAnimation = isImageLeft ? slideLeft : slideRight;

          return (
            <div
              key={process.id}
              // FIX: gap-y-12 ensures text doesn't crash into images on mobile
              className={`flex flex-col lg:flex-row items-center gap-y-12 lg:gap-16 xl:gap-24 ${!isImageLeft ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* =========================================
                  IMAGE COLUMN: LUXURY FRAMING
              ========================================= */}
              <motion.div
                variants={imageAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // FIX: 0.1 triggers flawlessly on mobile
                className="w-full lg:w-1/2 relative group"
              >
                {/* Scaled aspect ratio for perfect responsive framing */}
                <div className="relative w-[90%] md:w-[85%] lg:w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] z-10">
                  
                  {/* Architectural Offset Border - Scaled down slightly on mobile to prevent horizontal overflow */}
                  <div className={`absolute inset-0 border-[2px] border-[#B70303]/15 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3 ${isImageLeft ? 'translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6' : '-translate-x-3 translate-y-3 md:-translate-x-6 md:translate-y-6'}`} />

                  {/* Main Image Frame */}
                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[6px] md:border-[10px] border-white bg-white">
                    <img
                      src={process.image}
                      alt={process.title}
                      // FIX: object-[center_top] ensures the patient's face stays in frame even when cropped vertically
                      className="w-full h-full object-cover object-[center_top] scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent opacity-60" />
                  </div>

                  {/* Floating Premium Badge */}
                  <div className={`absolute -bottom-5 ${isImageLeft ? '-right-3 md:-right-6' : '-left-3 md:-left-6'} bg-white/95 backdrop-blur-md p-3 md:p-5 shadow-xl rounded-2xl border border-gray-100 z-20 flex items-center gap-3 group-hover:-translate-y-2 transition-transform duration-500`}>
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                       <ShieldCheck size={18} className="md:w-5 md:h-5" strokeWidth={2} />
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
              <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0">

                {/* Section Title & Accent */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
                    <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                      {process.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#050505] font-bold leading-[1.1] mb-12 md:mb-16 tracking-tight">
                    {process.title}.
                  </h2>
                </motion.div>

                {/* Unbreakable Flexbox Timeline */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
                        <div className="flex flex-col items-center mr-5 md:mr-8 relative z-10">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-[4px] border-gray-100 group-hover:border-[#B70303] group-hover:bg-[#B70303] transition-all duration-500 shadow-sm flex-shrink-0" />
                          {!isLast && (
                            <div className="w-[2px] h-full bg-gray-100 my-2 group-hover:bg-gradient-to-b group-hover:from-[#B70303]/50 group-hover:to-gray-100 transition-all duration-700" />
                          )}
                        </div>

                        {/* 2. The Content Block */}
                        <div className="pb-10 md:pb-16 flex flex-col relative w-full">
                          
                          {/* Ghost Number (Editorial background element) */}
                          <span className="absolute -top-5 -left-3 md:-top-6 md:-left-4 text-5xl md:text-7xl font-serif font-bold text-gray-50 group-hover:text-[#B70303]/5 transition-colors duration-500 pointer-events-none select-none z-0">
                            0{stepIndex + 1}
                          </span>

                          <h3 className="text-xl md:text-2xl font-serif text-[#050505] font-bold mb-2 md:mb-3 group-hover:text-[#B70303] transition-colors duration-300 relative z-10 pr-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light relative z-10 max-w-md pr-2">
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