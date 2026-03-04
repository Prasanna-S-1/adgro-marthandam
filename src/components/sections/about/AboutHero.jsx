import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  // --- CINEMATIC PARALLAX ENGINE ---
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth movement for background and content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
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
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505] pt-[80px] selection:bg-[#B70303] selection:text-white"
    >
      {/* --- 1. ARCHITECTURAL BACKGROUND LAYER --- */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        style={{ y: backgroundY }}
      >
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop"
          alt="Clinic Ambience"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity scale-110"
        />

        {/* Triple-Layered Luxury Masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] opacity-80" />
      </motion.div>

      {/* Luxury Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B70303]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- 2. EDITORIAL CONTENT LAYER --- */}
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-5xl text-center flex flex-col items-center"
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Minimalist Breadcrumbs */}
        <motion.nav variants={itemVariants} className="flex items-center gap-3 mb-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-2xl">
          <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <ChevronRight size={12} className="text-[#B70303]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B70303]">
            Our Story
          </span>
        </motion.nav>

        {/* Editorial Brand Accent */}
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "4rem" }} 
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }} 
          className="h-[2px] bg-[#B70303] mb-8 shadow-[0_0_15px_#B70303]" 
        />

        {/* Massive Serif Title */}
        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-9xl font-serif text-white font-bold tracking-tighter leading-none mb-10">
          About <span className="italic font-light text-gray-400">Us.</span>
        </motion.h1>

        {/* High-Contrast Description */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed font-light">
            Discover the <span className="text-white font-medium italic">pinnacle of clinical excellence</span>. We combine artisanal aesthetic care with advanced USFDA technology to redefine transformation in Marthandam.
          </p>
        </motion.div>

      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
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