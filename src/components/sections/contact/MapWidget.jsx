import React from 'react';
import { motion } from 'framer-motion';

const MapWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="w-full h-[500px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 relative group bg-gray-100"
    >
      {/* This iframe uses the standard Google Maps embed format. 
        You can replace the 'src' string later with the exact iframe link from Google Maps for AdGro Marthandam.
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.66952870198!2d77.16335277494498!3d8.335606691696008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04550058b8f2c3%3A0xc3f9b23b1234567!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
        title="AdGro Marthandam Location"
      ></iframe>

      {/* Premium Overlay Effect to blend the map slightly into the site design until hovered */}
      <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default MapWidget;