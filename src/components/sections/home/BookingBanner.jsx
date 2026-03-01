import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

const BookingBanner = () => {
  return (
    <section className="relative w-full py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* The Floating Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-brand-dark rounded-[2rem] overflow-hidden shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 noise-overlay"
        >

          {/* --- ANIMATED GRADIENT BORDER GLOW --- */}
          <div className="absolute inset-0 rounded-[2rem] gradient-border pointer-events-none" />

          {/* --- ANIMATED GLOW ORBS --- */}
          <div className="glow-orb-red w-[350px] h-[350px] -top-32 right-0 z-0" />
          <div className="glow-orb-gold w-[250px] h-[250px] bottom-0 -left-16 z-0" />

          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] z-0" />

          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="relative z-10 w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <div className="hidden lg:block w-8 h-[2px] gradient-line" />
              <span className="text-gradient-shimmer font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Book your glow now.
              </span>
              <div className="hidden lg:block w-8 h-[2px] gradient-line" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold leading-tight mb-4">
              Transform Your Hair &amp; <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Skin Today</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-lg">
              Take the first step toward radiant skin and healthy hair with a personalized consultation from our clinical experts in Marthandam.
            </p>
          </div>

          {/* --- RIGHT SIDE: CALL TO ACTIONS --- */}
          <div className="relative z-10 w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:justify-end lg:items-end gap-6">

            {/* The Direct Phone Action */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="group flex items-center justify-center lg:justify-end gap-4 w-full"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:shadow-glow-red transition-all duration-500">
                <PhoneCall size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">
                  Call Clinic Directly
                </span>
                <span className="text-white font-medical font-bold text-xl md:text-2xl group-hover:text-brand-gold transition-colors duration-300">
                  {siteConfig.phone}
                </span>
              </div>
            </a>

            {/* The Online Booking Button — Gradient */}
            <a
              href="#book"
              className="btn-gradient w-full sm:w-auto flex items-center justify-center gap-3 py-4 px-8 shadow-glow-red"
            >
              <CalendarCheck size={18} className="relative z-10" />
              <span className="relative z-10 text-sm">Schedule Online</span>
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default BookingBanner;