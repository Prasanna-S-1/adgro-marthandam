import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
  // --- PARALLAX SCROLL PHYSICS ---
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Tracks from top of page to bottom of hero
  });

  // Moves the background image down slightly as the user scrolls down
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Fades out the text slightly as it scrolls up
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section 
      ref={ref}
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-dark pt-[80px]"
    >
      {/* --- 1. PARALLAX BACKGROUND LAYER --- */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        style={{ y: backgroundY }}
      >
        {/* Replace this URL with your actual dark, moody woman portrait image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop')` }}
        />
        
        {/* Multi-layered Gradient Mask for Text Readability & Mood */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-transparent to-brand-bg/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80" />
      </motion.div>

      {/* --- 2. CONTENT LAYER --- */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 max-w-4xl text-center flex flex-col items-center"
        style={{ opacity: textOpacity, y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Elegant Breadcrumb Navigation */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <a href="/" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-brand-gold transition-colors duration-300">
            Home
          </a>
          <ChevronRight size={14} className="text-brand-red" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            About Us
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold tracking-tight mb-6">
          About Us
        </motion.h1>

        {/* Subtitle / Decorative Line */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <div className="w-16 h-[2px] bg-brand-red" />
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl font-sans leading-relaxed">
            Discover the passion, technology, and clinical expertise behind Marthandam's premier destination for advanced hair and skin transformation.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutHero;