import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- PREMIUM NUMBER COUNTER COMPONENT ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: 3000
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const AboutStat = () => {
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

  // --- STATS DATA ---
  const statsData = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 6000, suffix: "+", label: "Successful Treatments" },
    { value: 3000, suffix: "+", label: "Happy Clients" },
    { value: 1000, suffix: "", label: "Skin Sessions Performed" }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      <div className="glow-orb-red w-[300px] h-[300px] -top-20 -left-20 z-0" />
      <div className="glow-orb-gold w-[250px] h-[250px] bottom-10 right-10 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* --- TOP SECTION: SPLIT EDITORIAL TEXT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24"
        >
          {/* Left Column: Title */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark font-bold leading-[1.2]">
              Welcome to Advanced GroHair &amp; GloSkin <br className="hidden md:block" />
              <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">— Marthandam</span>
            </h2>
            <div className="w-16 h-[3px] gradient-line mt-8 rounded-full" />
          </motion.div>

          {/* Right Column: Description */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 font-sans text-base md:text-lg leading-relaxed lg:border-l-2 lg:border-brand-red/20 lg:pl-10 py-2">
              At Adgro Skin &amp; Hair Clinic, we bring a unique blend of clinical expertise and advanced technology to provide evidence-based solutions for all your dermatological concerns. With a mission to restore confidence and enhance natural beauty, we stand as a symbol of trust, transparency, and transformation.
            </p>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM SECTION: ANIMATED STATS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group relative"
            >
              {/* Glassmorphic divider between columns (visible on md+) */}
              {index > 0 && (
                <div className="hidden md:block absolute -left-4 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              )}

              {/* Gradient Stat Number */}
              <div className="flex items-center text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 group-hover:scale-105 transition-transform duration-500 origin-bottom text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-brand-red-dark">
                <AnimatedCounter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>

              {/* Stat Label */}
              <p className="text-brand-dark font-sans font-medium text-sm md:text-base tracking-wide">
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