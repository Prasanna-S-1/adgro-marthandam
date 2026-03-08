import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. IMPORT YOUR LOCAL IMAGE HERE ---
// Ensure the path correctly points to your assets folder
import heroBg from '../../../assets/hero-2.jpg';

const AboutHero = () => {
  // --- CINEMATIC PARALLAX ENGINE ---
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth architectural movement for background and content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // --- LUXURY ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Apple-style fluid easing
    }
  };

  return (
    <section
      ref={ref}
      // Mobile height adjusted to 65vh, desktop to 75vh for an ultra-wide cinematic ratio
      className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505] pt-[60px] md:pt-[80px] selection:bg-[#B70303] selection:text-white"
    >
      {/* --- 1. ARCHITECTURAL BACKGROUND LAYER --- */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        style={{ y: backgroundY }}
      >
        {/* Continuous Breathing Zoom + Scroll Parallax */}
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src={heroBg}
          alt="AdGroHair & GloSkin Marthandam Ambience"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 grayscale mix-blend-luminosity"
        />

        {/* Triple-Layered Luxury Masking for Perfect Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] opacity-90" />
      </motion.div>

      {/* Luxury Ambient Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#B70303]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      {/* --- 2. EDITORIAL CONTENT LAYER --- */}
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-5xl text-center flex flex-col items-center"
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Minimalist Breadcrumbs */}
        <motion.nav variants={itemVariants} className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10 bg-white/5 backdrop-blur-md px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/10 shadow-2xl">
          <Link to="/" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <ChevronRight size={12} className="text-[#B70303]" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#B70303]">
            Our Story
          </span>
        </motion.nav>

        {/* Editorial Brand Accent */}
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "4rem" }} 
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }} 
          className="h-[2px] bg-[#B70303] mb-6 md:mb-8 shadow-[0_0_15px_#B70303]" 
        />

        {/* Massive Serif Title - Scaled for flawless mobile rendering */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-serif text-white font-bold tracking-tighter leading-none mb-8 md:mb-10">
          About <span className="italic font-light text-gray-400">Us.</span>
        </motion.h1>

        {/* High-Contrast Description */}
        <motion.div variants={itemVariants} className="max-w-3xl px-4 md:px-0">
          <p className="text-gray-400 text-base md:text-xl lg:text-2xl font-sans leading-relaxed font-light">
            Discover the <span className="text-white font-medium italic">pinnacle of clinical excellence</span>. We combine artisanal aesthetic care with advanced USFDA technology to redefine transformation in Marthandam.
          </p>
        </motion.div>

      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 z-20"
      >
        <div className="w-[1px] h-12 md:h-16 bg-white/10 relative overflow-hidden rounded-full">
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

export default AboutHero;