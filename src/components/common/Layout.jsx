import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// --- 1. PREMIUM FLOATING WHATSAPP BUTTON ---
const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919783156789?text=Hi!%20I'm%20interested%20in%20your%20treatments%20at%20Advanced%20Grohair%20&%20Gloskin,%20Marthandam."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] group flex items-center gap-4"
    >
      {/* Tooltip that slides out on hover */}
      <span className="hidden lg:block absolute right-full mr-4 bg-white/90 backdrop-blur-xl text-brand-dark font-sans text-sm font-bold py-2 px-4 rounded-xl shadow-glass opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/50">
        Chat with our Experts
      </span>

      {/* The Button */}
      <div className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300">
        {/* Glowing ring effect */}
        <div className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/30 animate-ping opacity-50" style={{ animationDuration: '2.5s' }} />
        <div className="absolute inset-[-2px] rounded-full bg-[#25D366]/10 animate-pulse" style={{ animationDuration: '2s' }} />

        {/* EXACT OFFICIAL WHATSAPP SVG LOGO */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 w-8 h-8 lg:w-9 lg:h-9 ml-0.5 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </div>
    </motion.a>
  );
};

// --- 2. DYNAMIC BACK-TO-TOP BUTTON ---
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 lg:bottom-32 lg:right-10 z-[90] w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-elevated hover:shadow-glow-red transition-all duration-500 focus:outline-none group"
          aria-label="Scroll to top"
          style={{
            background: 'linear-gradient(135deg, var(--color-brand-dark), var(--color-brand-dark-700))'
          }}
        >
          <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          {/* Subtle gradient ring on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px rgba(211, 47, 47, 0.3)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- 3. THE MASTER LAYOUT COMPONENT ---
const Layout = ({ children }) => {
  const location = useLocation();

  // Framer Motion Scroll Progress Hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll Restoration
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative flex flex-col min-h-screen bg-brand-bg font-sans overflow-x-hidden">

      {/* Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
        style={{
          scaleX,
          backgroundImage: 'linear-gradient(to right, var(--color-brand-red), var(--color-brand-gold))'
        }}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Transition Wrapper */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating Actions */}
      <FloatingWhatsApp />
      <BackToTop />

    </div>
  );
};

export default Layout;