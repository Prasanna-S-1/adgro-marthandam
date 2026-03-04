import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

  // --- 1. HIGH-PRECISION SCROLL & HEIGHT LOGIC ---
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

  // Lock Body Scroll when Mobile Menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- DESKTOP MICRO-HEADER (CLINICAL INFO) --- */}
      <div className={`hidden lg:block w-full bg-[#050505] transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-[40px] opacity-100'}`}>
        <div className="container mx-auto px-6 max-w-7xl h-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={12} className="text-[#B70303]" />
              Working Hours: 10 AM to 8 PM
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin size={12} className="text-[#B70303]" />
              Marthandam, Tamil Nadu 629163
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:adgromarthandam@gmail.com" className="hover:text-white transition-colors duration-300">
              adgromarthandam@gmail.com
            </a>
            <a href="tel:+919786856789" className="flex items-center gap-2 text-white hover:text-[#B70303] transition-colors duration-300">
              <Phone size={12} className="text-[#B70303]" />
              +91 97868 56789
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN LUXURY NAVBAR --- */}
      <nav className={`fixed left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'top-0 bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] py-3 md:py-4' 
          : 'top-0 lg:top-[40px] bg-white border-b border-gray-100 py-4 md:py-5'
      }`}>
        
        {/* DYNAMIC SCROLL PROGRESS LINE */}
        <div 
          className="absolute top-0 left-0 h-[2.5px] bg-[#B70303] z-[110] origin-left"
          style={{ width: `${scrollProgress}%`, transition: 'width 100ms linear' }}
        />

        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* 1. PREMIUM LOGO */}
          <Link to="/" className="relative z-[110] group flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm group-hover:border-[#B70303]/30 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=150&auto=format&fit=crop"
                alt="AdGro Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif text-[#050505] leading-none font-bold tracking-tight">
                AdGro<span className="text-[#B70303]">Hair</span>
              </h1>
              <span className="text-[8px] uppercase tracking-[0.3em] font-black text-gray-400 mt-1">
                Marthandam Branch
              </span>
            </div>
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
            <NavItem to="/" label="Home" active={pathname === "/"} />
            
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

            {/* MAGNETIC CTA BUTTON */}
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="#book" 
              className="group relative px-8 py-3 bg-[#050505] text-white overflow-hidden rounded-full ml-4 shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-none"
            >
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500">
                Book Session
              </span>
              <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </div>

          {/* 3. MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
          >
            <div className={`w-6 h-[2px] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#B70303]' : 'bg-[#050505]'}`} />
            <div className={`w-6 h-[2px] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'bg-[#050505]'}`} />
            <div className={`w-6 h-[2px] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#B70303]' : 'bg-[#050505]'}`} />
          </button>
        </div>
      </nav>

      <MobileDrawer isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

/* =========================================
   SUB-COMPONENTS
========================================= */

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
    <div className="flex w-[550px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#050505]/95 backdrop-blur-2xl rounded-[1.5rem] overflow-hidden border border-white/10">
      <div className="w-[45%] flex flex-col bg-white/5 border-r border-white/5 py-2">
        {data.map((cat, idx) => (
          <Link
            key={idx}
            to={`/${categoryPrefix}`}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`flex justify-between items-center px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeIndex === idx ? 'bg-[#B70303] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="truncate pr-2">{cat.category || "Premium Protocol"}</span>
            <ChevronRight size={14} className={`transition-transform duration-300 ${activeIndex === idx ? 'translate-x-1' : ''}`} />
          </Link>
        ))}
      </div>

      <div className="w-[55%] flex flex-col max-h-[400px] overflow-y-auto py-2" style={{ scrollbarWidth: 'none' }}>
        {data[activeIndex]?.subData?.map((treatment, idx) => (
          <Link 
            key={idx}
            to={`/${categoryPrefix}/${treatment.slug || treatment.id}`} 
            className="flex items-center justify-between px-6 py-4 text-sm font-sans text-gray-300 border-b border-white/5 hover:bg-white/5 hover:text-white group/item transition-all duration-300"
          >
            <span className="truncate pr-4">{treatment.title}</span>
            <ArrowRight size={14} className="opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#B70303]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const MobileDrawer = ({ isOpen, closeMenu }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (menu) => setOpenAccordion(openAccordion === menu ? null : menu);

  return (
    <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pt-[100px] px-8 overflow-y-auto pb-32 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B70303]/5 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col gap-6 relative z-10">
        <Link to="/" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5 hover:text-[#B70303] transition-colors">Home</Link>
        <Link to="/about" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5 hover:text-[#B70303] transition-colors">About</Link>
        
        <div className="border-b border-gray-100 pb-5">
          <button onClick={() => toggleAccordion('hair')} className="flex justify-between items-center w-full text-4xl font-serif font-bold text-[#050505]">
            Hair Treatments
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openAccordion === 'hair' ? 'border-[#B70303] bg-[#B70303] text-white' : 'border-gray-200 text-gray-400'}`}>
              <ChevronDown size={20} className={`${openAccordion === 'hair' ? 'rotate-180' : ''}`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-700 ${openAccordion === 'hair' ? 'max-h-[2000px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
            {hairData.map((cat, idx) => (
              <div key={idx} className="mb-8 pl-2">
                <p className="text-[#B70303] text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">{cat.category}</p>
                <ul className="flex flex-col gap-4 pl-4 border-l-[2px] border-[#B70303]/20">
                  {cat.subData?.map((t, i) => (
                    <li key={i}>
                      <Link to={`/hair/${t.slug || t.id}`} onClick={closeMenu} className="text-gray-500 text-lg block hover:text-[#B70303] transition-all">{t.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-100 pb-5">
          <button onClick={() => toggleAccordion('skin')} className="flex justify-between items-center w-full text-4xl font-serif font-bold text-[#050505]">
            Skin Treatments
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openAccordion === 'skin' ? 'border-[#B70303] bg-[#B70303] text-white' : 'border-gray-200 text-gray-400'}`}>
              <ChevronDown size={20} className={`${openAccordion === 'skin' ? 'rotate-180' : ''}`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-700 ${openAccordion === 'skin' ? 'max-h-[2000px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
            {skinData.map((cat, idx) => (
              <div key={idx} className="mb-8 pl-2">
                <p className="text-[#B70303] text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">{cat.category}</p>
                <ul className="flex flex-col gap-4 pl-4 border-l-[2px] border-[#B70303]/20">
                  {cat.subData?.map((t, i) => (
                    <li key={i}>
                      <Link to={`/skin/${t.slug || t.id}`} onClick={closeMenu} className="text-gray-500 text-lg block hover:text-[#B70303] transition-all">{t.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link to="/contact" onClick={closeMenu} className="text-4xl font-serif font-bold text-[#050505] border-b border-gray-100 pb-5 hover:text-[#B70303] transition-colors">Contact</Link>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        <a href="#book" onClick={closeMenu} className="w-full py-5 bg-[#050505] text-white text-center rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-none">Book Consultation</a>
        <div className="flex flex-col items-center text-center gap-2">
          <a href="tel:+919786856789" className="text-3xl font-serif text-[#050505] flex items-center gap-3">
            <Phone size={24} className="text-[#B70303]" /> +91 97868 56789
          </a>
          <p className="uppercase tracking-[0.3em] text-[8px] font-bold text-gray-400 mt-2">Marthandam, Tamil Nadu</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;