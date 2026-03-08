import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA IMPORTS ---
import { hairData } from '../data/hairData';
import { skinData } from '../data/skinData';

// --- CONFIGURATION ---
const BRANCH_NAME = "Your Branch Name"; 
const HAIR_PATH = "hair-treatments";
const SKIN_PATH = "skin-treatments";

const CategoryView = () => {
  const { category } = useParams(); 
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // --- DATA RESOLUTION ---
  const isHair = category?.toLowerCase().includes('hair');
  const parentPath = isHair ? HAIR_PATH : SKIN_PATH;

  const processedData = useMemo(() => {
    const rawData = isHair ? hairData : skinData;
    if (!rawData) return [];

    return rawData.reduce((acc, curr) => {
      if (curr.subData) {
        const processedSub = curr.subData.map(sub => ({
          ...sub,
          filterCategory: curr.category || (isHair ? 'Hair Solutions' : 'Skin Solutions')
        }));
        return [...acc, ...processedSub];
      }
      return [...acc, { ...curr, filterCategory: curr.category || 'General' }];
    }, []);
  }, [isHair]);

  const filterTabs = useMemo(() => {
    const uniqueCats = new Set(processedData.map(item => item.filterCategory));
    return ['all', ...Array.from(uniqueCats)];
  }, [processedData]);

  const filteredGrid = activeFilter === 'all' 
    ? processedData 
    : processedData.filter(item => item.filterCategory === activeFilter);

  // --- PAGE SETUP ---
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      document.title = `${isHair ? 'Hair' : 'Skin'} Treatments | Advanced GroHair & GloSkin ${BRANCH_NAME}`;
    }, 400);
    
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => clearTimeout(timer);
  }, [category, isHair]);

  // --- LOADING STATE ---
  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-red rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-32 font-sans selection:bg-brand-red selection:text-white">
      
      {/* --- CINEMATIC DARK HEADER (Valliyur Style) --- */}
      <section className="relative bg-brand-dark text-white pt-48 pb-44 flex flex-col items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-brand-dark to-black -z-10"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay -z-10" />
        
        <div className="relative z-20 flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-6"
          >
            Clinical Portfolio • {BRANCH_NAME}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight"
          >
            {isHair ? 'All Hair Treatments' : 'All Skin Treatments'}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            Discover our comprehensive range of USFDA-approved protocols, expertly administered at the {BRANCH_NAME} facility for transformative aesthetic results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 64 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] mt-10" 
            style={{ backgroundImage: 'linear-gradient(to right, #D32F2F, #c5a059)' }}
          />
        </div>
      </section>

      {/* --- FILTER BAR (Adapted to Valliyur Light Theme) --- */}
      <div className="sticky top-[70px] lg:top-[80px] z-40 w-full bg-[#f8f9fa]/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar scroll-smooth">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mr-2 flex-shrink-0">
              Filter:
            </span>
            {filterTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeFilter === tab 
                    ? 'text-white shadow-md' 
                    : 'bg-white text-gray-500 hover:text-brand-dark border border-gray-200 hover:border-gray-300'
                }`}
              >
                {activeFilter === tab && (
                  <motion.div 
                    layoutId="valliyurFilter" 
                    className="absolute inset-0 bg-brand-red rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === 'all' ? 'All Procedures' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- PREMIUM TREATMENT GRID (Exact Valliyur Style) --- */}
      <section className="container mx-auto px-6 max-w-7xl relative z-20 -mt-16 pt-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          
          <AnimatePresence mode="popLayout">
            {filteredGrid.map((item, index) => {
              const linkId = item.slug || item.id;
              
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={linkId} 
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col border border-gray-100"
                >
                  
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    
                    <img 
                      src={item.image || "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"} 
                      alt={item.title} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-[#c5a059] z-20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
                  </div>

                  {/* CONTENT CONTAINER */}
                  <div className="p-8 xl:p-10 flex flex-col flex-grow bg-white relative z-10">
                    
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 group-hover:text-brand-red transition-colors duration-500">
                      {item.filterCategory}
                    </span>
                    
                    <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-red transition-colors duration-500">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-[15px] mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {item.description || item.fullDesc || "Experience advanced clinical care tailored to your unique aesthetic goals."}
                    </p>
                    
                    {/* --- THE VALLIYUR PREMIUM BUTTON --- */}
                    <div className="mt-auto pt-4">
                      <Link 
                        to={`/${parentPath}/${linkId}`} 
                        className="group/btn relative flex items-center justify-between w-full px-6 py-4 border border-gray-100 rounded-lg overflow-hidden transition-all duration-500 hover:border-brand-red hover:shadow-[0_10px_20px_-10px_rgba(211,47,47,0.3)]"
                      >
                        <div className="absolute inset-0 bg-brand-red translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"></div>
                        
                        <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark group-hover/btn:text-white transition-colors duration-500">
                          Explore Procedure
                        </span>

                        <div className="relative z-10 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-white/20 transition-all duration-500">
                          <svg 
                            className="w-4 h-4 text-brand-dark group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

        </motion.div>
      </section>
      
    </div>
  );
};

export default CategoryView;