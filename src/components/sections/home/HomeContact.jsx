import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../../data/siteConfig';

const HomeContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your consultation request has been received.");
    }, 1500);
  };

  // --- ULTRA-PREMIUM ANIMATION PHYSICS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const contactDetails = [
    {
      title: "Address",
      value: "No.III-2179D, Trivandrum - Nagercoil Hwy, near Marthandam, Thiruthuvapuram, Kuzhithurai, Marthandam, Tamil Nadu 629163"
    },
    {
      title: "Email",
      value: "adgromarthandam@gmail.com"
    },
    {
      title: "Phone",
      value: "+91 97831 56789"
    },
    {
      title: "Working Hours",
      value: "MON - SUN: 10 AM - 8 PM"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden selection:bg-[#B70303] selection:text-white" id="book">
      
      {/* Luxury Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B70303]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 md:gap-24">

        {/* =========================================
            LEFT COLUMN: EDITORIAL CONTACT INFO
        ========================================= */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col text-center lg:text-left gap-10 max-w-md w-full"
          >
            
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#B70303]" />
                <span className="text-[#B70303] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                  Get In Touch
                </span>
                <div className="w-12 h-[2px] bg-[#B70303] lg:hidden" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold tracking-tight mb-4">
                Contact <span className="italic text-gray-500 font-light">Clinic.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-10">
              {contactDetails.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col border-l-[2px] border-white/10 pl-6 group hover:border-[#B70303] transition-colors duration-500">
                  <h3 className="text-xs md:text-sm font-bold text-[#B70303] uppercase tracking-[0.2em] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-sans leading-relaxed text-sm md:text-base font-light group-hover:text-white transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* =========================================
            RIGHT COLUMN: PREMIUM BOOKING FORM
        ========================================= */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-7/12 relative"
        >
          {/* Architectural Background Offset */}
          <div className="absolute inset-0 border-[2px] border-[#B70303]/30 rounded-[2rem] md:rounded-[3rem] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10" />

          <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-[6px] border-white/10 overflow-hidden group">
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#050505] mb-2 tracking-tight">Request Callback</h3>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-10 md:mb-12">Priority Consultation Slot</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 relative z-10">

              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {/* Name Field - Floating Underline Style */}
                <div className="relative z-0 w-full group">
                  <input type="text" id="name" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                  <label htmlFor="name" className="absolute text-xs md:text-sm text-gray-400 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Full Name *
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative z-0 w-full group">
                  <input type="place" id="place" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                  <label htmlFor="place" className="absolute text-xs md:text-sm text-gray-400 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Place *
                  </label>
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative z-0 w-full group">
                <input type="tel" id="phone" required placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors" />
                <label htmlFor="phone" className="absolute text-xs md:text-sm text-gray-400 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone Number *
                </label>
              </div>

              {/* Message Field */}
              <div className="relative z-0 w-full group pt-4">
                <textarea id="message" rows="3" placeholder=" " className="block py-3 px-0 w-full text-base md:text-lg text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute text-xs md:text-sm text-gray-400 tracking-[0.2em] font-bold uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#B70303] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Special Requirements
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full md:w-auto px-12 py-5 md:py-6 bg-[#050505] text-white rounded-[1rem] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs overflow-hidden transition-all duration-500 shadow-[0_10px_20px_rgba(5,5,5,0.2)] hover:shadow-[0_15px_30px_rgba(5,5,5,0.3)] disabled:opacity-70 disabled:cursor-not-allowed border-none"
                >
                  <span className="relative z-10 transition-colors duration-500">
                    {isSubmitting ? 'Processing...' : 'Confirm Slot Request'}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-[#B70303] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
                  )}
                </motion.button>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeContact;