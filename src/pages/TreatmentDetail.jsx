import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, 
  Plus, PhoneCall, Star, Award, Navigation2, Check, Send, Globe
} from 'lucide-react';

// --- DATA ENGINE IMPORTS ---
import * as rawHairData from '../data/hairData';
import * as rawSkinData from '../data/skinData';

const extractDataArray = (moduleObj) => {
  return Object.values(moduleObj).find(val => Array.isArray(val)) || [];
};

const hairData = extractDataArray(rawHairData);
const skinData = extractDataArray(rawSkinData);

const TreatmentDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHair, setIsHair] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({ name: '', phone: '', place: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- PARALLAX SCROLL PHYSICS ---
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // --- DATA FETCHING ENGINE ---
  useEffect(() => {
    setLoading(true);
    const categoryString = category || '';
    const typeCheck = categoryString.toLowerCase().includes('hair');
    setIsHair(typeCheck);
    
    const source = typeCheck ? hairData : skinData;
    let found = null;

    found = source.find(item => item?.id?.toLowerCase() === id?.toLowerCase() || item?.slug?.toLowerCase() === id?.toLowerCase());

    if (!found) {
      source.forEach((catGroup) => {
        if (catGroup?.subData && Array.isArray(catGroup.subData)) {
          const match = catGroup.subData.find(item => item?.id?.toLowerCase() === id?.toLowerCase() || item?.slug?.toLowerCase() === id?.toLowerCase());
          if (match) {
            found = match;
            found.parentCategory = catGroup.category;
          }
        }
      });
    }

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

  // --- FORM HANDLERS ---
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', place: '', message: '' });
    }, 5000);
  };

  // --- EXACT DESKTOP ANIMATION VARIANTS FOR ALL DEVICES ---
  const easeLuxury = [0.16, 1, 0.3, 1]; 
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeLuxury } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeLuxury } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeLuxury } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeLuxury } }
  };

  // --- ELEGANT LOADER ---
  if (loading || !data) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505]">
      <div className="w-16 h-16 border-4 border-white/10 border-t-[#B70303] rounded-full animate-spin mb-6 shadow-[0_0_20px_rgba(183,3,3,0.5)]" />
      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white animate-pulse">
        Loading Clinical Protocol
      </span>
    </div>
  );

  // --- SMART FALLBACK DATA ---
  const processSteps = Array.isArray(data.process) ? data.process : [
    { title: "Clinical Assessment", desc: "A comprehensive digital and physical analysis of your condition to establish a precise, evidence-based baseline." },
    { title: "Protocol Design", desc: "Our clinical experts formulate a targeted treatment blueprint specifically tailored to your unique biology and goals." },
    { title: "Precision Execution", desc: "The procedure is carried out in our state-of-the-art clinical theater ensuring maximum comfort and optimal results." }
  ];

  const clinicalAdvantages = Array.isArray(data.benefits) ? data.benefits : (Array.isArray(data.whyChoose) ? data.whyChoose : [
    "USFDA Approved Technology", "Expert Clinical Practitioners", "Painless Procedure Protocols", "Lasting Natural Results"
  ]);

  const faqsList = Array.isArray(data.faqs) ? data.faqs : [
    { q: "Is this treatment safe?", a: "Absolutely. All our protocols use USFDA-approved technology and are administered by certified clinical specialists." },
    { q: "How long until I see results?", a: "While individual physiology varies, most clients observe noticeable improvements within the first 3 to 4 sessions." },
    { q: "Is there any recovery time needed?", a: "This is a minimally invasive procedure designed for modern lifestyles. You can typically return to normal activities immediately." }
  ];

  return (
    // REMOVED OVERFLOW-X-HIDDEN HERE. This fixes the mobile Intersection Observer bug permanently.
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-[#B70303] selection:text-white pt-20">
      
      {/* =========================================
          1. EDITORIAL CINEMATIC HERO
      ========================================= */}
      <section ref={heroRef} className="relative w-full min-h-[70vh] flex flex-col justify-center items-center py-24 bg-[#050505] overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img 
            src={data.image || "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80"} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B70303]/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
          <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex items-center gap-3 mb-10 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-xl flex-wrap justify-center">
            <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#B70303]" />
            <Link to={`/${category}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">{isHair ? 'Hair Directory' : 'Skin Directory'}</Link>
          </motion.nav>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-16 h-[2px] bg-[#B70303] mb-6 shadow-[0_0_15px_#B70303]" />
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tighter leading-[1.1] mb-8 px-4">
            {data.title}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-base md:text-2xl text-gray-400 max-w-2xl font-serif italic font-light px-4">
            The pinnacle of clinical aesthetic transformation in Marthandam.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          2. FLOATING CLINICAL STATS (SCROLL TRIGGERED)
      ========================================= */}
      <div className="relative z-20 -mt-16 w-full px-6 flex justify-center">
        {/* amount: 0 ensures it fires the moment it enters the screen */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-10 md:gap-20 max-w-5xl w-full"
        >
           <motion.div variants={slideUp} className="text-center group w-full md:w-auto">
              <p className="text-4xl md:text-5xl font-serif font-bold text-[#050505] tracking-tighter group-hover:text-[#B70303] transition-colors duration-500">99<span className="text-[#B70303]">%</span></p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Success Rate</p>
           </motion.div>
           <div className="hidden md:block w-px h-16 bg-gray-100" />
           <motion.div variants={slideUp} className="text-center group w-full md:w-auto border-t md:border-none border-gray-100 pt-6 md:pt-0">
              <p className="text-4xl md:text-5xl font-serif font-bold text-[#050505] tracking-tighter group-hover:text-[#B70303] transition-colors duration-500">FDA</p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Approved Tech</p>
           </motion.div>
           <div className="hidden md:block w-px h-16 bg-gray-100" />
           <motion.div variants={slideUp} className="text-center group w-full md:w-auto border-t md:border-none border-gray-100 pt-6 md:pt-0">
              <p className="text-4xl md:text-5xl font-serif font-bold text-[#050505] tracking-tighter group-hover:text-[#B70303] transition-colors duration-500">Zero</p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Downtime</p>
           </motion.div>
        </motion.div>
      </div>

      {/* =========================================
          3. EDITORIAL PROTOCOL OVERVIEW
      ========================================= */}
      {/* overflow-hidden on the section prevents horizontal scrollbars when elements slide in from the sides */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-center">
            
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#B70303]" />
                <span className="text-[#B70303] font-black uppercase tracking-[0.4em] text-[10px]">The Protocol</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#050505] leading-[1.1] tracking-tight mb-8">
                Advanced clinical restoration, <br className="hidden lg:block" />
                <span className="italic text-gray-400 font-light">refined for you.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light mb-12">
                {data.fullDesc || data.description || "An advanced, minimally invasive procedure tailored specifically to your unique biological needs. Our clinical experts utilize cutting-edge methodologies to ensure optimal, natural-looking, and long-lasting results."}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#consultation" className="group/btn relative inline-flex px-10 py-5 bg-[#050505] text-white overflow-hidden rounded-2xl shadow-xl transition-all items-center justify-center gap-4">
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">Book Session</span>
                  <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </a>
                <a href="https://wa.me/919786856789" className="px-10 py-5 border border-gray-200 text-[#050505] text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Consult via WhatsApp
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="order-1 lg:order-2 relative group w-full">
               <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-[4/5] border-[10px] border-white bg-white">
                 <img src={data.image || "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80"} alt={data.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms] ease-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
               </div>
               
               <motion.div variants={scaleUp} className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white/95 backdrop-blur-2xl p-5 md:p-6 shadow-2xl rounded-3xl border border-gray-100 z-20 flex items-center gap-4 md:gap-5 group-hover:-translate-y-2 transition-transform duration-700">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1.2rem] bg-[#050505] flex items-center justify-center text-[#B70303]">
                   <Award size={24} strokeWidth={1.5} />
                 </div>
                 <div>
                   <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#B70303]">Certified</p>
                   <p className="text-[#050505] font-serif font-bold text-lg md:text-xl tracking-tight leading-tight mt-1">Premium Protocol</p>
                 </div>
               </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. GAP-FREE METHODOLOGY & BENTO GRID 
      ========================================= */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 md:gap-20 items-stretch">
            
            {/* Left: Cascading Methodology Steps */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="flex flex-col h-full">
              <motion.div variants={slideLeft} className="mb-10 md:mb-14">
                <span className="text-[#B70303] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Methodology</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#050505] tracking-tighter">Step-by-Step.</h2>
              </motion.div>

              <div className="flex flex-col flex-grow justify-between space-y-12 lg:space-y-0">
                {processSteps.map((step, idx) => (
                  <motion.div key={idx} variants={slideLeft} className="relative group flex flex-col justify-center">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-14 h-14 rounded-full bg-white border-[2px] border-gray-100 flex items-center justify-center group-hover:border-[#B70303] group-hover:bg-[#B70303] transition-all duration-500 shadow-sm">
                         <span className="text-xl font-serif font-bold text-[#050505] group-hover:text-white transition-colors duration-500">0{idx+1}</span>
                      </div>
                      <div className="h-[2px] w-12 bg-gray-100 group-hover:bg-[#B70303] transition-colors duration-500" />
                    </div>
                    <div className="pl-2">
                      <h3 className="text-2xl font-serif font-bold text-[#050505] mb-3 group-hover:text-[#B70303] transition-colors">{step.title}</h3>
                      <p className="text-gray-500 text-base leading-relaxed font-light pr-4">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Popping Symmetrical Grid */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="flex flex-col h-full mt-12 lg:mt-0">
              <motion.div variants={slideRight} className="mb-10 md:mb-14">
                <span className="text-[#B70303] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Benefits</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#050505] tracking-tighter">The Advantage.</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-grow">
                {clinicalAdvantages.map((adv, idx) => {
                  let titleText = "Premium Benefit";
                  if (typeof adv === 'string') titleText = adv;
                  else if (typeof adv === 'object' && adv !== null) {
                    const foundString = Object.values(adv).find(val => typeof val === 'string' && val.trim() !== '');
                    titleText = adv.title || adv.heading || adv.name || foundString || "Premium Advantage";
                  }

                  return (
                    <motion.div key={idx} variants={scaleUp} className="bg-[#FAFAFA] p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:shadow-[0_20px_40px_rgba(183,3,3,0.06)] hover:-translate-y-1 hover:border-[#B70303]/30 transition-all duration-500 flex flex-col justify-center group relative min-h-[140px] md:min-h-[160px]">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-[1rem] bg-white flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#050505] transition-colors duration-500 border border-gray-100 group-hover:border-transparent shadow-sm">
                        <Star size={18} strokeWidth={1.5} className="text-[#B70303]" />
                      </div>
                      <h3 className="text-base md:text-lg font-serif font-bold text-[#050505] leading-snug group-hover:text-[#B70303] transition-colors duration-300">
                        {titleText}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. MINIMALIST LUXURY FAQ (STAGGERED LIST)
      ========================================= */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#050505] tracking-tighter mb-6 md:mb-8">
              Patient <span className="italic text-gray-400 font-light">Inquiries.</span>
            </h2>
            <div className="w-16 md:w-20 h-[2px] bg-[#B70303] mx-auto" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="flex flex-col border-t border-gray-200">
            {faqsList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div variants={slideUp} key={index} className="border-b border-gray-200">
                  <button onClick={() => toggleFaq(isOpen ? null : index)} className="w-full flex items-center justify-between py-8 md:py-10 text-left focus:outline-none group">
                    <span className={`font-serif text-xl md:text-3xl transition-colors duration-500 pr-6 md:pr-8 tracking-tight ${isOpen ? 'text-[#B70303]' : 'text-[#050505] group-hover:text-[#B70303]'}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-45 border-[#B70303] bg-[#B70303] text-white shadow-[0_0_20px_rgba(183,3,3,0.3)]' : 'border-gray-200 text-gray-400 group-hover:border-[#050505] group-hover:bg-[#050505] group-hover:text-white'}`}>
                      <Plus size={20} strokeWidth={1.5} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed pb-10 md:pb-12 pr-6 md:pr-12 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          6. THE "SPLIT-PILLAR" BOOKING FINALE 
      ========================================= */}
      <section id="consultation" className="py-24 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-0 bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100">
            
            {/* Left: The Clinical Form Slides in from Left */}
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="lg:col-span-7 p-8 md:p-20 relative">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center text-center p-8 md:p-12"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#B70303] text-white rounded-full flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(183,3,3,0.3)]">
                      <Check size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#050505] mb-4 tracking-tighter">Transmission Confirmed.</h3>
                    <p className="text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-black">Our Coordination team is reviewing your profile.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#050505] tracking-tight leading-[1.1] mb-4">
                  Request Priority <br />
                  <span className="italic font-light text-gray-400">Consultation.</span>
                </h2>
                <p className="text-gray-500 font-light text-xs md:text-sm uppercase tracking-widest">Secure a private session for {data.title}</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-10 md:space-y-12">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                  <FloatingInput label="Full Name *" name="name" value={formData.name} onChange={handleFormChange} required />
                  <FloatingInput label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} required />
                </div>
                
                <FloatingInput label="Place *" name="place" type="text" value={formData.place} onChange={handleFormChange} required />

                <div className="relative group pt-4">
                  <textarea 
                    name="message" required placeholder=" " rows="2"
                    value={formData.message} onChange={handleFormChange}
                    className="block py-4 px-0 w-full text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-all duration-500 resize-none"
                  />
                  <label className="absolute text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 duration-300 transform -translate-y-8 scale-75 top-5 z-10 pointer-events-none origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-[#B70303]">
                    Describe Clinical Concern *
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B70303] transition-all duration-700 ease-[0.16,1,0.3,1] peer-focus:w-full" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 pt-6 md:pt-8">
                  <button 
                    type="submit" disabled={isSubmitting}
                    className="group relative px-12 md:px-16 py-6 md:py-7 bg-[#050505] text-white overflow-hidden rounded-2xl transition-all duration-700 shadow-2xl w-full sm:w-auto border-none cursor-pointer"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-4 md:gap-6">
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em]">
                        {isSubmitting ? 'Transmitting' : 'Confirm Slot'}
                      </span>
                      <Send size={16} className={`transition-all duration-500 ${isSubmitting ? 'translate-x-12 opacity-0' : 'group-hover:translate-x-2 group-hover:-translate-y-2'}`} />
                    </div>
                    <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </button>
                  <div className="flex items-center gap-4 opacity-40">
                    <ShieldCheck size={20} strokeWidth={1.5} />
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] leading-tight">USFDA Standard <br />Data Protection</span>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Right: The Brand Support Pillar Slides in from Right */}
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="lg:col-span-5 bg-[#050505] p-10 md:p-20 flex flex-col justify-between relative overflow-hidden text-white border-t lg:border-t-0 lg:border-l border-gray-100/10">
              <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#B70303]/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-12 md:mb-16 tracking-tight">Clinic <br /><span className="text-[#B70303] italic font-light text-4xl md:text-5xl tracking-tighter">Concierge.</span></h3>
                
                <ul className="space-y-10 md:space-y-12">
                  <li className="flex items-start gap-5 md:gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B70303] group-hover:border-[#B70303] transition-all duration-500 text-[#B70303] group-hover:text-white">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white mb-2 group-hover:text-[#B70303] transition-colors">USFDA Technology</p>
                      <p className="text-gray-400 text-xs md:text-sm font-light">Adhering to the highest global safety standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 md:gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B70303] group-hover:border-[#B70303] transition-all duration-500 text-[#B70303] group-hover:text-white">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white mb-2 group-hover:text-[#B70303] transition-colors">Expert Practitioners</p>
                      <p className="text-gray-400 text-xs md:text-sm font-light">Procedures administered by certified specialists.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-12 md:pt-16 mt-12 md:mt-16 border-t border-white/10">
                <p className="text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.5em] mb-4">Direct Clinical Line</p>
                <a href="tel:+919786856789" className="text-2xl md:text-4xl font-serif text-white hover:text-[#B70303] transition-colors duration-300 block tracking-tight">
                  +91 97868 56789
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

/* --- REUSABLE ARCHITECTURAL SUB-COMPONENTS --- */
const FloatingInput = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="relative w-full group">
    <input 
      type={type} name={name} id={name} value={value} onChange={onChange} required={required} placeholder=" " 
      className="block py-4 px-0 w-full text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-all duration-500" 
    />
    <label 
      htmlFor={name} 
      className="absolute text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 duration-300 transform -translate-y-8 scale-75 top-4 z-10 pointer-events-none origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
    >
      {label}
    </label>
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B70303] transition-all duration-700 ease-[0.16,1,0.3,1] peer-focus:w-full" />
  </div>
);

export default TreatmentDetail;