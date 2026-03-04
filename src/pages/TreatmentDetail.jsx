import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Plus, Minus, PhoneCall, Star, Award } from 'lucide-react';

// --- BULLETPROOF DYNAMIC IMPORTS ---
// This completely eliminates any "Missing Export" red squiggly line errors in your editor.
import * as rawHairData from '../data/hairData';
import * as rawSkinData from '../data/skinData';

const extractDataArray = (moduleObj) => {
  return Object.values(moduleObj).find(val => Array.isArray(val)) || [];
};

const hairData = extractDataArray(rawHairData);
const skinData = extractDataArray(rawSkinData);
=======
import { hairData } from '../data/hairData';
import { skinData } from '../data/skinData';
import nanoFueHair from "../assets/NANO-FUE-Hair.png";
import fueHair from "../assets/Untitled-design-2025-07-14T110348.203-1.png";
import basicFueHair from "../assets/Hair-Transplant.png";
import percutaneousFueHair from "../assets/Percutaneous-FUE-1-1.png";
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3

const TreatmentDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHair, setIsHair] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  // --- DATA FETCHING ENGINE ---
  useEffect(() => {
    setLoading(true);
    const categoryString = category || '';
    const typeCheck = categoryString.toLowerCase().includes('hair');
    setIsHair(typeCheck);
    
    const source = typeCheck ? hairData : skinData;
    let found = null;
<<<<<<< HEAD

    found = source.find(item => item?.id?.toLowerCase() === id?.toLowerCase() || item?.slug?.toLowerCase() === id?.toLowerCase());

    if (!found) {
      source.forEach((catGroup) => {
        if (catGroup?.subData && Array.isArray(catGroup.subData)) {
          const match = catGroup.subData.find(item => item?.id?.toLowerCase() === id?.toLowerCase() || item?.slug?.toLowerCase() === id?.toLowerCase());
          if (match) found = match;
        }
      });
    }
=======
    source.forEach((catGroup) => {
      const match = catGroup.subData?.find(
        item => item.slug?.toLowerCase() === id?.toLowerCase()
      );
      if (match) {
        found = match;
        found.parentCategory = catGroup.category;
      }
    });
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3

    if (found) {
      setData(found);
      setLoading(false);
      document.title = `${found.title || 'Treatment'} | AdGro Marthandam`;
    } else {
      navigate('/not-found', { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id, category, navigate]);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  // --- ELEGANT LOADER ---
  if (loading || !data) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505]">
      <div className="w-16 h-16 border-4 border-[#111] border-t-[#B70303] rounded-full animate-spin mb-6 shadow-[0_0_20px_rgba(183,3,3,0.5)]" />
      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white animate-pulse">
        Initializing Premium Protocol
      </span>
    </div>
  );

  // --- SMART FALLBACK DATA ---
  const processSteps = Array.isArray(data.process) ? data.process : [
    { title: "Clinical Assessment", desc: "A comprehensive digital and physical analysis of your condition to establish a precise, evidence-based baseline." },
    { title: "Protocol Design", desc: "Our clinical experts formulate a targeted treatment blueprint specifically tailored to your unique biology and goals." },
    { title: "Precision Execution", desc: "The procedure is carried out in our state-of-the-art clinical theater ensuring maximum comfort and optimal results." }
  ];

<<<<<<< HEAD
  const clinicalAdvantages = Array.isArray(data.benefits) ? data.benefits : (Array.isArray(data.whyChoose) ? data.whyChoose : [
    "USFDA Approved Technology", "Zero Downtime Required", "Painless Clinical Procedure", "Guaranteed Natural Results", "Expert Clinical Staff", "Long-Lasting Efficacy"
  ]);

  const faqsList = Array.isArray(data.faqs) ? data.faqs : [
    { q: "Is this treatment safe?", a: "Absolutely. All our protocols use USFDA-approved technology and are administered by certified clinical specialists." },
    { q: "How long until I see results?", a: "While individual physiology varies, most clients observe noticeable improvements within the first 3 to 4 sessions." },
    { q: "Is there any recovery time needed?", a: "This is a minimally invasive procedure designed for modern lifestyles. You can typically return to normal activities immediately." }
=======
  const clinicalAdvantages = data.benefits || data.whyChoose || [
    "USFDA Approved Technology",
    "Expert Clinical Practitioners",
    "Painless Procedure Protocols",
    "Lasting Natural Results",
    "Post-Treatment Support",
    "Safety First Formulations"
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
  ];

  // --- ANIMATION VARIANTS ---
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
<<<<<<< HEAD
    <div className="bg-[#FAFAFA] min-h-screen font-sans overflow-x-hidden selection:bg-[#B70303] selection:text-white">
      
      {/* =========================================
          1. EDITORIAL CINEMATIC HERO
      ========================================= */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center items-center pt-24 pb-20 md:pb-32 bg-[#050505]">
        
        {/* Background Image Layer (Isolated overflow so stats bar isn't cut) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={data.image || "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80"} alt={data.title} className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
=======
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">

      {/* --- PREMIUM BREADCRUMBS --- */}
      <div className="bg-[#f8f9fa] pt-32 pb-4 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 animate-reveal-up">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span className="opacity-30">/</span>
            <Link to={`/${category}`} className="hover:text-brand-red transition-colors">{isHair ? 'Hair' : 'Skin'}</Link>
            <span className="opacity-30">/</span>
            <span className="text-brand-red tracking-widest">{data.title}</span>
          </nav>
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center mt-10 md:mt-0">
          <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex items-center gap-2 md:gap-3 mb-8 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl flex-wrap justify-center">
            <Link to="/" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#B70303]" />
            <Link to={`/${category}`} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 hover:text-white transition-colors">{isHair ? 'Hair' : 'Skin'}</Link>
          </motion.nav>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-12 md:w-16 h-[2px] bg-[#B70303] mb-6 shadow-[0_0_15px_#B70303]" />
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl px-4">
            {data.title}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-base md:text-2xl text-gray-300 max-w-2xl font-serif italic font-light drop-shadow-md px-4">
            The pinnacle of clinical aesthetic transformation.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          2. FLOATING QUICK STATS
      ========================================= */}
      <div className="relative z-20 -mt-12 md:-mt-16 w-full px-4 md:px-6 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-6 md:gap-16 max-w-4xl w-full">
           <div className="text-center group">
              <p className="text-3xl md:text-4xl font-serif font-bold text-[#050505] group-hover:text-[#B70303] transition-colors duration-500">99<span className="text-[#B70303]">%</span></p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Success Rate</p>
           </div>
           <div className="hidden md:block w-px h-12 bg-gray-200" />
           <div className="text-center group">
              <p className="text-3xl md:text-4xl font-serif font-bold text-[#050505] group-hover:text-[#B70303] transition-colors duration-500">USFDA</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Approved Tech</p>
           </div>
           <div className="hidden md:block w-px h-12 bg-gray-200" />
           <div className="text-center group w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t border-gray-100 md:border-none">
              <p className="text-3xl md:text-4xl font-serif font-bold text-[#050505] group-hover:text-[#B70303] transition-colors duration-500">Zero</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Downtime</p>
           </div>
        </motion.div>
      </div>

      {/* =========================================
          3. EDITORIAL OVERVIEW & SPECIFIC TREATMENT IMAGE
      ========================================= */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-7xl">
<<<<<<< HEAD
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
            
            {/* Left: Text Overview */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
              <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] block mb-4 md:mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#B70303]" /> The Protocol
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#050505] leading-tight mb-6 md:mb-8">
                Advanced clinical restoration, <br className="hidden lg:block" />
                <span className="italic text-gray-400 font-light">refined for you.</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light mb-10">
                {data.fullDesc || data.description || "An advanced, minimally invasive procedure tailored specifically to your unique biological needs. Our clinical experts utilize cutting-edge methodologies to ensure optimal, natural-looking, and long-lasting results without compromising your comfort."}
              </p>
              <a href="#consultation" className="group/btn relative inline-flex px-8 py-4 md:px-10 md:py-5 bg-[#050505] text-white overflow-hidden rounded-[1rem] shadow-xl hover:shadow-[0_15px_30px_rgba(5,5,5,0.2)] transition-all duration-500 items-center gap-3">
                <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Book Session</span>
                <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </motion.div>
            
            {/* Right: EXACT TREATMENT IMAGE SHOWCASE */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="order-1 lg:order-2 relative group w-full max-w-lg mx-auto lg:max-w-full">
               {/* Decorative Border Offset */}
               <div className="absolute inset-0 border-[2px] border-[#B70303]/20 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
               
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/5] border-[6px] md:border-[10px] border-white bg-white">
                  {/* The actual specific treatment image from your data file */}
                  <img src={data.image || "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80"} alt={data.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent opacity-50" />
               </div>
               
               {/* Premium Floating Badge */}
               <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white/95 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[1.5rem] border border-gray-100 z-20 flex items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                    <Award size={24} strokeWidth={1.5} />
=======
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

            <div className="animate-reveal-up z-10 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-brand-red animate-width" />
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px]">
                  {data.category || 'Premium Procedure'}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-8 leading-[1.1] tracking-tighter">
                {data.title}
              </h1>
              {data.slug === "nano-fue-hair-transplant" && (
                <img
                  src={nanoFueHair}
                  alt="NANO FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "fue-hair-transplant-valliyur" && (
                <img
                  src={fueHair}
                  alt="FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "basic-fue-hair-transplant-valliyur" && (
                <img
                  src={basicFueHair}
                  alt="Basic FUE Hair Transplant"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "percutaneous-fue" && (
                <img
                  src={percutaneousFueHair}
                  alt="Percutaneous FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
                {data.fullDesc || data.description}
              </p>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200">
                <a href="#booking-form" className="relative group px-10 py-5 bg-brand-red text-white text-[11px] font-bold uppercase tracking-[0.3em] overflow-hidden shadow-2xl transition-all hover:-translate-y-1">
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <a href="https://wa.me/919786856789" className="px-10 py-5 border border-gray-300 text-brand-dark text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all duration-500 hover:-translate-y-1">
                  WhatsApp Expert
                </a>
              </div>
            </div>

            <div className="relative animate-reveal-up [animation-delay:200ms] order-1 lg:order-2 group">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-[8px] border-white">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/95 backdrop-blur-xl p-8 shadow-2xl rounded-3xl border border-white animate-float z-20">
                <p className="text-5xl font-serif font-bold text-brand-red leading-none mb-1">99%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Clinical Success</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- THE PROCESS (TIGHTENED SPACING) --- */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 animate-reveal-up">
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Step-by-Step</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight">How <span className="italic text-brand-red font-light">It Works.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-10 bg-[#f8f9fa] rounded-3xl group hover:bg-brand-dark transition-all duration-700 ease-out">
                <div className="absolute top-4 right-8 text-7xl font-serif font-bold text-brand-red/5 group-hover:text-white/10 transition-colors">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-white mb-4 relative z-10 transition-colors">{step.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed relative z-10 transition-colors">{step.desc}</p>
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYMMETRICAL WHY CHOOSE & FAQ (FIXED SPACING) --- */}
      <section className="py-20 bg-[#fcfcfc] border-t border-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* 3x2 SYMMETRICAL GRID */}
            <div className="animate-reveal-up">
              <div className="flex items-center gap-4 mb-10 pl-2">
                <span className="h-[1px] w-12 bg-brand-red" />
                <h2 className="text-4xl font-serif font-bold text-brand-dark tracking-tight">The AdGro <span className="text-brand-red italic font-light">Advantage.</span></h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 h-full">
                {clinicalAdvantages.map((benefit, idx) => (
                  <div key={idx} className="group bg-[#f8f9fa] p-6 rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-brand-dark text-xs font-bold uppercase tracking-widest leading-snug">{benefit}</p>
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#050505]">Certified</p>
                    <p className="text-gray-500 text-xs font-light">Premium Protocol</p>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. GAP-FREE METHODOLOGY & BENTO GRID 
          (Mathematical Symmetry: Stretches perfectly)
      ========================================= */}
      <section className="py-20 md:py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 md:gap-20 items-stretch">
            
            {/* Left: Methodology (NO STRAIGHT LINE, PERFECTLY SPACED) */}
            <div className="flex flex-col h-full">
              <div className="mb-10 md:mb-14">
                <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] block mb-3 md:mb-4">Methodology</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#050505] tracking-tight">Step-by-Step.</h2>
              </div>

              {/* Flex-grow & Justify-Between automatically removes the empty gap! */}
              <div className="flex flex-col flex-grow justify-between space-y-12 lg:space-y-0">
                {processSteps.map((step, idx) => (
                  <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative group flex flex-col justify-center">
                    
                    <div className="flex items-center gap-4 md:gap-6 mb-4">
                      {/* Standalone Circular Node */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-[2px] border-gray-100 flex items-center justify-center group-hover:border-[#B70303] group-hover:bg-[#B70303] transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(183,3,3,0.3)]">
                         <span className="text-lg md:text-xl font-serif font-bold text-[#050505] group-hover:text-white transition-colors duration-500">0{idx+1}</span>
                      </div>
                      <div className="h-[1px] w-8 md:w-12 bg-gray-200 group-hover:bg-[#B70303] transition-colors duration-500" />
                    </div>
                    
                    <div className="pl-2">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[#050505] mb-2 md:mb-3 group-hover:text-[#B70303] transition-colors">{step.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">{step.desc}</p>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Right: Gap-Free Symmetrical Grid (2 Columns, 3 Rows) */}
            <div className="flex flex-col h-full">
              <div className="mb-10 md:mb-14">
                <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] block mb-3 md:mb-4">Benefits</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#050505] tracking-tight">The Advantage.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-grow">
                {clinicalAdvantages.map((adv, idx) => {
                  
                  // Aggressive Text Extractor completely prevents blank cards
                  let titleText = "Premium Benefit";
                  if (typeof adv === 'string') {
                    titleText = adv;
                  } else if (typeof adv === 'object' && adv !== null) {
                    const foundString = Object.values(adv).find(val => typeof val === 'string' && val.trim() !== '');
                    titleText = adv.title || adv.heading || adv.name || foundString || "Premium Advantage";
                  }

                  return (
                    <motion.div whileTap={{ scale: 0.96 }} key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.4 }} className="bg-[#FAFAFA] p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-[0_15px_30px_rgba(183,3,3,0.06)] hover:-translate-y-1 hover:border-[#B70303]/20 transition-all duration-500 flex flex-col justify-center group relative overflow-hidden h-full min-h-[160px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#B70303]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-[#B70303] transition-colors duration-500 border border-gray-100 group-hover:border-[#B70303] shadow-sm relative z-10">
                        <Star size={18} strokeWidth={1.5} className="text-[#B70303] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-base md:text-lg font-serif font-bold text-[#050505] leading-snug group-hover:text-[#B70303] transition-colors duration-300 relative z-10 pr-2">
                        {titleText}
                      </h3>
                    </motion.div>
                  );
                })}
=======
            {/* SYMMETRICAL FAQ LIST */}
            <div className="animate-reveal-up [animation-delay:200ms] h-full flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-10 pl-6 border-l-4 border-brand-red tracking-tight">Common Inquiries</h2>
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {data.faqs?.map((faq, idx) => (
                  <div key={idx} className={`group transition-all duration-500 ${openFaq === idx ? 'bg-white shadow-xl rounded-2xl my-4 px-2' : ''}`}>
                    <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center py-7 px-4 text-left focus:outline-none">
                      <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${openFaq === idx ? 'text-brand-red' : 'text-brand-dark group-hover:text-brand-red'}`}>{faq.q}</span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${openFaq === idx ? 'bg-brand-red border-brand-red text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-brand-red group-hover:text-brand-red'}`}>
                        {openFaq === idx ? '−' : '+'}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openFaq === idx ? 'max-h-[500px] opacity-100 pb-8 px-6' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-500 text-base leading-relaxed pl-6 border-l-2 border-brand-red/30 italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
              </div>
            </div>

          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* =========================================
          5. MINIMALIST LUXURY FAQ
      ========================================= */}
      <section className="py-20 md:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#050505] tracking-tight mb-6 md:mb-8">
              Patient <span className="italic text-[#B70303] font-light">Inquiries.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#B70303] mx-auto" />
          </div>

          <div className="flex flex-col border-t-[2px] border-[#050505]">
            {faqsList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(isOpen ? null : index)} className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group">
                    <span className={`font-serif text-lg md:text-2xl transition-colors duration-500 pr-4 md:pr-8 ${isOpen ? 'text-[#B70303]' : 'text-[#050505] group-hover:text-[#B70303]'}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-45 border-[#B70303] bg-[#B70303] text-white shadow-[0_0_15px_rgba(183,3,3,0.3)]' : 'text-gray-400 group-hover:border-[#050505] group-hover:bg-[#050505] group-hover:text-white'}`}>
                      <Plus size={20} strokeWidth={1.5} className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="text-gray-600 font-sans text-sm md:text-lg leading-relaxed pb-8 md:pb-10 pr-4 md:pr-24 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          6. THE DARK LUXURY BOOKING FINALE
      ========================================= */}
      {/* =========================================
          6. THE DARK LUXURY BOOKING FINALE
      ========================================= */}
      <section id="consultation" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#B70303]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-24 items-center">
            
            {/* Left: Premium Typography & Form */}
            <div>
              {/* Removed Priority VIP Badge as requested */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
                Reserve Your <br />
                <span className="italic font-light text-gray-500">Consultation.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-lg font-light">
                Enter your details to secure a private, one-on-one clinical assessment with our senior specialists.
              </p>
              
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* 3-Column Grid for Name, Phone, Place */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-6">
                  
                  {/* Full Name Field */}
                  <div className="relative z-0 w-full group md:col-span-1 mt-4 md:mt-0">
                    <input type="text" id="name" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-[2px] border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                    <label htmlFor="name" className="absolute text-xs md:text-sm text-gray-500 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Full Name *
                    </label>
=======
      {/* --- PREMIUM CONTACT CARD (WITH PHOTO BANNER) --- */}
      <section id="booking-form" className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr]">

            <div className="p-12 md:p-20 relative">
              {/* PHOTO BANNER INTEGRATION */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden grayscale">
                <img src="/images/hero/hero-1.jpg" alt="Clinic Banner" className="w-full h-full object-cover scale-125 rotate-6" />
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4 tracking-tighter">Request Callback</h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-16">Priority Consultation Slot</p>

              <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-red transition-all bg-transparent peer placeholder-transparent text-brand-dark font-medium" placeholder="Your Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-brand-red">Full Name *</label>
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
                  </div>

                  {/* Phone Field */}
                  <div className="relative z-0 w-full group md:col-span-1 mt-4 md:mt-0">
                    <input type="tel" id="phone" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-[2px] border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                    <label htmlFor="phone" className="absolute text-xs md:text-sm text-gray-500 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Phone Number *
                    </label>
                  </div>

                  {/* Place Field */}
                  <div className="relative z-0 w-full group md:col-span-1 mt-4 md:mt-0">
                    <input type="text" id="place" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-[2px] border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                    <label htmlFor="place" className="absolute text-xs md:text-sm text-gray-500 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Place *
                    </label>
                  </div>

                </div>
<<<<<<< HEAD

                <div className="pt-4 md:pt-6">
                  <motion.button whileTap={{ scale: 0.98 }} type="submit" className="group relative w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-[#050505] rounded-[1rem] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs overflow-hidden transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] border-none">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">Confirm Priority Slot</span>
                    <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  </motion.button>
=======
                <div className="md:col-span-2">
                  <textarea rows="2" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-red bg-transparent resize-none peer placeholder-transparent text-brand-dark" placeholder="Your requirements..."></textarea>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Special Requirements</label>
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
                </div>
              </form>
            </div>

<<<<<<< HEAD
            {/* Right: Floating Glass Concierge Card */}
            <motion.div whileTap={{ scale: 0.98 }} className="bg-white/5 backdrop-blur-2xl p-8 md:p-14 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group hover:border-white/20 transition-colors duration-500 mt-8 md:mt-0">
              <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-[#B70303] rounded-l-[1.5rem] md:rounded-l-[3rem] shadow-[0_0_20px_#B70303]" />
              
              <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-8 md:mb-10">Direct Support</h3>
              
              <ul className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                <li className="flex items-center gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#B70303] group-hover:bg-[#B70303] group-hover:text-white transition-colors duration-500">
                        <ShieldCheck size={18} className="md:w-5 md:h-5" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#B70303] mb-1">Strictly Confidential</p>
                        <p className="text-gray-400 text-xs md:text-sm font-light">100% Privacy Guaranteed.</p>
                    </div>
                </li>
                <li className="flex items-center gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#B70303] group-hover:bg-[#B70303] group-hover:text-white transition-colors duration-500">
                        <CheckCircle2 size={18} className="md:w-5 md:h-5" strokeWidth={2} />
                    </div>
                    <div>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#B70303] mb-1">Premium Care</p>
                        <p className="text-gray-400 text-xs md:text-sm font-light">Dedicated Concierge Service.</p>
                    </div>
                </li>
=======
            <div className="bg-brand-dark p-12 md:p-20 flex flex-col justify-center relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
              <h3 className="text-3xl font-serif font-bold mb-12 relative z-10 leading-tight">Clinic <br /><span className="text-brand-red italic font-light text-4xl">Concierge.</span></h3>
              <ul className="space-y-8 relative z-10">
                {[
                  { t: "USFDA Technology", d: "Highest safety standards." },
                  { t: "Expert Practitioners", d: "Trained clinical professionals." },
                  { t: "Transparent Pricing", d: "No hidden costs." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_20px_rgba(211,47,47,0.4)] transition-transform group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-white mb-1 group-hover:text-brand-red transition-colors">{item.t}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
>>>>>>> 3e62cb6a9e1cccff78f315e0281302aa0e947ca3
              </ul>

              <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                  <PhoneCall size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 md:mb-2">Call Clinic</p>
                  <a href="tel:+919786856789" className="text-2xl sm:text-3xl md:text-4xl font-serif text-white hover:text-[#B70303] transition-colors duration-300 block tracking-tight">+91 97868 56789</a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;