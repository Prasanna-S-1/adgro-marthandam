import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';

// --- DATA IMPORTS ---
import { hairData } from '../../data/hairData';
import { skinData } from '../../data/skinData';

// --- ASSET IMPORTS ---
import logoMar from '../../assets/logo-marthandam.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;
    const calculateProgress = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const totalScrollableDistance = documentHeight - viewportHeight;
      if (totalScrollableDistance > 0) {
        const scrolled = (winScroll / totalScrollableDistance) * 100;
        setScrollProgress(Math.min(scrolled, 100));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateProgress);
        ticking = true;
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(calculateProgress);
    });
    resizeObserver.observe(document.body);
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock Body Scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] py-3 md:py-4' 
          : 'bg-white border-b border-gray-100 py-4 md:py-5'
      }`}>
        
        <div 
          className="absolute top-0 left-0 h-[2.5px] bg-[#B70303] z-[110] origin-left"
          style={{ width: `${scrollProgress}%`, transition: 'width 100ms linear' }}
        />

        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <Link to="/" className="relative z-[110] group flex items-center">
            <img
              src={logoMar}
              alt="AdGroHair Marthandam"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
            <NavItem to="/" label="Home" active={pathname === "/"} />
            
            {/* Hair Dropdown */}
            <div className="group relative flex items-center h-full">
              <button className={`relative py-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                pathname.includes('hair') ? 'text-[#B70303]' : 'text-[#050505] hover:text-[#B70303]'
              }`}>
                Hair Treatments
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#B70303] origin-left transition-transform duration-300 ease-out ${pathname.includes('hair') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible translate-y-6 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 pt-6">
                <SplitPaneDropdown data={hairData} categoryPrefix="hair" />
              </div>
            </div>

            {/* Skin Dropdown */}
            <div className="group relative flex items-center h-full">
              <button className={`relative py-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                pathname.includes('skin') ? 'text-[#B70303]' : 'text-[#050505] hover:text-[#B70303]'
              }`}>
                Skin Treatments
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#B70303] origin-left transition-transform duration-300 ease-out ${pathname.includes('skin') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              <div className="absolute top-full right-0 opacity-0 invisible translate-y-6 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 pt-6">
                <SplitPaneDropdown data={skinData} categoryPrefix="skin" />
              </div>
            </div>

            <NavItem to="/about" label="About Us" active={pathname === "/about"} />
            <NavItem to="/contact" label="Contact" active={pathname === "/contact"} />

            <motion.div whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact#booking-form" 
                className="group relative px-8 py-3 bg-[#050505] text-white overflow-hidden rounded-full ml-4 shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-none block"
              >
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500">
                  Book Session
                </span>
                <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
          >
            <div className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileDrawer closeMenu={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================
    MOBILE DRAWER COMPONENT
========================================= */

const MobileDrawer = ({ closeMenu }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (menu) => setOpenAccordion(openAccordion === menu ? null : menu);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 bg-white z-[105] pt-24 px-8 overflow-y-auto pb-32"
    >
      {/* --- VISIBLE CLOSE SYMBOL (TOP RIGHT) --- */}
      <button 
        onClick={closeMenu}
        className="absolute top-8 right-8 z-[120] p-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm"
      >
        <X className="text-[#B70303] w-7 h-7" strokeWidth={2.5} />
      </button>

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B70303]/5 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col gap-6 relative z-10 mt-12">
        <Link to="/" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5">Home</Link>
        <Link to="/about" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5">About</Link>
        
        {/* Hair Accordion */}
        <div className="border-b border-gray-100 pb-5">
          <button onClick={() => toggleAccordion('hair')} className="flex justify-between items-center w-full text-4xl font-serif font-bold text-[#050505]">
            Hair Treatments
            <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'hair' ? 'rotate-180 text-[#B70303]' : 'text-gray-400'}`} />
          </button>
          <AnimatePresence>
            {openAccordion === 'hair' && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-6"
              >
                {hairData.map((cat, idx) => (
                  <div key={idx} className="mb-6 pl-2">
                    <p className="text-[#B70303] text-[9px] font-bold uppercase tracking-[0.3em] mb-4">{cat.category}</p>
                    <ul className="flex flex-col gap-4 pl-4 border-l-2 border-[#B70303]/20 font-serif">
                      {cat.subData?.map((t, i) => (
                        <li key={i}><Link to={`/hair/${t.slug || t.id}`} onClick={closeMenu} className="text-gray-600 text-xl">{t.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skin Accordion */}
        <div className="border-b border-gray-100 pb-5">
          <button onClick={() => toggleAccordion('skin')} className="flex justify-between items-center w-full text-4xl font-serif font-bold text-[#050505]">
            Skin Treatments
            <ChevronDown className={`w-6 h-6 transition-transform ${openAccordion === 'skin' ? 'rotate-180 text-[#B70303]' : 'text-gray-400'}`} />
          </button>
          <AnimatePresence>
            {openAccordion === 'skin' && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-6"
              >
                {skinData.map((cat, idx) => (
                  <div key={idx} className="mb-6 pl-2">
                    <p className="text-[#B70303] text-[9px] font-bold uppercase tracking-[0.3em] mb-4">{cat.category}</p>
                    <ul className="flex flex-col gap-4 pl-4 border-l-2 border-[#B70303]/20 font-serif">
                      {cat.subData?.map((t, i) => (
                        <li key={i}><Link to={`/skin/${t.slug || t.id}`} onClick={closeMenu} className="text-gray-600 text-xl">{t.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/contact" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5">Contact</Link>
      </div>

      <div className="mt-16 flex flex-col gap-8 text-center">
        <Link 
          to="/contact#booking-form" 
          onClick={closeMenu} 
          className="w-full py-5 bg-[#050505] text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg block"
        >
          Book Consultation
        </Link>
        <div className="flex flex-col items-center gap-2">
          <a href="tel:+919786856789" className="text-3xl font-serif text-[#050505] flex items-center gap-3">
            <Phone size={24} className="text-[#B70303]" /> +91 97868 56789
          </a>
          <p className="uppercase tracking-[0.3em] text-[8px] font-bold text-gray-400 mt-2">Marthandam, Tamil Nadu</p>
        </div>
      </div>
    </motion.div>
  );
};

/* --- SHARED SUB-COMPONENTS --- */

const NavItem = ({ to, label, active }) => (
  <Link 
    to={to} 
    className={`relative flex items-center py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors group ${
      active ? 'text-[#B70303]' : 'text-[#050505] hover:text-[#B70303]'
    }`}
  >
    {label}
    <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#B70303] origin-left transition-transform duration-300 ease-out ${
      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`} />
  </Link>
);

const SplitPaneDropdown = ({ data, categoryPrefix }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex w-[550px] shadow-2xl bg-[#050505]/95 backdrop-blur-2xl rounded-[1.5rem] overflow-hidden border border-white/10">
      <div className="w-[45%] flex flex-col bg-white/5 border-r border-white/5 py-2">
        {data.map((cat, idx) => (
          <Link
            key={idx}
            to={`/${categoryPrefix}`}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`flex justify-between items-center px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeIndex === idx ? 'bg-[#B70303] text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>{cat.category}</span>
            <ChevronRight size={14} className={activeIndex === idx ? 'translate-x-1' : ''} />
          </Link>
        ))}
      </div>
      <div className="w-[55%] flex flex-col max-h-[400px] overflow-y-auto py-2 scrollbar-hide">
        {data[activeIndex]?.subData?.map((treatment, idx) => (
          <Link 
            key={idx}
            to={`/${categoryPrefix}/${treatment.slug || treatment.id}`} 
            className="flex items-center justify-between px-6 py-4 text-sm font-sans text-gray-300 border-b border-white/5 hover:bg-white/5 hover:text-white group transition-all"
          >
            <span>{treatment.title}</span>
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#B70303]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;