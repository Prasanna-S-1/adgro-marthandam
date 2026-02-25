import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! Our team will contact you shortly.");
      e.target.reset();
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-50 h-full flex flex-col justify-center"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        
        {/* Name Field */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="name" className="text-sm font-bold text-brand-dark font-serif tracking-wide">
            Name <span className="text-brand-red">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            required
            placeholder="Enter full name"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg py-4 px-5 text-gray-700 text-sm focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="email" className="text-sm font-bold text-brand-dark font-serif tracking-wide">
            Email <span className="text-brand-red">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            required
            placeholder="Enter email address"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg py-4 px-5 text-gray-700 text-sm focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="phone" className="text-sm font-bold text-brand-dark font-serif tracking-wide">
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input 
            type="tel" 
            id="phone" 
            required
            placeholder="Enter phone number"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg py-4 px-5 text-gray-700 text-sm focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2 relative mb-2">
          <label htmlFor="message" className="text-sm font-bold text-brand-dark font-serif tracking-wide">
            Message
          </label>
          <textarea 
            id="message" 
            rows="5"
            placeholder="Enter your answer"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg py-4 px-5 text-gray-700 text-sm focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#B70303] hover:bg-black text-white font-serif font-bold text-lg py-4 px-12 rounded-full transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(183,3,3,0.6)] hover:shadow-premium-hover w-max"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>

      </form>
    </motion.div>
  );
};

export default ContactForm;