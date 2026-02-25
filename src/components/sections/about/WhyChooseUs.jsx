import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck, FileText, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- FEATURES DATA ---
  const features = [
    {
      icon: <ClipboardList size={32} strokeWidth={1.5} />,
      title: "Expert Consultation",
      description: "Every treatment starts with in-depth analysis by specialists."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "FDA-Approved Equipment",
      description: "Advanced, safe, globally approved equipment."
    },
    {
      icon: <FileText size={32} strokeWidth={1.5} />,
      title: "Personalized Care",
      description: "Tailored solutions designed for your unique needs."
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: "Visible Results",
      description: "Rediscover your glow and confidence with our trusted care."
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#1a1a1a] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-2/5 flex flex-col items-start"
          >
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-400 font-sans text-sm tracking-wide">
                Your confidence deserves expert care.
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6">
              Why Choose Us
            </h2>

            {/* Red Divider */}
            <div className="w-16 h-[2px] bg-brand-red mb-8" />

            {/* Description */}
            <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed">
              At <strong className="text-white font-medium">Advanced GroHair &amp; GloSkin</strong>, we don’t just offer treatments — we deliver transformations.
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: FEATURE CARDS GRID --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group relative bg-[#262626] rounded-xl p-8 lg:p-10 border border-white/5 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-premium-hover flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                {/* Decorative corner accent on hover */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl" />

                {/* Icon */}
                <div className="mb-6 text-gray-300 group-hover:text-brand-red group-hover:scale-110 transition-all duration-500 origin-left">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-white font-bold mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;