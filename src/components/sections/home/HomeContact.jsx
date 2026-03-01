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

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
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
    <section className="relative w-full py-20 lg:py-32 bg-[#FCF8F8] overflow-hidden" id="book">
      {/* Subtle glow orbs */}
      <div className="glow-orb-red w-[400px] h-[400px] -top-32 -right-32 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* --- LEFT COLUMN: CONTACT INFORMATION --- */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center gap-10 max-w-md"
          >
            {contactDetails.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-dark font-bold mb-4">
                  {index === 0 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-red">{item.title}</span>
                  ) : item.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: GLASSMORPHIC CONTACT FORM --- */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2"
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-glass border border-white/60 overflow-hidden">
            {/* Subtle gradient border */}
            <div className="absolute inset-0 rounded-2xl gradient-border pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-brand-dark">
                  Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter full name"
                  className="w-full bg-white/50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-700 text-sm focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-dark">
                  Email <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter email address"
                  className="w-full bg-white/50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-700 text-sm focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-brand-dark">
                  Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter phone number"
                  className="w-full bg-white/50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-700 text-sm focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your answer"
                  className="w-full bg-white/50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-700 text-sm focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 backdrop-blur-sm resize-y"
                ></textarea>
              </div>

              {/* Submit Button — Animated Gradient */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient py-3.5 px-10 rounded-full shadow-glow-red disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                </button>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeContact;