import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../../data/siteConfig';

const TransformCTA = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- THE FLOATING CTA CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#F4F4F6] rounded-md md:rounded-lg p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-100"
        >
          
          {/* Subtle Decorative Accent inside the card */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red rounded-l-md md:rounded-l-lg" />

          {/* --- LEFT SIDE: THE HOOK --- */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-brand-dark font-bold leading-tight">
              Ready to book your consultation with an expert?
            </h2>
          </div>

          {/* --- RIGHT SIDE: THE ACTION --- */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end flex-shrink-0">
            <a 
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
              className="bg-[#c60202] text-white px-10 py-4 md:py-5 rounded-sm font-sans font-bold text-sm md:text-base tracking-[0.1em] uppercase shadow-clinical hover:bg-black hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300"
            >
              Call Now
            </a>
          </div>

        </motion.div>
      </div>

      {/* Subtle background texture to ground the floating card */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent -z-0" />
    </section>
  );
};

export default TransformCTA;