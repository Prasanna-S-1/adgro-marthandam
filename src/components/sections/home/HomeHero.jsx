import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

const HomeHero = () => {
  // --- ANIMATION VARIANTS ---
  // Controls the staggered entrance of the text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-brand-dark flex items-center">
      
      {/* --- 1. CINEMATIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-slow-zoom"
          // TEMPORARY IMAGE: High-end clinical aesthetics placeholder. Replace later.
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=2000&auto=format&fit=crop')` }} 
        />
        
        {/* Triple-Layered Gradient Protection for Text Readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent lg:hidden" />
      </div>

      {/* --- 2. MAIN CONTENT LAYER --- */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Subtitle with Red Accent Line */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-[2px] bg-brand-red" />
            <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">
              Advanced care, visible results.
            </span>
          </motion.div>

          {/* Massive Serif Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white font-bold leading-[1.05] tracking-tight mb-6">
            Advanced GroHair &amp; GloSkin <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold italic font-light">
              Marthandam
            </span>
          </motion.h1>

          {/* Description / Trust Text */}
          <motion.p variants={itemVariants} className="text-gray-300 font-sans text-sm md:text-lg max-w-xl leading-relaxed mb-10 md:mb-12">
            Experience the pinnacle of clinical excellence. We provide world-class hair restoration and advanced skincare treatments tailored to your unique identity.
          </motion.p>

          {/* Action Area (CTA & Contact) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
            
            {/* Primary CTA Button */}
            <a href="#book" className="btn-premium group w-full sm:w-auto justify-center bg-brand-red text-white border-brand-red hover:border-brand-red-dark hover:shadow-[0_10px_40px_-10px_rgba(211,47,47,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Book an Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>

            {/* Direct Helpline / Trust Signal */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Direct Helpline</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white font-medical font-bold text-lg leading-none hover:text-brand-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* --- 3. GLASSMORPHIC TRUST BADGE (Floating Right - Hidden on small mobile) --- */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="hidden lg:flex absolute right-12 bottom-24 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex-col gap-2 z-20 shadow-2xl"
      >
        <div className="flex items-center gap-1 text-brand-gold mb-1">
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
        </div>
        <p className="text-white font-serif text-lg leading-tight">Super Specialty <br/>Clinic</p>
        <p className="text-gray-400 text-xs tracking-wide">Marthandam's Premier Choice</p>
      </motion.div>

      {/* --- 4. SCROLL DOWN INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] text-white/50 uppercase tracking-[0.3em] font-bold">Discover</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-red"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HomeHero;