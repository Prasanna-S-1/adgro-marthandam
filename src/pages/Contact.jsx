import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const Contact = () => {
  // --- PREMIUM FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- FORM HANDLERS ---
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate secure network transmission
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  // --- ULTRA-PREMIUM MOBILE-SAFE PHYSICS ---
  const easeLuxury = [0.16, 1, 0.3, 1]; // Apple-style fluid easing
  
  // FIX: Properly named containerVariants to resolve the crash
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeLuxury } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeLuxury } }
  };

  const timelineSteps = [
    { title: "Submit Request", desc: "Your secure data is sent to our Marthandam clinical coordinators." },
    { title: "Priority Review", desc: "Our specialists review your specific skin or hair concerns." },
    { title: "Direct Callback", desc: "We contact you within 24 hours to schedule your private session." }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-[#B70303] selection:text-white pt-20 relative overflow-hidden">
      
      {/* Background Architectural Grid Lines (Premium Touch) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-around opacity-[0.03]">
        <div className="w-[1px] h-full bg-black"></div>
        <div className="w-[1px] h-full bg-black hidden md:block"></div>
        <div className="w-[1px] h-full bg-black hidden lg:block"></div>
        <div className="w-[1px] h-full bg-black"></div>
      </div>

      {/* =========================================
          1. LIGHT EDITORIAL HERO
      ========================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#F5F1F1] to-[#FAFAFA] pt-24 pb-36 md:pt-32 md:pb-48 flex flex-col items-center text-center px-4 z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-10 max-w-3xl">
          <motion.div variants={slideUp} className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
            <span className="text-[#B70303] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
              Concierge Desk
            </span>
            <span className="w-8 md:w-12 h-[2px] bg-[#B70303]" />
          </motion.div>

          <motion.h1 variants={slideUp} className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif text-[#050505] font-bold tracking-tighter leading-[1.05] mb-6">
            Get In <span className="italic font-light text-gray-400">Touch.</span>
          </motion.h1>
          
          <motion.p variants={slideUp} className="text-gray-500 font-sans text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Discover stronger hair, glowing skin, and the confidence to shine every day. Our Marthandam specialists are ready to assist you.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          2. THE 3 CONTACT CARDS (ELEVATED GRID)
      ========================================= */}
      <section className="relative z-20 container mx-auto px-4 md:px-6 max-w-6xl -mt-24 md:-mt-32">
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Phone */}
          <motion.div variants={slideUp} className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(183,3,3,0.08)] transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center text-[#B70303] mb-6 group-hover:bg-[#B70303] group-hover:text-white group-hover:border-[#B70303] transition-all duration-500 shadow-sm">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Direct Line</p>
            <a href="tel:+919783156789" className="text-[#050505] font-serif font-bold text-xl md:text-2xl tracking-tight transition-colors mb-2">
              +91 97831 56789
            </a>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div variants={slideUp} className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(183,3,3,0.08)] transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center text-[#B70303] mb-6 group-hover:bg-[#B70303] group-hover:text-white group-hover:border-[#B70303] transition-all duration-500 shadow-sm">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Email Support</p>
            <a href="mailto:adgromarthandam@gmail.com" className="text-[#050505] font-serif font-bold text-lg md:text-xl tracking-tight transition-colors mb-2 break-all">
              adgromarthandam@gmail.com
            </a>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div variants={slideUp} className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(183,3,3,0.08)] transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center text-[#B70303] mb-6 group-hover:bg-[#B70303] group-hover:text-white group-hover:border-[#B70303] transition-all duration-500 shadow-sm">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Headquarters</p>
            <p className="text-[#050505] font-sans text-sm font-light leading-relaxed max-w-[220px]">
              No.III-2179D, Trivandrum – Nagercoil Hwy, Marthandam, Tamil Nadu 629163
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          3. FORM & MAP MULTI-COLUMN SECTION
      ========================================= */}
      <section className="py-24 md:py-32 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* LEFT: The Premium Contact Form (5 Cols) */}
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="lg:col-span-5 relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center">
              
              {/* Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem]"
                  >
                    <div className="w-20 h-20 bg-[#B70303] text-white rounded-full flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(183,3,3,0.2)]">
                      <Check size={32} strokeWidth={3} />
                    </div>
                    <h3 className="text-4xl font-serif font-bold text-[#050505] mb-3 tracking-tight">Request Received.</h3>
                    <p className="text-gray-500 font-light">Our concierge team will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#050505] mb-3 tracking-tight">Submit Inquiry.</h2>
                <p className="text-gray-500 font-light text-sm">Please provide your details below.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                <FloatingInput label="Name *" name="name" value={formData.name} onChange={handleFormChange} required />
                <FloatingInput label="Email *" name="email" type="email" value={formData.email} onChange={handleFormChange} required />
                <FloatingInput label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleFormChange} required />

                <div className="relative group pt-2">
                  <textarea 
                    name="message" placeholder=" " rows="3"
                    value={formData.message} onChange={handleFormChange}
                    className="block py-4 px-0 w-full text-base text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-all duration-500 resize-none"
                  />
                  <label className="absolute text-[12px] font-bold text-gray-400 duration-300 transform -translate-y-6 scale-90 top-5 z-10 pointer-events-none origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:text-[#B70303]">
                    Message / Query
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B70303] transition-all duration-700 ease-[0.16,1,0.3,1] peer-focus:w-full" />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" disabled={isSubmitting}
                    className="group relative w-full py-5 bg-[#B70303] text-white overflow-hidden rounded-2xl transition-all duration-500 shadow-[0_10px_20px_rgba(183,3,3,0.2)] hover:shadow-[0_15px_30px_rgba(183,3,3,0.4)] border-none cursor-pointer"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-sm font-bold uppercase tracking-[0.2em]">
                        {isSubmitting ? 'Transmitting...' : 'Submit Form'}
                      </span>
                      {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </div>
                    <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* RIGHT: The Google Map with Floating Glass Card (7 Cols) */}
            <motion.div 
              variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-7 w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)] border-[8px] border-white bg-gray-100 relative group"
            >
              {/* Premium Google Maps Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.169722304884!2d77.164319714332!3d8.301389894002677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMDUuMCJOIDc3wrAwOSc1OS40IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105 filter grayscale-[20%] contrast-[1.05]"
              />
              <div className="absolute inset-0 border border-gray-900/5 rounded-[2rem] pointer-events-none" />

              {/* Floating Glassmorphic Info Card over Map */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] shadow-2xl border border-white/50 max-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#B70303]/10 flex items-center justify-center text-[#B70303]">
                    <Clock size={16} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[#050505] font-bold text-[10px] uppercase tracking-widest">Working Hours</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-light text-gray-600">
                    <span>Monday - Saturday</span>
                    <span className="font-medium text-[#050505]">10 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-light text-gray-600">
                    <span>Sunday</span>
                    <span className="font-medium text-[#050505]">10 AM - 8 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. BONUS: WHAT HAPPENS NEXT TIMELINE
      ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#050505] tracking-tight mb-4">The Process.</h2>
             <p className="text-gray-500 font-light">What happens after you submit your request.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0" />

            {timelineSteps.map((step, idx) => (
              <motion.div key={idx} variants={slideUp} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-[4px] border-gray-100 flex items-center justify-center text-[#050505] font-serif font-bold text-xl mb-6 shadow-sm group-hover:border-[#B70303] group-hover:text-[#B70303] transition-colors duration-500">
                  0{idx + 1}
                </div>
                <h4 className="text-[#050505] font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-500 font-light text-sm max-w-[250px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

/* --- REUSABLE ARCHITECTURAL SUB-COMPONENTS --- */
const FloatingInput = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="relative w-full group">
    <input 
      type={type} name={name} id={name} value={value} onChange={onChange} required={required} placeholder=" " 
      className="block py-4 px-0 w-full text-base text-[#050505] bg-transparent border-0 border-b-[2px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#B70303] peer transition-all duration-500" 
    />
    <label 
      htmlFor={name} 
      className="absolute text-[12px] font-bold text-gray-400 duration-300 transform -translate-y-6 scale-90 top-4 z-10 pointer-events-none origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:text-[#B70303]"
    >
      {label}
    </label>
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B70303] transition-all duration-700 ease-[0.16,1,0.3,1] peer-focus:w-full" />
  </div>
);

export default Contact;