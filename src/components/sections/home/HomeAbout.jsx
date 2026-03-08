import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

// --- 1. IMPORT YOUR LOCAL IMAGES HERE ---
// Make sure the extensions (.jpg, .png, etc.) match exactly what is in your folder
import abtHome1 from '../../../assets/abthome.jpg';
import abtHome2 from '../../../assets/abthome2.jpg';

const HomeAbout = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS (MOBILE SAFE) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

  const slideRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const features = [
    "Customized Treatments for Skin & Hair Concerns",
    "Cutting-Edge Equipment & Safe Procedures",
    "Trusted by Clients Across Kanyakumari District"
  ];

  return (
    // FIX: Adjusted padding for mobile to prevent feeling cramped
    <section className="relative w-full py-20 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">

      {/* Subtle Background Structural Lines (Premium Editorial Feel) */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gray-200/50 z-0 hidden lg:block" />
      <div className="absolute top-0 right-2/3 w-[1px] h-full bg-gray-200/50 z-0 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* FIX: gap-y-24 on mobile prevents the overlapping image from touching the text */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-y-20 lg:gap-16 xl:gap-24 items-center">

          {/* =========================================
              LEFT COLUMN: LUXURY IMAGE COMPOSITION
          ========================================= */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // FIX: 0.1 amount ensures mobile triggers flawlessly
            className="relative w-full max-w-md mx-auto lg:max-w-full pb-8 lg:pb-0" // pb-8 gives room for the floating image on mobile
          >
            {/* Abstract Decorative Accent (Brand Red) */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 bg-[#B70303]/5 rounded-full blur-2xl z-0" />
            
            {/* Architectural Border Offset */}
            <div className="absolute inset-0 border-[2px] border-[#B70303]/10 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />

            {/* MAIN LARGE IMAGE */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] aspect-[4/5] w-[90%] md:w-[85%] border-[6px] md:border-[10px] border-white bg-white group">
              <img
                src={abtHome1}
                alt="Premium Clinic Experience"
                // object-[center_top] ensures faces/main subjects aren't cut off
                className="w-full h-full object-cover object-[center_top] scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent opacity-60" />
            </div>

            {/* OVERLAPPING SECONDARY IMAGE — Framed & Parallax */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              // FIX: Scaled perfectly for mobile so it doesn't break the screen width
              className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-6 w-[55%] md:w-[55%] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-20 border-[6px] md:border-[8px] border-white bg-white group"
            >
              <img
                src={abtHome2}
                alt="Advanced Dermatological Technology"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              />
            </motion.div>

            {/* FLOATING TRUST BADGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              // FIX: Kept tightly inside the bounding box on mobile
              className="absolute top-6 -right-2 md:top-10 md:-right-4 bg-white/95 backdrop-blur-md p-3 md:p-4 shadow-xl rounded-2xl border border-gray-100 z-30 flex items-center gap-3"
            >
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                 <ShieldCheck size={18} className="md:w-5 md:h-5" strokeWidth={2} />
               </div>
               <div>
                 <p className="text-[#050505] font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-none mb-1">Certified</p>
                 <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-light">Excellence</p>
               </div>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: STAGGERED CONTENT
          ========================================= */}
          <div className="w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              {/* Premium Kicker Line */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
                <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                  About Us
                </span>
              </motion.div>

              {/* Main Editorial Title */}
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#050505] font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
                Personalized Hair &amp; Skin Care Solutions in <br className="hidden lg:block" />
                <span className="italic text-[#B70303] font-light">Marthandam.</span>
              </motion.h2>

              {/* High-Contrast Description */}
              <motion.p variants={itemVariants} className="text-gray-600 font-sans text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-light">
                At AdGroHair &amp; GloSkin Marthandam, we bring expert care, advanced technology, and a passion for transformation together to help you look and feel your best. Every treatment is tailored to your unique identity, ensuring natural, lasting results.
              </motion.p>

              {/* Minimalist Premium Checklist */}
              <motion.ul variants={containerVariants} className="flex flex-col gap-5 md:gap-6 mb-12 border-l-[2px] border-gray-100 pl-5 md:pl-6">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#B70303]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B70303] transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B70303] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-[#050505] font-serif font-bold text-base md:text-lg tracking-wide group-hover:text-[#B70303] transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Magnetic CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="/about"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#050505] text-white rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(5,5,5,0.15)] hover:shadow-[0_20px_40px_rgba(183,3,3,0.2)] transition-all duration-500 border-none w-full sm:w-auto"
                >
                  <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-500">
                    Discover Our Clinic
                  </span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Brand Red Fill on Hover */}
                  <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </motion.a>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;