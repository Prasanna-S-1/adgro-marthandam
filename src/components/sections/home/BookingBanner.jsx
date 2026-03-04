import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig'; // Adjust path if necessary

const BookingBanner = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA] selection:bg-[#B70303] selection:text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* The Floating Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style fluid easing
          className="relative bg-[#050505] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 group"
        >

          {/* --- AMBIENT LUXURY GLOWS (Strict Brand Colors) --- */}
          <div className="absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#B70303]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute -bottom-32 -left-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

          {/* Subtle Architectural Border */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] border border-white/10 pointer-events-none" />

          {/* --- LEFT SIDE: EDITORIAL TYPOGRAPHY --- */}
          <div className="relative z-10 w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Premium Kicker */}
            <div className="flex items-center gap-4 mb-6">
              <div className="hidden lg:block w-12 h-[2px] bg-[#B70303]" />
              <span className="text-white font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                Book your glow now
              </span>
              <div className="hidden lg:block w-12 h-[2px] bg-[#B70303]" />
            </div>

            {/* Massive Serif Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold leading-[1.1] mb-6 tracking-tight">
              Transform Your Hair &amp; <br className="hidden md:block" />
              <span className="italic font-light text-[#B70303]">Skin Today.</span>
            </h2>

            {/* High-Contrast Description */}
            <p className="text-gray-400 font-sans text-sm md:text-lg leading-relaxed max-w-lg font-light">
              Take the first step toward radiant skin and healthy hair with a personalized consultation from our clinical experts in Marthandam.
            </p>
          </div>

          {/* --- RIGHT SIDE: MAGNETIC CALL TO ACTIONS --- */}
          <div className="relative z-10 w-full lg:w-2/5 flex flex-col items-center lg:items-end gap-8 md:gap-10">

            {/* The Direct Phone Action */}
            <a
              href={`tel:${siteConfig?.phone?.replace(/\s+/g, '') || '+919786856789'}`}
              className="group/phone flex items-center justify-center lg:justify-end gap-5 w-full cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover/phone:bg-[#B70303] group-hover/phone:border-[#B70303] group-hover/phone:shadow-[0_0_20px_rgba(183,3,3,0.5)] transition-all duration-500">
                <PhoneCall size={20} className="text-white group-hover/phone:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-1 group-hover/phone:text-gray-300 transition-colors duration-300">
                  Call Clinic Directly
                </span>
                <span className="text-white font-serif tracking-tight text-2xl md:text-3xl group-hover/phone:text-[#B70303] transition-colors duration-300">
                  {siteConfig?.phone || '+91 97868 56789'}
                </span>
              </div>
            </a>

            {/* Divider for mobile */}
            <div className="w-full h-px bg-white/10 lg:hidden" />

            {/* The Online Booking Button — Premium Swipe Effect */}
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="#book"
              className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-white text-[#050505] rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(183,3,3,0.3)] transition-all duration-500 border-none"
            >
              <CalendarCheck size={18} className="relative z-10 group-hover/btn:text-white transition-colors duration-500" strokeWidth={2} />
              <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover/btn:text-white transition-colors duration-500">
                Schedule Online
              </span>
              
              {/* Brand Red Fill on Hover */}
              <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default BookingBanner;