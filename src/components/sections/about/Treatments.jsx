import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. IMPORT YOUR LOCAL IMAGES HERE ---
import hairTreatmentImg from '../../../assets/hair-mar.jpg';
import skinTreatmentImg from '../../../assets/skin-mar.jpg';

const Treatments = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS (MOBILE SAFE) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

  const treatmentsData = [
    {
      title: "Hair Restoration",
      category: "Protocol 01",
      description: "Advanced clinical systems designed to revitalize follicle health and restore natural density through USFDA-approved methodologies.",
      image: hairTreatmentImg,
      link: "/hair-treatment"
    },
    {
      title: "Dermal Aesthetics",
      category: "Protocol 02",
      description: "Precision skincare therapies engineered to brighten, nourish, and recalibrate your skin's natural luminosity and texture.",
      image: skinTreatmentImg,
      link: "/skin-treatment"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">
      
      {/* Background Watermark (Premium Editorial Element) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none z-0">
        <h2 className="text-[25vw] md:text-[20vw] font-serif font-black whitespace-nowrap uppercase tracking-tighter">
          EXCELLENCE
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* --- TREATMENTS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // FIX: 0.1 guarantees mobile scroll triggers
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 mb-24 md:mb-48"
        >
          {treatmentsData.map((treatment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col relative"
            >
              {/* Luxury Image Framing */}
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden mb-8 md:mb-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[6px] md:border-[10px] border-white group-hover:shadow-[0_40px_80px_rgba(183,3,3,0.15)] transition-all duration-700 bg-gray-100">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  // FIX: object-[center_top] ensures faces aren't chopped off on mobile aspect ratios
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-[2000ms] ease-[0.16,1,0.3,1] group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-5 left-5 md:top-8 md:left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-xl group-hover:-translate-y-1 transition-transform duration-500">
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#050505]">
                    {treatment.category}
                  </p>
                </div>

                {/* Subtle Brand Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Editorial Text Content */}
              <div className="flex flex-col items-start px-2 md:px-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 md:w-10 h-[2px] bg-[#B70303] group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#050505] font-bold tracking-tight group-hover:text-[#B70303] transition-colors duration-500">
                    {treatment.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 font-sans text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md font-light pr-4">
                  {treatment.description}
                </p>

                {/* Magnetic Explore Link */}
                <Link
                  to={treatment.link}
                  className="group/link flex items-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-[#050505] hover:text-[#B70303] transition-colors duration-500"
                >
                  Explore Program
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:border-[#B70303] group-hover/link:bg-[#B70303] group-hover/link:text-white transition-all duration-500 shadow-sm">
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- LUXURY DARK CTA BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} // FIX: 0.1 guarantees mobile scroll triggers
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#050505] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-white/5"
        >
          {/* Animated Brand Glow */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#B70303]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[9px] mb-6 md:mb-8">
              <ShieldCheck size={14} className="text-[#B70303]" /> Priority Consultation
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
              Begin Your <br />
              <span className="italic font-light text-gray-400">Transformation.</span>
            </h2>
            <p className="text-gray-400 font-sans text-base md:text-xl max-w-lg font-light leading-relaxed">
              Secure a private session with our lead specialists to engineer your bespoke clinical plan.
            </p>
          </div>

          {/* Action Button - Premium Sweep Effect */}
          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group/btn relative inline-flex w-full sm:w-auto justify-center items-center gap-4 px-10 md:px-14 py-5 md:py-7 bg-white text-[#050505] rounded-[1.2rem] md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border-none cursor-pointer"
            >
              <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] group-hover/btn:text-white transition-colors duration-500">
                Book My Session
              </span>
              <Sparkles size={18} className="relative z-10 group-hover/btn:text-white transition-colors duration-500" />
              
              {/* Brand Red Fill on Hover */}
              <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Treatments;