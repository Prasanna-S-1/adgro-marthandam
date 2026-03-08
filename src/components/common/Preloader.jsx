import React from 'react';
import { motion } from 'framer-motion';
import logoMar from '../../assets/logo-marthandam.png'; // Path to your logo

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img src={logoMar} alt="AdGro Marthandam" className="h-20 w-auto filter brightness-0 invert" />
      </motion.div>

      {/* Premium Loading Bar */}
      <div className="relative h-[2px] w-48 overflow-hidden bg-white/10 rounded-full">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[#B70303]"
        />
      </div>

      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-[10px] uppercase tracking-[0.5em] font-medium text-gray-500"
      >
        Initializing Clinical Excellence
      </motion.span>
    </motion.div>
  );
};

export default Preloader;