import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hairData } from '../data/hairData';
import { skinData } from '../data/skinData';

const createSlug = (text) => {
  return text.toLowerCase().replace(/[\s&]+/g, '-').replace(/-+/g, '-');
};

const CategoryView = () => {
  const { category } = useParams(); 
  const navigate = useNavigate();
  
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const getAggregatedData = (sourceData, parentPath, title) => {
      const allTreatments = sourceData.flatMap(cat => cat.subData);
      return {
        category: title,
        parentPath: parentPath,
        subData: allTreatments
      };
    };

    if (category.includes('hair-treatments')) {
      setCategoryData(getAggregatedData(hairData, 'hair-treatments-valliyur', 'All Hair Treatments'));
      document.title = "Hair Treatments | Advanced GroHair & GloSkin";
      setLoading(false);
      return;
    }
    
    if (category.includes('skin-treatement') || category.includes('skin-treatment')) {
      setCategoryData(getAggregatedData(skinData, 'skin-treatements', 'All Skin Treatments'));
      document.title = "Skin Treatments | Advanced GroHair & GloSkin";
      setLoading(false);
      return;
    }

    let foundCategory = null;
    let matchedParentPath = '';

    foundCategory = hairData.find(cat => createSlug(cat.category) === category);
    if (foundCategory) {
      matchedParentPath = 'hair-treatments-valliyur';
    } else {
      foundCategory = skinData.find(cat => createSlug(cat.category) === category);
      if (foundCategory) {
        matchedParentPath = 'skin-treatements';
      }
    }

    if (foundCategory) {
      setCategoryData({
        ...foundCategory,
        parentPath: matchedParentPath
      });
      document.title = `${foundCategory.category} | Advanced GroHair & GloSkin`;
      setLoading(false);
    } else {
      console.error(`Category Hub Error: Could not find category matching "${category}"`);
      navigate('/not-found', { replace: true });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category, navigate]);

  if (loading || !categoryData) return (
    <div className="h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-red rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-32 font-sans">
      
      {/* --- CINEMATIC DARK HEADER --- */}
      <section className="relative bg-brand-dark text-white pt-48 pb-40 flex flex-col items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-brand-dark to-black -z-10"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay -z-10" />
        
        <div className="relative z-20 flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 animate-reveal-up">
            Clinical Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 animate-reveal-up [animation-delay:100ms] leading-tight">
            {categoryData.category}
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed animate-reveal-up [animation-delay:200ms]">
            Discover our comprehensive range of USFDA-approved protocols, expertly administered at the Valliyur facility for transformative aesthetic results.
          </p>
          <div className="w-16 h-[2px] mt-10 animate-reveal-up [animation-delay:300ms]" 
               style={{ backgroundImage: 'linear-gradient(to right, #D32F2F, #c5a059)' }}>
          </div>
        </div>
      </section>

      {/* --- PREMIUM TREATMENT GRID --- */}
      <section className="container mx-auto px-6 relative z-20 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          
          {categoryData.subData.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col animate-reveal-up border border-gray-100"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
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
              <div className="p-8 xl:p-10 flex flex-col flex-grow bg-white relative">
                
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 group-hover:text-brand-red transition-colors duration-500">
                  {item.category || categoryData.category}
                </span>
                
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-red transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {item.description || "Experience advanced clinical care tailored to your unique aesthetic goals."}
                </p>
                
                {/* --- UPDATED: PREMIUM BUTTON --- */}
                <div className="mt-auto pt-4">
                  <Link 
                    to={`/${categoryData.parentPath}/${item.slug}`} 
                    className="group relative flex items-center justify-between w-full px-6 py-4 border border-gray-100 rounded-lg overflow-hidden transition-all duration-500 hover:border-brand-red hover:shadow-[0_10px_20px_-10px_rgba(211,47,47,0.3)]"
                  >
                    <div className="absolute inset-0 bg-brand-red translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    
                    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark group-hover:text-white transition-colors duration-500">
                      Explore Procedure
                    </span>

                    <div className="relative z-10 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                      <svg 
                        className="w-4 h-4 text-brand-dark group-hover:text-white group-hover:translate-x-1 transition-all duration-500" 
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

            </div>
          ))}

        </div>
      </section>
      
    </div>
  );
};

export default CategoryView;