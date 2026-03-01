import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Treatments = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const treatmentsData = [
    {
      title: "Hair Treatments",
      description: "Advanced, personalized solutions to restore, strengthen, and rejuvenate your hair naturally.",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop",
      link: "/hair-treatment"
    },
    {
      title: "Skin Treatments",
      description: "Innovative skincare therapies that brighten, nourish, and renew your natural glow.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      link: "/skin-treatment"
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-orb-gold w-[400px] h-[400px] -top-32 right-0 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* --- TREATMENTS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-24 lg:mb-32"
        >
          {treatmentsData.map((treatment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 shadow-elevated">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient mesh overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Bottom gradient bar on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 gradient-line scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow items-start px-2">
                <h3 className="text-3xl font-serif text-brand-dark font-bold mb-4">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                  {treatment.description}
                </p>

                {/* Gradient Explore Button */}
                <a
                  href={treatment.link}
                  className="btn-gradient py-2.5 px-8 text-sm tracking-wide shadow-glow-red flex items-center gap-2"
                >
                  <span className="relative z-10">Explore</span>
                  <ArrowRight size={16} className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CTA BANNER --- */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full bg-[#FCF8F8] rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-glass border border-brand-red/5"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-[2rem] gradient-border pointer-events-none" />

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          {/* Text */}
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark font-bold tracking-tight mb-4">
              Book Your Consultation <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Today</span>
            </h2>
            <p className="text-gray-600 font-serif text-lg md:text-xl">
              Your journey to glowing skin and beautiful hair starts here!
            </p>
          </div>

          {/* Action Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="/contact"
              className="btn-gradient py-4 px-10 text-lg shadow-glow-red"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Treatments;