import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Footer = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const moreInfo = [
    { name: 'Hair Treatments', path: '/hair-treatment' },
    { name: 'Skin Treatments', path: '/skin-treatment' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' }
  ];

  return (
    <footer className="relative bg-brand-dark-900 pt-20 lg:pt-24 overflow-hidden noise-overlay">

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-line" />

      {/* Animated Glow Orbs */}
      <div className="glow-orb-red w-[500px] h-[500px] top-0 left-1/4 z-0" />
      <div className="glow-orb-gold w-[300px] h-[300px] bottom-20 right-10 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-16"
        >

          {/* --- COLUMN 1: BRAND & INTRO --- */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <a href="/" className="flex flex-col inline-block mb-2">
              <h2 className="text-3xl font-serif text-white leading-none font-bold tracking-tight">
                AdGro<span className="text-brand-red">Hair</span>
              </h2>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gold mt-1">
                Marthandam
              </span>
            </a>

            <p className="text-gray-400 font-sans text-sm leading-relaxed pr-4">
              Discover stronger hair, glowing skin, and the confidence to shine every day. Experience the pinnacle of clinical aesthetic care.
            </p>

            <div className="flex items-center gap-3 text-gray-300 text-sm mt-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <Clock size={14} className="text-brand-gold" />
              </div>
              <span className="font-medium tracking-wide">Working Hours: 10 AM to 8 PM</span>
            </div>
          </motion.div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
              Quick Links
              <div className="h-px flex-grow bg-gradient-to-r from-brand-red/50 via-brand-gold/30 to-transparent ml-2" />
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <ChevronRight size={14} className="text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- COLUMN 3: MORE INFORMATION --- */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
              More Information
              <div className="h-px flex-grow bg-gradient-to-r from-brand-red/50 via-brand-gold/30 to-transparent ml-2" />
            </h3>
            <ul className="flex flex-col gap-4">
              {moreInfo.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <ChevronRight size={14} className="text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- COLUMN 4: CONTACT US --- */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
              Contact Us
              <div className="h-px flex-grow bg-gradient-to-r from-brand-red/50 via-brand-gold/30 to-transparent ml-2" />
            </h3>
            <ul className="flex flex-col gap-5">

              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:shadow-glow-red transition-all duration-500 flex-shrink-0 backdrop-blur-sm">
                  <MapPin size={14} className="text-brand-red" />
                </div>
                <span className="leading-relaxed group-hover:text-gray-300 transition-colors">
                  {siteConfig.address}
                </span>
              </li>

              <li className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:shadow-glow-red transition-all duration-500 flex-shrink-0 backdrop-blur-sm">
                  <Phone size={14} className="text-brand-red" />
                </div>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:shadow-glow-red transition-all duration-500 flex-shrink-0 backdrop-blur-sm">
                  <Mail size={14} className="text-brand-red" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>

            </ul>
          </motion.div>

        </motion.div>
      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div className="border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-7xl py-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-xs md:text-sm font-sans tracking-wide text-center">
            Copyright &copy; {new Date().getFullYear()} Advanced GroHair &amp; GloSkin - Marthandam. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;