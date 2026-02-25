import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the Master Layout
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';     // <-- 1. Imported the new About Page
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* The Layout wraps the entire routing system */}
      <Layout>
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />       {/* <-- 2. Added the About Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;