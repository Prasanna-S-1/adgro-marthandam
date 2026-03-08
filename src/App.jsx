import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// --- COMPONENT IMPORTS ---
import Layout from './components/common/Layout';
import Preloader from './components/common/Preloader'; // Ensure this matches your file path

// --- LAZY LOADED PAGES ---
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CategoryView = lazy(() => import('./pages/CategoryView'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));

/**
 * GLOBAL SCROLL TO TOP UTILITY
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

/**
 * PREMIUM PAGE LOADER (Fallback for Lazy Loading)
 */
const PageLoader = () => (
  <div className="h-[70vh] w-full flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-gray-100 border-t-[#B70303] rounded-full animate-spin" />
      <p className="text-[#050505] font-bold text-[10px] uppercase tracking-widest animate-pulse">
        Initializing...
      </p>
    </div>
  </div>
);

function App() {
  const [siteLoading, setSiteLoading] = useState(true);

  // --- PRELOADER LOGIC ---
  useEffect(() => {
    // This timer controls how long the Marthandam branding is displayed
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 2500); // 2.5 seconds for a premium feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* 1. INITIAL BRAND PRELOADER */}
      <AnimatePresence mode="wait">
        {siteLoading && <Preloader key="site-loader" />}
      </AnimatePresence>

      {/* 2. MAIN APPLICATION CONTENT */}
      {!siteLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* --- STATIC ROUTES --- */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* --- DYNAMIC ROUTES --- */}
                <Route path="/:category" element={<CategoryView />} />
                <Route path="/:category/:id" element={<TreatmentDetail />} />
              </Routes>
            </Suspense>
          </Layout>
        </motion.div>
      )}
    </Router>
  );
}

export default App;