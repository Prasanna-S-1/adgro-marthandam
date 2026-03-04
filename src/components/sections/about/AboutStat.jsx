import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- PREMIUM NUMBER COUNTER ENGINE ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 80,
  });

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Small delay to let the page settle before starting counter
      setTimeout(() => motionValue.set(value), 300);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref} className="tabular-nums">0</span>;
};

const AboutStat = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

  // --- STATS DATA ---
  const statsData = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 6000, suffix: "+", label: "Successful Treatments" },
    { value: 3000, suffix: "+", label: "Happy Clients" },
    { value: 1000, suffix: "+", label: "Skin Sessions" }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 bg-white overflow-hidden selection:bg-[#B70303] selection:text-white">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none z-0 overflow-hidden">
        <span className="absolute -right-20 top-0 text-[400px] font-serif font-black leading-none select-none">
          AG
        </span>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* --- TOP SECTION: MINIMALIST EDITORIAL TEXT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 mb-28 md:mb-40"
        >
          {/* Left Column: Authoritative Title */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-[#B70303]" />
              <span className="text-[#B70303] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Clinical Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#050505] font-bold leading-[1.1] tracking-tighter">
              A Legacy of <br />
              <span className="italic font-light text-gray-400">Clinical Transformation.</span>
            </h2>
          </motion.div>

          {/* Right Column: Sophisticated Description */}
          <motion.div variants={itemVariants} className="flex flex-col justify-end">
            <p className="text-gray-600 font-sans text-lg md:text-xl leading-relaxed lg:border-l-[1px] border-gray-100 lg:pl-12 py-4 font-light">
              At <span className="text-[#050505] font-medium">AdGro Marthandam</span>, we integrate artisanal clinical expertise with advanced USFDA technology to redefine the standards of dermatological care. Our mission is to provide an evidence-based pathway to confidence and natural beauty.
            </p>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM SECTION: ARCHITECTURAL STATS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center md:items-start text-center md:text-left group relative md:px-8 first:pl-0 last:pr-0"
            >
              {/* Minimalist Vertical Divider */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-100" />
              )}

              {/* Editorial Stat Number */}
              <div className="flex items-baseline text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 text-[#050505] tracking-tighter group-hover:text-[#B70303] transition-colors duration-500">
                <AnimatedCounter value={stat.value} />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-[#B70303] ml-1">{stat.suffix}</span>
              </div>

              {/* Refined Stat Label */}
              <p className="text-gray-500 font-bold uppercase tracking-[0.25em] text-[9px] md:text-[10px] group-hover:translate-x-1 transition-transform duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStat;