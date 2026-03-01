import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, MapPin, Clock, ChevronDown, ArrowRight
} from 'lucide-react';

// --- NAVIGATION DATA ARCHITECTURE ---
const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Hair Treatments',
    path: '/hair-treatment',
    dropdown: [
      { name: 'Restoration Plan', path: '/restoration-plan' },
      { name: 'Retention Plan', path: '/retention-plan' },
      { name: 'Cosmetic Hair Replacement', path: '/cosmetic-hair-replacement' },
      { name: 'Super Specialty', path: '/super-specialty' },
      { name: 'Non-Invasive Treatment', path: '/non-invasive-treatment' }
    ]
  },
  {
    name: 'Skin Treatments',
    path: '/skin-treatment',
    dropdown: [
      { name: 'Ageless', path: '/ageless' },
      { name: 'Skin Brightening & Pigmentation', path: '/skin-brightening-pigmentation' },
      { name: 'Permanent Hair Reduction', path: '/permanent-hair-reduction' },
      { name: 'Dry & Dull Skin', path: '/dry-dull-skin' },
      { name: 'IV Therapy', path: '/iv-therapy' }
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  // --- PREMIUM SCROLL DETECTION ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* --- DESKTOP MICRO-HEADER (CLINICAL INFO) --- */}
      <div className={`hidden lg:block w-full bg-brand-dark-900 transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-[40px] opacity-100'}`}>
        <div className="container mx-auto px-6 max-w-7xl h-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={12} className="text-brand-gold" />
              Working Hours: 10 AM to 8 PM
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin size={12} className="text-brand-gold" />
              Marthandam, Tamil Nadu 629163
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:adgromarthandam@gmail.com" className="hover:text-brand-gold transition-colors duration-300">
              adgromarthandam@gmail.com
            </a>
            <a href="tel:+919783156789" className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors duration-300">
              <Phone size={12} className="text-brand-red" />
              +91 97831 56789
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN GLASSMORPHIC NAVBAR --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled
          ? 'top-0 bg-white/70 backdrop-blur-2xl py-3 shadow-glass border-b border-white/50'
          : 'top-0 lg:top-[40px] bg-white/95 backdrop-blur-md py-5 border-b border-transparent'
        }`}>
        {/* Gradient bottom border on scroll */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] gradient-line opacity-60" />
        )}

        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">

          {/* 1. LOGO AREA */}
          <a href="/" className="flex items-center gap-4 group relative z-50">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm group-hover:border-brand-red/50 group-hover:shadow-glow-red transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=150&auto=format&fit=crop"
                alt="AdGro Temporary Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-serif text-brand-dark leading-none font-bold tracking-tight">
                AdGro<span className="text-brand-red">Hair</span>
              </h1>
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-gold mt-1">
                Marthandam Branch
              </span>
            </div>
          </a>

          {/* 2. DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.path}
                  className="relative flex items-center gap-1 text-[13px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-red transition-colors py-2"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-brand-red' : ''}`} />
                  )}
                  {/* Subtle gradient underline on hover */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full gradient-line transition-all duration-500" />
                </a>

                {/* GLASSMORPHIC DROPDOWN */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white/90 backdrop-blur-2xl shadow-elevated rounded-2xl border border-white/60 overflow-hidden pt-2 pb-2"
                      >
                        {/* Gradient Accent Top Border */}
                        <div className="absolute top-0 left-0 w-full h-[3px] gradient-line" />

                        <div className="flex flex-col">
                          {link.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="px-6 py-3 text-sm font-sans text-gray-600 hover:text-brand-red hover:bg-brand-red/5 flex items-center justify-between group/item transition-all duration-300"
                            >
                              {subItem.name}
                              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-red" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* DESKTOP CTA BUTTON — Animated Gradient */}
            <a href="#book" className="btn-gradient px-8 py-3 text-[13px] ml-4 shadow-glow-red">
              <span className="relative z-10">Book Appointment</span>
            </a>
          </div>

          {/* 3. MOBILE HAMBURGER TOGGLE */}
          <button
            className="lg:hidden relative z-50 text-brand-dark p-2 hover:text-brand-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Frosted Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/20 backdrop-blur-sm z-[85] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[90] lg:hidden flex flex-col pt-[100px] pb-6 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="border-b border-gray-100 pb-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => link.dropdown ? setMobileDropdownOpen(mobileDropdownOpen === index ? null : index) : window.location.href = link.path}
                    >
                      <span className={`text-3xl font-serif tracking-tight ${mobileDropdownOpen === index ? 'text-brand-red' : 'text-brand-dark'}`}>
                        {link.name}
                      </span>
                      {link.dropdown && (
                        <ChevronDown
                          size={24}
                          className={`transition-transform duration-300 ${mobileDropdownOpen === index ? 'rotate-180 text-brand-red' : 'text-gray-400'}`}
                        />
                      )}
                    </div>

                    {/* MOBILE SUB-MENU ACCORDION */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {mobileDropdownOpen === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-4 pt-4 pl-4"
                          >
                            {link.dropdown.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.path}
                                className="text-gray-500 font-sans text-lg flex items-center gap-2 hover:text-brand-red transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-red to-brand-gold" />
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* MOBILE BOTTOM CTA & INFO */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col gap-6"
              >
                <a href="#book" className="btn-gradient w-full py-4 text-center justify-center text-sm shadow-glow-red">
                  <span className="relative z-10">Book Appointment</span>
                </a>

                <div className="flex flex-col items-center text-center gap-2 text-sm text-gray-500">
                  <a href="tel:+919783156789" className="font-bold text-brand-dark flex items-center gap-2">
                    <Phone size={16} className="text-brand-red" />
                    +91 97831 56789
                  </a>
                  <p>Marthandam, Tamil Nadu</p>
                </div>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;