import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

const HomeHero = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Apple-style fluid easing
    },
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] flex items-center selection:bg-[#B70303] selection:text-white">

      {/* --- 1. CINEMATIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Buttery smooth endless zoom using Framer Motion instead of CSS */}
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=2000&auto=format&fit=crop"
          alt="Clinic Background"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
        />

        {/* Deep Black Vignette & Gradient Protection */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)] opacity-90" />
      </div>

      {/* --- 2. LUXURY AMBIENT BRAND GLOWS (No more gold/random colors) --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B70303]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B70303]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* --- 3. MAIN CONTENT LAYER --- */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle with Premium Red Accent Line */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 md:mb-8">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "3rem" }} 
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }} 
              className="h-[2px] bg-[#B70303] shadow-[0_0_10px_#B70303]" 
            />
            <span className="text-white font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
              Advanced care, visible results.
            </span>
          </motion.div>

          {/* Massive Editorial Title */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white font-bold leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
            Advanced GroHair & GloSkin <br className="hidden md:block" />
            <span className="text-[#B70303] italic font-light">
              Marthandam
            </span>
          </motion.h1>

          {/* Clean, High-Contrast Description */}
          <motion.p variants={itemVariants} className="text-gray-400 font-sans text-base md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
            Experience the pinnacle of clinical excellence. We provide world-class hair restoration and advanced skincare treatments tailored to your unique identity.
          </motion.p>

          {/* Action Area */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">

            {/* Primary CTA Button — Strict Brand Colors */}
            <motion.a 
              whileTap={{ scale: 0.98 }}
              href="#book" 
              className="group relative w-full sm:w-auto flex justify-center px-10 py-5 bg-[#B70303] text-white overflow-hidden rounded-[1rem] shadow-[0_10px_30px_rgba(183,3,3,0.3)] hover:shadow-[0_15px_40px_rgba(183,3,3,0.5)] transition-all duration-500 items-center gap-3 border-none"
            >
              <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-white transition-colors duration-500">
                Book an Appointment
              </span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>

            {/* Direct Helpline - Minimalist Luxury */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[#B70303] group-hover:border-[#B70303] group-hover:shadow-[0_0_20px_rgba(183,3,3,0.4)] transition-all duration-500">
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-1 group-hover:text-gray-300 transition-colors">Direct Helpline</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white font-serif tracking-tight text-xl md:text-2xl leading-none hover:text-[#B70303] transition-colors duration-300">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* --- 4. GLASSMORPHIC TRUST BADGE (Strict Red/Black/White) --- */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="hidden lg:flex absolute right-12 bottom-24 bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 flex-col gap-2 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-colors duration-500"
      >
        <div className="flex items-center gap-1 text-[#B70303] mb-2 group-hover:scale-105 origin-left transition-transform duration-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
        </div>
        <p className="text-white font-serif text-2xl leading-tight">Super Specialty <br />Clinic</p>
        <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mt-2">Marthandam's Premier Choice</p>
      </motion.div>

      {/* --- 5. ELEGANT SCROLL DOWN INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.4em] font-bold">Discover</span>
        <div className="w-[2px] h-12 md:h-16 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#B70303] rounded-full shadow-[0_0_10px_#B70303]"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HomeHero;