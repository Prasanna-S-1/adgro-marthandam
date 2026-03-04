import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

const HomeAbout = () => {
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

  const features = [
    "Customized Treatments for Skin & Hair Concerns",
    "Cutting-Edge Equipment & Safe Procedures",
    "Trusted by Clients Across Kanyakumari District"
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">

      {/* Subtle Background Structural Lines (Premium Editorial Feel) */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gray-200/50 z-0 hidden lg:block" />
      <div className="absolute top-0 right-2/3 w-[1px] h-full bg-gray-200/50 z-0 hidden lg:block" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 md:gap-24 items-center">

          {/* =========================================
              LEFT COLUMN: LUXURY IMAGE COMPOSITION
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-auto lg:max-w-full"
          >
            {/* Abstract Decorative Accent (Brand Red) */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 bg-[#B70303]/5 rounded-full blur-2xl z-0" />
            <div className="absolute inset-0 border-[2px] border-[#B70303]/20 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 rounded-[2rem] -z-10" />

            {/* Main Large Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] w-[85%] border-[6px] md:border-[10px] border-white bg-white group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Premium Clinic Experience"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent opacity-60" />
            </div>

            {/* Overlapping Secondary Image — Framed */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-2 md:-bottom-12 md:-right-6 w-[55%] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-20 border-[6px] md:border-[8px] border-white bg-white group"
            >
              <img
                src="https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop"
                alt="Advanced Dermatological Technology"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out grayscale hover:grayscale-0"
              />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-10 -right-4 md:right-0 bg-white/95 backdrop-blur-md p-4 shadow-xl rounded-2xl border border-gray-100 z-30 flex items-center gap-3"
            >
               <div className="w-10 h-10 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                 <ShieldCheck size={20} strokeWidth={2} />
               </div>
               <div>
                 <p className="text-[#050505] font-bold text-[10px] uppercase tracking-widest leading-none mb-1">Certified</p>
                 <p className="text-gray-500 text-[9px] uppercase tracking-widest font-light">Excellence</p>
               </div>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: STAGGERED CONTENT
          ========================================= */}
          <div className="w-full pt-12 lg:pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              {/* Premium Kicker Line */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
                <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                  About Us
                </span>
              </motion.div>

              {/* Main Editorial Title (Fixed Ampersand Error) */}
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-5xl font-serif text-[#050505] font-bold leading-[1.15] mb-6 md:mb-8 tracking-tight">
                Personalized Hair &amp; Skin Care Solutions in <br className="hidden md:block" />
                <span className="italic text-[#B70303] font-light">Marthandam.</span>
              </motion.h2>

              {/* High-Contrast Description (Fixed Ampersand Error) */}
              <motion.p variants={itemVariants} className="text-gray-600 font-sans text-base md:text-lg leading-relaxed mb-10 font-light">
                At AdGroHair &amp; AdGloSkin Marthandam, we bring expert care, advanced technology, and a passion for transformation together to help you look and feel your best. Every treatment is tailored to your unique identity, ensuring natural, lasting results.
              </motion.p>

              {/* Minimalist Premium Checklist */}
              <motion.ul variants={containerVariants} className="flex flex-col gap-5 md:gap-6 mb-12 border-l-[2px] border-gray-100 pl-6">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#B70303]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B70303] transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 text-[#B70303] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
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
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#050505] text-white rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(5,5,5,0.15)] hover:shadow-[0_20px_40px_rgba(183,3,3,0.2)] transition-all duration-500 border-none"
                >
                  <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-500">
                    Discover Our Clinic
                  </span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Brand Red Fill on Hover */}
                  <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
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