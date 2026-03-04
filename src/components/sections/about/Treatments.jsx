import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Treatments = () => {
  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const treatmentsData = [
    {
      title: "Hair Restoration",
      category: "Protocol 01",
      description: "Advanced clinical systems designed to revitalize follicle health and restore natural density through USFDA-approved methodologies.",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop",
      link: "/hair-treatment"
    },
    {
      title: "Dermal Aesthetics",
      category: "Protocol 02",
      description: "Precision skincare therapies engineered to brighten, nourish, and recalibrate your skin's natural luminosity and texture.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      link: "/skin-treatment"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none z-0">
        <h2 className="text-[20vw] font-serif font-black whitespace-nowrap uppercase tracking-tighter">
          EXCELLENCE
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* --- TREATMENTS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 md:mb-48"
        >
          {treatmentsData.map((treatment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col relative"
            >
              {/* Luxury Image Framing */}
              <div className="relative w-full aspect-[16/10] lg:aspect-[4/5] overflow-hidden mb-10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[8px] border-white group-hover:shadow-[0_40px_80px_rgba(183,3,3,0.15)] transition-all duration-700">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#050505]">
                    {treatment.category}
                  </p>
                </div>

                {/* Subtle Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Editorial Text Content */}
              <div className="flex flex-col items-start px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-[2px] bg-[#B70303]" />
                  <h3 className="text-3xl md:text-5xl font-serif text-[#050505] font-bold tracking-tight">
                    {treatment.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 font-sans text-lg leading-relaxed mb-10 max-w-md font-light">
                  {treatment.description}
                </p>

                {/* Magnetic Explore Link */}
                <Link
                  to={treatment.link}
                  className="group/link flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#050505] hover:text-[#B70303] transition-colors duration-500"
                >
                  Explore Program
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:border-[#B70303] group-hover/link:bg-[#B70303] group-hover/link:text-white transition-all duration-500">
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- LUXURY DARK CTA BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#050505] rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/5"
        >
          {/* Animated Brand Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B70303]/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-[0.3em] text-[9px] mb-8">
              <ShieldCheck size={14} className="text-[#B70303]" /> Priority Consultation
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white font-bold leading-[1.1] tracking-tight mb-8">
              Begin Your <br />
              <span className="italic font-light text-gray-500">Transformation.</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg md:text-xl max-w-lg font-light">
              Secure a private session with our lead specialists to engineer your bespoke clinical plan.
            </p>
          </div>

          {/* Action Button - Premium Sweep Effect */}
          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group/btn relative inline-flex w-full lg:w-auto justify-center items-center gap-4 px-12 py-6 bg-white text-[#050505] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border-none"
            >
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] group-hover/btn:text-white transition-colors duration-500">
                Book My Session
              </span>
              <Sparkles size={18} className="relative z-10 group-hover/btn:text-white transition-colors duration-500" />
              
              {/* Brand Red Fill on Hover */}
              <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Treatments;