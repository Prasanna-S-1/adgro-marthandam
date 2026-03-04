import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

const TransformCTA = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B70303] selection:text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">

        {/* --- THE FLOATING CTA CARD (DARK LUXURY) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style fluid easing
          className="relative bg-[#050505] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden group border border-white/5"
        >

          {/* --- AMBIENT LUXURY GLOWS --- */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B70303]/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Architectural Edge Highlight */}
          <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-[#B70303] shadow-[0_0_20px_#B70303]" />

          {/* --- LEFT SIDE: THE EDITORIAL HOOK --- */}
          <div className="relative z-10 w-full md:w-2/3 text-center md:text-left pl-0 md:pl-6">
            
            <span className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[9px] mb-6 md:mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#B70303] animate-pulse shadow-[0_0_10px_#B70303]" /> Priority Access
            </span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-[1.1] tracking-tight">
              Ready to book your consultation <br className="hidden md:block" />
              <span className="italic text-gray-500 font-light">with an expert?</span>
            </h2>
          </div>

          {/* --- RIGHT SIDE: MAGNETIC ACTION --- */}
          <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end flex-shrink-0">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href={`tel:${siteConfig?.phone?.replace(/\s+/g, '') || '+919786856789'}`}
              className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-white text-[#050505] rounded-xl md:rounded-[1.25rem] overflow-hidden shadow-[0_15px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all duration-500 w-full md:w-auto border-none"
            >
              <PhoneCall size={18} className="relative z-10 group-hover/btn:text-white transition-colors duration-500" strokeWidth={2} />
              
              <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover/btn:text-white transition-colors duration-500">
                Call Clinic Now
              </span>
              
              {/* Brand Red Swipe Fill on Hover */}
              <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TransformCTA;