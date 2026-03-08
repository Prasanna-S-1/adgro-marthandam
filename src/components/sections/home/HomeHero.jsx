import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. IMPORT YOUR LOCAL IMAGES HERE ---
// Using the correct folder path to reach your project's 'assets' directory
import heroBg1 from "../../../assets/glowskin.jpg";
import heroBg2 from "../../../assets/hero-1.jpg";

const HomeHero = () => {
  // --- STATE FOR IMAGE SLIDESHOW ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroBg1, heroBg2];

  // --- AUTOMATIC SLIDESHOW TIMER ---
  useEffect(() => {
    // Cycles the image every 4.5 seconds to allow for a slow, luxurious crossfade
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); 

    return () => clearInterval(intervalId); // Cleanup timer on component unmount
  }, [images.length]);

  // --- SUBTLE PREMIUM ANIMATIONS FOR TEXT REVEALS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Apple-style fluid easing
    },
  };

  return (
    // FIX 1: Reduced height on mobile. From h-[100dvh] to h-[65vh] md:h-[100dvh]
    <section className="relative h-[65vh] md:h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-[#050505] selection:bg-[#B70303] selection:text-white">

      {/* --- 1. CINEMATIC BACKGROUND SLIDESHOW LAYER --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex} // This key triggers the framer crossfade logic on change
            src={images[currentImageIndex]}
            alt="Advanced Clinical Care Marthandam"
            // FIX: Ensure object-center to keep faces framed on mobile crops
            className="absolute inset-0 w-full h-full object-cover object-center"
            // The Physics: Starts invisible, fades in while zooming, fades out smoothly
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" }, // 1.5 second buttery crossfade
              scale: { duration: 15, ease: "linear" } // Continuous 15-second slow zoom
            }}
          />
        </AnimatePresence>
        
        {/* Elegant Dark Overlays to ensure white text remains perfectly readable */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
      </div>

      {/* --- 2. CENTERED EDITORIAL CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-6 md:mt-12">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle - FIX: text-xs on mobile */}
          <motion.p variants={itemVariants} className="text-white text-xs md:text-base font-sans font-medium tracking-[0.2em] mb-4 md:mb-6 drop-shadow-md">
            Advanced care, visible results.
          </motion.p>

          {/* Main Title - FIX: text-4xl on the smallest screens, scaling up */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white font-normal leading-[1.1] tracking-tight drop-shadow-xl max-w-4xl">
            Advanced GroHair & GloSkin - <br className="hidden md:block" /> Marthandam
          </motion.h1>

          {/* Elegant Separator Line - FIX: w-8 on mobile */}
          <motion.div variants={itemVariants} className="w-8 md:w-12 h-[2px] bg-white/80 my-6 md:my-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

          {/* Premium CTA Button - FIX: scaled down padding and font-size on mobile */}
          <motion.a 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#book" 
            className="px-6 py-3 text-base md:px-10 md:py-4 bg-[#B70303] text-white rounded-full font-serif md:text-lg tracking-wide shadow-[0_10px_30px_rgba(183,3,3,0.4)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(183,3,3,0.6)] border border-transparent hover:border-white/20"
          >
            Book an Appointment
          </motion.a>

        </motion.div>
      </div>

    </section>
  );
};

export default HomeHero;