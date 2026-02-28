import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- LAYOUT IMPORT ---
// This wraps all pages with our premium Navbar, Footer, and scroll progress bar
import Layout from './components/common/Layout';

// --- LAZY LOADED PAGES ---
// This ensures premium performance by only loading pages when requested, keeping the initial load lightning fast
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CategoryView = lazy(() => import('./pages/CategoryView'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));

/**
 * GLOBAL SCROLL TO TOP UTILITY
 * Ensures that navigating to a new page always starts at the absolute top smoothly.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

/**
 * PREMIUM LOADING FALLBACK
 * Shown briefly while lazy-loaded chunks are being fetched.
 */
const PageLoader = () => (
  <div className="h-[70vh] w-full flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center gap-4">
      {/* Premium Red Spinner */}
      <div className="w-12 h-12 border-4 border-gray-100 border-t-[#B70303] rounded-full animate-spin" />
      <p className="text-brand-dark font-bold text-[10px] uppercase tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Layout wraps everything to provide global Navbar and Footer */}
      <Layout>
        
        {/* Suspense handles the loading state of our lazy pages */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            
            {/* --- STATIC ROUTES --- */}
            {/* These must be defined BEFORE dynamic routes to prevent conflicts */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* --- DYNAMIC ROUTES (The Master Engine) --- */}
            
            {/* 1. Category Hub (Catches URLs like /hair-treatments or /skin-treatments) */}
            <Route path="/:category" element={<CategoryView />} />
            
            {/* 2. Specific Treatment Detail (Catches URLs like /hair-treatments/titanium-fue) */}
            <Route path="/:category/:id" element={<TreatmentDetail />} />

            {/* 404 FALLBACK (Optional but recommended) */}
            {/* <Route path="*" element={<NotFound />} /> */}
            
          </Routes>
        </Suspense>

      </Layout>
    </Router>
  );
}

export default App;