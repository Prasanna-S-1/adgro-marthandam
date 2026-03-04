import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';

// Data Imports
import { hairData } from '../data/hairData';
import { skinData } from '../data/skinData';

const CategoryView = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // --- 1. SMART DATA RESOLUTION & FLATTENING ---
  // We determine if it's hair or skin, then flatten the data just in case 
  // you are using a mix of nested data and flat arrays.
  const isHair = category?.toLowerCase().includes('hair');
  
  const processedData = useMemo(() => {
    const rawData = isHair ? hairData : skinData;
    if (!rawData) return [];

    // Flatten data: If it has subData, extract it. Otherwise, return the item.
    return rawData.reduce((acc, curr) => {
      if (curr.subData) {
        // Map over subData and attach the parent category name for filtering
        const processedSub = curr.subData.map(sub => ({
          ...sub,
          filterCategory: curr.category || 'General'
        }));
        return [...acc, ...processedSub];
      }
      return [...acc, { ...curr, filterCategory: curr.category || 'General' }];
    }, []);
  }, [isHair]);

  // --- 2. DYNAMIC CATEGORY EXTRACTION ---
  // Automatically creates the filter buttons based on whatever is actually in your data
  const filterTabs = useMemo(() => {
    const uniqueCats = new Set(processedData.map(item => item.filterCategory));
    return ['all', ...Array.from(uniqueCats)];
  }, [processedData]);

  // Filter the grid based on the active button
  const filteredGrid = activeFilter === 'all' 
    ? processedData 
    : processedData.filter(item => item.filterCategory === activeFilter);

  // --- 3. PAGE SETUP ---
  useEffect(() => {
    setLoading(true);
    if (!hairData && !skinData) {
      navigate('/not-found');
      return;
    }
    // Simulate a tiny load for the premium spinner effect
    const timer = setTimeout(() => {
      setLoading(false);
      document.title = `${isHair ? 'Advanced Hair' : 'Advanced Skin'} Solutions | AdGro`;
    }, 400);
    
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => clearTimeout(timer);
  }, [category, isHair, navigate]);


  // --- UI STATES ---
  if (loading) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fcfcfc]">
      <div className="w-16 h-16 border-4 border-gray-100 border-t-[#B70303] rounded-full animate-spin mb-6 shadow-xl" />
      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-dark animate-pulse">
        Initializing Clinic Data...
      </span>
    </div>
  );

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-dark">
        {/* Dynamic Background Image based on category */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img 
            src={isHair 
              ? "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
              : "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2000&auto=format&fit=crop"} 
            alt="Clinic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
            <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              {isHair ? 'Hair Solutions' : 'Skin Solutions'}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold tracking-tight mb-6 leading-[1.1]"
          >
            {isHair ? 'Advanced Hair' : 'Advanced Skin'} <br />
            <span className="text-brand-red italic font-light">Transformations.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl font-serif italic"
          >
            Explore our comprehensive suite of clinically proven, USFDA-approved treatments designed to restore your natural confidence.
          </motion.p>
        </div>
      </section>

      {/* --- STICKY GLASSMORPHISM FILTER BAR --- */}
      <div className="sticky top-[70px] lg:top-[80px] z-40 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-4 py-4 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-widest mr-4 flex-shrink-0">
              <SlidersHorizontal size={16} className="text-brand-red" />
              Filter By
            </div>
            
            {filterTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeFilter === tab 
                    ? 'text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-brand-dark border border-gray-100'
                }`}
              >
                {activeFilter === tab && (
                  <motion.div 
                    layoutId="activeFilterBg" 
                    className="absolute inset-0 bg-brand-red rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab === 'all' ? 'All Treatments' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- DYNAMIC TREATMENT GRID --- */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredGrid.map((treatment) => {
                // Determine the correct ID to use for the URL link
                const linkId = treatment.id || treatment.slug;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, type: "spring" }}
                    key={linkId}
                    className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-brand-red/30 shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image Container */}
                    <Link to={`/${category}/${linkId}`} className="relative h-72 overflow-hidden block">
                      <img 
                        src={treatment.image || "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800"} 
                        alt={treatment.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
                        {treatment.filterCategory}
                      </div>
                    </Link>

                    {/* Content Container */}
                    <div className="p-8 flex flex-col flex-grow">
                      <Link to={`/${category}/${linkId}`}>
                        <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors line-clamp-2 leading-tight">
                          {treatment.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                        {treatment.description || treatment.fullDesc}
                      </p>
                      
                      {/* Premium Action Button */}
                      <Link 
                        to={`/${category}/${linkId}`}
                        className="w-full flex items-center justify-between px-6 py-4 bg-[#f8f9fa] rounded-xl group-hover:bg-brand-dark transition-colors duration-500 mt-auto"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark group-hover:text-white transition-colors">
                          Explore Protocol
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-brand-red transition-colors shadow-sm">
                          <ArrowRight size={14} className="text-brand-dark group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Fallback if a category has no items */}
          {filteredGrid.length === 0 && (
            <div className="w-full py-20 flex flex-col items-center text-center">
              <Sparkles size={48} className="text-gray-200 mb-6" />
              <h3 className="text-2xl font-serif text-brand-dark font-bold mb-2">Protocols Updating</h3>
              <p className="text-gray-500 max-w-md">We are currently refining our clinical offerings for this category. Please check back soon.</p>
            </div>
          )}

        </div>
      </section>

      {/* --- BOTTOM CTA BANNER --- */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6 leading-tight">
            Not sure which <span className="text-brand-red italic font-light">protocol</span> is right for you?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-sans">
            Book a comprehensive analysis with our clinical experts to receive a personalized, evidence-based treatment blueprint.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 bg-brand-red text-white text-[12px] font-bold uppercase tracking-[0.3em] rounded-full shadow-[0_10px_30px_-10px_rgba(183,3,3,0.6)] hover:bg-white hover:text-brand-dark hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CategoryView;