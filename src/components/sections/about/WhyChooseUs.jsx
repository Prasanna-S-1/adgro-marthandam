import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck, FileText, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // --- FEATURES DATA ---
  const features = [
    {
      icon: <ClipboardList size={32} strokeWidth={1.2} />,
      title: "Expert Consultation",
      description: "Every treatment pathway begins with an exhaustive digital and clinical analysis by our leading specialists."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.2} />,
      title: "FDA-Approved Systems",
      description: "We utilize exclusively USFDA-cleared medical equipment, ensuring global safety standards for every procedure."
    },
    {
      icon: <FileText size={32} strokeWidth={1.2} />,
      title: "Bespoke Care",
      description: "No generic protocols. Every solution is mathematically tailored to your unique biological and aesthetic goals."
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.2} />,
      title: "Visible Transformation",
      description: "Witness measurable results backed by clinical evidence, restoring your natural confidence and glow."
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#050505] overflow-hidden selection:bg-[#B70303] selection:text-white">

      {/* Luxury Ambient Glows (Strict Brand Colors) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B70303]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-16 md:gap-24 items-center">

          {/* =========================================
              LEFT COLUMN: EDITORIAL TEXT
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-start"
          >
            {/* Minimalist Subtitle */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <motion.span 
                initial={{ width: 0 }} 
                whileInView={{ width: "3rem" }} 
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-[2px] bg-[#B70303]" 
              />
              <span className="text-[#B70303] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Clinical Excellence
              </span>
            </div>

            {/* Massive Serif Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.1] tracking-tight mb-8">
              Why <br className="hidden lg:block" />
              <span className="italic font-light text-gray-500">Choice Matters.</span>
            </h2>

            {/* High-Contrast Description */}
            <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed font-light max-w-md">
              At <strong className="text-white font-medium">Advanced GroHair &amp; GloSkin</strong>, we don't just offer treatments — we engineer complete clinical transformations.
            </p>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: ARCHITECTURAL FEATURE CARDS
          ========================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-[#B70303]/40 transition-all duration-500 flex flex-col items-start text-left overflow-hidden"
              >
                {/* Magnetic Hover Red Edge */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#B70303] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-[0_0_15px_#B70303]" />

                {/* Minimalist Icon */}
                <div className="relative mb-8 text-[#B70303] transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                  {/* Subtle pulsing glow behind icon on hover */}
                  <div className="absolute inset-0 bg-[#B70303]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Editorial Title */}
                <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-4 tracking-tight group-hover:text-[#B70303] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Refined Description */}
                <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Ghost Detail in background */}
                <span className="absolute -bottom-4 -right-2 text-6xl font-serif font-black text-white/[0.02] group-hover:text-[#B70303]/[0.05] transition-colors duration-500 select-none pointer-events-none">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;